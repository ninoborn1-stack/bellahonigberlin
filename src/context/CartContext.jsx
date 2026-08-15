import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react'

const CartContext = createContext(null)
const KEY = 'bhb-cart-v1'

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || []
  } catch {
    return []
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'add': {
      const { item } = action
      const id = `${item.slug}-${item.variant}`
      const existing = state.find((l) => l.id === id)
      if (existing) {
        return state.map((l) => (l.id === id ? { ...l, qty: l.qty + item.qty } : l))
      }
      return [...state, { ...item, id }]
    }
    case 'setQty':
      return state
        .map((l) => (l.id === action.id ? { ...l, qty: Math.max(1, action.qty) } : l))
        .filter((l) => l.qty > 0)
    case 'remove':
      return state.filter((l) => l.id !== action.id)
    case 'clear':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(reducer, undefined, load)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(lines))
  }, [lines])

  const count = useMemo(() => lines.reduce((n, l) => n + l.qty, 0), [lines])
  const total = useMemo(() => lines.reduce((n, l) => n + l.qty * l.price, 0), [lines])

  const value = {
    lines,
    open,
    setOpen,
    count,
    total,
    add: (item) => {
      dispatch({ type: 'add', item })
      setOpen(true)
    },
    setQty: (id, qty) => dispatch({ type: 'setQty', id, qty }),
    remove: (id) => dispatch({ type: 'remove', id }),
    clear: () => dispatch({ type: 'clear' }),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)

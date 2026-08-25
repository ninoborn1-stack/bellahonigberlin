// Resolve a public asset path against the deployment base URL.
// In dev the base is "/", on GitHub Pages it is "/bellahonigberlin/".
// Usage: asset('images/p-milly-front.jpg') or asset('/images/p-milly-front.jpg')
export const asset = (p) => import.meta.env.BASE_URL + String(p).replace(/^\/+/, '')

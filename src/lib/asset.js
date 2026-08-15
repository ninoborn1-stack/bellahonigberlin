// Resolve a public asset path against the deployment base URL.
// In dev the base is "/", on GitHub Pages it is "/bellahonigberlin/".
// Usage: asset('images/milly-std.png') or asset('/images/milly-std.png')
export const asset = (p) => import.meta.env.BASE_URL + String(p).replace(/^\/+/, '')

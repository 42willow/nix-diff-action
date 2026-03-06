// Vite inlines `?raw` imports as string literals at build time.
// This ambient declaration teaches TypeScript about that convention so
// standalone asset files (CSS, templates, etc.) can be imported as text.
declare module "*?raw" {
  const content: string;
  export default content;
}

import { createInertiaApp } from '@inertiajs/inertia-svelte';

/**
 * Imports the given page component from the page record.
 */
 function resolvePageComponent(name: string, pages: Record<string, any>) {
  for (const path in pages) {
    if (path.endsWith(`${name.replace('.', '/')}.svelte`)) {
      return typeof pages[path] === 'function'
        ? pages[path]()
        : pages[path]
    }
  }

  throw new Error(`Page not found: ${name}`)
}

// Creates the Inertia app, nothing fancy.
createInertiaApp({
  resolve: (name:string) => resolvePageComponent(name, import.meta.glob('../views/pages/**/*.svelte')),
  setup({ el, App, props }:{el: HTMLElement, App: any, props: any}) {
    new App({ target: el, props })
  },
});
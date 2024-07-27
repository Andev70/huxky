import { c as create_ssr_component, b as subscribe, g as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<section class="bg-white dark:bg-gray-900"><div class="container mx-auto flex min-h-screen items-center px-6 py-12"><div><p class="text-sm font-medium text-blue-500 dark:text-blue-400">${escape($page.status)} ${escape($page.error?.message)}</p> <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl" data-svelte-h="svelte-grxsa9">We can’t find that page</h1> <p class="mt-4 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-16g7lmy">Sorry, the page you are looking for doesn&#39;t exist or has been moved.</p> <div class="mt-6 flex items-center gap-x-3"><button class="flex w-1/2 items-center justify-center gap-x-2 rounded-lg border bg-white px-5 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 sm:w-auto"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 rtl:rotate-180"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"></path></svg> <button data-svelte-h="svelte-1wgj43b">Go back</button></button> <a href="/" class="w-1/2 shrink-0 rounded-lg bg-teal-500 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-500 sm:w-auto" data-svelte-h="svelte-jryxco">Take me home</a></div></div></div></section>`;
});
export {
  Error as default
};

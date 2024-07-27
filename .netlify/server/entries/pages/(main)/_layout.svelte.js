import { c as create_ssr_component, v as validate_component, b as subscribe, a as add_attribute, g as escape } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { I as Icon } from "../../../chunks/Icon.js";
const Navigators = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
  return `<div class="main flex w-full items-center justify-center gap-x-32 py-6"><div class="folder relative flex flex-col items-center"><a class="text-[15px] font-medium text-gray-700" href="/" data-svelte-h="svelte-fc7q4d">Folders</a> ${path === "/" ? `<div class="indicator absolute bottom-[-6px] h-[2px] w-[80px] bg-gray-600"></div>` : ``}</div> <div class="note relative flex flex-col items-center"><a class="text-[15px] font-medium text-gray-700" href="/notes" data-svelte-h="svelte-14rntu9">All notes</a> ${path === "/notes" ? `<div class="indicator absolute bottom-[-6px] h-[2px] w-[90px] bg-gray-600"></div>` : ``}</div></div>`;
});
const Ellipsis = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "1" }],
    ["circle", { "cx": "19", "cy": "12", "r": "1" }],
    ["circle", { "cx": "5", "cy": "12", "r": "1" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "ellipsis" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "11", "cy": "11", "r": "8" }],
    ["path", { "d": "m21 21-4.3-4.3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "search" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const avatar = "/_app/immutable/assets/IMG_20240725_224057.epMa6g3X.jpg";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_page();
  return `<main class="main sticky top-0 bg-white"><nav class="flex items-center justify-between px-3 py-4 font-Poppins"><section class="user-image flex items-center gap-x-2"><div class="img size-10 rounded-full" data-svelte-h="svelte-1gfdjjd"><img class="size-full rounded-full"${add_attribute("src", avatar, 0)} alt="avatar"></div> <h3 class="user-name text-[16px]">${escape(data?.username ?? "")}</h3></section> <section class="search flex h-full items-center gap-x-2"><button class="rounded px-2 py-2 hover:bg-gray-200 focus:bg-gray-200">${validate_component(Search, "Search").$$render(
    $$result,
    {
      strokeWidth: 1.5,
      color: "#374151",
      size: 28
    },
    {},
    {}
  )}</button> <button class="rounded px-2 py-2 hover:bg-gray-200 focus:bg-gray-200">${validate_component(Ellipsis, "Ellipsis").$$render(
    $$result,
    {
      strokeWidth: 1.5,
      color: "#374151",
      size: 20
    },
    {},
    {}
  )}</button></section></nav> <div class="w-full px-3" data-svelte-h="svelte-10hr9jb"><div class="line h-[1.4px] w-full bg-gray-300"></div></div> ${validate_component(Navigators, "Navigators").$$render($$result, { path: $page.url?.pathname }, {}, {})}</main> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};

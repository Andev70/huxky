import * as server from '../entries/pages/(main)/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(main)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(main)/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.Dc4JYcoN.js","_app/immutable/chunks/scheduler.CFSsFTE2.js","_app/immutable/chunks/index.CK3Rz2f8.js","_app/immutable/chunks/spread.D2GfbgNY.js","_app/immutable/chunks/input.BymEwXRC.js","_app/immutable/chunks/Icon.CqbtdS87.js","_app/immutable/chunks/entry.BKUlIgXc.js","_app/immutable/chunks/index.Dj95C21J.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.DanhnO4B.js"];
export const stylesheets = ["_app/immutable/assets/Toaster.436keKGd.css"];
export const fonts = [];

import * as server from '../entries/pages/(main)/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(main)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(main)/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.DirriAT_.js","_app/immutable/chunks/scheduler.CFSsFTE2.js","_app/immutable/chunks/index.CK3Rz2f8.js","_app/immutable/chunks/Icon.CqbtdS87.js","_app/immutable/chunks/spread.D2GfbgNY.js","_app/immutable/chunks/stores.BGXj7HYt.js","_app/immutable/chunks/entry.BKUlIgXc.js","_app/immutable/chunks/index.Dj95C21J.js"];
export const stylesheets = [];
export const fonts = [];

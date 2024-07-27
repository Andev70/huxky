import * as server from '../entries/pages/(main)/notes/_layout.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(main)/notes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/3.CoDkZ0zf.js","_app/immutable/chunks/6.CE5PTmoN.js","_app/immutable/chunks/scheduler.CFSsFTE2.js","_app/immutable/chunks/index.CK3Rz2f8.js"];
export const stylesheets = [];
export const fonts = [];

import * as server from '../entries/pages/login/_layout.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/+layout.server.ts";
export const imports = ["_app/immutable/nodes/5.BWm-nMOG.js","_app/immutable/chunks/scheduler.CFSsFTE2.js","_app/immutable/chunks/index.CK3Rz2f8.js"];
export const stylesheets = [];
export const fonts = [];

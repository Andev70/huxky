

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/create/list/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.DVKQCrK2.js","_app/immutable/chunks/scheduler.CFSsFTE2.js","_app/immutable/chunks/index.CK3Rz2f8.js"];
export const stylesheets = [];
export const fonts = [];

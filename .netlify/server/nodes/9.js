export const index = 9;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/create/list/_page.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/9.BkcX366Y.js',
	'_app/immutable/chunks/scheduler.BVVL63Qx.js',
	'_app/immutable/chunks/index.B8u8Rg1S.js'
];
export const stylesheets = [];
export const fonts = [];

export const index = 1;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_error.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/1.CQignqm-.js',
	'_app/immutable/chunks/scheduler.BVVL63Qx.js',
	'_app/immutable/chunks/index.B8u8Rg1S.js',
	'_app/immutable/chunks/stores.ClYsWalx.js',
	'_app/immutable/chunks/entry.D9s1SD9w.js',
	'_app/immutable/chunks/index.CUZgmySL.js'
];
export const stylesheets = [];
export const fonts = [];

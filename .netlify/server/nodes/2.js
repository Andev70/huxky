import * as server from '../entries/pages/(main)/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/(main)/_layout.svelte.js')).default);
export { server };
export const server_id = 'src/routes/(main)/+layout.server.ts';
export const imports = [
	'_app/immutable/nodes/2.7_yr6Tb3.js',
	'_app/immutable/chunks/scheduler.BVVL63Qx.js',
	'_app/immutable/chunks/index.B8u8Rg1S.js',
	'_app/immutable/chunks/button.DWv58wMl.js',
	'_app/immutable/chunks/spread.BSg5YB2s.js',
	'_app/immutable/chunks/index.CUZgmySL.js',
	'_app/immutable/chunks/stores.ClYsWalx.js',
	'_app/immutable/chunks/entry.D9s1SD9w.js',
	'_app/immutable/chunks/helpers.Bm08X3YU.js'
];
export const stylesheets = [];
export const fonts = [];

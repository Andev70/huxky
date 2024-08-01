import * as server from '../entries/pages/(main)/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/(main)/_page.svelte.js')).default);
export { server };
export const server_id = 'src/routes/(main)/+page.server.ts';
export const imports = [
	'_app/immutable/nodes/7.b_vnK8xK.js',
	'_app/immutable/chunks/scheduler.BVVL63Qx.js',
	'_app/immutable/chunks/index.B8u8Rg1S.js',
	'_app/immutable/chunks/spread.BSg5YB2s.js',
	'_app/immutable/chunks/button.DWv58wMl.js',
	'_app/immutable/chunks/index.CUZgmySL.js',
	'_app/immutable/chunks/helpers.Bm08X3YU.js',
	'_app/immutable/chunks/input.DCGIuGF7.js',
	'_app/immutable/chunks/entry.D9s1SD9w.js',
	'_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.CIx_5cC5.js'
];
export const stylesheets = ['_app/immutable/assets/Toaster.436keKGd.css'];
export const fonts = [];

import * as server from '../entries/pages/signup/_layout.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default);
export { server };
export const server_id = 'src/routes/signup/+layout.server.ts';
export const imports = [
	'_app/immutable/nodes/6.DYA3SuCN.js',
	'_app/immutable/chunks/6.jffFBaOO.js',
	'_app/immutable/chunks/scheduler.BVVL63Qx.js',
	'_app/immutable/chunks/index.B8u8Rg1S.js'
];
export const stylesheets = [];
export const fonts = [];

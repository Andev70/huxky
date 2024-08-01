import * as server from '../entries/pages/login/_layout.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/login/_layout.svelte.js')).default);
export { server };
export const server_id = 'src/routes/login/+layout.server.ts';
export const imports = [
	'_app/immutable/nodes/5.DhvG0XOf.js',
	'_app/immutable/chunks/scheduler.BVVL63Qx.js',
	'_app/immutable/chunks/index.B8u8Rg1S.js'
];
export const stylesheets = [];
export const fonts = [];

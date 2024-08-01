export const index = 0;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/0.BdQehGet.js',
	'_app/immutable/chunks/scheduler.BVVL63Qx.js',
	'_app/immutable/chunks/index.B8u8Rg1S.js',
	'_app/immutable/chunks/spread.BSg5YB2s.js',
	'_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.CIx_5cC5.js',
	'_app/immutable/chunks/index.CUZgmySL.js'
];
export const stylesheets = [
	'_app/immutable/assets/0.QqK1ofHO.css',
	'_app/immutable/assets/Toaster.436keKGd.css'
];
export const fonts = [
	'_app/immutable/assets/Poppins-Regular.CTKNfV9P.ttf',
	'_app/immutable/assets/Poppins-Medium.Cxde2ZoM.ttf',
	'_app/immutable/assets/Poppins-SemiBold.B_fPDAUb.ttf',
	'_app/immutable/assets/Poppins-Bold.qTAUjFF7.ttf',
	'_app/immutable/assets/Poppins-ExtraBold.W_qeO1XX.ttf'
];

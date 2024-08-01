import { init } from '../serverless.js';

export const handler = init(
	(() => {
		function __memo(fn) {
			let value;
			return () => (value ??= value = fn());
		}

		return {
			appDir: '_app',
			appPath: '_app',
			assets: new Set([
				'android-chrome-192x192.png',
				'android-chrome-512x512.png',
				'apple-touch-icon.png',
				'favicon-16x16.png',
				'favicon-32x32.png',
				'favicon.ico',
				'site.webmanifest'
			]),
			mimeTypes: { '.png': 'image/png', '.webmanifest': 'application/manifest+json' },
			_: {
				client: {
					start: '_app/immutable/entry/start.gpxd0xuI.js',
					app: '_app/immutable/entry/app.Cw2nfqx8.js',
					imports: [
						'_app/immutable/entry/start.gpxd0xuI.js',
						'_app/immutable/chunks/entry.D9s1SD9w.js',
						'_app/immutable/chunks/scheduler.BVVL63Qx.js',
						'_app/immutable/chunks/index.CUZgmySL.js',
						'_app/immutable/entry/app.Cw2nfqx8.js',
						'_app/immutable/chunks/scheduler.BVVL63Qx.js',
						'_app/immutable/chunks/index.B8u8Rg1S.js'
					],
					stylesheets: [],
					fonts: [],
					uses_env_dynamic_public: false
				},
				nodes: [
					__memo(() => import('../server/nodes/0.js')),
					__memo(() => import('../server/nodes/1.js')),
					__memo(() => import('../server/nodes/2.js')),
					__memo(() => import('../server/nodes/3.js')),
					__memo(() => import('../server/nodes/4.js')),
					__memo(() => import('../server/nodes/5.js')),
					__memo(() => import('../server/nodes/6.js')),
					__memo(() => import('../server/nodes/7.js')),
					__memo(() => import('../server/nodes/8.js')),
					__memo(() => import('../server/nodes/9.js')),
					__memo(() => import('../server/nodes/10.js')),
					__memo(() => import('../server/nodes/11.js'))
				],
				routes: [
					{
						id: '/(main)',
						pattern: /^\/?$/,
						params: [],
						page: { layouts: [0, 2], errors: [1, ,], leaf: 7 },
						endpoint: null
					},
					{
						id: '/create/list',
						pattern: /^\/create\/list\/?$/,
						params: [],
						page: { layouts: [0, 4], errors: [1, ,], leaf: 9 },
						endpoint: null
					},
					{
						id: '/login',
						pattern: /^\/login\/?$/,
						params: [],
						page: { layouts: [0, 5], errors: [1, ,], leaf: 10 },
						endpoint: null
					},
					{
						id: '/(main)/notes',
						pattern: /^\/notes\/?$/,
						params: [],
						page: { layouts: [0, 2, 3], errors: [1, , ,], leaf: 8 },
						endpoint: null
					},
					{
						id: '/signup',
						pattern: /^\/signup\/?$/,
						params: [],
						page: { layouts: [0, 6], errors: [1, ,], leaf: 11 },
						endpoint: null
					}
				],
				matchers: async () => {
					return {};
				},
				server_assets: {}
			}
		};
	})()
);

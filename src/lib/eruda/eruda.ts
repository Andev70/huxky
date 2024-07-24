export function initEruda(): void {
	if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
		// Dynamically import eruda only when in the browser
		import('eruda').then((eruda) => {
			eruda.default.init();
		});
	}
}

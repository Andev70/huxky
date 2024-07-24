import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ cookies }) => {
	const username = cookies.get('key');

	if (username) {
		return { username };
	}
	return {};
};

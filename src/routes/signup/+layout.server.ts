import { redirect, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ cookies }) => {
	const cookie = cookies.get('key');
	console.log(cookie);

	if (cookie) {
		redirect(302, '/');
	}
};

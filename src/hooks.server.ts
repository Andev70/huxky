import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const auth: Handle = ({ event, resolve }) => {
	if (event.url.pathname !== '/') {
		const token = event.cookies.get('key');
		if (!token) {
			redirect(302, '/');
		}
	}
	return resolve(event);
};

export const handle = sequence(auth);

import { type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const auth: Handle = ({ event, resolve }) => {
	return resolve(event);
};

export const handle = sequence(auth);

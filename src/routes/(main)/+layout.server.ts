import { JWT_SECRET } from '$env/static/private';
import { redirect, type ServerLoad } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
export const load: ServerLoad = async ({ cookies }) => {
	const token: any = cookies.get('key');
	if (!token) {
		redirect(302, '/login');
	}
	const jwt_verify: any = jwt.verify(token, JWT_SECRET);
	if (!jwt_verify) {
		cookies.delete('key', { path: '/' });
		redirect(302, '/login');
	}
	return { username: jwt_verify.username };
};

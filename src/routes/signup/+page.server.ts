import { fail, redirect, type Actions } from '@sveltejs/kit';
import { connect } from '$lib/db/connect';
import bcrypt from 'bcryptjs';
import User from '$lib/model/user.model';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';
export const actions: Actions = {
	signup: async ({ request, cookies }) => {
		const formData = await request.formData();
		const password = formData.get('password') as string;
		const email = formData.get('email');
		const username = formData.get('username');
		// Validate if both fields are provided
		if (!password || !email || !username) {
			return fail(400, {
				message: 'username, password and email are required.'
			});
		}
		connect();
		const user = await User.findOne({ email });

		// Check if user exists
		if (user) {
			return fail(401, {
				message: ` user found with email ${email}`
			});
		}

		// Verify the password
		const salt = bcrypt.genSaltSync(10);
		const hashPassword = bcrypt.hashSync(password, salt);
		const createUser = await User.create({ username, email, password: hashPassword });
		if (!createUser) {
			return fail(401, {
				message: 'Invalid username or password.'
			});
		}
		const jwt_token = jwt.sign({ id: createUser.id, username: createUser.username }, JWT_SECRET, {
			expiresIn: '30d'
		});
		// Successful authentication
		cookies.set('key', jwt_token, { maxAge: 30 * 24 * 60 * 60 * 1000, path: '/', httpOnly: true });
		redirect(300, '/');
	}
};

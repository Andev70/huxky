
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { connect } from '$lib/db/connect';
import bcrypt from "bcryptjs"
import User from '$lib/model/user.model';

export const actions: Actions = {

	login: async ({ request, cookies }) => {
		const formData = await request.formData();
		const password = formData.get('password') as string;
		const email = formData.get('email');
		// Validate if both fields are provided
		if ( !password || !email) {
			return fail(400, {
				message: ' password and email are required.'
			});
		}
connect()
		const user = await User.findOne({ email});

		// Check if user exists
		if (!user) {
			return fail(401, {
				message: `no user found with email ${email}`
			});
		}

		// Verify the password
		const isPasswordValid = bcrypt.compareSync(password, user.password);
		if (!isPasswordValid) {
			return fail(401, {
				message: 'Invalid username or password.'
			});
		}

		// Successful authentication
		cookies.set('key', user._id, { maxAge: 30 * 24 * 60 * 60 * 1000, path: '/', httpOnly: true });
		redirect(300, '/');
	},
};

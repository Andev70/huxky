import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
export const load: ServerLoad = async ({ cookies }) => {
	return {};
};

export const actions: Actions = {
	createFolder: async ({ request }) => {
		const formData = await request.formData();
		const type = formData.get('type');
		const name = formData.get('title');
		if (!name || !type) {
			return fail(400, { message: 'empty form field detected' });
		}

		return {
			message: 'action successfull'
		};
	}
};

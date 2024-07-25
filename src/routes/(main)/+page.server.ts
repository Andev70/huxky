import { connect } from '$lib/db/connect';
import Folder from '$lib/model/folder.model';
import { fail, redirect, type Actions, type ServerLoad } from '@sveltejs/kit';
export const load: ServerLoad = async ({}) => {
	return {};
};

export const actions: Actions = {
	createFolder: async ({ request, cookies }) => {
			const userid = cookies.get('key');
			const formData = await request.formData();
			const type = formData.get('type');
			const name = formData.get('title');

			if (!userid) {
				return fail(401, { message: 'unauthorized field user action' });
			}
			if (!name || !type) {
				return fail(400, { message: 'empty form field detected' });
			}
			connect();
			const duplicateFolder = await Folder.findOne({ userid, title: name });
			if (duplicateFolder) {
				return fail(400, { message: 'folder already exists' });
			}
			const folder = await Folder.create({ type, userid, title: name });
			if (!folder) {
				return fail(400, { message: 'please try later' });
			}
			redirect(302, '/');

	}
};

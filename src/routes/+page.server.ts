import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
import {superValidate} from "sveltekit-superforms"
import { zod } from 'sveltekit-superforms/adapters';
import { folderSchema } from '$lib/forms/schema';
export const load: ServerLoad = async({ cookies }) => {
	const token = cookies.get('key');
	if (!token) {
		return { askName: true };
	}
	return {
    form: await superValidate(zod(folderSchema)),
  };
};
export const actions: Actions = {
	// default: async ({ cookies, request }) => {
	// 	const formData = await request.formData();
	// 	const username = formData.get('username');
	//
	// 	if (!username) {
	// 		return fail(302, { msg: 'enter username' });
	// 	}
	// 	cookies.set('key', username as string, {
	// 		httpOnly: true,
	// 		path: '/',
	// 		maxAge: 30 * 24 * 60 * 60 * 1000
	// 	});
	// },
  default: async (event) => {
    const form = await superValidate(event, zod(folderSchema));
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }
    
    return{
      form,
      message:"action successfull"
    };
  },
};

import { connect } from '$lib/db/connect';
import User from '$lib/model/user.model';
import { redirect, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ cookies }) => {

	const token:any = cookies.get('key');
 if(!token){
    redirect(302,"/login")
  }
 connect()
  const user = await User.findById(token)
  if(!user){
    redirect(302,"/login")
  }

	return {username:user.username};
};

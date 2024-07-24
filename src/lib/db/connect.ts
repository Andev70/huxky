import { DATABASE_URI } from '$env/static/private';
import mongoose from 'mongoose';
export const connect = async () => {
	try {
		await mongoose.connect(DATABASE_URI as string);
		console.log('mongodb connected successfully');
	} catch (err) {
		console.error('Failed to connect to MongoDB', err);
		process.exit(1);
	}
};

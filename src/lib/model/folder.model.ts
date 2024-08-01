import mongoose from 'mongoose';
const folderSchema = new mongoose.Schema(
	{
		userid: { type: String, required: true },
		title: { type: String, required: true },
		type: { type: String, required: true }
	},
	{ timestamps: true }
);

const Folder = mongoose.models.Folder || mongoose.model('Folder', folderSchema);
export default Folder;

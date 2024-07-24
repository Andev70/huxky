import mongoose from 'mongoose';
const folderSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, unique: true },
		category: { type: String, required: true, unique: true },
		folder_style: { type: String, required: true, unique: true }
	},
	{ timestamps: true }
);

const Folder = mongoose.models.Folder || mongoose.model('Folder', folderSchema);
export default Folder;

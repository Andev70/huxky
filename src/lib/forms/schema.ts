import { z } from 'zod';

export const folderSchema = z.object({
	title: z.string().min(2).max(50),
	type: z.string().min(1, 'please select a type')
});

export type FolderSchema = typeof folderSchema;

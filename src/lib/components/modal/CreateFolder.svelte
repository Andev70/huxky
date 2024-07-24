<script lang="ts">
	import * as Select from '$lib/shadcn/ui/select';
	import * as Drawer from '$lib/shadcn/ui/drawer/';
	import Button from '$lib/shadcn/ui/button/button.svelte';
	import { PlusIcon } from 'lucide-svelte';
	import * as Form from '$lib/shadcn/ui/form';
	import { Input } from '$lib/shadcn/ui/input';
	import { folderSchema, type FolderSchema } from '$lib/forms/schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<FolderSchema>>;

	const form = superForm(data, {
		validators: zodClient(folderSchema)
	});

	const { form: formData, enhance } = form;
</script>

<Drawer.Root>
	<Drawer.Trigger>
		<Button size="sm" class=" flex items-center justify-center gap-x-2 bg-black ">
			<PlusIcon size={14} strokeWidth={1.4} />
			Add new folder
		</Button>
	</Drawer.Trigger>
	<Drawer.Content class="h-max">
		<Drawer.Header>
			<Drawer.Title>Create a new folder for your notes</Drawer.Title>
			<Drawer.Description
				>This action will create a new folder as per your specification.</Drawer.Description
			>
		</Drawer.Header>
		<form class="h-max px-6 pb-5" method="POST" use:enhance>
			<Form.Field {form} name="type">
				<Form.Control let:attrs>
					<Form.Label>Folder type</Form.Label>
					<Input {...attrs} placeholder="Enter a type..." bind:value={$formData.type}></Input>
					<!-- <Select.Root -->
					<!-- 	selected={selectedEmail} -->
					<!-- 	onSelectedChange={(v) => { -->
					<!-- 		v && ($formData.type = v.value); -->
					<!-- 	}} -->
					<!-- > -->
					<!-- 	<Select.Trigger {...attrs}> -->
					<!-- 		<Select.Value placeholder="Select a type" /> -->
					<!-- 	</Select.Trigger> -->
					<!-- 	<Select.Content> -->
					<!-- 		<Select.Item value="m@example.com" label="m@example.com" /> -->
					<!-- 		<Select.Item value="m@google.com" label="m@google.com" /> -->
					<!-- 		<Select.Item value="m@support.com" label="m@support.com" /> -->
					<!-- 	</Select.Content> -->
					<!-- </Select.Root> -->
				</Form.Control>
				<Form.FieldErrors class=" text-[12px]" />
			</Form.Field>

			<Form.Field {form} name="title">
				<Form.Control let:attrs>
					<Form.Label>Folder title</Form.Label>
					<Input {...attrs} placeholder="Enter title..." bind:value={$formData.title}></Input>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Button class="mt-3 w-full" type="submit">Create folder</Form.Button>
		</form>
	</Drawer.Content>
</Drawer.Root>

<script lang="ts">
	import { enhance } from '$app/forms';
	import * as Dialog from '$lib/shadcn/ui/dialog/';
	import Button from '$lib/shadcn/ui/button/button.svelte';
	import { PlusIcon } from 'lucide-svelte';
	import * as Select from '$lib/shadcn/ui/select';
	import Label from '$lib/shadcn/ui/label/label.svelte';
	import Input from '$lib/shadcn/ui/input/input.svelte';
	let selectedType: any = '';
	let folderTitle = '';
	let titleError = '';
	let typeError = '';

	$: if (selectedType) typeError = '';
	$: if (folderTitle) titleError = '';
	$: if (!folderTitle) titleError = 'Foolder title must be 4 chars long';
	$: if (!selectedType) typeError = 'Please select a folder type';
	const fruits = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'blueberry', label: 'Blueberry' },
		{ value: 'grapes', label: 'Grapes' },
		{ value: 'pineapple', label: 'Pineapple' }
	];
	const onSubmit = ({ formData, cancel }: { formData: any; cancel: any }) => {
		formData.append('type', selectedType);
		const title = formData.get('title');
		const type = formData.get('type');
		if (!title) titleError = 'folder title must contain at least 4 chars';
		if (!type) typeError = 'please select a type';
		if (typeError || titleError) {
			cancel();
		}
		return ({ result, update }: { result: any; update: any }) => {
			console.log(result);
			selectedType = '';
			update({ reset: true });
		};
	};
</script>

<Dialog.Root>
	<Dialog.Trigger>
		<Button size="sm" class=" flex items-center justify-center gap-x-2 bg-black ">
			<PlusIcon size={14} strokeWidth={1.4} />
			Add new folder
		</Button>
	</Dialog.Trigger>
	<Dialog.Content class="w-[350px] rounded-lg">
		<Dialog.Header>
			<Dialog.Title>Create a new folder</Dialog.Title>
			<Dialog.Description>
				This action cannot be undone. This will create a new folder for your notes
			</Dialog.Description>
		</Dialog.Header>
		<form class="w-full" action="?/createFolder" method="post" use:enhance={onSubmit}>
			<div class="flex w-full flex-col gap-y-2">
				<Label class="" for="type">Folder type</Label>
				<Select.Root
					onSelectedChange={(v) => {
						// @ts-ignore
						selectedType = v.value;
					}}
				>
					<Select.Trigger class="w-full" name="type">
						<Select.Value placeholder="Select a fruit" />
					</Select.Trigger>
					<Select.Content id="type">
						<Select.Group id="type">
							<Select.Label id="type">Fruits</Select.Label>
							{#each fruits as fruit}
								<Select.Item value={fruit.value} label={fruit.label}>{fruit.label}</Select.Item>
							{/each}
						</Select.Group>
					</Select.Content>
					<Select.Input name="favoriteFruit" />
				</Select.Root>
				<p class="text-[12px] text-red-300">{typeError ?? ''}</p>
			</div>
			<div class="title mt-3 flex w-full flex-col gap-y-2">
				<Label for="title">Show title</Label>
				<Input bind:value={folderTitle} id="title" name="title" placeholder="Enter folder name" />

				<p class="text-[12px] text-red-300">{titleError ?? ''}</p>
			</div>
			<div class="submitter mt-3 w-full">
				<Button class="w-full" type="submit">Create Folder</Button>
			</div>
		</form>
	</Dialog.Content>
</Dialog.Root>

<script lang="ts">
	import * as Select from '$lib/shadcn/ui/select';
	import { enhance } from '$app/forms';
	import * as Dialog from '$lib/shadcn/ui/dialog/';
	import Button from '$lib/shadcn/ui/button/button.svelte';
	import { Loader, PlusIcon } from 'lucide-svelte';
	import Label from '$lib/shadcn/ui/label/label.svelte';
	import Input from '$lib/shadcn/ui/input/input.svelte';
	import { toast } from 'svelte-sonner';
	import { fade } from 'svelte/transition';
	let selectedType: any = '';
	$: selectedType = selectedType
		? {
				label: selectedType,
				value: selectedType
			}
		: '';
	let folderTitle = '';
	let titleError = '';
	let typeError = '';
	let isPending = false;
	$: if (selectedType) typeError = '';
	$: if (folderTitle) titleError = '';
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
		if (title && type) {
			isPending = true;
			toast.info('Proccessing please wait...');
		}
		if (!title) titleError = 'folder title must contain at least 4 chars';
		if (!type) typeError = 'please select a type';

		if (typeError || titleError) {
			cancel();
		}
		return ({ result, update }: { result: any; update: any }) => {
			if (result?.type === 'redirect') {
				isPending = true;
			}
			if (result?.status >= 400) {
				isPending = false;
				toast.error(result?.data?.message);
			} else {
				isPending = false;
				folderTitle = '';
				selectedType = '';
				toast.success('folder created successfully');
				update();
			}
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
			<div class="relative flex w-full flex-col gap-y-2">
				<Label class="" for="type">Folder type</Label>
				<Select.Root
					selected={selectedType}
					portal={null}
					onSelectedChange={(v) => {
						v && (selectedType = v?.value);
					}}
				>
					<Select.Trigger class="w-full">
						<Select.Value placeholder="Select a type" />
					</Select.Trigger>
					<Select.Content>
						<Select.Group>
							<Select.Label>Fruits</Select.Label>
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
				<Button disabled={isPending} class="w-full" type="submit">
					{#if !isPending}
						<span in:fade> Create Folder </span>
					{:else}
						<span in:fade class="flex items-center gap-x-3">
							<Loader strokeWidth={1.5} size={20} class=" animate-spin stroke-white" />
							Processing wait...
						</span>
					{/if}
				</Button>
			</div>
		</form>
	</Dialog.Content>
</Dialog.Root>

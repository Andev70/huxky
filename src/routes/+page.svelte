<script lang="ts">
	// eruda console added
	import { onMount } from 'svelte';

	import { initEruda } from '$lib/eruda/eruda';
	import CreateFolder from '$lib/components/modal/CreateFolder.svelte';
	import Button from '$lib/shadcn/ui/button/button.svelte';
	import { overlay, userModal } from '../store/modal';
	import { BookOpenCheck, NotepadText, SquareCheck } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: if (data?.askName) {
		overlay.update((value) => (value = true));
		userModal.update((value) => (value = true));
	}
	onMount(() => {
		initEruda();
	});
	export let form;
</script>

{#if $userModal}
	<div class="fixed z-[50] flex h-dvh w-dvw justify-center px-5">
		<form
			method="post"
			class="relative inline-block h-max transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle"
		>
			<div>
				<div class="flex items-center justify-center">
					<img
						class="h-12 w-12 rounded-full object-cover ring ring-white"
						src="https://images.unsplash.com/photo-1490195117352-aa267f47f2d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
						alt=""
					/>
					<img
						class="-mx-4 h-12 w-12 rounded-full object-cover ring ring-white"
						src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
						alt=""
					/>
					<img
						class="h-12 w-12 rounded-full object-cover ring ring-white"
						src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
						alt=""
					/>
				</div>

				<div class="mt-4 text-center">
					<h3
						class="font-medium capitalize leading-6 text-gray-800 dark:text-white"
						id="modal-title"
					>
						Please enter a username
					</h3>

					<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
						Username is needed to identify the user without signup or login. please consider
						entering username
					</p>
				</div>
			</div>

			<div class="mt-4">
				<label class="text-sm text-gray-700 dark:text-gray-200" for="username">Username</label>

				<div class="-mx-1 mt-2 flex items-center">
					<input
						placeholder="Enter username..."
						type="text"
						name="username"
						class="mx-1 block h-11 flex-1 rounded-md border border-gray-200 bg-white px-4 text-sm text-gray-700 focus:border-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
					/>
				</div>
			</div>

			<div class="mt-3 sm:-mx-2 sm:mt-6 sm:flex sm:items-center">
				<Button class="w-full" type="submit">Get started</Button>
			</div>
		</form>
	</div>
{/if}

<section class="grid w-full grid-cols-2 gap-x-3 gap-y-4 px-4">
	<div class="folder h-full w-full overflow-hidden rounded-[20px] bg-gray-100">
		<a
			class="flex h-40 grow flex-col items-center justify-center gap-y-1 px-3"
			href="/folder-dynamic"
		>
			<BookOpenCheck color="#374151" size={24} strokeWidth={1.4} />
			<h4 class="folder-name w-full truncate text-center text-[13px] font-medium text-gray-700">
				Book list
			</h4>
		</a>
	</div>

	<div class="folder h-40 grow overflow-hidden rounded-[20px] bg-gray-100">
		<a
			class="flex h-full w-full flex-col items-center justify-center gap-y-1 px-3"
			href="/folder-dynamic"
		>
			<NotepadText color="#374151" size={24} strokeWidth={1.4} />
			<h4 class="folder-name w-full truncate text-center text-[13px] font-medium text-gray-700">
				Notes
			</h4>
		</a>
	</div>

	<div class="folder h-40 grow overflow-hidden rounded-[20px] bg-gray-100">
		<a
			class="flex h-full w-full flex-col items-center justify-center gap-y-1 px-3"
			href="/folder-dynamic"
		>
			<SquareCheck color="#374151" size={24} strokeWidth={1.4} />
			<h4 class="folder-name w-full truncate text-center text-[13px] font-medium text-gray-700">
				Todo tasks
			</h4>
		</a>
	</div>

	<div class="fixed bottom-4 left-[120px]"><CreateFolder data={data.form} /></div>
</section>
<!--this page has no work -->

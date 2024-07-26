<script lang="ts">
	import CreateFolder from '$lib/components/modal/CreateFolder.svelte';
	import { BookOpenCheck, NotepadText, SquareCheck } from 'lucide-svelte';
</script>

<svelte:head>
	<title>HUXY</title>
</svelte:head>
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

	<div class="fixed bottom-4 left-[120px]"><CreateFolder /></div>
</section>
<!--this page has no work -->

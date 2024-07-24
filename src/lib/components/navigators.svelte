<script lang="ts">
	import { fly } from 'svelte/transition';

	export let path;
	const y = 3;
</script>

<div class="main flex w-full items-center justify-center gap-x-32 py-6">
	<div class="folder relative flex flex-col items-center">
		<a class="text-[15px] font-medium text-gray-700" href="/">Folders</a>
		{#if path === '/'}
			<div
				class="indicator absolute bottom-[-6px] h-[2px] w-[80px] bg-gray-600"
				transition:fly={{ duration: 200, y }}
			></div>
		{/if}
	</div>

	<div class="note relative flex flex-col items-center">
		<a class="text-[15px] font-medium text-gray-700" href="/notes">All notes</a>
		{#if path === '/notes'}
			<div
				class="indicator absolute bottom-[-6px] h-[2px] w-[90px] bg-gray-600"
				transition:fly={{ duration: 200, y }}
			></div>
		{/if}
	</div>
</div>

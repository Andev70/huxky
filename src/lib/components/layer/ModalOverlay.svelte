<script>
	import { fade } from 'svelte/transition';
	export let click;
</script>

<button
	transition:fade={{ duration: 200 }}
	on:click={() => {
		click();
		history.back();
	}}
	class="fixed z-[40] h-dvh w-dvw bg-[rgba(225,225,225,0.1)] backdrop-blur-md"
></button>

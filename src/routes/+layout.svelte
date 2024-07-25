<script>
	import '../app.css';

	import { onMount } from 'svelte';

	import { initEruda } from '$lib/eruda/eruda';
	import { Toaster } from 'svelte-sonner';
	onMount(() => {
		initEruda();
	});
</script>

<Toaster richColors position="top-center" />
<slot />

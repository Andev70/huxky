<script lang="ts">
	import Navigators from '$lib/components/navigators.svelte';
	import { page } from '$app/stores';
	import { Ellipsis, Search } from 'lucide-svelte';
	import avatar from '$lib/assets/avatars/IMG_20240725_224057.jpg';
	export let data: any;
</script>

<main class="main sticky top-0 bg-white">
	<nav class=" flex items-center justify-between px-3 py-4 font-Poppins">
		<section class="user-image flex items-center gap-x-2">
			<div class="img size-10 rounded-full">
				<img class="size-full rounded-full" src={avatar} alt="avatar" />
			</div>
			<h3 class="user-name text-[16px]">{data?.username ?? ''}</h3>
		</section>
		<section class="search flex h-full items-center gap-x-2">
			<button class="rounded px-2 py-2 hover:bg-gray-200 focus:bg-gray-200">
				<Search strokeWidth={1.5} color="#374151" size={28} />
			</button>
			<button class="rounded px-2 py-2 hover:bg-gray-200 focus:bg-gray-200">
				<Ellipsis strokeWidth={1.5} color="#374151" size={20} />
			</button>
		</section>
	</nav>
	<div class="w-full px-3">
		<div class="line h-[1.4px] w-full bg-gray-300"></div>
	</div>

	<Navigators path={$page.url?.pathname} />
</main>
<slot />

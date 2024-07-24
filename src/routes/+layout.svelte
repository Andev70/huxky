<script lang="ts">
	import '../app.css';
	import ModalOverlay from '$lib/components/layer/ModalOverlay.svelte';
	import { overlay, overlayClose } from '../store/modal';

	import Navigators from '$lib/components/navigators.svelte';
	import { page } from '$app/stores';
	import { Ellipsis, Search } from 'lucide-svelte';
	export let data;
</script>

{#if $overlayClose}
	<ModalOverlay
		click={() => {
			overlayClose.update((value) => (value = false));
		}}
	/>
{/if}
{#if $overlay}
	<ModalOverlay click={() => {}} />
{/if}
{#if !$page.error?.message}
	<main class="main sticky top-0 bg-white">
		<nav class=" flex items-center justify-between px-3 py-4 font-Poppins">
			<section class="user-image flex items-center gap-x-2">
				<div class="img size-10 rounded-full">
					<img
						class="size-full rounded-full"
						src=" https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
						alt="avatar"
					/>
				</div>
				<h3 class="user-name text-[16px]">{data?.username ?? ''}</h3>
			</section>
			<section class="search flex h-full items-center gap-x-2">
				<button class="rounded px-2 py-2 hover:bg-gray-200 focus:bg-gray-200">
					<Search strokeWidth={1.5} color="#374151" size={28} />
				</button>
				<button
					on:click={() => {
						overlayClose.update((value) => (value = true));
					}}
					class="rounded px-2 py-2 hover:bg-gray-200 focus:bg-gray-200"
				>
					<Ellipsis strokeWidth={1.5} color="#374151" size={20} />
				</button>
			</section>
		</nav>
		<div class="w-full px-3">
			<div class="line h-[1.4px] w-full bg-gray-300"></div>
		</div>

		{#if $page?.url?.pathname === '/' || $page?.url?.pathname}
			<Navigators path={$page.url?.pathname} />
		{/if}
	</main>
{/if}
<slot />

<script lang="ts">
	import { enhance } from '$app/forms';
	import logo from '$lib/assets/logo/logo_svg.svg';
	import Button from '$lib/shadcn/ui/button/button.svelte';
	import Input from '$lib/shadcn/ui/input/input.svelte';
	import { Loader } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
	import { fade } from 'svelte/transition';
	let emailError = '';
	let formError = '';
	let passwordError = '';
	let usernameError = '';
	let emailValue = '';
	let usernameValue = '';
	let passwordValue = '';
	let isLoading = false;
	$: if (usernameValue) usernameError = '';
	$: if (emailValue) emailError = '';
	$: if (passwordValue) passwordError = '';
	const onSubmit = ({ formData, cancel }: { formData: any; cancel: any }) => {
		const email = formData.get('email');
		const password = formData.get('password');
		const username = formData.get('username');

		if (email && password && username) {
			isLoading = true;
			toast.info('Verifying please wait...');
		}
		if (!username) usernameError = 'Enter your user name';
		if (!password) passwordError = 'please Enter your password';
		if (!email) emailError = 'Invalid email address';
		if (emailError || passwordError || usernameError) {
			cancel();
		}
		return ({ result, update }: { result: any; update: any }) => {
			if (result?.type !== 'redirect') isLoading = false;
			if (result?.status >= 400) {
				formError = result?.data?.message;
				toast.error(result?.data?.message);
			}
			if (result?.status < 400) {
				toast.success('You are signed in.');
			}
			update();
		};
	};
</script>

<svelte:head>
	<meta name="description" content="signup to create notes and use all the features for free" />
	<meta name="keywords" content=", huxy signup, huxy-signup,register,huxy,register huxy" />
	<title>Huxy | Signup</title>
</svelte:head>
<div class="login flex h-dvh w-dvw items-center justify-center px-4">
	<form
		action="?/signup"
		method="post"
		class="mx-auto flex w-full max-w-sm overflow-hidden rounded-lg border border-border bg-white drop-shadow-lg dark:bg-gray-800 lg:max-w-4xl"
		use:enhance={onSubmit}
	>
		<div class="w-full px-6 pb-6 pt-3 md:px-8 lg:w-1/2">
			<div class="mx-auto flex items-center justify-center">
				<img class="h-20 w-20" src={logo} alt="" />
			</div>

			<p class="text-center text-xl font-medium text-gray-600 dark:text-gray-200">
				Please Sign up here
			</p>
			<p class="mt-3 text-center text-sm text-red-400">{formError ?? ''}</p>
			<Button
				variant="outline"
				class="mt-4 flex w-full transform items-center justify-center rounded-lg border text-gray-600 transition-colors duration-300 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
			>
				<div class="px-4 py-2">
					<svg class="h-6 w-6" viewBox="0 0 40 40">
						<path
							d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
							fill="#FFC107"
						/>
						<path
							d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
							fill="#FF3D00"
						/>
						<path
							d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
							fill="#4CAF50"
						/>
						<path
							d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
							fill="#1976D2"
						/>
					</svg>
				</div>

				<span class="w-5/6 px-4 py-3 text-center font-bold">Sign in with Google</span>
			</Button>

			<div class="mt-4 flex items-center justify-between">
				<span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

				<a
					href="#email--form"
					class="text-center text-xs uppercase text-gray-500 hover:underline dark:text-gray-400"
					>or login with email</a
				>

				<span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
			</div>

			<div class="mt-4" id="email--form">
				<label
					class="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-200"
					for="LoggingEmailAddress">Email Address</label
				>
				<Input
					bind:value={emailValue}
					placeholder="Email Address"
					id="LoggingEmailAddress"
					type="email"
					name="email"
				/>
				<p class="mt-2 text-[13px] text-red-300">{emailError ?? ''}</p>
			</div>

			<div class="mt-4" id="email--form">
				<label
					class="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-200"
					for="username">username</label
				>
				<Input
					bind:value={usernameValue}
					placeholder="Your username"
					id="username"
					type="text"
					name="username"
				/>
				<p class="mt-2 text-[13px] text-red-300">{usernameError ?? ''}</p>
			</div>
			<div class="mt-4">
				<div class="flex justify-between">
					<label
						class="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-200"
						for="loggingPassword">Password</label
					>
					<a href="/reset/password" class="text-xs text-gray-500 hover:underline dark:text-gray-300"
						>Forget Password?</a
					>
				</div>

				<Input
					bind:value={passwordValue}
					id="loggingPassword"
					placeholder="Enter password..."
					type="password"
					name="password"
				/>
				<p class="mt-2 text-[13px] text-red-300">{passwordError ?? ''}</p>
			</div>

			<div class="mt-6">
				<Button disabled={isLoading} class="w-full" type="submit">
					{#if !isLoading}
						<span in:fade> Create Folder </span>
					{:else}
						<span in:fade class="flex items-center gap-x-3">
							<Loader strokeWidth={1.5} size={20} class=" animate-spin stroke-white" />
							Processing wait...
						</span>
					{/if}
				</Button>
			</div>

			<div class="mt-4 flex items-center justify-between">
				<span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

				<a href="/login" class="text-xs uppercase text-gray-500 hover:underline dark:text-gray-400"
					>or sign in</a
				>

				<span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
			</div>
		</div>
	</form>
</div>

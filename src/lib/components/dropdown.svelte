<script lang="ts">
	import avatar from '$lib/assets/avatars/IMG_20240725_224057.jpg';
	import {
		Keyboard,
		CirclePlus,
		User,
		LifeBuoy,
		LogOut,
		Users,
		UserPlus,
		Settings,
		MessageSquare
	} from 'lucide-svelte';
	import Button from '$lib/shadcn/ui/button/button.svelte';

	import * as DropdownMenu from '$lib/shadcn/ui/dropdown-menu';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button
			variant="ghost"
			class="m-0 h-max w-max bg-none p-0 hover:bg-none focus:bg-none"
			builders={[builder]}
		>
			<div class="img size-10 rounded-full">
				<img
					class="size-full cursor-pointer rounded-full active:scale-95"
					src={avatar}
					alt="avatar"
				/>
			</div>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56">
		<DropdownMenu.Label>My Account</DropdownMenu.Label>
		<DropdownMenu.Separator />
		<DropdownMenu.Group>
			<DropdownMenu.Item>
				<User class="mr-2 h-4 w-4" />
				<span>Profile</span>
				<DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<Settings class="mr-2 h-4 w-4" />
				<span>Settings</span>
				<DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<Keyboard class="mr-2 h-4 w-4" />
				<span>Keyboard shortcuts</span>
				<DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Group>
			<DropdownMenu.Item>
				<Users class="mr-2 h-4 w-4" />
				<span>Team</span>
			</DropdownMenu.Item>
			<DropdownMenu.Sub>
				<DropdownMenu.SubTrigger>
					<UserPlus class="mr-2 h-4 w-4" />
					<span>Invite users</span>
				</DropdownMenu.SubTrigger>
				<DropdownMenu.SubContent>
					<DropdownMenu.Item>
						<MessageSquare class="mr-2 h-4 w-4" />
						<span>Message</span>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<CirclePlus class="mr-2 h-4 w-4" />
						<span>More...</span>
					</DropdownMenu.Item>
				</DropdownMenu.SubContent>
			</DropdownMenu.Sub>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Item>
			<LifeBuoy class="mr-2 h-4 w-4" />
			<span>Support</span>
		</DropdownMenu.Item>
		<DropdownMenu.Separator />
		<DropdownMenu.Item>
			<form action="?/logout" class=" flex h-full w-full items-center gap-x-2" method="post">
				<LogOut class=" ml-[0.5px] size-5" />
				<button type="submit" class=" h-full w-full text-left">Log out</button>
				<DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
			</form>
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>

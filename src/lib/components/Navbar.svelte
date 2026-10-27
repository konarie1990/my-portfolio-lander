<script lang="ts">
	let isMenuOpen = $state(false);

	const navLinks = [
		{ label: 'Projects', href: '/projects' },
		// { label: 'Blog', href: '/blog' },
		{ label: 'About', href: '/about' }
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<header class="sticky top-0 z-50 w-full border-b-4 border-[#c0caf5] bg-[#16161e] text-[#c0caf5]">
	<nav
		aria-label="Primary Navigation"
		class="mx-auto flex w-full max-w-4xl flex-row items-center justify-between px-4 py-4"
	>
		<!-- Child 1 (Left): Branding Block -->
		<a
			href="/"
			class="group flex flex-col gap-1 text-left no-underline"
			onclick={closeMenu}
		>
			<span class="text-sm text-[#c0caf5] transition-colors group-hover:text-[#7aa2f7] md:text-base">
				Ron Hajewski
			</span>
			<span class="text-[10px] text-[#bb9af7] md:text-xs">
				AI Engineer
			</span>
		</a>

		<!-- Child 2 (Right - Desktop): Navigation Links Row -->
		<ul class="desktop-nav-list hidden md:flex md:flex-row md:items-center md:gap-6">
			{#each navLinks as link (link.href)}
				<li>
					<a
						href={link.href}
						class="border-b-4 border-transparent pb-1 text-xs text-[#7aa2f7] no-underline transition-colors hover:border-[#bb9af7] hover:text-[#bb9af7]"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Child 2 (Right - Mobile): Hamburger Menu Button -->
		<button
			type="button"
			class="mobile-menu-btn block md:hidden nes-btn is-primary"
			aria-expanded={isMenuOpen}
			aria-controls="mobile-nav-menu"
			aria-label="Toggle navigation menu"
			onclick={toggleMenu}
		>
			{#if isMenuOpen}
				<span class="text-xs">X</span>
			{:else}
				<span class="flex flex-col items-center justify-center gap-1 py-0.5">
					<span class="block h-0.5 w-4 bg-[#16161e]"></span>
					<span class="block h-0.5 w-4 bg-[#16161e]"></span>
					<span class="block h-0.5 w-4 bg-[#16161e]"></span>
				</span>
			{/if}
		</button>
	</nav>

	<!-- Mobile Navigation Dropdown (Outside <nav>, inside <header>) -->
	{#if isMenuOpen}
		<div
			id="mobile-nav-menu"
			class="mobile-dropdown w-full border-t-4 border-[#1a1b26] bg-[#16161e] px-4 py-4 text-[#c0caf5] md:hidden"
		>
			<ul class="mx-auto flex max-w-4xl flex-col gap-4">
				{#each navLinks as link (link.href)}
					<li>
						<a
							href={link.href}
							class="block border-l-4 border-[#7aa2f7] py-1 pl-3 text-xs text-[#7aa2f7] no-underline transition-colors hover:border-[#bb9af7] hover:text-[#bb9af7]"
							onclick={closeMenu}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</header>

<style>
	/* Override un-layered NES.css Bootstrap Reboot rules (nav { display: block }, ul { margin-bottom: 1rem }, .nes-btn { display: inline-block }) that otherwise beat Tailwind v4 @layer utilities */
	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.desktop-nav-list {
		display: none;
	}

	.mobile-menu-btn {
		display: block;
		background-color: #7aa2f7;
		color: #16161e;
	}

	.mobile-menu-btn:hover {
		background-color: #bb9af7;
		color: #16161e;
	}

	:global(.nes-btn.is-primary.mobile-menu-btn::after) {
		box-shadow: inset -4px -4px #4d6db5;
	}

	:global(.nes-btn.is-primary.mobile-menu-btn:hover::after) {
		box-shadow: inset -6px -6px #7c52c9;
	}

	:global(.nes-btn.is-primary.mobile-menu-btn:active:not(.is-disabled)::after) {
		box-shadow: inset 4px 4px #4d6db5;
	}

	@media (min-width: 768px) {
		.desktop-nav-list {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 1.5rem;
		}

		.mobile-menu-btn,
		.mobile-dropdown {
			display: none !important;
		}
	}
</style>

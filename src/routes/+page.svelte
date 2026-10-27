<script lang="ts">
	const SHOPIFY_PORTFOLIO_URL =
		'https://ron-hajewski-dev-theme.myshopify.com/?_ab=0&_bt=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWx5YjI0dGFHRnFaWGR6YTJrdFpHVjJMWFJvWlcxbExtMTVjMmh2Y0dsbWVTNWpiMjBHT2daRlZBPT0iLCJleHAiOiIyMDI2LTEwLTIzVDIxOjQxOjA2LjY2OVoiLCJwdXIiOiJwZXJtYW5lbnRfcGFzc3dvcmRfYnlwYXNzIn19--39d8fb93525c6f3b6ecfab9e91acd02e09ad80e7&_fd=0&_sc=1&key=778644160bbde6420420a32da51352d6ac52cd70a247a4aabf05f7ac84ebc6a1&preview_theme_id=189793665245';

	let isModalOpen = $state(false);
	let isHolding = $state(false);
	let progress = $state(0);
	let isVerified = $state(false);
	let copied = $state(false);
	let copyTimeout: ReturnType<typeof setTimeout> | undefined;

	$effect(() => {
		if (!isHolding || isVerified) {
			if (!isVerified) {
				progress = 0;
			}
			return;
		}

		const intervalMs = 20;
		const durationMs = 2000;
		const step = (intervalMs / durationMs) * 100;

		const timer = setInterval(() => {
			progress = Math.min(100, progress + step);
			if (progress >= 100) {
				isVerified = true;
				isHolding = false;
				clearInterval(timer);
			}
		}, intervalMs);

		return () => clearInterval(timer);
	});

	function openModal() {
		isModalOpen = true;
	}

	function closeModal() {
		isModalOpen = false;
		isHolding = false;
		if (!isVerified) {
			progress = 0;
		}
	}

	function startHold(event: Event) {
		event.preventDefault();
		if (!isVerified) {
			isHolding = true;
		}
	}

	function stopHold() {
		isHolding = false;
	}

	async function copyPassword() {
		await navigator.clipboard.writeText('rondev');
		copied = true;
		if (copyTimeout) {
			clearTimeout(copyTimeout);
		}
		copyTimeout = setTimeout(() => {
			copied = false;
		}, 2000);
	}

	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isModalOpen) {
			closeModal();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<main class="flex min-h-screen w-full flex-col items-center justify-center bg-[#1a1b26] px-4 py-12 text-[#c0caf5]">
	<section class="mx-auto w-full max-w-4xl">
		<div class="nes-container is-dark with-title is-centered bg-[#1a1b26] p-6 text-[#c0caf5] md:p-10">
			<p class="title bg-[#1a1b26] text-[#c0caf5]">PLAYER 1: RON HAJEWSKI</p>

			<div class="mb-3 flex flex-col items-center gap-4">
				<a
					href="https://github.com/konarie1990/portfolio-storefront-theme"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="View portfolio storefront theme on GitHub"
					class="hover:opacity-80 transition-opacity"
				>
					<i class="nes-octocat animate"></i>
				</a>
				<h1 class="text-xl leading-relaxed text-[#e0af68] md:text-3xl">
					AI Web Developer
				</h1>
				<p class="text-xs text-[#c0caf5]/80 md:text-sm">
					Westminster, CO &bull; 9+ Years Experience
				</p>
			</div>

			<p class="mx-auto mb-8 max-w-2xl text-left md:text-center text-xs leading-loose text-[#c0caf5] md:text-sm">
				Building <span class="text-[#7dcfff]">high-converting storefronts</span> with Agentic AI workflows. I deliver scalable architecture designed to be a <span class="text-[#9ece6a]">business accelerator</span>, not a technical bottleneck.
			</p>

			<div class="flex flex-wrap justify-center items-center gap-4 mb-8">
				<span class="inline-block border-4 border-[#1a1b26] bg-[#9ece6a] px-4 py-2 text-xs text-[#1a1b26] shadow-[4px_4px_0px_#000]">
					Shopify
				</span>
				<span class="inline-block border-4 border-[#1a1b26] bg-[#7dcfff] px-4 py-2 text-xs text-[#1a1b26] shadow-[4px_4px_0px_#000]">
					E-Comm
				</span>
				<span class="inline-block border-4 border-[#1a1b26] bg-[#e0af68] px-4 py-2 text-xs text-[#1a1b26] shadow-[4px_4px_0px_#000]">
					Dev
				</span>
				<span class="inline-block border-4 border-[#1a1b26] bg-[#f7768e] px-4 py-2 text-xs text-[#1a1b26] shadow-[4px_4px_0px_#000]">
					Agentic AI
				</span>
			</div>

			<div class="mt-6 flex justify-center">
				<button
					type="button"
					class="nes-btn is-primary tokyo-cta bg-[#bb9af7] text-[#1a1b26]"
					onclick={openModal}
				>
					View Shopify Demo
				</button>
			</div>
		</div>
	</section>
</main>

{#if isModalOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
		onclick={handleBackdropClick}
	>
		<div
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
			class="nes-dialog is-dark relative mx-auto w-full max-w-lg bg-[#1a1b26] p-6 text-[#c0caf5]"
		>
			<div class="mb-6 flex items-center justify-between border-b-4 border-[#c0caf5] pb-3">
				<h2 id="modal-title" class="text-sm text-[#e0af68] md:text-base">
					SECURITY CHECKPOINT
				</h2>
				<button
					type="button"
					class="nes-btn is-error px-2 py-1 text-xs"
					aria-label="Close modal"
					onclick={closeModal}
				>
					X
				</button>
			</div>

			{#if !isVerified}
				<div class="flex flex-col items-center gap-6 text-center">
					<p class="text-xs leading-relaxed text-[#c0caf5]">
						Hold the button below for 2 seconds to verify you are human and unlock the Shopify
						Plus demo store.
					</p>

					<div class="w-full">
						<progress class="nes-progress is-success" value={progress} max="100"></progress>
						<p class="mt-2 text-xs text-[#c0caf5]/80">{Math.round(progress)}% CHARGED</p>
					</div>

					<button
						type="button"
						class="nes-btn is-warning w-full select-none py-3 text-xs md:text-sm"
						onmousedown={startHold}
						onmouseup={stopHold}
						onmouseleave={stopHold}
						ontouchstart={startHold}
						ontouchend={stopHold}
						ontouchcancel={stopHold}
					>
						{isHolding ? 'HOLDING...' : 'Hold to Verify'}
					</button>
				</div>
			{:else}
				<div class="flex flex-col items-center gap-6 text-center">
					<p class="text-base text-[#9ece6a] md:text-lg">Access Granted</p>

					<div class="nes-container is-dark w-full bg-[#1a1b26] p-4 text-[#c0caf5]">
						<p class="mb-2 text-xs text-[#c0caf5]/80">STORE PASSWORD:</p>
						<div class="flex flex-row justify-center items-center gap-4">
							<p class="m-0 text-base tracking-widest text-[#e0af68] select-all md:text-lg">
								rondev
							</p>
							<button
								type="button"
								aria-label="Copy store password to clipboard"
								onclick={copyPassword}
								class="copy-icon-btn p-2 hover:opacity-70 transition-opacity cursor-pointer text-[#c0caf5] focus:outline-none focus:ring-0"
							>
								{#if copied}
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter">
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								{:else}
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter">
										<!-- Top Right Full Rectangle -->
										<rect x="10" y="3" width="11" height="14" />
										<!-- Bottom Left Partial Rectangle -->
										<path d="M10 8 H4 V21 H15 V17" />
									</svg>
								{/if}
							</button>
						</div>
					</div>

					<a
						href={SHOPIFY_PORTFOLIO_URL}
						target="_blank"
						rel="noopener noreferrer"
						class="nes-btn is-success w-full text-center text-xs md:text-sm"
					>
						Enter Shopify Store
					</a>
				</div>
			{/if}

			<div class="mt-6 flex justify-end">
				<button type="button" class="nes-btn text-xs" onclick={closeModal}>
					Close
				</button>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Ensure Tokyo Night palette overrides un-layered NES.css specificity */
	:global(.nes-container.is-dark),
	:global(.nes-container.is-dark::after),
	:global(.nes-container.is-dark.with-title > .title),
	:global(.nes-dialog.is-dark) {
		background-color: #1a1b26;
		color: #c0caf5;
	}

	:global(.nes-btn.is-primary.tokyo-cta) {
		background-color: #bb9af7;
		color: #1a1b26;
	}

	:global(.nes-btn.is-primary.tokyo-cta:hover) {
		background-color: #a77ef2;
		color: #1a1b26;
	}

	:global(.nes-btn.is-primary.tokyo-cta::after) {
		box-shadow: inset -4px -4px #7c52c9;
	}

	:global(.nes-btn.is-primary.tokyo-cta:hover::after) {
		box-shadow: inset -6px -6px #7c52c9;
	}

	:global(.nes-btn.is-primary.tokyo-cta:active:not(.is-disabled)::after) {
		box-shadow: inset 4px 4px #7c52c9;
	}

	.copy-icon-btn:focus,
	.copy-icon-btn:focus-visible {
		outline: none;
		box-shadow: none;
	}
</style>

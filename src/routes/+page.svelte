<script lang="ts">
	const SHOPIFY_PORTFOLIO_URL =
		'https://ron-hajewski-dev-theme.myshopify.com/?_ab=0&_bt=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWx5YjI0dGFHRnFaWGR6YTJrdFpHVjJMWFJvWlcxbExtMTVjMmh2Y0dsbWVTNWpiMjBHT2daRlZBPT0iLCJleHAiOiIyMDI2LTEwLTIzVDIxOjQxOjA2LjY2OVoiLCJwdXIiOiJwZXJtYW5lbnRfcGFzc3dvcmRfYnlwYXNzIn19--39d8fb93525c6f3b6ecfab9e91acd02e09ad80e7&_fd=0&_sc=1&key=778644160bbde6420420a32da51352d6ac52cd70a247a4aabf05f7ac84ebc6a1&preview_theme_id=189793665245';

	let isModalOpen = $state(false);
	let isHolding = $state(false);
	let progress = $state(0);
	let isVerified = $state(false);

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

			<div class="mb-6 flex flex-col items-center gap-4">
				<i class="nes-octocat animate"></i>
				<h1 class="text-xl leading-relaxed text-[#e0af68] md:text-3xl">
					Senior Web Developer
				</h1>
				<p class="text-xs text-[#c0caf5]/80 md:text-sm">
					Westminster, CO &bull; 10+ Years Experience
				</p>
			</div>

			<p class="mx-auto mb-8 max-w-2xl text-xs leading-loose text-[#c0caf5] md:text-sm">
				Building high-converting e-commerce storefronts and lightweight serverless architectures.
				Focused on software development as a <span class="text-[#9ece6a]">business accelerator</span>,
				never a bottleneck.
			</p>

			<div class="mb-8 flex flex-wrap justify-center gap-4">
				<span class="inline-block border-4 border-[#1a1b26] bg-[#9ece6a] px-4 py-2 text-xs text-[#1a1b26] shadow-[4px_4px_0px_#000]">
					Shopify Plus
				</span>
				<span class="inline-block border-4 border-[#1a1b26] bg-[#7dcfff] px-4 py-2 text-xs text-[#1a1b26] shadow-[4px_4px_0px_#000]">
					Liquid
				</span>
				<span class="inline-block border-4 border-[#1a1b26] bg-[#e0af68] px-4 py-2 text-xs text-[#1a1b26] shadow-[4px_4px_0px_#000]">
					AWS
				</span>
				<span class="inline-block border-4 border-[#1a1b26] bg-[#f7768e] px-4 py-2 text-xs text-[#1a1b26] shadow-[4px_4px_0px_#000]">
					SvelteKit
				</span>
			</div>

			<div class="mt-6 flex justify-center">
				<button
					type="button"
					class="nes-btn is-primary tokyo-cta bg-[#bb9af7] text-[#1a1b26]"
					onclick={openModal}
				>
					View Shopify Portfolio
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
						<p class="text-base tracking-widest text-[#e0af68] select-all md:text-lg">
							rondev
						</p>
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
</style>

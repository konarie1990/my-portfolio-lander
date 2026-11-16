<script lang="ts">
	import SecurityCheckpoint from '#lib/components/SecurityCheckpoint.svelte';

	const LIVE_PROJECT_URL =
		'https://ron-hajewski-supplements-dev-store.myshopify.com/';

	let isOpen = $state(false);
</script>

<main class="min-h-screen w-full bg-[#1a1b26] px-4 py-10 text-[#c0caf5] md:py-16">
	<div class="mx-auto flex w-full max-w-4xl flex-col gap-6">
		<!-- 1. Page Title -->
		<section class="nes-container is-dark with-title bg-[#1a1b26] p-6 text-[#c0caf5] md:p-8">
			<p class="title bg-[#1a1b26] text-[#7aa2f7]">PROJECT CASE STUDY</p>
			<h1 class="text-lg leading-relaxed text-[#7aa2f7] md:text-2xl">
				Shopify Supplement Store Demo
			</h1>
		</section>

		<!-- 2. Vertically Stacked Content -->
		<section class="project-stack flex flex-col gap-6">
			<!-- Top: Full-Width Project Image -->
			<div
				class="flex min-h-[260px] w-full items-center justify-center border-4 border-[#c0caf5] bg-[#16161e] p-6 text-center md:min-h-[340px]"
			>
				<p class="text-xs leading-relaxed text-[#7aa2f7] md:text-sm">
					<img
						src="/images/projects/dev_supplement_store_demo.png"
						alt="Shopify Supplement Store Demo"
					/>
				</p>
			</div>

			<!-- Bottom: Body Content & Action Bar -->
			<div class="nes-container is-dark flex flex-col justify-between gap-6 bg-[#1a1b26] p-6 text-[#c0caf5]">
				<div class="flex flex-col gap-4 text-xs leading-loose text-[#c0caf5]">
					<p>
						This vertical-specific Shopify storefront is tailored specifically for the
						<span class="nes-text is-primary">vitamins and dietary supplements</span> market.
						Unlike general merchandise stores, supplement e-commerce requires specialized product
						compliance structures, transparent nutritional facts, trust badges, and
						subscription-first purchasing models.
					</p>

					<p>
						Accelerated through <span class="nes-text is-primary">Agentic AI workflows</span>,
						custom Liquid components and theme sections were rapidly engineered to streamline
						wellness conversion funnels, highlight ingredient transparency, and deliver
						high-performance responsive layouts.
					</p>

					<p>
						Every architectural decision was executed with a single directive: software
						architecture and AI automation must serve as a
						<span class="nes-text is-success">business accelerator</span>, never a technical
						bottleneck. This project is password protected.
					</p>
				</div>

				<!-- 4. Action Bar -->
				<div class="mt-4 flex flex-row flex-wrap items-center gap-4 border-t-4 border-[#16161e] pt-4">
					<button
						type="button"
						class="nes-btn is-primary tokyo-action-btn text-xs"
						onclick={() => (isOpen = true)}
					>
						View Live Project
					</button>
				</div>
			</div>
		</section>
	</div>
</main>

<SecurityCheckpoint bind:isOpen storefrontUrl={LIVE_PROJECT_URL} />

<style>
	:global(.nes-container.is-dark),
	:global(.nes-container.is-dark::after),
	:global(.nes-container.is-dark.with-title > .title) {
		background-color: #1a1b26;
		color: #c0caf5;
	}

	.project-stack {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	:global(.nes-btn.is-primary.tokyo-action-btn) {
		background-color: #7aa2f7;
		color: #16161e;
	}

	:global(.nes-btn.is-primary.tokyo-action-btn:hover) {
		background-color: #bb9af7;
		color: #16161e;
	}

	:global(.nes-btn.is-primary.tokyo-action-btn::after) {
		box-shadow: inset -4px -4px #4d6db5;
	}
</style>

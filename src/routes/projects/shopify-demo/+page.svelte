<script lang="ts">
	import SecurityCheckpoint from '#lib/components/SecurityCheckpoint.svelte';

	const LIVE_PROJECT_URL =
		'https://ron-hajewski-dev-theme.myshopify.com/?_ab=0&_bt=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWx5YjI0dGFHRnFaWGR6YTJrdFpHVjJMWFJvWlcxbExtMTVjMmh2Y0dsbWVTNWpiMjBHT2daRlZBPT0iLCJleHAiOiIyMDI2LTEwLTIzVDIxOjQxOjA2LjY2OVoiLCJwdXIiOiJwZXJtYW5lbnRfcGFzc3dvcmRfYnlwYXNzIn19--39d8fb93525c6f3b6ecfab9e91acd02e09ad80e7&_fd=0&_sc=1&key=778644160bbde6420420a32da51352d6ac52cd70a247a4aabf05f7ac84ebc6a1&preview_theme_id=189793665245';
	const GITHUB_REPO_URL = 'https://github.com/konarie1990/portfolio-storefront-theme';

	let isOpen = $state(false);
</script>

<main class="min-h-screen w-full bg-[#1a1b26] px-4 py-10 text-[#c0caf5] md:py-16">
	<div class="mx-auto flex w-full max-w-4xl flex-col gap-6">
		<!-- 1. Page Title -->
		<section class="nes-container is-dark with-title bg-[#1a1b26] p-6 text-[#c0caf5] md:p-8">
			<p class="title bg-[#1a1b26] text-[#7aa2f7]">PROJECT CASE STUDY</p>
			<h1 class="text-lg leading-relaxed text-[#7aa2f7] md:text-2xl">
				Shopify Interactive Portfolio
			</h1>
		</section>

		<!-- 2. Vertically Stacked Content -->
		<section class="project-stack flex flex-col gap-6">
			<!-- Top: Full-Width Project Image Placeholder -->
			<div
				class="flex min-h-[260px] w-full items-center justify-center border-4 border-[#c0caf5] bg-[#16161e] p-6 text-center md:min-h-[340px]"
			>
				<p class="text-xs leading-relaxed text-[#7aa2f7] md:text-sm">
					<img src="/images/projects/shopify-demo.png" alt="Shopify Demo" />
				</p>
			</div>

			<!-- Bottom: Body Content & Action Bar -->
			<div class="nes-container is-dark flex flex-col justify-between gap-6 bg-[#1a1b26] p-6 text-[#c0caf5]">
				<div class="flex flex-col gap-4 text-xs leading-loose text-[#c0caf5]">
					<p>
						This high-converting Shopify Plus storefront was engineered by combining
						<span class="nes-text is-primary">Agentic AI workflows</span> with battle-tested e-commerce
						architecture. AI agents were orchestrated to accelerate custom Liquid boilerplate generation,
						modularize theme sections, and trace complex storefront state bugs in record time.
					</p>

					<p>
						Under the hood, the store leverages custom
						<span class="nes-text is-success">Shopify Functions</span> for real-time checkout extensibility
						and dynamic tiered quantity discounting, paired with
						<span class="nes-text is-warning">AWS Lambda serverless proxies</span> that sync third-party
						data directly into Shopify metafields for zero-latency rendering.
					</p>

					<p>
						Every architectural decision was executed with a single directive: software
						architecture and AI automation must serve as a
						<span class="nes-text is-success">business accelerator</span>, never a technical
						bottleneck.
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
					<a
						href={GITHUB_REPO_URL}
						target="_blank"
						rel="noopener noreferrer"
						class="nes-btn text-xs"
					>
						View GitHub Repo
					</a>
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

<main class="min-h-screen w-full bg-[#1a1b26] px-4 py-10 text-[#c0caf5] md:py-16">
	<div class="mx-auto flex w-full max-w-4xl flex-col gap-8">
		<section class="nes-container is-dark with-title bg-[#1a1b26] p-6 text-[#c0caf5] md:p-8">
			<p class="title bg-[#1a1b26] text-[#7aa2f7]">PROJECTS</p>
			<h1 class="text-lg text-[#7aa2f7] md:text-2xl">Projects</h1>
			<p class="mt-2 text-xs leading-relaxed text-[#c0caf5]">
				Select a project module below to inspect its system architecture, AI engineering workflows,
				and live deployment.
			</p>
		</section>

		<div class="flex flex-col gap-6">
			<a
				href="/projects/shopify-demo"
				class="nes-container is-dark group block bg-[#16161e] p-6 text-[#c0caf5] no-underline transition-colors hover:border-[#7aa2f7]"
			>
				<div class="mb-3 flex flex-wrap items-center justify-between gap-2">
					<h2 class="text-sm text-[#7aa2f7] transition-colors group-hover:text-[#bb9af7] md:text-base">
						Shopify Portfolio Demo
					</h2>
					<span class="border-2 border-[#bb9af7] bg-[#1a1b26] px-2 py-1 text-[10px] text-[#bb9af7]">
						PASSWORD PROTECTED
					</span>
				</div>

				<p class="mb-4 text-xs leading-relaxed text-[#c0caf5]">
					High-converting Shopify Plus storefront engineered with Agentic AI Liquid workflows,
					Shopify Functions checkout extensibility, and AWS Lambda serverless proxies. This project
					is password protected.
				</p>

				<span class="nes-btn is-primary tokyo-card-btn inline-block text-xs">
					Enter Security Gate &rarr;
				</span>
			</a>

			<a
				href="/projects/job-hunter-agent"
				class="nes-container is-dark group block bg-[#16161e] p-6 text-[#c0caf5] no-underline transition-colors hover:border-[#7aa2f7]"
			>
				<div class="mb-3 flex flex-wrap items-center justify-between gap-2">
					<h2 class="text-sm text-[#7aa2f7] transition-colors group-hover:text-[#bb9af7] md:text-base">
						Local AI Job Hunter Agent
					</h2>
					<span class="border-2 border-[#7aa2f7] bg-[#1a1b26] px-2 py-1 text-[10px] text-[#7aa2f7]">
						LOCAL AI / OLLAMA
					</span>
				</div>

				<p class="mb-4 text-xs leading-relaxed text-[#c0caf5]">
					Self-hosted job search automation agent built with SvelteKit, Node.js, SQLite, and a local
					Ollama LLM that parses job postings, evaluates technical fit and salary thresholds, and
					drafts tailored cover letters.
				</p>

				<span class="nes-btn is-primary tokyo-card-btn inline-block text-xs">
					View Case Study &rarr;
				</span>
			</a>
		</div>
	</div>
</main>

<style>
	:global(.nes-container.is-dark),
	:global(.nes-container.is-dark::after),
	:global(.nes-container.is-dark.with-title > .title) {
		background-color: #1a1b26;
		color: #c0caf5;
	}

	:global(.nes-btn.is-primary.tokyo-card-btn) {
		background-color: #7aa2f7;
		color: #16161e;
	}

	:global(.nes-btn.is-primary.tokyo-card-btn:hover) {
		background-color: #bb9af7;
		color: #16161e;
	}

	:global(.nes-btn.is-primary.tokyo-card-btn::after) {
		box-shadow: inset -4px -4px #4d6db5;
	}
</style>

<main class="min-h-screen w-full bg-[#1a1b26] px-4 py-10 text-[#c0caf5] md:py-16">
	<div class="mx-auto flex w-full max-w-4xl flex-col gap-6">
		<!-- 1. Page Title -->
		<section class="nes-container is-dark with-title bg-[#1a1b26] p-6 text-[#c0caf5] md:p-8">
			<p class="title bg-[#1a1b26] text-[#7aa2f7]">PROJECT CASE STUDY</p>
			<h1 class="text-lg leading-relaxed text-[#7aa2f7] md:text-2xl">
				Local AI Job Hunter Agent
			</h1>
		</section>

		<!-- 2. Vertically Stacked Content -->
		<section class="project-stack flex flex-col gap-6">
			<!-- Top: Full-Width Project Image -->
			<img
				src="/images/projects/job-hunter-app-local-ai.jpg"
				alt="Job Hunter Agent Interface"
				class="w-full mb-6 border-4 border-[#c0caf5]"
			/>

			<!-- Bottom: Body Content & Action Bar -->
			<div class="nes-container is-dark flex flex-col justify-between gap-6 bg-[#1a1b26] p-6 text-[#c0caf5]">
				<div class="flex flex-col gap-4 text-xs leading-loose text-[#c0caf5]">
					<p>
						The <span class="nes-text is-primary">Local AI Job Hunter Agent</span> is a self-hosted,
						end-to-end automation workflow engineered with
						<span class="nes-text is-success">SvelteKit</span>,
						<span class="nes-text is-primary">Node.js</span>,
						<span class="nes-text is-warning">SQLite</span>, and a locally running
						<span class="nes-text is-success">Ollama</span> LLM.
					</p>

					<p>
						Rather than manually sifting through dozens of repetitive listings, this agentic system
						ingests and parses raw job postings, scores each opportunity against strict technical fit
						criteria and compensation thresholds, and persists structured evaluations into a local
						SQLite database.
					</p>

					<p>
						For high-scoring roles, the local Ollama model automatically drafts highly tailored cover
						letters aligned with verified resume experience. This architecture exemplifies software
						and local AI automation acting as a
						<span class="nes-text is-success">business accelerator</span>—eliminating repetitive
						operational bottlenecks while keeping all personal data 100% private and zero-cost on
						local Apple Silicon hardware.
					</p>
				</div>

				<!-- 4. Action Bar -->
				<div class="mt-4 flex flex-row flex-wrap items-center gap-4 border-t-4 border-[#16161e] pt-4">
					<a
						href="https://github.com/konarie1990/job-hunter-agent"
						target="_blank"
						rel="noopener noreferrer"
						class="nes-btn is-primary tokyo-action-btn text-xs"
					>
						View GitHub Repo
					</a>
				</div>
			</div>
		</section>
	</div>
</main>

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

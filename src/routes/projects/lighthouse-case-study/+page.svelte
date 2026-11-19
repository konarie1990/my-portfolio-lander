<main class="min-h-screen w-full bg-[#1a1b26] px-4 py-10 text-[#c0caf5] md:py-16">
	<div class="mx-auto flex w-full max-w-5xl flex-col gap-6">
		<!-- 1. Page Title -->
		<section class="nes-container is-dark with-title bg-[#1a1b26] p-6 text-[#c0caf5] md:p-8">
			<p class="title bg-[#1a1b26] text-[#7aa2f7]">PROJECT CASE STUDY</p>
			<div class="flex flex-wrap items-center justify-between gap-3">
				<h1 class="text-lg leading-relaxed text-[#7aa2f7] md:text-2xl">
					Lighthouse Case Study: DTC Speed to Revenue
				</h1>
				<span class="border-2 border-[#9ece6a] bg-[#1a1b26] px-2.5 py-1 text-[11px] font-bold text-[#9ece6a]">
					INTERACTIVE AUDIT
				</span>
			</div>
			<p class="mt-2 text-xs leading-relaxed text-[#c0caf5]">
				Modeling the conversion rate (CVR) and bottom-line revenue impact of jumping mobile Lighthouse performance from 29 to 60+ for high-growth DTC brands.
			</p>
		</section>

		<!-- 2. Interactive Infographic Embed -->
		<section class="project-stack flex flex-col gap-6">
			<div class="flex w-full flex-col overflow-hidden border-4 border-[#c0caf5] bg-[#07101e] shadow-2xl">
				<div class="flex items-center justify-between border-b-4 border-[#16161e] bg-[#0f172a] px-4 py-3">
					<div class="flex items-center gap-2">
						<span class="inline-block h-3 w-3 rounded-full bg-[#f7768e]"></span>
						<span class="inline-block h-3 w-3 rounded-full bg-[#e0af68]"></span>
						<span class="inline-block h-3 w-3 rounded-full bg-[#9ece6a]"></span>
						<span class="ml-2 font-mono text-[11px] text-[#7aa2f7]">interactive-revenue-simulator.html</span>
					</div>
					<a
						href="/lighthouse-case-study.html"
						target="_blank"
						rel="noopener noreferrer"
						class="font-mono text-[11px] text-[#7dcfff] hover:underline"
					>
						Open Fullscreen &UpperRightArrow;
					</a>
				</div>
				<iframe
					src="/lighthouse-case-study.html"
					title="DTC Mobile Performance & Revenue Infographic"
					class="h-[1850px] w-full border-0 bg-[#07101e] md:h-[1950px]"
					loading="lazy"
				></iframe>
			</div>

			<!-- 3. Technical Case Study Breakdown -->
			<div class="nes-container is-dark flex flex-col justify-between gap-6 bg-[#1a1b26] p-6 text-[#c0caf5]">
				<div class="flex flex-col gap-4 text-xs leading-loose text-[#c0caf5]">
					<h2 class="text-sm font-bold text-[#7aa2f7] md:text-base">
						Executive Overview: The 29 ➔ 60+ Revenue Hockey-Stick
					</h2>

					<p>
						In real-world DTC e-commerce (particularly for brands investing <span class="nes-text is-warning">$1M–$2M/month</span> in paid Meta, TikTok, and Google Shopping traffic), moving a mobile Lighthouse score from <span class="nes-text is-error">29 to 60+</span> typically yields a <span class="nes-text is-success">5% to 15% lift in overall conversion rate (CVR)</span>. For a store doing $1.5M/month, this translates to <span class="nes-text is-success">+$75,000 to +$180,000+ in incremental monthly revenue</span> without spending an extra dollar on ads.
					</p>

					<h3 class="mt-2 text-xs font-bold text-[#bb9af7] md:text-sm">
						1. The "Abandonment Cliff" (Scores 20–35) vs. Diminishing Returns
					</h3>
					<p>
						A score of 29 on mobile almost always signals severe friction: <span class="nes-text is-error">Largest Contentful Paint (LCP) takes 4.5 to 7+ seconds</span> and <span class="nes-text is-error">Interaction to Next Paint (INP) lags by 400ms–1,000ms+</span>. On paid traffic, mobile shoppers bounce before the buy box finishes hydrating, or tap variant swatches and assume the site is broken.
					</p>
					<p>
						Conversely, jumping from 65 to 95 rarely shifts revenue noticeably because human perception thresholds are already met. Engineering resources must prioritize escaping the abandonment cliff where revenue is trapped.
					</p>

					<h3 class="mt-2 text-xs font-bold text-[#bb9af7] md:text-sm">
						2. The "Synthetic Score" Trap (Points That Print Money)
					</h3>
					<p>
						Lighthouse is a weighted mathematical formula, and not all points convert equally:
					</p>
					<ul class="list-disc pl-5">
						<li>
							<strong class="text-[#9ece6a]">Points That Print Money:</strong> Cutting Total Blocking Time (TBT) and LCP under 2.0s so the hero image, price, swatches, and Add-to-Cart button respond instantaneously to taps.
						</li>
						<li>
							<strong class="text-[#f7768e]">Points That Do Nothing:</strong> Deferring hidden footer analytics or fixing minor contrast warnings might bump a score from 29 to 50 on paper while leaving mobile customers stranded in lag—yielding a 0% conversion lift.
						</li>
					</ul>

					<h3 class="mt-2 text-xs font-bold text-[#bb9af7] md:text-sm">
						3. Clean Attribution in GA4 & Shopify
					</h3>
					<p>
						To isolate speed wins from ad promos and seasonal spikes, monitor 3 clean funnel progression metrics: <span class="nes-text is-primary">Landing Page View-to-Session Ratio</span> (+5–10% jump), <span class="nes-text is-primary">Product View &rarr; Add-to-Cart Rate</span> (+8–15% lift), and the compression of the <span class="nes-text is-primary">Mobile vs. Desktop CVR gap</span>.
					</p>
				</div>

				<!-- 4. Action Bar -->
				<div class="mt-4 flex flex-row flex-wrap items-center gap-4 border-t-4 border-[#16161e] pt-4">
					<a
						href="/lighthouse-case-study.html"
						target="_blank"
						rel="noopener noreferrer"
						class="nes-btn is-primary tokyo-action-btn text-xs"
					>
						Open Interactive Model &UpperRightArrow;
					</a>

					<a
						href="/projects"
						class="nes-btn tokyo-secondary-btn text-xs"
					>
						&larr; Back to Projects
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

	:global(.nes-btn.tokyo-secondary-btn) {
		background-color: #24283b;
		color: #c0caf5;
	}

	:global(.nes-btn.tokyo-secondary-btn:hover) {
		background-color: #414868;
		color: #ffffff;
	}

	:global(.nes-btn.tokyo-secondary-btn::after) {
		box-shadow: inset -4px -4px #1a1b26;
	}
</style>

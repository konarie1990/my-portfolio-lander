<script lang="ts">
	interface SkillGroup {
		category: string;
		items: string;
	}

	interface EarlyCareerEntry {
		title: string;
		role?: string;
		period: string;
		description: string;
	}

	const contactInfo = {
		name: 'Ron Hajewski',
		location: 'Westminster, CO',
		email: 'ronald.hajewski@gmail.com',
		phone: '716.548.7144',
		linkedinUrl: 'https://linkedin.com/in/ronhajewski',
		linkedinLabel: 'linkedin.com/in/ronhajewski',
		headline:
			'Senior Web Developer (9+ Years Development Experience) specializing in scalable e-commerce architectures, Shopify Plus, and AI-accelerated development workflows.'
	};

	const skills: SkillGroup[] = [
		{
			category: 'Languages & Frameworks',
			items: 'JavaScript, TypeScript, React, Vue, Node.js, HTML, CSS, Liquid, Remix, PHP, Twig, SQL'
		},
		{
			category: 'E-Commerce & Cloud',
			items:
				'Shopify Plus, Shopify Functions (Checkout Extensibility), Recharge, BigCommerce, Drupal, AWS, Azure, Salesforce Marketing Cloud'
		},
		{
			category: 'Tracking & Marketing Tech',
			items:
				'Google Tag Manager (GTM), GA4, Segment, Dynamic Yield, VWO, Qualtrics, SurveySparrow'
		},
		{
			category: 'DevOps & AI Tooling',
			items:
				'Git, GitHub, Shopify CLI, Jira, ClickUp, Gemini, Antigravity CLI, Claude Code, Copilot'
		}
	];

	const earlyCareer: EarlyCareerEntry[] = [
		{
			title: 'Konarie Music LLC',
			role: 'Developer / Owner',
			period: '2017–2020',
			description:
				'Self-taught programmer; conceptualized, designed, and developed the Konarie Chirp synthesizer plugin for the Reason Studios platform.'
		},
		{
			title: 'Technical Sales & Account Management',
			period: '2013–2018',
			description:
				'Managed enterprise cloud implementations and technology sales at TriNet, IDERA, and Informatica while concurrently mastering full-stack web development.'
		}
	];

	let showEarlyCareer = $state(true);
</script>

<main class="min-h-screen w-full bg-[#1a1b26] px-4 py-10 text-[#c0caf5] md:py-16">
	<div class="mx-auto flex w-full max-w-4xl flex-col gap-10">
		<!-- Hero Section -->
		<section class="nes-container with-title is-dark bg-[#1a1b26] p-6 text-[#c0caf5] md:p-10">
			<p class="title bg-[#1a1b26] text-[#7aa2f7]">CHARACTER SHEET: {contactInfo.name.toUpperCase()}</p>

			<div class="flex flex-col gap-4">
				<div class="flex flex-col justify-between gap-2 border-b-4 border-[#16161e] pb-4 md:flex-row md:items-end">
					<div>
						<h1 class="text-lg leading-relaxed text-[#7aa2f7] md:text-2xl">
							AI Engineer &amp; Senior Web Developer
						</h1>
						<p class="mt-1 text-xs text-[#bb9af7]">
							{contactInfo.location} &bull; 9+ Years Experience
						</p>
					</div>
					<div class="flex flex-col gap-1 text-[10px] text-[#c0caf5]/80 md:text-right md:text-xs">
						<a href="mailto:{contactInfo.email}" class="text-[#7aa2f7] hover:text-[#bb9af7]">
							{contactInfo.email}
						</a>
						<span>{contactInfo.phone}</span>
						<a
							href={contactInfo.linkedinUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="text-[#7aa2f7] hover:text-[#bb9af7]"
						>
							{contactInfo.linkedinLabel}
						</a>
					</div>
				</div>

				<div class="border-l-4 border-[#7aa2f7] bg-[#16161e] p-4">
					<p class="m-0 text-xs leading-relaxed text-[#c0caf5]">
						{contactInfo.headline}
					</p>
				</div>
			</div>
		</section>

		<!-- Work Experience -->
		<section class="nes-container with-title is-dark bg-[#1a1b26] p-6 text-[#c0caf5] md:p-8">
			<p class="title bg-[#1a1b26] text-[#7aa2f7]">WORK EXPERIENCE</p>

			<div class="flex flex-col gap-8">
				<!-- humann -->
				<article class="border-b-4 border-[#16161e] pb-6">
					<div class="mb-4 flex flex-col justify-between gap-1 md:flex-row md:items-center">
						<h2 class="text-sm text-[#7aa2f7] md:text-base">humann</h2>
						<span class="text-xs text-[#c0caf5]/70">Remote</span>
					</div>

					<div class="flex flex-col gap-6">
						<div class="border-l-4 border-[#bb9af7] pl-4">
							<div class="mb-3 flex flex-col justify-between gap-1 md:flex-row md:items-center">
								<h3 class="text-xs text-[#bb9af7] md:text-sm">Web Developer &amp; Storefront Lead</h3>
								<span class="text-[10px] text-[#7aa2f7] md:text-xs">March 2024 – October 2026</span>
							</div>

							<ul class="flex list-disc flex-col gap-3 pl-4 text-[11px] leading-relaxed text-[#c0caf5] md:text-xs">
								<li>
									Engineered scalable <span class="nes-text is-warning">AWS Lambda</span> serverless architectures, leveraging AI-assisted coding (<span class="nes-text is-primary">Copilot/Claude</span>) to rapidly deploy a custom daily cron task that synced product ratings directly to <span class="nes-text is-success">Shopify metafields</span>, eliminating storefront bottlenecks.
								</li>
								<li>
									Overhauled complex subscription logic by migrating <span class="nes-text is-primary">Recharge</span> from rigid static bundles to a dynamic, quantity-based source of truth, enabling advanced promotional bundling and scaling direct-to-consumer revenue.
								</li>
								<li>
									Utilized <span class="nes-text is-success">Shopify Functions</span> and <span class="nes-text is-success">Checkout Extensibility</span> to calculate and render real-time tiered quantity discount pricing within Product Detail Pages (PDP) and landing page offer modules.
								</li>
								<li>
									Slashed new landing page development time by <span class="nes-text is-success">30%</span> by integrating AI tools (<span class="nes-text is-primary">Gemini, Claude</span>) into agentic workflows for rapid Liquid boilerplate generation and complex bug tracing.
								</li>
							</ul>
						</div>

						<div class="border-l-4 border-[#bb9af7] pl-4">
							<div class="mb-3 flex flex-col justify-between gap-1 md:flex-row md:items-center">
								<h3 class="text-xs text-[#bb9af7] md:text-sm">Front End Web Developer</h3>
								<span class="text-[10px] text-[#7aa2f7] md:text-xs">March 2022 – March 2024</span>
							</div>

							<ul class="flex list-disc flex-col gap-3 pl-4 text-[11px] leading-relaxed text-[#c0caf5] md:text-xs">
								<li>
									Optimized <span class="nes-text is-primary">Liquid</span> image delivery and minimized layout shifts to drive Google Lighthouse performance scores from the <span class="nes-text is-success">low 20s to the 60s</span>.
								</li>
								<li>
									Coded complex A/B test offer module variations using <span class="nes-text is-warning">Dynamic Yield</span> and <span class="nes-text is-warning">VWO</span>, partnering with the CRO Manager to consistently drive conversion rate improvements on high-volume acquisition landing pages.
								</li>
								<li>
									Established stringent development operations by standardizing <span class="nes-text is-primary">Git/GitHub</span> workflows and modularizing Liquid templates to ensure storefront scalability.
								</li>
							</ul>
						</div>
					</div>
				</article>

				<!-- Giddy Holdings, Inc. -->
				<article class="border-b-4 border-[#16161e] pb-6">
					<div class="mb-4 flex flex-col justify-between gap-1 md:flex-row md:items-center">
						<h2 class="text-sm text-[#7aa2f7] md:text-base">Giddy Holdings, Inc.</h2>
						<span class="text-xs text-[#c0caf5]/70">Remote</span>
					</div>

					<div class="border-l-4 border-[#bb9af7] pl-4">
						<div class="mb-3 flex flex-col gap-1">
							<div class="flex flex-col justify-between gap-1 md:flex-row md:items-center">
								<h3 class="text-xs text-[#bb9af7] md:text-sm">Front End Developer</h3>
								<span class="text-[10px] text-[#7aa2f7] md:text-xs">December 2021 – February 2022</span>
							</div>
							<div class="flex flex-col justify-between gap-1 md:flex-row md:items-center">
								<h3 class="text-xs text-[#bb9af7] md:text-sm">Junior Web Developer</h3>
								<span class="text-[10px] text-[#7aa2f7] md:text-xs">December 2020 – December 2021</span>
							</div>
						</div>

						<ul class="flex list-disc flex-col gap-3 pl-4 text-[11px] leading-relaxed text-[#c0caf5] md:text-xs">
							<li>
								Maintained e-commerce storefronts across <span class="nes-text is-primary">BigCommerce</span> and <span class="nes-text is-primary">Drupal</span>, implementing dynamic marketing campaigns using PHP and Twig templating, and <span class="nes-text is-warning">Salesforce Marketing Cloud</span>.
							</li>
							<li>
								Developed dynamic landing pages, utilizing <span class="nes-text is-success">AI code generation tools</span> to accelerate API integrations and URL parameter mapping, eliminating sales funnel gaps and increasing total sales conversion.
							</li>
						</ul>
					</div>
				</article>

				<!-- Austin Coding Academy -->
				<article>
					<div class="mb-4 flex flex-col justify-between gap-1 md:flex-row md:items-center">
						<h2 class="text-sm text-[#7aa2f7] md:text-base">Austin Coding Academy</h2>
						<span class="text-xs text-[#c0caf5]/70">Austin, TX</span>
					</div>

					<div class="border-l-4 border-[#bb9af7] pl-4">
						<div class="mb-3 flex flex-col justify-between gap-1 md:flex-row md:items-center">
							<h3 class="text-xs text-[#bb9af7] md:text-sm">Web Developer Apprentice</h3>
							<span class="text-[10px] text-[#7aa2f7] md:text-xs">November 2019 – March 2020</span>
						</div>

						<ul class="flex list-disc flex-col gap-3 pl-4 text-[11px] leading-relaxed text-[#c0caf5] md:text-xs">
							<li>
								Leveraged the <span class="nes-text is-primary">AMP</span> web component framework to execute mobile-responsive redesigns, improving client SEO, site performance, and website conversion rates.
							</li>
						</ul>
					</div>
				</article>
			</div>
		</section>

		<!-- Early Career & Foundational Experience -->
		<section class="nes-container with-title is-dark bg-[#1a1b26] p-6 text-[#c0caf5] md:p-8">
			<p class="title bg-[#1a1b26] text-[#7aa2f7]">EARLY CAREER &amp; FOUNDATIONAL EXPERIENCE</p>

			<div class="mb-4 flex justify-end">
				<button
					type="button"
					class="nes-btn is-primary tokyo-toggle-btn px-2 py-1 text-[10px]"
					onclick={() => (showEarlyCareer = !showEarlyCareer)}
				>
					{showEarlyCareer ? 'HIDE' : 'SHOW'}
				</button>
			</div>

			{#if showEarlyCareer}
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
					{#each earlyCareer as item (item.title)}
						<div class="border-4 border-[#16161e] bg-[#16161e] p-4">
							<div class="mb-2 flex flex-col gap-1">
								<h2 class="text-xs text-[#7aa2f7]">{item.title}</h2>
								<span class="text-[10px] text-[#bb9af7]">
									{#if item.role}
										{item.role} &bull;
									{/if}
									{item.period}
								</span>
							</div>
							<p class="text-[11px] leading-relaxed text-[#c0caf5] md:text-xs">
								{item.description}
							</p>
						</div>
					{/each}
				</div>
			{/if}
		</section>

		<!-- Skills -->
		<section class="nes-container with-title is-dark bg-[#1a1b26] p-6 text-[#c0caf5] md:p-8">
			<p class="title bg-[#1a1b26] text-[#7aa2f7]">SKILLS</p>

			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				{#each skills as skill (skill.category)}
					<div class="border-4 border-[#16161e] bg-[#16161e] p-4">
						<h2 class="mb-2 text-xs text-[#bb9af7]">{skill.category}</h2>
						<p class="text-[11px] leading-relaxed text-[#c0caf5] md:text-xs">{skill.items}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- Education -->
		<section class="nes-container with-title is-dark bg-[#1a1b26] p-6 text-[#c0caf5] md:p-8">
			<p class="title bg-[#1a1b26] text-[#7aa2f7]">EDUCATION</p>

			<div class="border-l-4 border-[#7aa2f7] bg-[#16161e] p-4">
				<div class="mb-2 flex flex-col justify-between gap-1 md:flex-row md:items-center">
					<h2 class="text-xs text-[#7aa2f7] md:text-sm">Austin Coding Academy</h2>
					<span class="text-[10px] text-[#c0caf5]/70 md:text-xs">Austin, TX</span>
				</div>
				<p class="m-0 text-xs text-[#bb9af7]">
					Full Stack Web Developer Certification (<span class="nes-text is-primary">MERN Stack</span>)
					<span class="text-[#c0caf5]/80">&bull; August 2019</span>
				</p>
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

	:global(.nes-btn.is-primary.tokyo-toggle-btn) {
		background-color: #7aa2f7;
		color: #16161e;
	}

	:global(.nes-btn.is-primary.tokyo-toggle-btn:hover) {
		background-color: #bb9af7;
		color: #16161e;
	}

	:global(.nes-btn.is-primary.tokyo-toggle-btn::after) {
		box-shadow: inset -4px -4px #4d6db5;
	}
</style>

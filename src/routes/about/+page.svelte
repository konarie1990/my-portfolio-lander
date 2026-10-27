<script lang="ts">
	interface SkillGroup {
		category: string;
		items: string;
	}

	interface ExperienceRole {
		title: string;
		period: string;
		bullets: string[];
	}

	interface ExperienceEntry {
		company: string;
		location?: string;
		roles: ExperienceRole[];
	}

	interface EarlyCareerEntry {
		company: string;
		period: string;
		role: string;
		description: string;
	}

	interface EducationEntry {
		institution: string;
		location?: string;
		credential?: string;
		period?: string;
		details: string;
	}

	const contactInfo = {
		name: 'Ron Hajewski',
		location: 'Westminster, CO 80031',
		email: 'ronald.hajewski@gmail.com',
		phone: '716.548.7144'
	};

	const technicalSkills: SkillGroup[] = [
		{
			category: 'Languages & Core Web',
			items: 'JavaScript, TypeScript, React, Vue, Node.js, HTML, CSS, Liquid, Remix, PHP, Twig, SQL.'
		},
		{
			category: 'Development Ops & Cloud',
			items: 'Git, GitHub, Shopify CLI, AWS, Azure, Agile Sprints, Jira, ClickUp.'
		},
		{
			category: 'E-Commerce Ecosystem',
			items:
				'Shopify Plus, Shopify Functions (Shopify Checkout Extensibility), Recharge, Rebuy, BigCommerce, Drupal, Custom Apps.'
		},
		{
			category: 'Tracking & CRO',
			items: 'Google Tag Manager (GTM), GA4, Segment, Meta Pixel, Dynamic Yield, VWO, Shogun.'
		},
		{
			category: 'Quiz & Marketing Tech',
			items: 'Outgrow, Qualtrics, Typeform, SurveySparrow, Salesforce Marketing Cloud.'
		},
		{
			category: 'AI Tooling',
			items: 'Gemini, Claude Code, Copilot.'
		}
	];

	const professionalExperience: ExperienceEntry[] = [
		{
			company: 'humann',
			location: 'Austin, TX / Remote',
			roles: [
				{
					title: 'Web Developer & Storefront Lead',
					period: 'March 2024 – October 2026',
					bullets: [
						'Elevated direct to consumer web experience by increasing site performance and conversion rates through 4 consecutive Inc. 5000 awards.',
						'Engineered scalable AWS Lambda serverless architectures (custom APIs, middleware proxies, scheduled tasks) to eliminate storefront bottlenecks. Most recently, bypassed a slow third-party API (Bazaarvoice) by building a Lambda cron job to sync ratings directly to Shopify metafields for instant on-page rendering.',
						'Managed and overhauled complex Shopify integrations, specifically migrating Recharge subscription logic from rigid static bundles to a dynamic, quantity-based source of truth to unlock advanced promotional bundling.',
						'Engineered custom Shopify apps and utilized Shopify Functions to pull real-time data, dynamically calculating and rendering tiered quantity discount pricing within Product Detail Page (PDP) and landing page offer modules.',
						'Improved tracking and analytics by setting up robust event listeners in Google Tag Manager and Segment for checkout, purchases, add-to-cart, and abandon cart events to fuel data-driven marketing.',
						'Accelerated the storefront development pipeline and slashed new landing page development time by 30% through Agentic development, integrating AI tools (Gemini, Claude) for rapid Liquid boilerplate generation and complex bug tracing.',
						'Acted as a technical utility player across the stack, leveraging a strong foundational understanding of databases (SQL/NoSQL) and backend architecture to diagnose bottlenecks and independently unblock business operations.'
					]
				},
				{
					title: 'Front End Web Developer',
					period: 'March 2022 – March 2024',
					bullets: [
						'Maintained custom Shopify Plus themes, driving Lighthouse performance scores from low 20s to 60s by optimizing Liquid image delivery, reducing layout shifts, and optimizing network dependencies.',
						'Built and optimized high-volume acquisition landing pages for paid social campaigns using Liquid, custom code, and Shogun, supporting rapid marketing tests.',
						'Working closely with CRO Manager on technical A/B testing utilizing Dynamic Yield and VWO, coding complex offer module variations that consistently drove conversion rate improvements.',
						'Established stringent development operations, standardizing Git/GitHub workflows, and modularizing Liquid templates to ensure the storefront remained scalable and accessible.'
					]
				}
			]
		},
		{
			company: 'Giddy Holdings, Inc.',
			location: 'Austin, TX / Remote',
			roles: [
				{
					title: 'Front End Developer (Dec 2021 – Feb 2022) | Junior Web Developer (Dec 2020 – Dec 2021)',
					period: 'December 2020 – February 2022',
					bullets: [
						'Implemented dynamic advertising campaigns and maintained e-commerce storefronts across BigCommerce and Drupal, utilizing PHP and Twig templating to support marketing initiatives.',
						'Managed project backlogs and coordinated cross-functional marketing campaigns using ClickUp to ensure efficient project delivery.',
						'Implemented interactive customer quizzes, migrating libraries from Typeform to Qualtrics and SurveySparrow to increase brand engagement and capture granular customer preference data.',
						'Developed dynamic, high-converting landing pages, passing data through APIs and URL parameters to eliminate sales funnel gaps and increase total sales.'
					]
				}
			]
		},
		{
			company: 'Austin Coding Academy',
			location: 'Austin, TX',
			roles: [
				{
					title: 'Web Developer Apprentice',
					period: 'November 2019 – March 2020',
					bullets: [
						'Leveraged the AMP web component framework to help clients improve SEO, performance, and website conversions.',
						'Conceptualized and executed mobile-responsive redesigns, streamlining the overall user experience.'
					]
				}
			]
		}
	];

	const earlyCareer: EarlyCareerEntry[] = [
		{
			company: 'Konarie Music LLC',
			period: 'January 2017 – March 2020',
			role: 'Developer / Owner',
			description:
				'Entirely self-taught programming to conceptualize, design, and develop the Konarie Chirp synthesizer plugin as an independent developer for the Reason Studios Digital Audio Workstation platform.'
		},
		{
			company: 'TriNet',
			period: 'July 2017 – November 2018',
			role: 'Technology Sales',
			description:
				'Provided strategic guidance to technology clients while concurrently pursuing a formal full-stack web development certification outside of working hours.'
		},
		{
			company: 'IDERA / Embarcadero',
			period: 'January 2017 – July 2017',
			role: 'Enterprise Inside Sales Account Manager',
			description:
				'Managed key enterprise client accounts while independently learning software development fundamentals during evenings and weekends.'
		},
		{
			company: 'Informatica',
			period: 'December 2013 – November 2016',
			role: 'Inside Sales / Business Development',
			description:
				'Led sales efforts for cloud solutions, earning promotions and collaborating with clients to implement tailored cloud-based data strategies. My Introduction to JavaScript in a professional business setting.'
		}
	];

	const education: EducationEntry[] = [
		{
			institution: 'Continuous Education & Self-Directed Learning',
			details:
				'Self-taught software engineer with a proven track record of rapidly mastering new technologies, modern web frameworks, and AI tooling (Gemini, Claude) to solve complex business problems.'
		},
		{
			institution: 'Austin Coding Academy (ACA)',
			location: 'Austin, TX',
			credential: 'Full Stack Web Developer Certification (MERN Stack)',
			period: 'May 2019',
			details:
				'Intensive, hands-on training in the MERN stack (MongoDB, Express, React, Node.js), establishing a strong full-stack foundation for scalable application development.'
		},
		{
			institution: 'SUNY Buffalo State College',
			location: 'Buffalo, NY',
			details: 'Completed 36 credits towards a BS in Computer Information Systems'
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
					</div>
				</div>

				<p class="text-xs leading-loose text-[#c0caf5] md:text-sm">
					Senior Web Developer and <span class="text-[#7aa2f7]">AI Engineer</span> specializing in
					agentic workflows, serverless cloud solutions, and high-converting e-commerce storefronts.
					Every system I architect is built on a core philosophy: software architecture and AI
					automation must always operate as a <span class="text-[#bb9af7]">business accelerator</span>,
					never a technical bottleneck.
				</p>
			</div>
		</section>

		<!-- Technical Skills -->
		<section class="nes-container with-title is-dark bg-[#1a1b26] p-6 text-[#c0caf5] md:p-8">
			<p class="title bg-[#1a1b26] text-[#7aa2f7]">TECHNICAL SKILLS</p>

			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				{#each technicalSkills as skill (skill.category)}
					<div class="border-4 border-[#16161e] bg-[#16161e] p-4">
						<h2 class="mb-2 text-xs text-[#bb9af7]">{skill.category}</h2>
						<p class="text-[11px] leading-relaxed text-[#c0caf5] md:text-xs">{skill.items}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- Professional Experience -->
		<section class="nes-container with-title is-dark bg-[#1a1b26] p-6 text-[#c0caf5] md:p-8">
			<p class="title bg-[#1a1b26] text-[#7aa2f7]">PROFESSIONAL EXPERIENCE</p>

			<div class="flex flex-col gap-8">
				{#each professionalExperience as exp (exp.company)}
					<article class="border-b-4 border-[#16161e] pb-6 last:border-b-0 last:pb-0">
						<div class="mb-4 flex flex-col justify-between gap-1 md:flex-row md:items-center">
							<h2 class="text-sm text-[#7aa2f7] md:text-base">{exp.company}</h2>
							{#if exp.location}
								<span class="text-xs text-[#c0caf5]/70">{exp.location}</span>
							{/if}
						</div>

						<div class="flex flex-col gap-6">
							{#each exp.roles as role (role.title)}
								<div class="border-l-4 border-[#bb9af7] pl-4">
									<div class="mb-3 flex flex-col justify-between gap-1 md:flex-row md:items-center">
										<h3 class="text-xs text-[#bb9af7] md:text-sm">{role.title}</h3>
										<span class="text-[10px] text-[#7aa2f7] md:text-xs">{role.period}</span>
									</div>

									<ul class="flex list-disc flex-col gap-3 pl-4 text-[11px] leading-relaxed text-[#c0caf5] md:text-xs">
										{#each role.bullets as bullet (bullet)}
											<li>{bullet}</li>
										{/each}
									</ul>
								</div>
							{/each}
						</div>
					</article>
				{/each}
			</div>

			<!-- Early Career & Foundational Experience -->
			<div class="mt-8 border-t-4 border-[#16161e] pt-6">
				<div class="mb-4 flex items-center justify-between gap-4">
					<h2 class="text-xs text-[#7aa2f7] md:text-sm">
						EARLY CAREER &amp; FOUNDATIONAL EXPERIENCE
					</h2>
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
						{#each earlyCareer as item (item.company)}
							<div class="border-4 border-[#16161e] bg-[#16161e] p-4">
								<div class="mb-2 flex flex-col gap-1">
									<h3 class="text-xs text-[#7aa2f7]">{item.company}</h3>
									<span class="text-[10px] text-[#bb9af7]">{item.role} &bull; {item.period}</span>
								</div>
								<p class="text-[11px] leading-relaxed text-[#c0caf5] md:text-xs">
									{item.description}
								</p>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</section>

		<!-- Education -->
		<section class="nes-container with-title is-dark bg-[#1a1b26] p-6 text-[#c0caf5] md:p-8">
			<p class="title bg-[#1a1b26] text-[#7aa2f7]">EDUCATION</p>

			<div class="flex flex-col gap-6">
				{#each education as edu (edu.institution)}
					<div class="border-l-4 border-[#7aa2f7] bg-[#16161e] p-4">
						<div class="mb-2 flex flex-col justify-between gap-1 md:flex-row md:items-center">
							<h2 class="text-xs text-[#7aa2f7] md:text-sm">{edu.institution}</h2>
							{#if edu.location}
								<span class="text-[10px] text-[#c0caf5]/70 md:text-xs">{edu.location}</span>
							{/if}
						</div>

						{#if edu.credential}
							<p class="mb-2 text-xs text-[#bb9af7]">
								{edu.credential}
								{#if edu.period}
									<span class="text-[#c0caf5]/80">&bull; {edu.period}</span>
								{/if}
							</p>
						{/if}

						<p class="text-[11px] leading-relaxed text-[#c0caf5] md:text-xs">{edu.details}</p>
					</div>
				{/each}
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

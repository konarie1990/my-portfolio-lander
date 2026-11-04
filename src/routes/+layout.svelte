<script lang="ts">
	import 'nes.css/css/nes.min.css';
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import Navbar from '#lib/components/Navbar.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
	<meta property="og:title" content="Ron Hajewski - AI-Empowered E-Commerce Developer | Technical Solutions for Business Growth" />
	<meta name="twitter:title" content="Ron Hajewski - AI-Empowered E-Commerce Developer | Technical Solutions for Business Growth" />
	<meta property="og:image" content="/images/projects/mobile-share.png" />
	<meta name="twitter:image" content="/images/projects/mobile-share.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div style="font-family: 'Press Start 2P', cursive; min-height: 100vh;" class="bg-gray-900 text-white">
	<Navbar />
	{@render children()}
</div>
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
</svelte:head>

<div style="font-family: 'Press Start 2P', cursive; min-height: 100vh;" class="bg-gray-900 text-white">
	<Navbar />
	{@render children()}
</div>
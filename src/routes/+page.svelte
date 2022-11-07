<script lang="ts">
	import Inspector from '../components/Inspector.svelte';

	import Deck from '$lib/Deck.svelte';
	import Slide from '$lib/Slide.svelte';
	import Demo from '../components/Demo.svelte';
	import Feature from '../components/Feature.svelte';
	import Prism from '$lib/PrismJS.svelte';
	import PartialHydration from '../components/PartialHydration.svelte';
</script>

<Deck>
	<Slide>
		<div class="flex flex-col min-h-screen justify-center">
			<div
				class="i-openmoji-gem-stone animate__animated animate__flip text-9xl max-w-5/6 mx-auto my-8 text-blue-600"
			/>
			<h1
				class="font-sans font-black text-neutral-900 text-center text-7xl tracking-tighter max-w-5/6 mx-auto my-8 leading-none"
			>
				SvelteKit Inspector og Partial Hydration.
			</h1>
		</div>
	</Slide>

	<Inspector />
	<PartialHydration />
</Deck>

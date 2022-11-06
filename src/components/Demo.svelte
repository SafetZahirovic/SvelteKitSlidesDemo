<script lang="ts">
	import Slide from '$lib/Slide.svelte';
</script>

<Slide>
	<div class="flex flex-col min-h-screen items-center justify-center md:w-7/10 w-9/10 mx-auto">
		<div
			class="flex md:flex-nowrap flex-wrap md:w-7/10 w-9/10 h-1/3 items-center mr-5 mb-5 border-b-1 border-gray-400 pb-10 animate__animated animate__slideInRight animate__slow"
		>
			<img src="12.svg" alt="figure-1" class="w-70 mx-auto" />
			<div class="flex flex-col">
				<h2
					class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
				>
					Svelte-Slides is a tool to create slides.
				</h2>
				<p class="font-sans font-normal text-lg text-gray-500 mt-8 leading-relaxed">
					`Deck` and `Slide` are the main components. More components will come to support charts
					and visualization tools
				</p>
				<a
					href="https://github.com/AlexandreKempf/svelte-slides"
					class="font-sans text-lg mt-8 leading-relaxed font-semibold text-green-600 hover:text-neutral-600"
					>Check the code >></a
				>
			</div>
		</div>

		<div
			class="flex h-1/3 md:flex-nowrap flex-wrap-reverse md:w-7/10 w-9/10 items-center mr-5 mb-5 border-b-1 border-gray-400 pb-10 animate__animated animate__slideInLeft animate__slow"
		>
			<div class="flex flex-col">
				<h2
					class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
				>
					Svelte-Slides comes with elegant templates.
				</h2>
				<p class="font-sans font-normal text-lg text-gray-500 mt-8 leading-relaxed">
					And it is all for free.
				</p>
				<a
					href="https://github.com/AlexandreKempf/svelte-slides/src/routes/index.svelte"
					class="font-sans text-lg mt-8 leading-relaxed font-semibold text-blue-600 hover:text-neutral-600"
					>Code for the slides>></a
				>
			</div>
			<img src="14.svg" alt="figure-1" class="w-70 mx-auto" />
		</div>
		<div
			class="flex h-1/3 md:flex-nowrap flex-wrap md:w-7/10 w-9/10 items-center mr-5 mb-5 pb-10 animate__animated animate__slideInRight animate__slow"
		>
			<img src="16.svg" alt="figure-1" class="w-70 mx-auto" />
			<div class="flex flex-col">
				<h2
					class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
				>
					Svelte-Slides is fluid
				</h2>
				<p class="font-sans font-normal text-lg text-gray-500 mt-8 leading-relaxed">
					Display your presentations on mobile or tablet. It is completely useless, but nice to
					have.
				</p>
				<a
					href="https://github.com/AlexandreKempf/svelte-slides"
					class="font-sans text-lg mt-8 leading-relaxed font-semibold text-blue-600 hover:text-neutral-600"
					>Check the code >></a
				>
			</div>
		</div>
	</div>
</Slide>

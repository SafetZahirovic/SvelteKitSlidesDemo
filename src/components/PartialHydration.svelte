<script lang="ts">
	import Prism from '$lib/PrismJS.svelte';
	import Slide from '$lib/Slide.svelte';
	import Feature from './Feature.svelte';

	const viteConfig = `
export default defineConfig({
	plugins: [
		svelte({
			experimental: {
				inspector: true,
			}
		})
	]
})`;

	const svelteConfig = `
const config = {
  // ...
  vitePlugin: {
    experimental: {
      inspector: true,
    },
  },
}`;
</script>

<Slide>
	<div class="flex flex-wrap justify-evenly items-center mx-auto max-w-22/24 pt-20">
		<div class="lg:w-11/24 w-22/24 animate__animated op0 start-2:op100 start-2:animate__fadeInLeft">
			<lottie-player
				src="https://assets3.lottiefiles.com/private_files/lf30_zyv9n199.json"
				background="transparent"
				speed="1"
				loop
				autoplay
			/>
		</div>
		<div class="lg:w-11/24 w-22/24 mb-8">
			<Feature>Partial Hydration</Feature>
			<h1 class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter">
				Vi fortsetter med Partial Hydration.
                
			</h1>
			<div
				class="lg:w-11/24 w-22/24 animate__animated op0 start-1:op100 start-1:animate__fadeInRight"
			>
				<p class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed">
					Hva er Partial Hydration?
				</p>
			</div>
		</div>
	</div>
</Slide>
<Slide>
	<div class="flex flex-wrap justify-evenly mx-auto max-w-22/24 pt-20">
		<div class="xl:w-11/24 w-22/24">
			<Feature>inspector</Feature>
			<h1 class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter">
				Hvor? Hvem? Hvordan?
			</h1>
			<p class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed">
				Åpner et ukjent prosjekt. Må endre tekst fra "Hello World" til "Foo Bar".
			</p>
			<p class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed">
				Men hvor i alle dager ligger den teksten i koden
			</p>

			<p class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed">
				Du drar frem kode og begynner søket, <br />
				Og gjør mest sannsynlig følgende:
			</p>
		</div>
		<div class="xl:w-11/24 w-22/24">
			<div class="flex flex-wrap justify-evenly items-top mx-auto max-w-22/24">
				<div
					class="w-23/24 md:w-11/24 py-10 animate__animated op0 start-1:op100 start-1:animate__fadeInRight"
				>
					<div class="i-openmoji-currency-exchange text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Bytter browser vindu til VS Code (eller noe annet).
					</h2>
				</div>
				<div
					class="w-23/24 md:w-11/24 py-10 animate__animated op0 start-2:op100 start-2:animate__fadeInRight"
				>
					<div
						class="i-openmoji-magnifying-glass-tilted-right
        text-5xl"
					/>
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Du bruker globalt søk...
					</h2>
					<p class="font-sans font-light text-gray-500 mt-4 leading-relaxed">
						Og får mer enn 1 resultat...
					</p>
				</div>
				<div
					class="w-23/24 md:w-11/24 py-10 animate__animated op0 start-3:op100 start-3:animate__fadeInRight"
				>
					<div class="i-openmoji-bullseye text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Du finner riktig komponent, og endrer teksten
					</h2>
					<p class="font-sans font-light text-gray-500 mt-4 leading-relaxed">
						Etter 5 min, fordi dette er en frontend monolit...
					</p>
				</div>
				<div
					class="w-23/24 md:w-11/24 py-10 animate__animated op0 start-4:op100 start-4:animate__fadeInRight"
				>
					<div class="i-openmoji-face-with-symbols-on-mouth text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Men det du har endret er autogenerert kode...
					</h2>
					<p class="font-sans font-light text-gray-500 mt-4 leading-relaxed">
						Og du har ikke endret noe. Back to the square one
					</p>
				</div>
			</div>
		</div>
	</div>
</Slide>

<Slide>
	<div class="flex flex-wrap justify-evenly items-center mx-auto max-w-22/24 pt-20">
		<div class="lg:w-11/24 w-22/24 mb-8">
			<Feature>Inspector</Feature>
			<h1 class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter">
				Svelte inspector prøver å fikse akkurat dette.
			</h1>

			<div
				class="lg:w-11/24 w-22/24 animate__animated op0 start-1:op100 start-1:animate__fadeInRight"
			>
				<p class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed">
					Hvordan kan man aktivere Svelte Inspector i Svelte?
				</p>
			</div>
		</div>
		<div class="lg:w-12/24  mb-8">
			<div class="animate__animated op0 start-2:op100 start-2:animate__fadeInRight">
				<p class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed">Svelte</p>
				<div>
					<Prism language="javascript" code={viteConfig} header="vite.config.js" />
				</div>
			</div>
			<div class="animate__animated op0 start-3:op100 start-3:animate__fadeInRight">
				<p class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed">SvelteKit</p>
				<div>
					<Prism language="javascript" code={svelteConfig} header="svelte.config.js" />
				</div>
			</div>
		</div>
	</div>
</Slide>

<Slide>
	<div class="flex flex-wrap justify-center mx-auto max-w-22/24 pt-20">
		<div class="lg:w-11/24 w-22/24 animate__animated animate__fadeInUp">
			<Feature>inspector</Feature>
			<h1 class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter">
				Demo
			</h1>
			<p class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed">
				Vi kan nå se hvordan Svelte Inspector fungerer.
				<br />
				Men vi må gå ut av presentasjonen ikke sant?<br />
				<br />
			</p>
			<div
				class="animate__animated animate__animated op0 start-1:op100 start-1:animate__fadeInLeft"
			>
				<img src="as-a-matter-of-fact-in-reality.gif" />
			</div>
			<div
				class="h-50 items-center  animate__animated animate__animated op0 start-2:op100 start-2:animate__fadeInLeft"
			>
				<h1 class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter">
					NOPE
				</h1>
			</div>
		</div>
	</div>
</Slide>
<Slide>
	<div class="flex flex-col min-h-screen pt-15 ml-8">
		<Feature>INSPECTOR</Feature>
		<h1
			class="font-sans font-black text-neutral-900 text-left text-6xl tracking-tighter mt-4 mb-8 leading-none"
		>
			For å oppsumere.
		</h1>
		<p class="font-sans font-normal text-lg text-gray-500 max-w-5/6 my-6 leading-relaxed">
			Svelte Insector =
		</p>
		<div class="flex flex-wrap max-h-full max-w-full justify-evenly mx-6">
			<div
				class="xl:w-11/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg shadow-md animate__animated start-1:animate__pulse start-1:bg-gray-100"
			>
				<div class="i-openmoji-shooting-star text-5xl" />
				<h2
					class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
				>
					Effektivitet.
				</h2>
				<p class="font-sans font-light text-gray-500 mt-4 leading-relaxed">
					Mye raskere å finne komponenten.
				</p>
			</div>
			<div
				class="xl:w-11/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg shadow-md animate__animated start-2:animate__pulse start-2:bg-gray-100"
			>
				<div class="i-openmoji-test-tube text-5xl" />
				<h2
					class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
				>
					Færre Feil.
				</h2>
				<p class="font-sans font-light text-gray-500 mt-4 leading-relaxed">
					Vi slipper å se i kompilerte filer osv...
				</p>
			</div>
			<div
				class="xl:w-11/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg shadow-md animate__animated start-3:animate__pulse start-3:bg-gray-100"
			>
				<div class="i-openmoji-ringed-planet text-5xl" />
				<h2
					class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
				>
					Lett.
				</h2>
				<p class="font-sans font-light text-gray-500 mt-4 leading-relaxed">
					Intuitiv UI gjør det mye enklere.
				</p>
			</div>
			<div
				class="xl:w-11/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg shadow-md animate__animated start-4:animate__pulse start-4:bg-gray-100"
			>
				<div class="i-openmoji-violin text-5xl" />
				<h2
					class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
				>
					Cool.
				</h2>
				<p class="font-sans font-light text-gray-500 mt-4 leading-relaxed">Hella Cool.</p>
			</div>
		</div>
	</div>
</Slide>

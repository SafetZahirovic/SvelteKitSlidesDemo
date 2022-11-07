<script lang="ts">
	import Slide from '$lib/Slide.svelte';
	import Feature from './Feature.svelte';

</script>


<Slide>
	<div class="flex flex-wrap justify-evenly items-center mx-auto max-w-22/24 pt-20">
		<div class="lg:w-11/24 w-22/24 animate__animated op0 op100 animate__fadeInLeft">
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
            <div
				class="lg:w-11/24 w-22/24 animate__animated op0 start-2:op100 start-2:animate__fadeInRight"
			>
				<p class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed">
					Måte å laste inn kun den koden applikasjonen trenger.
				</p>
			</div>
		</div>
	</div>
</Slide>
<Slide>
	<div class="flex flex-wrap justify-evenly mx-auto max-w-22/24 pt-20">
		<div class="xl:w-11/24 w-22/24">
			<Feature>partial hydration</Feature>
			<h1 class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter">
				But how?
			</h1>
            <div class="xl:w-20/24 pt-8 w-22/24 animate__animated  animate__fadeInLeft">
                <lottie-player
				src="https://assets4.lottiefiles.com/packages/lf20_ng0oaxgb.json"
				background="transparent"
				speed="1"
				loop
				autoplay
			/>
            </div>
            
            
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
						I gamle dager...
					</h2>
                    <p class="font-sans font-light text-gray-500 mt-4 leading-relaxed">
						Hentet man HTML strengen og rendret den på klienten
					</p>
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
						Dette kalles for "hydration"
					</h2>
					<p class="font-sans font-light text-gray-500 mt-4 leading-relaxed">
						Man hydrerer klienten med server kode
					</p>
				</div>
				<div
					class="w-23/24 md:w-11/24 py-10 animate__animated op0 start-3:op100 start-3:animate__fadeInRight"
				>
					<div class="i-openmoji-bullseye text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Dette gjør at siden er mega rask
					</h2>
					<p class="font-sans font-light text-gray-500 mt-4 leading-relaxed">
						Men fungerer litt dårlig når vi trenger blanding av
                        <br/>
                        Statiske og dynamiske elementer
					</p>
				</div>
				<div
					class="w-23/24 md:w-11/24 py-10 animate__animated op0 start-4:op100 start-4:animate__fadeInRight"
				>
					<div class="i-openmoji-face-with-symbols-on-mouth text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Da bruker man noe som React...
					</h2>
					<p class="font-sans font-light text-gray-500 mt-4 leading-relaxed">
						Men det fører til at man sender ALLE komponentete til klienten
                        <br/>
                        Som potensielt resulterer til store bundles
					</p>
				</div>
			</div>
		</div>
	</div>
</Slide>

<Slide>
	<div class="flex flex-wrap justify-evenly items-center mx-auto max-w-22/24 pt-20">
		<div class="lg:w-11/24 w-22/24 mb-8">
			<Feature>partial hydration</Feature>
			<h1 class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter">
				Partial hydration prøver å løse akkurat dette problemet.
			</h1>

			<p
				class="font-sans font-light text-xl text-gray-500 mt-8 animate__animated op0 leading-relaxed start-1:op100 start-1:animate__fadeInLeft"
			>
				Noen ganger kalt for <i>progressive hydration</i> eller <i>lazy hydration</i>
			</p>
			<p
				class="font-sans font-light text-xl text-gray-500 mt-8 op0 animate__animated leading-relaxed start-2:op100 start-2:animate__fadeInLeft"
			>
				Ideen bak PH er at vi kun <i>hydrerer</i> deler av javascript når vi trenger det
			</p>
			<p
				class="font-sans font-light text-xl text-gray-500 mt-8 op0 animate__animated leading-relaxed start-3:op100 start-3:animate__fadeInLeft"
			>
				Et populært eksempel er <i>scrolly telling</i>.
			</p>
			<p
				class="font-sans font-light text-xl text-gray-500 mt-8 op0 animate__animated leading-relaxed start-4:op100 start-4:animate__fadeInLeft"
			>
				Hvorfor skal vi rendre hele siden når vi kun trenger deler av koden en bruker leser?
			</p>
		</div>
		<div class="lg:w-12/24  mb-8">
			<div class="animate__animated op0 start-5:op100 start-5:animate__fadeInRight">
				<div class="xl:w-20/24 pt-8 w-22/24 ">
					<lottie-player
						src="https://assets3.lottiefiles.com/private_files/lf30_hxmzmij0.json"
						background="transparent"
						speed="1"
						loop
						autoplay
					/>
				</div>
			</div>
		</div>
	</div></Slide
>

<Slide>
	<div class="flex flex-wrap justify-center align-center mx-auto max-w-22/24 pt-20">
		<div class="lg:w-11/24 w-22/24 animate__animated animate__fadeInUp">
			<Feature>partial hydration</Feature>
			<h1 class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter">
				Nå skal Filip vise hvordan dette funker i virkeligheten
			</h1>

			<div
				class="animate__animated flex justify-center op0 start-1:op100 start-1:animate__fadeInRight"
			>
				<div class="lg:w-12/24 pt-8 w-22/24 ">
					<lottie-player
						src="https://assets6.lottiefiles.com/packages/lf20_EVAHm4.json"
						background="transparent"
						speed="1"
						loop
						autoplay
					/>
				</div>
			</div>
		</div>
	</div></Slide
>

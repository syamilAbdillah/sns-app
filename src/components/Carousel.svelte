<script>
	import { ChevronRightIcon, ChevronLeftIcon } from 'svelte-feather-icons'
	import { slide } from 'svelte/transition'
	import { onMount } from 'svelte'

	export let images = []

	let counter = 0
	let carouselContainer

	$: translate = carouselContainer && carouselContainer.clientWidth * counter

</script>

<div class="flex relative items-center rounded-lg overflow-x-hidden mb-8" bind:this={carouselContainer}>
	<button id="prev" on:click={() => counter ? counter-- : counter += images.length -1} class="btn btn-neutral bg-opacity-25 z-50 border-opacity-0 btn-circle absolute left-4">
		<ChevronLeftIcon size="20"></ChevronLeftIcon>
	</button>

	<div 
		class="w-full h-80 flex bg-red-100 rounded-lg transition-transform" 
		style="transform: translateX({-translate}px);"
	>
		{#each images as image, index}
			<div class="carousel-item h-full w-full">
				<img src="{image}" class="object-cover w-full object-center" alt="product banner photo">
			</div>
		{/each}
	</div>

	<button id="next" on:click={() => counter >= (images.length - 1) ? counter = 0: counter++ } class="btn btn-neutral bg-opacity-25 z-50 border-opacity-0 btn-circle absolute right-4 ">
		<ChevronRightIcon size="20"></ChevronRightIcon>
	</button>
</div>



<script context="module">
	export async function load({ page }){

		const { id } = page.params

		return {
			props: { id } 
		}
	}
</script>

<script>
	import { products } from '../../store/products'
	import toCurrency from '../../util/toCurrency'
	export let id

	$: product = $products.find(p => p.id == id)
</script>

{#if product}
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
		<img class="h-96 w-full rounded-lg object-cover object-center"  src="/{product.image}" alt="product image">
		<div class="flex flex-col">
			<h3 class="text-4xl font-semibold">{product.name}</h3>
			<p class="text-gray-400 text-2xl">Rp. {toCurrency(product.price)}</p>

		</div>
	</div>
{/if}

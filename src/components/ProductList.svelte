<script>
	import { products } from '../store/products'
	import ProductCard from './ProductCard.svelte'
</script>

<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
	{#each $products as product, index (product.id)}
		<ProductCard 
			name={product.name}
			price={product.price}
			image={product.image}
			id={product.id}
		/>
	{/each}
</div>
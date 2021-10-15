<script>
	import Carousel from '../components/Carousel.svelte'
	import ProductCard from '../components/ProductCard.svelte'
	import ProductList from '../components/ProductList.svelte'
	import { products } from '../store/products'

	const images = [
		'stock-0.jpg',
		'stock-1.jpg',
		'stock-2.jpg',
		'stock-3.jpg'
	]
</script>

<Carousel images={images}></Carousel>

<div class="divider my-6">
	<h3 class="text-md text-gray-400">RECOMENDATION</h3>
</div>

<ProductList></ProductList>

<script>
	import { ShoppingCartIcon } from 'svelte-feather-icons'
	import { goto } from '$app/navigation'
	import toCurrency from '../util/toCurrency'

	export let name = ''
	export let price = 0
	export let image = ''
	export let id = ''
</script>

<div on:click={() => goto(`http://localhost:3000/product/${id}`)} class="card bordered hover:ring-4 ring-gray-200 hover:tran">
  	<figure>
   	<img class="h-60 lg:h-40 object-cover" src="{image}">
  	</figure> 
  	<div class="card-body">
   	<h2 class="card-title">{ name }</h2> 
	   <p>Rp. {toCurrency(price)}</p>
   	<div class="justify-end card-actions hidden sm:flex">
      	<button class="btn btn-primary">
      		<ShoppingCartIcon class="mr-4" size="16"/>
      		add to cart
      	</button>
	    </div>
  	</div>
</div> 
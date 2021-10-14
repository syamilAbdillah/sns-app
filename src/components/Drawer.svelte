<script>
  import { isDrawerOpen } from '../store/drawer-toggle'
  import { fly, fade } from 'svelte/transition'

  let menus

  function handleClose(e){
    if(e.target != menus) isDrawerOpen.update(() => false)
  }
  
</script>

<div class="drawer-side lg:hidden fixed z-600 inset-0 bg-neutral bg-opacity-25" on:click={handleClose} transition:fade>
  <ul class="p-4 overflow-y-auto py-12 menu w-80 h-full bg-base-100" transition:fly="{{ x: -100 }}" bind:this={menus}>
    <li class="mb-6">
      <a href="/product">Product</a>
    </li>
    <li class="mb-6">
      <a href="/categories">Category</a>
    </li> 
    <li class="mb-6">
      <a href="/about">About</a>
    </li>  
  </ul>
</div>

<style>
  .z-600{
    z-index: 600;
  }
</style>
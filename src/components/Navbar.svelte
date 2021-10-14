<script>
  import { MenuIcon, UserIcon, ShoppingCartIcon } from 'svelte-feather-icons' 
  import { isDrawerOpen } from '../store/drawer-toggle'

  const handleOpen = () => isDrawerOpen.update(() => true)
</script>

<nav class="navbar fixed z-500 inset-x-0 top-0 bg-base-100 glass">
  <div class="container md:container mx-auto">
    <div class="navbar-start flex lg:hidden">
      <button on:click={handleOpen} class="btn btn-ghost btn-circle">
        <MenuIcon size="16"></MenuIcon>
      </button>
    </div>
    <div class="navbar-start hidden lg:flex">
      <a href="/product" class="btn btn-ghost">products</a>
      <a href="/categories" class="btn btn-ghost">categories</a>
      <a href="/about" class="btn btn-ghost">about</a>
    </div>
    <div class="navbar-center">
      <a href="/" class="btn btn-ghost">BRAND</a>
    </div>
    <div class="navbar-end flex justify-end">
      <a href="#" class="btn btn-ghost">
        <UserIcon size="16"></UserIcon>
      </a>
      <a href="#" class="btn btn-ghost">
        <ShoppingCartIcon size="16"></ShoppingCartIcon>
      </a>
    </div>
  </div>
</nav>

<style>
  .z-500{
    z-index: 500;
  }
</style>
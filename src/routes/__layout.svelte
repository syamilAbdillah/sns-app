<script>
  import "../app.css";
  import Drawer from '../components/Drawer.svelte'
  import Navbar from '../components/Navbar.svelte'
  import Footer from '../components/Footer.svelte'
  import { isDrawerOpen } from '../store/drawer-toggle'
</script>

<Navbar></Navbar>
{#if $isDrawerOpen}
  <Drawer/>
{/if}

<div class="container md:container pt-20 px-4 mx-auto min-h-screen">
  <slot></slot>  
</div>

<Footer></Footer>

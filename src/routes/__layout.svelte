<script>
  import "../app.css";
  import "../tailwind.css";
  import "boxicons";

</script>

<nav class="navbar bg-primary">
  <div class="navbar-start">
    <a href="#" class="btn btn-primary">nav start</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <a href="#" class="btn btn-primary">products</a>
    <a href="#" class="btn btn-primary">categories</a>
    <a href="#" class="btn btn-primary">about</a>
  </div>
  <div class="navbar-end hidden lg:flex">
    <a href="#" class="btn btn-primary">profile</a>
  </div>
    <div class="navbar-end lg:hidden">
    <button class="btn btn-primary btn-circle">
      <i class="bx bx-menu"></i>
    </button>
  </div>
</nav>

<slot>
</slot>

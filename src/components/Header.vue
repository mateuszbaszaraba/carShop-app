<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/" class="navbar-brand">Car Trader</router-link>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">

<!-- left side -->

    <ul class="navbar-nav mr-auto">

      <router-link 
        to="/portfolio" 
        activeClass="active" 
        class="nav-item" 
        tag="li"><a class="nav-link">Portfolio</a></router-link>

        <router-link 
            to="/cars"
            activeClass="active"
            class="nav-item"
            tag="li"><a class="nav-link">Cars</a></router-link>
      
    </ul>

<!-- right side -->

    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown" 
                    @click="isDropdownOpen = !isDropdownOpen">
                <a 
                    class="nav-link dropdown-toggle" 
                    href="#" 
                    id="navbarDropdown" 
                    role="button" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    >Save & Load</a>

                <div class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                </div>
            </li>
        </ul>
    </div>

  </div>
</nav>
</template>

<script>
export default {
    data() {
        return {
            isDropdownOpen: false
        }
    },
}
</script>

<style scoped>

</style>
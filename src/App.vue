<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>
<template>

  <header>                            
    <div class="wrapper">
      <nav class="navbar">
        <RouterLink class="link-navbar"  to="/">Home</RouterLink> 
        
        <RouterLink class="link-navbar" to="/nuevoLibro">Nuevo Libro</RouterLink> 
      </nav>
    </div>
  </header>                       
  <RouterView/>
</template>


<style scoped>
  .navbar{
    background-color: rgba(0, 0, 0, 0.1);
    margin: 10px auto;
    width : 400px;
    display: flex;
    justify-content: space-around;
  }
  .link-navbar{
    text-decoration: none;
    padding: 10px;
    font-weight: 700;
    font-size: 1.4rem;
    color: #353535;
  }
    .link-navbar:hover{
      color: #000;
      transition: color 0.5s ease-in-out;
  }
</style>

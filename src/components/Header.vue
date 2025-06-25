<template>
  <header class="site-header">
    <div class="header-row">
      <h1><a href="#home">justekal.be</a></h1>
      <nav>
        <a href="#about">À propos</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

.site-header {
  padding: 10px;
  background: #2F2F2F;
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}

.site-header h1 {
  font-size: 1.8em;
  margin: 0;
  padding-left: 1%;
}

.site-header nav {
  display: flex;
  gap: 20px;
  padding-right: 1%;
}

.site-header a {
  color: #fff;
  text-decoration: none;
  transition: color 0.4s ease-in-out;
  font-size: 1.1em;
}

.site-header a:hover {
  color: rgb(76, 120, 241);
  text-decoration: none;
  font-size: 1.1em;
}
</style>
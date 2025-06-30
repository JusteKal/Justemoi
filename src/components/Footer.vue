<template>
  <footer class="site-footer">
    <p>&copy; 2025 JusteKal</p>
    <a href="https://github.com/JusteKal" target="_blank" rel="noopener" style="text-decoration: none;">
      <img src="/github.png" alt="">
    </a>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

.site-footer {
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 12px 0;
  font-family: 'DM Sans', sans-serif;
  background: #2F2F2F;
  color: #fff;
  text-align: center;
  font-size: 0.95em;
  border-radius: 0;
  z-index: 100;
}

.site-footer img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-left: 8px;
}
</style>
<template>
  <component :is="link ? 'a' : 'div'" class="card" :href="link" target="_blank" rel="noopener" style="text-decoration: none;">
    <div class="card-content">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
    </div>
    <img v-if="img" :src="img" alt="">
  </component>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
  img?: string
  link?: string
}>()
</script>

<style scoped>
.card {
  background: #fff;
  color: #222;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 20px;
  margin: 16px auto;
  max-width: 400px;
  font-family: 'DM Sans', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: box-shadow 0.4s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1);  
}
.card:hover {
  box-shadow: 0 4px 16px rgb(76, 120, 241);
  transform: translateY(-2px);
}
.card-content {
  flex: 1;
}
.card h2 {
  font-size: 1.5em;
  margin: 8px 0;
}
.card p {
  margin: 8px 0;
}
.card img {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
}
</style>
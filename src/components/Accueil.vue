<template>
  <section class="accueil">
    <h1 class="title">{{ $t('welcome') }}</h1>
    <p class="subtitle">{{ $t('discover') }}</p>
    <div class="scroll-indicator"></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // Timeline pour l'animation d'entrée
  const tl = gsap.timeline()
  
  tl.from('.title', {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  })
  .from('.subtitle', {
    y: 30,
    opacity: 0,
    duration: 0.8
  }, '-=0.5')
  .from('.scroll-indicator', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    repeat: -1,
    yoyo: true
  })
})
</script>

<style scoped>
.accueil {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:  url('/home.jpg') no-repeat center center fixed;
  color: #fff;
  text-align: center;
  font-family: 'DM Sans', sans-serif;
}
.accueil h1 {
  font-size: 2.5em;
  margin-bottom: 0.5em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.accueil p {
  font-size: 1.3em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.836);
  max-width: 600px;
  margin: 0 auto;
}
.accueil::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
.accueil h1, .accueil p {
  z-index: 1;
}
.scroll-gif {
  margin-top: 2em;
  width: 48px;
  height: auto;
  z-index: 2;
}
.scroll-indicator {
  width: 32px;
  height: 32px;
  border-left: 4px solid #fff;
  border-bottom: 4px solid #fff;
  transform: rotate(-45deg);
  margin-top: 2em;
  animation: bounce 1.2s infinite;
  z-index: 2;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0) rotate(-45deg);}
  50% { transform: translateY(12px) rotate(-45deg);}
}
</style>
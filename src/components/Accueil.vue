<template>
  <section class="accueil">
    <h1>Bienvenue sur mon portfolio</h1>
    <p>Découvrez mon univers de développeur web !</p>
    <img src="/avatar.jpg" alt="Ma photo" class="about-photo" />
  </section>
</template>


<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {
  const handleScroll = (e: WheelEvent) => {
    if (window.scrollY === 0 && e.deltaY > 0) {
      const nextSection = document.getElementById('apres-accueil')
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' })
        e.preventDefault()
      }
    }
  }
  window.addEventListener('wheel', handleScroll, { passive: false })

  onBeforeUnmount(() => {
    window.removeEventListener('wheel', handleScroll)
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
}

.about-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #0051e770;
  margin-top: 20px;
}
</style>
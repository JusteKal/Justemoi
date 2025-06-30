<template>
  <section class="about-me-page">
    <div class="about-me-card">
      <div class="photo-container">
        <img src="/avatar.jpg" alt="Ma photo" class="about-photo" />
        <div class="photo-overlay"></div>
      </div>
      <div class="content">
        <h2>{{ $t('hi') }}</h2>
        <p class="bio">
          {{ $t('portofilio') }}<br>
          {{ $t('créer') }}<br>
          {{ $t('passion') }}
        </p>
        <div class="skills">
          <div v-for="(skill, index) in skills" :key="index" class="skill-badge">
            {{ skill }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  'Vue.js', 'TypeScript', 'Node.js',
  'HTML/CSS', 'Git', 'Java'
]

onMounted(() => {
  // Animation de la photo
  gsap.from('.photo-container', {
    scrollTrigger: {
      trigger: '.about-me-card',
      start: 'top center+=100',
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  })

  // Animation du contenu
  gsap.from('.content', {
    scrollTrigger: {
      trigger: '.about-me-card',
      start: 'top center+=100',
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  })
})
</script>

<style scoped>
.about-me-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222;
  padding: 20px;
}

.about-me-card {
  display: flex;
  align-items: center;
  gap: 40px;
  background: #2F2F2F;
  color: #fff;
  border-radius: 16px;
  padding: 40px;
  max-width: 800px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  font-family: 'DM Sans', sans-serif;
}

.photo-container {
  position: relative;
  flex-shrink: 0;
}

.about-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgb(76, 120, 241);
  z-index: 2;
  position: relative;
}

.photo-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgb(76, 120, 241);
  top: 10px;
  left: 10px;
  z-index: 1;
  opacity: 0.3;
}

.content {
  flex-grow: 1;
}

h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: rgb(76, 120, 241);
}

.bio {
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 30px;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.skill-badge {
  background: rgba(76, 120, 241, 0.1);
  color: rgb(76, 120, 241);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9em;
  border: 1px solid rgb(76, 120, 241);
  transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  opacity: 1; /* S'assure que les badges sont visibles */
}

.skill-badge:hover {
  background: rgb(76, 120, 241);
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .about-me-card {
    flex-direction: column;
    text-align: center;
    padding: 24px;
  }

  .photo-overlay {
    display: none;
  }
}
</style>
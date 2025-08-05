<template>
  <div class="visitor-counter">
    <div class="counter-content">
      <span class="counter-icon">👁️</span>
      <span class="counter-text">Visiteurs: {{ visitorCount }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const visitorCount = ref(0)

onMounted(() => {
  // Récupère le compteur existant
  const existingCount = localStorage.getItem('visitorCount')
  const currentCount = existingCount ? parseInt(existingCount) : 0
  
  // Vérifie si c'est une nouvelle visite (pas de session active)
  const hasVisited = sessionStorage.getItem('hasVisited')
  
  if (!hasVisited) {
    // Nouvelle visite - incrémenter le compteur
    const newCount = currentCount + 1
    localStorage.setItem('visitorCount', newCount.toString())
    sessionStorage.setItem('hasVisited', 'true')
    visitorCount.value = newCount
  } else {
    // Visite existante - utiliser le compteur actuel
    visitorCount.value = currentCount
  }
})
</script>

<style scoped>
.visitor-counter {
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 12px;
  border-radius: 20px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9em;
  z-index: 1000;
  border: 1px solid rgba(76, 120, 241, 0.3);
  backdrop-filter: blur(10px);
}

.counter-content {
  display: flex;
  align-items: center;
  gap: 6px;
}

.counter-icon {
  font-size: 1.2em;
}

.counter-text {
  color: rgb(76, 120, 241);
  font-weight: 500;
}

@media (max-width: 768px) {
  .visitor-counter {
    bottom: 10px;
    left: 10px;
    font-size: 0.8em;
    padding: 6px 10px;
  }
}
</style>
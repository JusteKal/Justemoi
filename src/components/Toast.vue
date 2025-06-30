<template>
  <Transition name="toast">
    <div v-if="show" class="minecraft-toast">
      <img src="/achievement.png" alt="achievement" class="achievement-icon">
      <div class="toast-content">
        <div class="title">Succès débloqué !</div>
        <div class="description">{{ message }}</div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
const message = ref('')
let timeout: number | null = null

const showToast = (msg: string) => {
  // Nettoie le timeout précédent si existant
  if (timeout) clearTimeout(timeout)
  
  message.value = msg
  show.value = true
  
  // Nouveau timeout plus long (7 secondes)
  timeout = setTimeout(() => {
    show.value = false
  }, 7000)
}

defineExpose({ showToast })
</script>

<style scoped>
.minecraft-toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #555;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-family: 'Minecraft', sans-serif;
  z-index: 1000;
  transform: translateX(0);
}

.achievement-icon {
  width: 32px;
  height: 32px;
}

.toast-content {
  line-height: 1.2;
}

.title {
  color: #FFFF55;
  font-weight: bold;
}

/* Animations de transition Vue */
.toast-enter-active {
  animation: slideIn 0.5s ease-out;
}

.toast-leave-active {
  animation: fadeOut 1s ease-in;
}

@keyframes slideIn {
  from { 
    transform: translateX(100%);
    opacity: 0;
  }
  to { 
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  from { 
    transform: translateX(0);
    opacity: 1;
  }
  to { 
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
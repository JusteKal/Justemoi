<template>
  <div class="app-background">
    <Accueil id="home" />
    <Header id="apres-accueil" />
    <AboutMe id="about" />
    <h1 id="projects">{{ $t('projects') }}</h1>
    <div class="cards-container">
    <Card title="Etoiles Universe" :content="$t('card1')" img="/etoilesuniverse.png" link="https://github.com/JusteKal/Etoiles_Universe"/>
    <Card title="Mynthos Universe" :content="$t('card2')" img="https://cdn.modrinth.com/data/qwxJArlR/1db8c02578c53f7108db329bcb031c0825598d05.png" link="https://github.com/Wiibleyde/MynthosProject"/>
    <Card title="ECQCBLWK ?" :content="$t('card3')" img="/ECQCBLWK.png" link="https://weekend.justekal.be"/>
    <Card title="JusteKal.be" :content="$t('card4')" img="/favicon.ico" link="https://justekal.be"/>
    
    </div>
  <Contact id="contact" />    
  <Footer />
  <Toast ref="toast" />
  </div>
</template>

<script setup lang="ts">
import Accueil from './components/Accueil.vue';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import AboutMe from './components/AboutMe.vue';
import Card from './components/Card.vue';
import Contact from './components/Contact.vue'; 
import Toast from './components/Toast.vue';


import { onMounted, onBeforeUnmount, ref } from 'vue'

const sectionIds = ['home', 'apres-accueil', 'projects', 'contact']; // Removed 'apres-accueil'

onMounted(() => {
  let isScrolling = false;
  let lastScrollTime = Date.now();

  const handleScroll = (e: WheelEvent) => {
    const now = Date.now();
    if (isScrolling || now - lastScrollTime < 50) return;
    
    const direction = e.deltaY > 0 ? 1 : -1;
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    // Find current section based on viewport position
    const viewportMid = window.innerHeight / 2;
    let currentIndex = sections.findIndex(section => {
      const rect = section.getBoundingClientRect();
      const elementMid = rect.top + rect.height / 2;
      return Math.abs(elementMid - viewportMid) < rect.height / 3;
    });

    // If no section is found, find closest
    if (currentIndex === -1) {
      currentIndex = sections.reduce((closest, section, index) => {
        const rect = section.getBoundingClientRect();
        const elementMid = rect.top + rect.height / 2;
        const distance = Math.abs(elementMid - viewportMid);
        return distance < closest.distance ? { index, distance } : closest;
      }, { index: 0, distance: Infinity }).index;
    }

    let nextIndex = currentIndex + direction;
    if (nextIndex < 0 || nextIndex >= sections.length) return;

    e.preventDefault();
    isScrolling = true;
    lastScrollTime = now;

    sections[nextIndex].scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });

    setTimeout(() => {
      isScrolling = false;
    }, 800); // Reduced from 1000ms for better responsiveness
  };

  window.addEventListener('wheel', handleScroll, { passive: false });

  onBeforeUnmount(() => {
    window.removeEventListener('wheel', handleScroll);
  });
});

const toast = ref()
let clickCount = 0
const secretTimeout = ref<number | null>(null)

const checkSecretClick = () => {
  clickCount++
  
  if (secretTimeout.value) {
    clearTimeout(secretTimeout.value)
  }
  
  secretTimeout.value = setTimeout(() => {
    if (clickCount === 3) {
      toast.value?.showToast('Trouver le secret !')
    }
    clickCount = 0
  }, 500)
}

onMounted(() => {
  document.addEventListener('click', checkSecretClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', checkSecretClick)
  if (secretTimeout.value) clearTimeout(secretTimeout.value)
})
</script>

<style scoped>
.app-background {
  min-height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scrollbar-width: none;
}
.app-background > *:not(:last-child) {
  flex-shrink: 0;
}

.accueil {
  scroll-snap-align: start;
  min-height: 100vh;
}

.app-background > Footer {
  margin-top: auto;
}

.app-background h1 {
  text-align: center;
  font-family: 'DM Sans', sans-serif;
  margin-top: 20px; /* Augmenté de 20px à 80px */
  margin-bottom: -10px; /* Ajouté pour équilibrer l'espacement */
  color: #fff;
  font-size: 2.5em;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 16px;

}
</style>
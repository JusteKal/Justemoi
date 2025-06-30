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

const sectionIds = ['home', 'apres-accueil', 'about', 'projects', 'projects-cards', 'contact'];

onMounted(() => {
  let isScrolling = false;

  const handleScroll = (e: WheelEvent) => {
    if (isScrolling) return;
    const direction = e.deltaY > 0 ? 1 : -1;
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;

    // Trouve la section actuellement visible
    let currentIndex = sections.findIndex(
      section =>
        section.offsetTop <= scrollPos + 10 &&
        section.offsetTop + section.offsetHeight > scrollPos + 10
    );

    // Si aucune section trouvée, prends la première
    if (currentIndex === -1) currentIndex = 0;

    let nextIndex = currentIndex + direction;
    if (nextIndex < 0 || nextIndex >= sections.length) return;

    isScrolling = true;
    sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
    e.preventDefault();

    setTimeout(() => {
      isScrolling = false;
    }, 800); // Empêche le scroll multiple trop rapide
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
  margin-top: 20px;
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
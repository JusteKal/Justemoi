<template>
  <div class="app-background">
    <Accueil id="home" />
    <Header id="apres-accueil" />
    <AboutMe id="about" />
    <h1 id="projects">{{ $t('projects') }}</h1>
    <div class="carousel-container">
      <button class="nav-button prev" @click="prevSlide">&lt;</button>
      <div class="cards-container" ref="carousel">
        <Card 
          v-for="(card, index) in cards" 
          :key="index"
          :title="card.title"
          :content="$t(card.contentKey)"
          :img="card.img"
          :link="card.link"
          class="carousel-card"
        />
      </div>
      <button class="nav-button next" @click="nextSlide">&gt;</button>
      <div class="carousel-dots">
        <span 
          v-for="(_, index) in cards" 
          :key="index"
          :class="['dot', { active: currentSlide === index }]"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  <SpeedInsights />
  <Contact id="contact" />    
  <Footer />
  <Toast ref="toast" />
  <VisitorCounter />
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import Accueil from './components/Accueil.vue';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import AboutMe from './components/AboutMe.vue';
import Card from './components/Card.vue';
import Contact from './components/Contact.vue'; 
import Toast from './components/Toast.vue';
import VisitorCounter from './components/VisitorCounter.vue'
import gsap from 'gsap'

const cards = [
  {
    title: "Etoiles Universe",
    contentKey: "card1",
    img: "/etoilesuniverse.png",
    link: "https://github.com/JusteKal/Etoiles_Universe"
  },
  {
    title: "Mynthos Universe",
    contentKey: "card2",
    img: "https://cdn.modrinth.com/data/qwxJArlR/1db8c02578c53f7108db329bcb031c0825598d05.png",
    link: "https://github.com/Wiibleyde/MynthosProject"
  },
  {
    title: "ECQCBLWK ?",
    contentKey: "card3",
    img: "/ECQCBLWK.png",
    link: "https://weekend.justekal.be"
  },
  {
    title: "JusteKal.be",
    contentKey: "card4",
    img: "/favicon.ico",
    link: "https://justekal.be"
  }
]

const carousel = ref<HTMLElement>()
const currentSlide = ref(0)

const goToSlide = (index: number) => {
  if (!carousel.value) return
  
  gsap.to(carousel.value, {
    duration: 0.5,
    x: `-${index * 25}%`, // 25% = 100% / number of cards
    ease: 'power2.out'
  })
  currentSlide.value = index
}

const nextSlide = () => {
  const next = (currentSlide.value + 1) % cards.length
  goToSlide(next)
}

const prevSlide = () => {
  const prev = currentSlide.value - 1 < 0 ? cards.length - 1 : currentSlide.value - 1
  goToSlide(prev)
}

import { onMounted, onBeforeUnmount, ref } from 'vue'

const sectionIds = ['home', 'apres-accueil', 'projects', 'contact'];

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

    
    const viewportMid = window.innerHeight / 2;
    let currentIndex = sections.findIndex(section => {
      const rect = section.getBoundingClientRect();
      const elementMid = rect.top + rect.height / 2;
      return Math.abs(elementMid - viewportMid) < rect.height / 3;
    });

    
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
    }, 800); 
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
  margin-bottom: -10px; 
  color: #fff;
  font-size: 2.5em;
}
.carousel-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding: 20px 0;
}

.cards-container {
  display: flex;
  width: 400%; 
  transform: translateX(0);
}

.carousel-card {
  width: 25%; 
  padding: 0 10px;
  box-sizing: border-box;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(76, 120, 241, 0.8);
  border: none;
  color: white;
  width: 40px;  /* Ajout d'une largeur fixe */
  height: 40px; /* Ajout d'une hauteur fixe */
  padding: 0;   /* Suppression du padding */
  display: flex; /* Pour centrer le contenu */
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  z-index: 2;
  transition: background 0.3s;
  font-size: 20px; /* Taille du texte des flèches */
}

.nav-button:hover {
  background: rgb(76, 120, 241);
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: background 0.3s;
}

.dot.active {
  background: rgb(76, 120, 241);
}

@media (max-width: 768px) {
  .nav-button {
    padding: 10px;
  }
}
</style>
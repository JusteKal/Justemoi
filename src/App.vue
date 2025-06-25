<template>
  <div class="app-background">
    <Accueil id="home" />
    <Header id="apres-accueil" />
    <AboutMe />
    <h1>Projets</h1>
    <Card title="Etoiles Universe" content="Mod minecraft important l'univers d'étoiles, le streamer français, dans minecraft" img="/etoilesuniverse.png" link="https://github.com/JusteKal/Etoiles_Universe"/>
    <Card title="ECQCBLWK ?" content="Référence à salut everybody tout le monde !" img="/ECQCBLWK.png" link="https://weekend.justekal.be"/>
    <Card title="Contact" content="N'hésitez pas à me contacter pour toute question ou collaboration." img="/avatar.jpg" />    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Accueil from './components/Accueil.vue';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import AboutMe from './components/AboutMe.vue';
import Card from './components/Card.vue';
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
}

</style>
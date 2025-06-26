<template>
  <header class="site-header">
    <div class="header-row">
      <h1><a href="#home">justekal.be</a></h1>
      <nav>
        <a href="#about">{{ $t('aboutme') }}</a>
        <a href="#projects">{{ $t('projects') }}</a>
        <a href="#contact">{{ $t('contact') }}</a>
        <button
          v-if="locale !== 'fr'"
          @click="setLocale('fr')"
          class="lang-flag"
          aria-label="Français"
        >
          <img src="/fr.svg" alt="Français" width="28" height="28" />
        </button>
        <button
          v-if="locale !== 'en'"
          @click="setLocale('en')"
          class="lang-flag"
          aria-label="English"
        >
          <img src="/gb.svg" alt="English" width="28" height="28" />
        </button>
        <img
          v-if="locale === 'fr'"
          src="/fr.svg"
          alt="Français"
          class="lang-flag selected"
          width="28"
          height="28"
        />
        <img
          v-if="locale === 'en'"
          src="/gb.svg"
          alt="English"
          class="lang-flag selected"
          width="28"
          height="28"
        />
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function setLocale(lang: string) {
  locale.value = lang
  document.documentElement.lang = lang
  localStorage.setItem('locale', lang)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

.site-header {
  padding: 10px;
  background: #2F2F2F;
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-header h1 {
  font-size: 1.8em;
  margin: 0;
  padding-left: 1%;
}

.site-header nav {
  display: flex;
  gap: 20px;
  padding-right: 1%;
}

.site-header a {
  color: #fff;
  text-decoration: none;
  transition: color 0.4s ease-in-out;
  font-size: 1.1em;
}

.site-header a:hover {
  color: rgb(76, 120, 241);
  text-decoration: none;
  font-size: 1.1em;
}
.lang-flag {
  background: none;
  border: none;
  cursor: pointer;
  vertical-align: middle;
  transition: transform 0.2s;
  outline: none;
  padding: 0;
}
.lang-flag.selected {
  filter: drop-shadow(0 0 4px rgb(76, 120, 241));
  cursor: default;
  pointer-events: none;
  transform: scale(1.1);
}
.lang-flag img {
  width: 100%;
  height: 20px;
}
</style>
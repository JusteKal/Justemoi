import { createI18n } from 'vue-i18n'

const savedLocale = localStorage.getItem('locale') || 'fr';

const messages = {
  fr: {
    welcome: "Bienvenue sur mon portfolio",
    discover: "Découvrez mon univers de développeur !",
    aboutme: "À propos de moi",
    projects: "Projets",
    contact: "Contact",
    hi: "Bonjour, je suis JusteKal",
    portofilio: "Bienvenue sur mon portfolio !",
    créer: " Passionné de développement et âgé de 25 ans, je touche à tout et j’apprends à créer.",
    passion: "En passant par la science fiction, les jeux vidéo et la musique, j'ai un attrait particulié pour la popculture.",
    card1: "Mod minecraft important l'univers d'étoiles, le streamer français, dans minecraft.",
    card2: "Mod minecraft important l'univers du jus de mynthos dans minecraft.",
    card3: "Référence à salut everybody tout le monde !",
    card4: "Mon portfolio, réalisé avec Vue.js",
    contactme: "Contactez-moi",
    contactme2: "Vous pouvez me contacter par email à ",
    // ...autres traductions
  },
  en: {
    welcome: "Welcome to my portfolio",
    discover: "Discover my developer universe!",
    aboutme: "About me",
    projects: "Projects",
    contact: "Contact",
    hi: "Hello, I'm JusteKal",
    portofilio: "Welcome to my portfolio!",
    créer: " Passionate about development and 25 years old, I dabble in everything and learn to create.",
    passion: "From science fiction, video games, and music, I have a particular fondness for pop culture.",
    card1: "Minecraft mod bringing the universe of étoiles, the French streamer, into Minecraft.",
    card2: "Minecraft mod bringing the universe of mynthos juice into Minecraft.",
    card3: "Reference to 'Salut everybody tout le monde!'",
    card4: "My portfolio, built with Vue.js",
    contactme: "Contact me",
    contactme2: "You can contact me via email at ",
    // ...other translations
  }
}

export default createI18n({
  locale: savedLocale,
  fallbackLocale: 'fr',
  messages,
})
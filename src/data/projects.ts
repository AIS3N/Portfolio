export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  href?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "playlists-social",
    title: "Réseau social de \"playlists\" avec Django",
    description:
      "Réseau social permettant de créer des listes en tout genre, les partages, les commenter, suivre des listes ou des créateurs de listes.",
    stack: ["Django", "Python", "SQLite", "HTML/CSS/JS"],
    href: "",
    repo: "https://github.com/AIS3N/PlaylistNetwork",
    image: "/bg1.jpg",
  },
  {
    id: "assistant-poesie",
    title: "Assistant poésie (compteur de syllabes, synonymes, rimes) avec Django",
    description:
      "Mise a disposition érgonomique de plusieurs outils aider à la composition de poèmes. Compteur de syllabes, synonymes et rimes.",
    stack: ["Django", "Python", "HTML/CSS/JS"],
    href: "",
    repo: "",
    image: "/bg2.jpg",
  },
  {
    id: "rcnn-detection-armes",
    title: "Création d'un modèle R-CNN de détection d'armes sur une vidéo",
    description:
      "Le modèle R-CNN a été entraîné sur un dataset d'images pour faire du fine-tuning du modèle Inception Resnet V2. Il peut être utilisé pour détecter et localiser précisément les armes dans des vidéos.",
    stack: ["Python", "TensorFlow", "Machine Learning", "R-CNN", "Azure"],
    href: "",
    repo: "https://github.com/AIS3N/ShamblesML",
    image: "/bg3.jpg",
  },
  {
    id: "cobra-ml-basketball",
    title: "Prédiction des performances en NBA d'un joueur NCAA.", 
    description:
      "Projet ayant pour but de déterminer si les statisques d'un joueur de NCAA suffisent à prédire sa performance en NBA. Création d'un MLP (Multi-Layer Perceptron) from Scratch en C++. Exploitation du modèle en Python et interface utilisateur en Django.",
    stack: ["Python", "C++", "Machine Learning", "Matplotlib", "Django"],
    href: "",
    repo: "https://github.com/AIS3N/CobraML/",
    image: "/bg3.jpg",
  },
  {
    id: "floutage-armes",
    title: "Plateforme permettant de flouter les armes d'une vidéo avec Django",
    description:
      "A l'aide du modèle R-CNN entrainé, la plateforme floute automatiquement les armes détectées dans les vidéos.",
    stack: ["Django", "Python", "Bootstrap", "FFmpeg"],
    href: "",
    repo: "https://github.com/AIS3N/Shambles",
    image: "/bg4.jpg",
  },
  {
    id: "app-mobile-ecriture",
    title: "App Mobile d'apprentissage avec écriture manuscrite en React-Native",
    description:
      "Application mobile d'apprentissage par l'écriture, l'écoute et la lecture. Inspirée de la méthode traditionnelle d'apprentissage du Coran avec la Lawha (tablette en bois).",
    stack: ["React Native", "SQLite", "WaterMelonDB"],
    href: "",
    repo: "",
    image: "/bg6.jpg",
  },
  {
    id: "api-fastapi-mobile",
    title:
      "API gérant les données de l'app mobile avec FastAPI",
    description:
      "Synchronisation des données locales des utilisateurs de l'application mobile, gestion des utilisateurs, monitoring.",
    stack: ["FastAPI", "Python", "SQLite", "SupaBase"],
    href: "",
    repo: "",
    image: "/bg5.jpg",
  },
  {
    id: "barbershop",
    title:
      "Réservation en ligne pour un Barbershop avec Django",
    description:
      "Site web développé avec Django permettant au propriétaire d'un barbershop gérer ses réservations, voir son planning, et aux clients de réserver en ligne en séléctionnant les créneaux disponibles.",
    stack: ["Django", "Python", "MySQL", "Bootstrap", "HTML/CSS/JS"],
    href: "",
    repo: "https://github.com/AIS3N/911BarberShop",
    image: "/bg5.jpg",
  },
  {
    id: "soundfocusttv-extension",
    title: "SoundFocusTTV - Extension Firefox/Chrome",
    description: "Mute automatiquement les streams Twitch sauf celui que vous regardez activement. Fini de jongler entre les onglets pour couper et réactiver le son.",
    stack: ["JavaScript", "Browser Extension", "HTML/CSS"],
    href: "https://addons.mozilla.org/fr/firefox/addon/soundfocusttv/",
    repo: "https://github.com/AIS3N/SoundFocusTTV",
    image: "/bg2.jpg",
  },
  {
    id: "cv-ats",
    title: "Générateur de CV ATS",
    description: "Générateur de CV ATS en PDF. Possibilité d'exporter ou importer en JSON",
    stack: ["NextJS", "Puppeteer", "JSON"],
    href: "https://cv-ats-qr75.onrender.com/",
    repo: "https://github.com/AIS3N/CVATS",
    image: "/bg3.jpg",
  },
];
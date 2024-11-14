import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Responsable d'atelier de cycles",
      company_name: "La P'tite Rustine",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Déc 2020 - Juil 2024",
      points: [
        "Amélioration du site internet de l'atelier pour augmenter la visibilité.",
        "Gestion de la réparation et de la vente de vélos.",
        "Mise en place d'un programme de vente de vélos pour enfants.",
        "Formation des cyclistes sur l'entretien et l'utilisation des vélos.",
        "Gestion des stocks et réorganisation de l'espace de travail pour maximiser l'efficacité.",
      ],
    },
    {
      title: "Téléconseiller au pôle Bourse",
      company_name: "Bred Banque Populaire",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Avr 2019 - Sep 2019",
      points: [
        "Réception et la transmission des ordres boursiers des clients.",
        "Gestion des appels et des courriels provenant des clients et des agences commerciales.",
        "Rédaction des procédures de téléconseil (réglementation MiFID 2) et mise à jour des outils et méthodes.",
        "Aide à la fiscalité des titres, assurant la conformité des informations clients.",
        "Participation à des projets transversaux entre le Pôle Bourse et le Back-Office.",
      ],
    },
    {
      title: "Equipier polyvalent",
      company_name: "McDonald's",
      icon: shopify,
      iconBg: "#383E56",
      date: "Déc 2022 - Avr 2019",
      points: [
        "Préparation des commandes et gestion du service client avec dynamisme.",
        "Maintien de la propreté et des normes d’hygiène alimentaire dans l'ensemble du restaurant.",
        "Soutien aux coéquipiers pour assurer une bonne coordination et une excellente ambiance de travail.",
        "Adaptation aux différentes situations, contribuant à la fluidité du service, même lors des périodes de forte affluence.",
        "Participation active à la vie du restaurant et à l'amélioration continue du service client",
      ],
    },
    {
      title: "Vidéaste et photographe",
      company_name: "Troisurcinq",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Aujourd'hui",
      points: [
        "Gestion complète des projets audiovisuels (de la négociation à la livraison finale)",
        "Accompagnement des clients dans la conception de leurs projets.",
        "Contact et négociation avec les clients.",
        "Réalisation de 10 clips vidéo et d'une vidéo de mariage.",
        "Satisfaction client et fidélisation.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Programme de scan de réseaux",
      description:
        "Analyse et rapport de résultats de chaque type de scan (SYN ACK, UDP et balayage complet).",
      tags: [
        {
          name: "nmap",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "network",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Détection d'opérations bancaires frauduleuses",
      description:
        "Création d'un algorithme de classificateurs ayant la meilleure performance. Analyse exloiratoire, statistiques descritives et inférentielles, arbres de décision, régression logistique, bayésien naïf. Random model avec une précision de 0.977 et un F1 score de 0.807.",
      tags: [
        {
          name: "R",
          color: "blue-text-gradient",
        },
        {
          name: "machineLearning",
          color: "green-text-gradient",
        },
        {
          name: "fraud",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Logiciel de gestion locative",
      description:
        "Création d'un logiciel de gestion locative pour une agence immobilière. Créer, modifier et supprimer un client, une propriété - ajouter une location (la lier à la propriété) - effectuer une recherche pour trouver une propriété en fonction de sa surface totale - afficher tous les clients par ordre alhabétique - afficher les propriétés louées avec leur date de début de location - afficher les propriétés non louées - supprimer une location - disposer d'un menu proposant les fonctionnalités précédentes.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "software",
          color: "green-text-gradient",
        },
        {
          name: "renting",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
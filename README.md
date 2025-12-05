# 🎮 Pokédex React + Material-UI

> 📚 **Projet Éducatif Individuel** - Application Pokédex moderne construite avec React, Material-UI et PokeAPI

Une application web élégante présentant les 151 Pokémon de la première génération avec support multi-langues et design Material Design.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-6.x-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![PokeAPI](https://img.shields.io/badge/PokeAPI-v2-EF5350?style=for-the-badge)

## ✨ Fonctionnalités

- 🎨 **Material-UI** - Design professionnel avec composants Material Design
- 🌍 **Multi-langues** - Support de 4 langues (EN, FR, ES, JA) avec traduction des noms et types
- 🔍 **Recherche en temps réel** - Filtrage instantané par nom de Pokémon
- 📱 **Responsive** - Grille adaptative (1-5 colonnes selon l'écran)
- ⚡ **PokeAPI** - Données en temps réel des 151 Pokémon Gen 1
- 🎯 **Types colorés** - 18 types avec couleurs officielles
- 🖼️ **Artwork officiel** - Images haute qualité de chaque Pokémon

## 🚀 Démarrage Rapide

### Prérequis

- Node.js version **20.19+** ou **22.12+**
- npm ou yarn

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-username/pokedex-react.git

# Naviguer dans le dossier
cd pokedex

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173/`

## 📁 Structure du Projet

```
src/
├── components/
│   ├── Header/          # AppBar avec recherche et sélecteur de langue
│   ├── PokemonCard/     # Card MUI avec image, nom, types
│   └── PokemonList/     # Grid avec appels API PokeAPI
├── theme.js             # Configuration du thème MUI personnalisé
├── App.jsx              # Composant principal avec ThemeProvider
└── main.jsx             # Point d'entrée
```

## 🛠️ Technologies Utilisées

| Technologie     | Version | Usage                      |
| --------------- | ------- | -------------------------- |
| **React**       | 18.3.1  | Framework UI               |
| **Material-UI** | 6.x     | Bibliothèque de composants |
| **Emotion**     | 11.x    | CSS-in-JS                  |
| **Vite**        | 7.2.6   | Build tool                 |
| **PokeAPI**     | v2      | Données Pokémon            |

## 🎨 Thème Personnalisé

Le thème MUI est configuré avec :

- **Mode sombre** par défaut
- **Couleur primaire** : `#dc0a2d` (rouge Pokédex)
- **Fond** : `#2b3945` (bleu-gris foncé)
- **Cartes blanches** pour les Pokémon

## 🌍 Support Multi-langues

L'application traduit automatiquement :

- ✅ Noms des Pokémon (via API species)
- ✅ Types des Pokémon (via API type)

**Langues supportées :**

- 🇬🇧 English
- 🇫🇷 Français
- 🇪🇸 Español
- 🇯🇵 日本語 (Japonais)

## 📦 Scripts Disponibles

```bash
# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version de production
npm run preview

# Linter le code
npm run lint
```

## 🎯 Grille Responsive

| Breakpoint | Colonnes | Taille écran      |
| ---------- | -------- | ----------------- |
| xs         | 1        | Mobile            |
| sm         | 2        | Tablette portrait |
| md         | 3        | Tablette paysage  |
| lg         | 5        | Desktop           |

## 🔧 Configuration PokeAPI

L'application utilise 3 endpoints :

1. `/pokemon?limit=151` - Liste des 151 Pokémon
2. `/pokemon/{id}` - Détails (image, types)
3. `/pokemon-species/{id}` - Noms traduits

## 📚 Contexte Éducatif

Projet développé pour apprendre :

- ⚛️ React hooks (useState, useEffect, useCallback)
- 🎨 Material-UI et système de design
- 🌐 Intégration d'API REST
- 🌍 Internationalisation (i18n)
- 📱 Design responsive avec CSS Grid

## 🌟 Améliorations Futures

- [ ] Modal de détails pour chaque Pokémon
- [ ] Système de favoris avec localStorage
- [ ] Filtrage par type
- [ ] Filtrage par génération
- [ ] Cache des traductions
- [ ] Mode clair/sombre toggle
- [ ] Pagination ou scroll infini
- [ ] Tests unitaires (Jest/Vitest)

## 📝 Licence

Ce projet est sous licence MIT.

## 🙏 Ressources

- [PokeAPI](https://pokeapi.co/) - API Pokémon gratuite
- [Material-UI](https://mui.com/) - Bibliothèque de composants React
- [Vite](https://vitejs.dev/) - Build tool moderne
- [React](https://react.dev/) - Documentation officielle

---

💡 **Note** : Projet éducatif à but d'apprentissage du développement web moderne.

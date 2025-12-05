# 🎮 Pokédex React

> 📚 **Projet Éducatif Individuel** - Application Pokédex moderne et interactive construite avec React et Vite

Une application web présentant une interface utilisateur élégante avec des animations fluides, développée dans le cadre d'un apprentissage des technologies web modernes.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Educational](https://img.shields.io/badge/Type-Educational-green?style=for-the-badge)

## 🎯 Objectifs Pédagogiques

Ce projet a été développé pour apprendre et pratiquer :

- ⚛️ **React** - Composants fonctionnels, hooks, et gestion d'état
- 🏗️ **Architecture** - Organisation modulaire du code
- 🎨 **CSS Moderne** - Flexbox, Grid, animations et responsive design
- ⚡ **Vite** - Configuration et optimisation d'un projet moderne
- 📦 **npm** - Gestion des dépendances et scripts

## ✨ Fonctionnalités

- 🎨 **Design Moderne** - Interface utilisateur premium avec des dégradés et des animations
- 📱 **Responsive** - Optimisé pour tous les appareils (mobile, tablette, desktop)
- ⚡ **Performance** - Construit avec Vite pour un démarrage ultra-rapide
- 🌍 **Multi-langues** - Sélection de langue (EN, FR, ES)
- 🎭 **Animations** - Effets de survol et transitions fluides
- 🖼️ **Images Officielles** - Artwork officiel des Pokémon via PokeAPI

## 🚀 Démarrage Rapide

### Prérequis

- Node.js version **20.19+** ou **22.12+**
- npm ou yarn

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-username/pokedex-react.git

# Naviguer dans le dossier
cd pokedex-react

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173/`

## 📁 Structure du Projet

```
src/
├── assets/              # Images et ressources statiques
├── components/          # Composants React
│   ├── Header/         # En-tête avec logo et sélection de langue
│   ├── PokemonCard/    # Carte individuelle de Pokémon
│   └── PokemonList/    # Grille de cartes Pokémon
├── data.json           # Données des Pokémon
├── App.jsx             # Composant principal
├── main.jsx            # Point d'entrée
└── index.css           # Styles globaux
```

## 🛠️ Technologies Utilisées

- **React 18** - Bibliothèque JavaScript pour construire l'interface utilisateur
- **Vite** - Build tool moderne et rapide
- **CSS3** - Animations et styles modernes
- **Google Fonts** - Police Inter pour une typographie élégante

## 📸 Captures d'Écran

> _Ajoutez vos captures d'écran ici après avoir pris des screenshots de l'application_

## 🎨 Personnalisation

### Ajouter de Nouveaux Pokémon

Modifiez le fichier `src/data.json` :

```json
{
  "id": 150,
  "name": "Mewtwo",
  "type": "Psychic",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
}
```

### Modifier les Couleurs

Les couleurs principales sont définies dans les fichiers CSS de chaque composant. Vous pouvez personnaliser les dégradés et les couleurs selon vos préférences.

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

## 🌟 Améliorations Futures

- [ ] Intégration complète avec l'API PokeAPI
- [ ] Recherche et filtrage de Pokémon
- [ ] Page de détails pour chaque Pokémon
- [ ] Système de favoris
- [ ] Mode sombre/clair
- [ ] Internationalisation complète (i18n)
- [ ] Animations de chargement
- [ ] Tests unitaires et d'intégration

## 📚 Contexte Éducatif

Ce projet a été réalisé dans le cadre d'un apprentissage personnel des technologies web modernes. Il s'agit d'un projet individuel visant à mettre en pratique les concepts de React, la gestion de composants, et le design responsive.

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👤 Auteur

Projet éducatif individuel réalisé pour l'apprentissage du développement web moderne.

## 🙏 Ressources

- [PokeAPI](https://pokeapi.co/) - Données et images des Pokémon
- [Vite Documentation](https://vitejs.dev/) - Guide et documentation Vite
- [React Documentation](https://react.dev/) - Documentation officielle React
- [MDN Web Docs](https://developer.mozilla.org/) - Référence CSS et JavaScript

---

💡 **Note** : Ce projet est à but éducatif et ne prétend pas être une application de production.

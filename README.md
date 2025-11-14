# TP - Introduction au fonctionnel

```bash
# Tester le TP typescript
node main.ts
```

# 🌱 ESIEE-IT MyPlants - Site E-commerce React de Démo

## Installation

```bash
# Se placer dans le dossier du projet
cd site-ecommerce-react-tp

# Installer les dépendances
npm install
```

## Lancement

```bash
# Démarrer le serveur de développement
npm start
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## Structure du projet

Le projet suit l'architecture **Atomic Design** :

```
src/
├── 1-atoms/          # Composants de base (Button, Label, Price)
├── 2-molecules/      # Composants composés (ProductCard, SearchBar, CartItem)
├── 3-organisms/      # Composants complexes (Header, ProductList, FilterBar)
├── 4-templates/      # Layouts (Layout)
├── 5-pages/          # Pages complètes (HomePage, ProductPage, CartPage)
├── contexts/         # Context API (CartContext)
├── data/             # Données statiques (plants.ts)
└── theme.ts          # Configuration du thème Material-UI
```

## Fonctionnalités implémentées

- Affichage de la liste des plantes  
- Recherche par nom ou description  
- Filtrage par catégorie (Intérieur, Extérieur, Aromates)  
- Page de détail pour chaque plante  
- Panier d'achat avec gestion des quantités  
- Design responsive avec Material-UI  
- Gestion d'état avec Context API  

**ESIEE-IT MyPlants** 🌱

Une boutique en ligne de démo pour vendre des plantes d'intérieur, d'extérieur et des aromates.





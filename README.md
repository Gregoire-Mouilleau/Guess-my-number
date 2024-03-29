# Guess My Number

Le jeu du Guess My Number est un jeu simple de compréhension. Un numéro est choisi aléatoirement, ici entre 1 & 20, et il faut retrouver ce numéro le plus rapidement possible. Chaque fois qu'on valide un numéro, si celui-ci est faux alors on perd 1 point, une fois à 0 point on perd la partie.

Pour nous aider nous avons une indication de si le chiffre est plus petit ou plus grand que le nombre validé précédemment.

## Tâches imposées :

### Task 1: Clone the repository.
### Task 2: Create a repository on github.
### Task 3: Plan the game.

## Les Fonctionnalités :

Notre Guess My Number possède plusieurs fonctionnalités, Tout d'abord le bouton Check, qui sert à vérifier si le nombre rentré est le nombre choisi aléatoirement. Le score évolue en fonction du nombre de points du joueur. Le highscore conserve le meilleur score du joueur. Le bouton Again permet de reset la partie, il reset le check & le score mais conserve le highscore.

Il y a un système pour bloquer la flèche au nombre maximal (ici 20), et que le joueur ne puisse pas mettre un nombre au-dessus en utilisant les flèches. Il y a un système pour bloquer l'entrée de lettres (à part le E) dans le guess. Il y a un système pour empêcher le joueur de perdre des points s'il n'entre rien, un nombre trop grand ou trop petit, ou s'il entre deux fois le même nombre d'affilée.

## Axes d'améliorations :

- Faire en sorte de pouvoir choisir le nombre min & max, qui influence donc la flèche.
- Choisir le nombre de points perdus par tour.
- Pouvoir entrer un pseudo et que le highscore soit conservé même après refresh (BDD).
- Empêcher le joueur d'entrer un nombre plus grand que le nombre maximal à la main.
- Protéger le code des différentes attaques.

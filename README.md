# Todo App

![screenshots](./screenshots/todo-list.PNG?raw=true)


## Description:

Todo-App, c'est une plateforme permet de gérer les tâches d'un utilisateur, l'utilisateur peut se connecter à la plate-forme et créer ses tâches en tapant le nom de la tâche et leur descriptif.

Chaque tâche à deux statuts soit "complété" ou bien "non complété" (par défaut le statutest "non complétée") par la suite si l'utilisateur a exécuté cette tache, il peut modifier le statut à: "complété" en cliquant sur "Modifier" et modifier le statut.

Si l'utilisateur veut supprimer la tache, il clique sur "supprimer" et confirm la supprition.


## Les etapes:

- 1 `yarn add`

- 2 `yarn start`

## Les etapes en utilisant Docker:

- 1 to run: `docker-compose up -d --build`

- 2 to stop: `docker-compose stop`

- 3 to remove: `docker-compose down`

## Remarque:

- utilisation de npx create-react-app pour la creation du projet

- utilisation du context pour les todo List (lors de reload du page les informations sont perdus)

- utilisation private-route pour la page de /todo-list et public pour la page /home

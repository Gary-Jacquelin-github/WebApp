<u>Fonctionnalités offertes par Workbox:</u>
•	Mise en place du cache pour les fichiers du types CSS Javascript, HTML, etc…
•	Mise en cache des requêtes avec des stratégies, répondant par exemple à des critères spécifiques ou des requêtes avec mises à jour en arrière-plan.
•	Ressource préchargées pour améliorer les performances de l'application en ligne.
•	Gestion des versions de cache pour s'assurer que les utilisateurs ont toujours la version la plus récente de l'application.

<u>Méthodes de cache et utilisations possibles :</u>
CacheFirst: 
Une stratégie de cacheFirst est utile pour les ressources qui ont été révisées, telles que les URL telles que /styles/example.a8f5f1.css, car elles peuvent être mises en cache pendant de longues périodes.
Si la requête réseau échoue et qu'il n'y a pas de correspondance de cache, cela lèvera une WorkboxErrorexception. 
![CacheFirst](CacheFirst.avif "CacheFirst")

NetworkFirst:  
Par défaut, cette stratégie cache les réponses avec un code d’état de 200 ainsi que les réponses opaques. Les réponses opaques sont des demandes d’origine croisée pour lesquelles la réponse ne prend pas en charge le CORS.
Si la requête réseau échoue et qu’il n’y a pas de correspondance de cache, une exception WorkboxError s’affiche.
![NetworkFirst](NetworkFirst.avif "NetworkFirst")

CacheOnly: Cette classe est utile si vous souhaitez profiter de tous les plugins Workbox.
S’il n’y a pas de correspondance de cache, cela lancera une exception WorkboxError.
![CacheOnly](CacheOnly.avif "CacheOnly")

<u>Exemples d'utilisation de Workbox dans le projet Doctoliberal :</u>
•	Consultation des rendez-vous-même hors connexion
•	Possibilité de récupérer la liste des médecins dans le cache
•	Gestion de la version de cache pour vérifier que l’utilisateur a toujours la version la plus récente. 
•	Possibilité de pris de rendez-vous-même hors connexion (il sera envoyé au médecin quand la connexion sera disponible)
•	Mise en cache pour améliorer les performances de l’application. 



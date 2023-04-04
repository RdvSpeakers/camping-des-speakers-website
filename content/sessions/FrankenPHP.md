---
key: FrankenPHP
title: "FrankenPHP, un serveur d'application moderne pour PHP écrit en Go"
speakers:
  - kevin_dunglas
type: canadienne
day: 0
time: 13h30
duration: 45 minutes
room: petite_salle
---

PHP, ça peut sembler ringard, mais pourtant - grâce à WordPress, Laravel et Symfony - c'est toujours le langage incontournable pour créer des applications web et des API . Il faut aussi dire que PHP s'est énormément amélioré ces dernières années, et en devient même agréable à utiliser.

Cependant, déployer du PHP en production, et en particulier dans des environnements "Cloud Native", ça reste relativement complexe. Contrairement à la plupart des autres outils similaires, PHP ne dispose pas nativement d'un serveur web. On expose généralement les apps via un serveur web tiers (NGINX, Apache), qui délègue l’exécution des scripts à PHP-FPM, via le vénérable protocole FastCGI. Avec Docker, ça fait beaucoup de services et de complexité juste pour exposer un site web.

Mais ça c'était avant. Avant FrankenPHP.

FrankenPHP, c'est un serveur d'application moderne pour PHP qui est écrit en Go. Il est bâti sur Caddy, le serveur web qui monte malgré le silence des médias, et embarque directement un interpréteur PHP (qui est lui même écrit en C) grâce à une bibliothèque ad-hoc écrite en cgo.

FrankenPHP donné également à PHP des fonctionnalités qui vont faire rougir les autres langages :

* support natif de HTTP/2 et de HTTP/3
* génération et renouvèlement automatique des certificats TLS grâce à Let's Encrypt ou à ZeroSSL
* support des Early Hints (qui viennent également d'être implémentés par Chrome)
* mode "worker" qui permet de court-circuiter l'architecture *share nothing* de PHP et de diviser par trois (ou plus) les temps de réponse comparé à PHP-FPM
* support du temps réel avec support natif du protocole [Mercure](https://mercure.rocks), une alternative aux WebSockets basée sur les SSE
* images Docker légères, simples d'utilisation et faites pour la prod (compatibles avec Kubernetes)

Venez découvrir les fonctionnalités et les entrailles de FrankenPHP !
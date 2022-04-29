---
key: webassembly_pas_que_frontend
title: "WebAssembly n'est pas qu'une affaire de frontend"
speakers:
  - benjamin_coenen
type: tente_cannadienne
day: 0
time: 10h15
duration: 45 minutes
room: petite_salle
---

Aujourd'hui la dans la plupart des articles, des conférences et des exemples qu'on peut voir à propos de WebAssembly (Wasm) sont principalement basés sur l'utilisation de WebAssembly dans le navigateur. Le navigateur possède un runtime capable d'exécuter du Wasm mais c'est loin d'être la seule possibilité.

 De plus en plus de cas d'usage côté back-end font leur apparition, par exemple si on veut avoir un équivalent de "Function As A Service" capable d'exécuter du Wasm on va pouvoir ouvrir les portes à différents langages capables de compiler vers du WebAssembly. Il y a même l'apparition d'unikernel écrit pour exécuter du Wasm, on a aussi krustlet qui nous permet de lancer un morceau de Wasm au lieu d'un container dans Kubernetes, beaucoup de cas d'usage dans la blockchain sont notamment réalisés. 
 
 De plus en plus de domaines considèrent le WebAssembly comme une opportunité d'étendre leurs outils. Cet écosystème est en plein effervescence et nous en sommes au début. Faisons ensemble un tour de ce qui est faisable aujourd'hui grace à cette spec et les outils mis à disposition pour nous aider à l'utiliser dans nos propres cas d'usage autre que celui du frontend.
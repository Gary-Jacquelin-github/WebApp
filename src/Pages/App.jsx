import React, { useState, useEffect  } from 'react';
import '../css/App.css'


function Presentation() {
  
  return (
    <body>
    <div className="content">
       <h2>Pourquoi utiliser une PWA ?</h2>
      <div className="section">
            <ul>
              <li>
              Eviter la lourdeur des stores
              Lorsque l’on développe une application native et que l’on souhaite la distribuer publiquement, 
              l’hébergement dans un store est une étape inévitable.
              Cette étape peut s’avérer fastidieuse et ce pour plusieurs raisons :

              La plupart des stores imposent des règles strictes, 
              parfois injustifiées et qui peuvent changer soudainement. 
              Une application approuvée dans les stores peut se voir bannir dans le futur à cause de nouvelles politiques
              Le temps de validation et de publication est plus ou moins long surtout sur l’AppStore
              En fonction des stores,
              le coup d’hébergement peut varier mais reste néanmoins plutôt accessible
              Avec les PWA nous gardons le contrôle de notre application (code source) et de sa distribution.
              </li>
              <br />
              <li>
              Utilisation immédiate
              Les PWA permettent d’éviter un taux de rebond élevé en proposant une utilisation ultra rapide de l’application. 
              En effet nous avons juste à ouvrir l’application via un lien web, un QR code, et nous pouvons directement l’utiliser. 
              L’utilisateur pourra par la suite, 
              et s’il le souhaite, 
              ajouter cette application sur l’écran d’accueil de son smartphone pour la retrouver plus facilement.
              </li>
              <br />
              <li>
              Multiplateformes et réduction des coûts
              Un des énormes avantages du web est qu’il peut fonctionner sur toutes les plateformes. « Write once,
              run everywhere », 
              les PWA n’échappent pas à cette règle, un seul code source pour être multiplateforme.
              Les coûts de développement sont donc considérablement réduits vis-à-vis d’un développement natif classique.
              </li>
              <br />
              <li>
              Légères et visibles
              Les PWA consomment beaucoup moins d’espace de stockage que les applications natives. 
              Une fois installer une application PWA est optiser pour prendre le moins d'espace possible.
              Un fois installé elle est aussi plus facilement visible sur l'appareil.
              </li>
              <li>
              Connectivité Indépendante
              Grâce à la gestion du cache par les « Services Workers »,
               la PWA peut fonctionner dans des zones de faible connectivité ou complètement sans réseau. 
               Le lancement de l’application depuis l’écran d’accueil pourra être instantané.</li>
            </ul>
      </div>
      <div className="section">
      <h2>Problèmes possible avec une PWA</h2>
            <ul>
              <li>
              Pourquoi je ne vois pas le logo pour installer l'application ?<br /> 
              Ce problème peut venir de votre navigateur, pour cela essayé un autre navigateur. 
              Si le problème persiste merci de contacter l'équipe informatique.
              </li>
              <br />
              <li>
              Je ne peux pas lancer mon application que j'ai téléchargée, que faire ? <br />
              Si vous ne pouvez pas lancer une application PWA que vous avez téléchargée ça peut vouloir dire plusieurs choses
              <ul>
                <li>Vous n'avez pas de connexion internet : le créateur du site a pu bloquer l'accès à son application si aucune connexion internet n'est détectée.</li>
                <li>L'application téléchargée n'est pas une PWA: lors du téléchargement, il est possible que vous vous soyez trompé et que vous avez téléchargé la page web au lieu de l'application.</li>
                <li>Votre appareil n'est pas compatible : il est possible dans de rares cas que vous utilisez un système qui ne soit pas encore ou plus géré.</li>
              </ul>
              </li>
              <br />
              <li> Si aucune ligne ne repond à votre question/problematique, merci de contacter l'équipe support</li>
            </ul>
      </div>
    </div>
    </body>
  );
}

export default Presentation;
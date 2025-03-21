const startButton = document.querySelector(".start-btn");

startButton.addEventListener("click", () => {
  const mainSection = document.querySelector("main");

  mainSection.textContent = "";

  const container = document.createElement("div");

  const h1 = document.createElement("h1");
  h1.textContent = "Question 1/10";
  h1.style.marginBottom = "40px";

  const h2 = document.createElement("h2");
  h2.textContent = "Quel est le rapport entre Java et JavaScript?";
  h2.style.fontFamily = "roboto";

  container.appendChild(h1);
  container.appendChild(h2);

  const ul = document.createElement("ul");

  /*
  const questions = [
      {
      question : "Quel est le rapport entre Java et JavaScript?",
      answers : [
       { text: "C'est le même langage, mais le nom  JavaScript  est utilisé pour le code s'exécutant dans une page Web", answer: false,},
       { text: "Ce sont deux langages différents, malgré quelques points communs dans la syntaxe", answer: true, },
       { text: "Java est une version améliorée de JavaScript", answer: false, },
       { text: "Java est une île, ça n'a rien à voir !", answer: false, },
       ];
      },
       {
      question : "En quelle année est né HTML ?",
      answers : [
       { text: "Dans les années 70, avec Arpanet", answer: true,},
       { text: "Entre 1986 et 1988, avec le Club Dorothée", answer: false, },
       { text: "En 1990 exactement, avec la naissance d'Emma Watson", answer: false, },
       { text: "Plutôt en 1993 non ? Sous le mandat Bill Clinton", answer: false, },
       ];
      },
       {
      question : "À quoi sert le langage CSS?",
      answers : [
       { text: "À réaliser des pages dynamiques", answer: true,},
       { text: "À ajouter du style aux documents web", answer: false, },
       { text: "À insérer du contenu dans une page internet", answer: false, },
       { text: "À simuler une application en mode avion durant les trajets dans un bus", answer: false, },
       ];
      },
       {
      question : "Qu'est ce qu'un navigateur web?",
      answers : [
       { text: " Un logiciel capable d'interpréter et d'afficher du code HTML", answer: true,},
       { text: "Un outil permettant d'accéder à Internet", answer: false, },
       { text: " La toute première application mondiale", answer: false, },
       { text: "Une interface pour lire et recevoir des e-mails!", answer: false, },
       ];
      },
       {
      question : "Qui est Tim Berners-Lee ?",
      answers : [
       { text: " l’inventeur de Flexbox", answer: false,},
       { text: " l’inventeur du Web", answer: true, },
       { text: " l’inventeur du Responsive Webdesign", answer: false, },
       { text: "l’inventeur de CSS", answer: false, },
       ];
      }, {
      question : "En combien de jours JavaScript a-t-il été conçu pour Netscape ?",
      answers : [
       { text: "Pendant les fêtes de fin d'année 1993, entre deux morceaux de bûche", answer: false,},
       { text: "En 10 jours seulement, comme un véritable sprint codé", answer: true, },
       { text: "En un an complet, avec beaucoup de café et de nuits blanches", answer: false, },
       { text: "Sous le mandat de Bill Clinton, mais on ne sait pas combien de temps exactement", answer: false, },
       ];
      }, {
      question : "Quelle est la différence fondamentale entre HTML et CSS ?",
      answers : [
       { text: "HTML construit la maison, CSS choisit la peinture", answer: true,},
       { text: "L'un sert à acheter, l'autre à décorer", answer: false, },
       { text: "HTML est solide, CSS est fluide", answer: false, },
       { text: "Aucune idée, mais ça marche ensemble, et c'est l'essentiel", answer: false, },
       ];
      }, {
      question : "Que signifie CSS?",
      answers : [
       { text: "Cascading Style Sheets", answer: true,},
       { text: "Create Simple Samples", answer: false, },
       { text: "C'est Super Simple !", answer: false, },
       { text: "Choucroute et Saucisses de Strasbourg", answer: false, },
       ];
      }, {
      question : "Que voulait initialement simplifier l'invention de HTML par Tim Berners-Lee ?",
      answers : [
       { text: "La commande de pizzas au bureau du CERN", answer: true,},
       { text: "Le partage de documents scientifiques sur le Web", answer: false, },
       { text: "La création de mèmes avant l'heure", answer: false, },
       { text: "L'organisation de soirées quiz entre collègues", answer: false, },
       ];
      }, {
      question : "Que signifie l'acronyme AJAX ?",
      answers : [
       { text: "Advanced JavaScript with XMLHttpRequest", answer: true,},
       { text: "Asynchronous JavaScript and XML", answer: false, },
       { text: "JavaScript extensible", answer: false, },
       { text: "Rien, c’est juste une suite de lettres sans aucune signification", answer: false, },
       ];
      },

  ]

  */

  const choices = [
    { text: "C'est le même langage, mais le nom  JavaScript  est utilisé pour le code s'exécutant dans une page Web", answer: true, },
    { text: "Ce sont deux langages différents, malgré quelques points communs dans la syntaxe", answer: false, },
    { text: "Java est une version améliorée de JavaScript", answer: false, },
    { text: "Java est une île, ça n'a rien à voir !", answer: false, },
  ];

  choices.forEach((choiceAnswer) => {
    const li = document.createElement("li");
    li.textContent = choiceAnswer.text;


    li.addEventListener("click", () => {

      if (choiceAnswer.answer) {
        li.style.backgroundColor = "green";
        li.style.color = "white";
        score++;
      }
      else {
        li.style.backgroundColor = "red";
        li.style.color = "white";
      }


    });

    let score = 0;

    ul.appendChild(li);
    console.log(score);
  });

  // let score = 0;

  // document.score.createElement("p");
  // score.textContent= `${score/10}`;
  // mainSection.appendChild(score);


  mainSection.appendChild(container);
  mainSection.appendChild(ul);

});

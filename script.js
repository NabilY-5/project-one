const mainSection = document.querySelector("main");
const intro = document.querySelector(".intro");
const startSection = document.querySelector(".start-section");
<<<<<<< HEAD
const mainSection = document.querySelector("main");
const intro = document.querySelector(".intro");
const startSection = document.querySelector(".start-section");
=======
>>>>>>> fb5fb7d11a5b5fd641919eb2d558b5bcc2dad01a
const startButton = document.querySelector(".start-btn");
const blocQuestion = document.querySelector(".bloc-question");
const questionNumber = document.querySelector(".numeroQ");
const enonce = document.querySelector(".enonce");
const reponses = document.querySelector(".reponses");
const reponse1 = document.querySelector(".reponse1");
const reponse2 = document.querySelector(".reponse2");
const reponse3 = document.querySelector(".reponse3");
const reponse4 = document.querySelector(".reponse4");
const li = document.querySelector("li");
const winorloose = document.querySelector(".winnerorlooser");
const scorediv = document.querySelector(".score");
const finalimg = document.querySelector(".finalimg");
const nextButton = document.querySelector(".next-btn");

<<<<<<< HEAD
=======

>>>>>>> fb5fb7d11a5b5fd641919eb2d558b5bcc2dad01a
let currentQuestionIndex = 0;
let score = 0;
let fin = false;

/* base de données de questions et reponses*/
const questions = [
  {
    question: "Quel est le rapport entre Java et JavaScript?",
    answers: [
      "C'est le même langage, mais le nom  JavaScript  est utilisé pour le code s'exécutant dans une page Web",
      "Ce sont deux langages différents, malgré quelques points communs dans la syntaxe",
      "Java est une version améliorée de JavaScript",
      "Java est une île, ça n'a rien à voir !",
    ],
<<<<<<< HEAD
    good: "Ce sont deux langages différents, malgré quelques points communs dans la syntaxe",
=======
    good: "Ce sont deux langages différents, malgré quelques points communs dans la syntaxe"
>>>>>>> fb5fb7d11a5b5fd641919eb2d558b5bcc2dad01a
  },
  {
    question: "En quelle année est né HTML ?",
    answers: [
      "Dans les années 70, avec Arpanet",
      "Entre 1986 et 1988, avec le Club Dorothée",
      "En 1990 exactement, avec la naissance d'Emma Watson",
      "Plutôt en 1993 non ? Sous le mandat Bill Clinton",
    ],
<<<<<<< HEAD
    good: "Dans les années 70, avec Arpanet",
=======
    good: "Dans les années 70, avec Arpanet"
>>>>>>> fb5fb7d11a5b5fd641919eb2d558b5bcc2dad01a
  },
  {
    question: "À quoi sert le langage CSS?",
    answers: [
      "À réaliser des pages dynamiques",
      "À ajouter du style aux documents web",
      "À insérer du contenu dans une page internet",
      "À simuler une application en mode avion durant les trajets dans un bus",
    ],
<<<<<<< HEAD
    good: "À ajouter du style aux documents web",
=======
    good: "À ajouter du style aux documents web"
>>>>>>> fb5fb7d11a5b5fd641919eb2d558b5bcc2dad01a
  },
  {
    question: "Qu'est ce qu'un navigateur web?",
    answers: [
      " Un logiciel capable d'interpréter et d'afficher du code HTML",
      "Un outil permettant d'accéder à Internet",
      " La toute première application mondiale",
      "Une interface pour lire et recevoir des e-mails!",
    ],
<<<<<<< HEAD
    good: " Un logiciel capable d'interpréter et d'afficher du code HTML",
=======
    good: " Un logiciel capable d'interpréter et d'afficher du code HTML"
>>>>>>> fb5fb7d11a5b5fd641919eb2d558b5bcc2dad01a
  },
  {
    question: "Qui est Tim Berners-Lee ?",
    answers: [
      "l’inventeur de Flexbox",
      "l’inventeur du Web",
      "l’inventeur du Responsive Webdesign",
      "l’inventeur de CSS",
    ],
<<<<<<< HEAD
    good: "l’inventeur du Web",
=======
    good: "l’inventeur du Web"
>>>>>>> fb5fb7d11a5b5fd641919eb2d558b5bcc2dad01a
  },
  {
    question: "En combien de jours JavaScript a-t-il été conçu pour Netscape ?",
    answers: [
      "Pendant les fêtes de fin d'année 1993, entre deux morceaux de bûche",
      "En 10 jours seulement, comme un véritable sprint codé",
      "En un an complet, avec beaucoup de café et de nuits blanches",
      "Sous le mandat de Bill Clinton, mais on ne sait pas combien de temps exactement",
    ],
<<<<<<< HEAD
    good: "En 10 jours seulement, comme un véritable sprint codé",
=======
    good: "En 10 jours seulement, comme un véritable sprint codé"
>>>>>>> fb5fb7d11a5b5fd641919eb2d558b5bcc2dad01a
  },
  {
    question: "Quelle est la différence fondamentale entre HTML et CSS ?",
    answers: [
      "HTML construit la maison, CSS choisit la peinture",
      "L'un sert à acheter, l'autre à décorer",
      "HTML est solide, CSS est fluide",
      "Aucune idée, mais ça marche ensemble, et c'est l'essentiel",
    ],
<<<<<<< HEAD
    good: "HTML construit la maison, CSS choisit la peinture",
=======
    good: "HTML construit la maison, CSS choisit la peinture"
>>>>>>> fb5fb7d11a5b5fd641919eb2d558b5bcc2dad01a
  },
  {
    question: "Que signifie CSS?",
    answers: [
      "Cascading Style Sheets",
      "Create Simple Samples",
      "C'est Super Simple !",
      "Choucroute et Saucisses de Strasbourg",
    ],
<<<<<<< HEAD
    good: "Cascading Style Sheets",
  },
  {
    question:
      "Que voulait initialement simplifier l'invention de HTML par Tim Berners-Lee ?",
=======
    good: "Cascading Style Sheets"
  },
  {
    question: "Que voulait initialement simplifier l'invention de HTML par Tim Berners-Lee ?",
>>>>>>> fb5fb7d11a5b5fd641919eb2d558b5bcc2dad01a
    answers: [
      "La commande de pizzas au bureau du CERN",
      "Le partage de documents scientifiques sur le Web",
      "La création de mèmes avant l'heure",
      "L'organisation de soirées quiz entre collègues",
    ],
<<<<<<< HEAD
    good: "Le partage de documents scientifiques sur le Web",
=======
    good: "Le partage de documents scientifiques sur le Web"
>>>>>>> fb5fb7d11a5b5fd641919eb2d558b5bcc2dad01a
  },
  {
    question: "Que signifie l'acronyme AJAX ?",
    answers: [
      "Advanced JavaScript with XMLHttpRequest",
      "Asynchronous JavaScript and XML",
      "JavaScript extensible",
      "Rien, c’est juste une suite de lettres sans aucune signification",
    ],
<<<<<<< HEAD
    good: "Asynchronous JavaScript and XML",
  },
];
=======
    good: "Asynchronous JavaScript and XML"
  }];
>>>>>>> fb5fb7d11a5b5fd641919eb2d558b5bcc2dad01a

/*actions à partir du click sur le start btn */

startButton.addEventListener("click", () => {
  intro.style.display = "none";
  startSection.style.display = "none";
  blocQuestion.style.display = "block";
  showQuestion();
});
/*DEBUT DE LA BOUCLE -- definir une fonction qui fait une boucle de 9tours*/

/*affichage numero de la question, enoncé et les reponses*/
const showQuestion = () => {
<<<<<<< HEAD
  const questionDetails = questions[currentQuestionIndex];
=======
  const questionDetails = questions[currentQuestionIndex]
>>>>>>> fb5fb7d11a5b5fd641919eb2d558b5bcc2dad01a
  questionNumber.textContent = `Question ${currentQuestionIndex + 1}/10`;
  enonce.textContent = questionDetails.question;
  /* RACCOURCI NE FONCTIONNE PAS
    for (let i = 0; i < questionDetails.answers.length; i++) {
      const currentAnswer = questionDetails.answers[i];
      li.textContent = currentAnswer;
      responses.appendChild(li);
    }*/

<<<<<<< HEAD
=======
  //remettre les couleurs à ZERO00000000000000000

>>>>>>> fb5fb7d11a5b5fd641919eb2d558b5bcc2dad01a
  reponse1.textContent = questionDetails.answers[0];
  reponses.appendChild(reponse1);

  reponse2.textContent = questionDetails.answers[1];
  reponses.appendChild(reponse2);

  reponse3.textContent = questionDetails.answers[2];
  reponses.appendChild(reponse3);

  reponse4.textContent = questionDetails.answers[3];
  reponses.appendChild(reponse4);
};

/*selectionner la reponse - afficher en vert si ok sinon en rouge et afficher en vert la bonne+ajouter le btn nxtjusqu'a question 9*/

[reponse1, reponse2, reponse3, reponse4].forEach(function (element) {
  element.addEventListener("click", () => {
<<<<<<< HEAD
    const questionDetails = questions[currentQuestionIndex];

    if (element.textContent === questionDetails.good) {
      element.style.backgroundColor = "green";
      element.style.color = "white";
      score++;
    } else {
      element.style.backgroundColor = "red";
      element.style.color = "white";

      [reponse1, reponse2, reponse3, reponse4].forEach((response) => {
        if (response.textContent === questionDetails.good) {
=======
    /*chercher à ne plus cliquer sur les autres reponses*/
    if (element.textContent == questions[currentQuestionIndex].good) {
      element.style.backgroundColor = "green";
      element.style.color = "white";
      score++;
    }
    else {
      element.style.backgroundColor = "red";
      element.style.color = "white";
      [reponse1, reponse2, reponse3, reponse4].forEach((response) => {
        if (response.textContent === questions[currentQuestionIndex].good) {
>>>>>>> fb5fb7d11a5b5fd641919eb2d558b5bcc2dad01a
          response.style.backgroundColor = "green";
          response.style.color = "white";
        }
      });
    }

    nextButton.style.display = "block";
    nextButton.textContent = "Question suivante";
<<<<<<< HEAD
  });
});

if (currentQuestionIndex < questions.length) {
  showQuestion();
} else {
  ShowScore();
}

const nextQ = () => {
  nextButton.addEventListener("click", () => {
    showQuestion();
  });
};

const ShowScore = () => {
  blocQuestion.style.display = "none";

  if (score > 5) {
    winorloose.textContent = "Bravo!";
    /* pb a afficher l'image */
=======

    /* une fois la reponse choise, faire apparaitre le bouton, incrementer l'index. */
    nextQ()


    currentQuestionIndex++


  });
});


/* quand tu appuie sur le btn next */


const nextQ = () => {



  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      /*mettre la fonction enlever les couleurs*/
      showQuestion()
    }
    else {
      ShowScore()
    }
  });
}

const ShowScore = () => {
  blocQuestion.style.display = "none";
  nextButton.style.display = "block";/*attention le bouton va s'afficher au dessus*/
  nextButton.textContent = 'Play Again'
  if (score > 5) {
    winorloose.textContent = "Bravo!";
    /* pb a afficher l'image */

>>>>>>> fb5fb7d11a5b5fd641919eb2d558b5bcc2dad01a
  } else {
    winorloose.textContent = "Looser!";
    /*finalimg.src = */
  }
  scorediv.textContent = `Tu as obtenu ${score} / ${questions.length}`;

<<<<<<< HEAD
  nextBtn.textContent = "Play Again";
  fin = true;
};
=======

  fin = true;
}

/*chercher à ne plus cliquer sur les autres reponses*/



>>>>>>> fb5fb7d11a5b5fd641919eb2d558b5bcc2dad01a

/*FIN DE LA BOUCLE DE QUESTIONS*/

/*FAIRE APPARAITRE A LA QUESTION 10 UN nouveau bouton "fin"
au clic de fin faire apparaitre le score et les text/image definies (tableaux)*/

<<<<<<< HEAD
=======



>>>>>>> fb5fb7d11a5b5fd641919eb2d558b5bcc2dad01a
/* startButton.addEventListener("click", () => {
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

  const choices = [
    { text: "C'est le même langage, mais le nom  JavaScript  est utilisé pour le code s'exécutant dans une page Web", answer: true, },
    { text: "Ce sont deux langages différents, malgré quelques points communs dans la syntaxe", answer: false, },
    { text: "Java est une version améliorée de JavaScript", answer: false, },
    { text: "Java est une île, ça n'a rien à voir !", answer: false, },
<<<<<<< HEAD
    { text: "C'est le même langage, mais le nom  JavaScript  est utilisé pour le code s'exécutant dans une page Web", answer: true, },
    { text: "Ce sont deux langages différents, malgré quelques points communs dans la syntaxe", answer: false, },
    { text: "Java est une version améliorée de JavaScript", answer: false, },
    { text: "Java est une île, ça n'a rien à voir !", answer: false, },
=======
>>>>>>> fb5fb7d11a5b5fd641919eb2d558b5bcc2dad01a
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
<<<<<<< HEAD
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
    console.log(score);
  });

  // let score = 0;

  // document.score.createElement("p");
  // score.textContent= `${score/10}`;
  // mainSection.appendChild(score);

  // let score = 0;

=======

    ul.appendChild(li);
    console.log(score);
  });

  // let score = 0;

>>>>>>> fb5fb7d11a5b5fd641919eb2d558b5bcc2dad01a
  // document.score.createElement("p");
  // score.textContent= `${score/10}`;
  // mainSection.appendChild(score);

  mainSection.appendChild(container);
  mainSection.appendChild(ul);

}); */
<<<<<<< HEAD

}); */
=======
>>>>>>> fb5fb7d11a5b5fd641919eb2d558b5bcc2dad01a

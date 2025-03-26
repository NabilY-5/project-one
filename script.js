const mainSection = document.querySelector("main");
const intro = document.querySelector(".intro");
const startSection = document.querySelector(".start-section");
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
const finalPage = document.querySelector(".finalpage");
const finalWinner = document.querySelector(".finalwinner");
const finalLooser = document.querySelector(".finallooser");
const nextButton = document.querySelector(".next-btn");
const endButtonDiv = document.querySelector(".end-button");
const dialog = document.querySelector("dialog");
const iButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");


let currentQuestionIndex = 0;
let score = 0;


/* base de données de questions et reponses*/
const questions = [
  {
    question: "Quel est le rapport entre Java et JavaScript?",
    answers: [
      "C'est le même langage, mais le nom  JavaScript  est utilisé pour le code s'exécutant dans une page Web",
      "Java est une version améliorée de JavaScript",
      "Java est une île, ça n'a rien à voir !",
      "Ce sont deux langages différents, malgré quelques points communs dans la syntaxe",
    ],
    good: "Ce sont deux langages différents, malgré quelques points communs dans la syntaxe"
  },
  {
    question: "En quelle année est né HTML ?",
    answers: [
      "Entre 1986 et 1988, avec le Club Dorothée",
      "Dans les années 70, avec Arpanet",
      "En 1990 exactement, avec la naissance d'Emma Watson",
      "Plutôt en 1993 non ? Sous le mandat Bill Clinton",
    ],
    good: "Dans les années 70, avec Arpanet"
  },
  {
    question: "À quoi sert le langage CSS?",
    answers: [
      "À réaliser des pages dynamiques",
      "À ajouter du style aux documents web",
      "À insérer du contenu dans une page internet",
      "À simuler une application en mode avion durant les trajets dans un bus",
    ],
    good: "À ajouter du style aux documents web"
  },
  {
    question: "Qu'est ce qu'un navigateur web?",
    answers: [
      " Un logiciel capable d'interpréter et d'afficher du code HTML",
      "Un outil permettant d'accéder à Internet",
      " La toute première application mondiale",
      "Une interface pour lire et recevoir des e-mails!",
    ],
    good: " Un logiciel capable d'interpréter et d'afficher du code HTML"
  },
  {
    question: "Qui est Tim Berners-Lee ?",
    answers: [
      "l’inventeur de Flexbox",
      "l’inventeur du Responsive Webdesign",
      "l’inventeur du Web",
      "l’inventeur de CSS",
    ],
    good: "l’inventeur du Web"
  },
  {
    question: "En combien de jours JavaScript a-t-il été conçu pour Netscape ?",
    answers: [
      "Pendant les fêtes de fin d'année 1993, entre deux morceaux de bûche",
      "En un an complet, avec beaucoup de café et de nuits blanches",
      "Sous le mandat de Bill Clinton, mais on ne sait pas combien de temps exactement",
      "En 10 jours seulement, comme un véritable sprint codé",
    ],
    good: "En 10 jours seulement, comme un véritable sprint codé"
  },
  {
    question: "Quelle est la différence fondamentale entre HTML et CSS ?",
    answers: [
      "HTML construit la maison, CSS choisit la peinture",
      "L'un sert à acheter, l'autre à décorer",
      "HTML est solide, CSS est fluide",
      "Aucune idée, mais ça marche ensemble, et c'est l'essentiel",
    ],
    good: "HTML construit la maison, CSS choisit la peinture"
  },
  {
    question: "Que signifie CSS?",
    answers: [
      "Create Simple Samples",
      "C'est Super Simple !",
      "Cascading Style Sheets",
      "Choucroute et Saucisses de Strasbourg",
    ],
    good: "Cascading Style Sheets"
  },
  {
    question: "Que voulait initialement simplifier l'invention de HTML par Tim Berners-Lee ?",
    answers: [
      "La commande de pizzas au bureau du CERN",
      "Le partage de documents scientifiques sur le Web",
      "La création de mèmes avant l'heure",
      "L'organisation de soirées quiz entre collègues",
    ],
    good: "Le partage de documents scientifiques sur le Web"
  },
  {
    question: "Que signifie l'acronyme AJAX ?",
    answers: [
      "Advanced JavaScript with XMLHttpRequest",
      "Asynchronous JavaScript and XML",
      "JavaScript extensible",
      "Rien, c’est juste une suite de lettres sans aucune signification",
    ],
    good: "Asynchronous JavaScript and XML"
  }];


iButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

/*actions à partir du click sur le start btn */


startButton.addEventListener("click", () => {
  intro.style.display = "none";
  startSection.style.display = "none";
  blocQuestion.style.display = "block";

  showQuestion();
});

/*affichage numero de la question, enoncé et les reponses*/
const showQuestion = () => {
  const questionDetails = questions[currentQuestionIndex]
  questionNumber.textContent = `Question ${currentQuestionIndex + 1}/10`;
  enonce.textContent = questionDetails.question;

  //remettre les couleurs à ZERO00000000000000000

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
    /*chercher à ne plus cliquer sur les autres reponses*/
    [reponse1, reponse2, reponse3, reponse4].forEach((btn) => {
      btn.style.pointerEvents = "none";
    });

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
          response.style.backgroundColor = "green";
          response.style.color = "white";
        }

      });
    }

    nextButton.style.display = "block";
    nextButton.textContent = "Question suivante";

    nextQ()


    currentQuestionIndex++


  });
});


/* quand tu appuie sur le btn next */


const resetColors = () => {
  [reponse1, reponse2, reponse3, reponse4].forEach((element) => {
    element.style.backgroundColor = "";
    element.style.color = "";
  });
};

const nextQ = () => {
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      showQuestion();
      resetColors();
      nextButton.style.display = "none";
      [reponse1, reponse2, reponse3, reponse4].forEach((btn) => {
        btn.style.pointerEvents = "auto";
      });
    }
    else {
      ShowScore()
      console.log(ShowScore);

    }
  });
}



const ShowScore = () => {
  blocQuestion.style.display = "none";
  endButtonDiv.style.display = "block";
  finalPage.style.display ="block";



  if (score > 5) {
    winorloose.textContent = "Bravo !";
    finalWinner.style.display ="block";
    
  } else {
    winorloose.textContent = "Looser !";
    finalLooser.style.display ="block";
  }


  scorediv.textContent = `Tu as obtenu ${score} / ${questions.length}`;




}


endButtonDiv.textContent = "Play Again";
endButtonDiv.addEventListener("click", () => {
  location.reload();
});
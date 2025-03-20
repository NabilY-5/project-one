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

  const choices = [
    {text: "C'est le même langage, mais le nom  JavaScript  est utilisé pour le code s'exécutant dans une page Web",
     answer: true,},
    {text: "Ce sont deux langages différents, malgré quelques points communs dans la syntaxe", answer: false,},
    {text: "Java est une version améliorée de JavaScript", answer: false,},
    {text: "Java est une île, ça n'a rien à voir !", answer: false,},
  ];

  choices.forEach((choiceAnswer) => {
    const li = document.createElement("li");
    li.textContent = choiceAnswer.text;

    li.addEventListener("click", () => {
      if (choiceAnswer.answer) {
        li.style.backgroundColor="green";
        li.style.color="white";
      }
        else {
          li.style.backgroundColor="red";
          li.style.color="white";
        }
      });

    ul.appendChild(li);
    console.log(typeof answer);
  });

    // let score = 0;

    // document.score.createElement("p");
    // score.textContent= `${score/10}`;
    // mainSection.appendChild(score);


  mainSection.appendChild(container);
  mainSection.appendChild(ul);

});
    
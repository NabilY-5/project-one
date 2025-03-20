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
    "C'est le même langage, mais le nom  JavaScript  est utilisé pour le code s'exécutant dans une page Web",
    "Ce sont deux langages différents, malgré quelques points communs dans la syntaxe",
    "Java est une version améliorée de JavaScript",
    "Java est une île, ça n'a rien à voir !",
  ];
  choices.forEach((choiceAnswer) => {
    const li = document.createElement("li");
    li.textContent = choiceAnswer;
    li.onclick = () => ;

    ul.appendChild(li);
  });

  mainSection.appendChild(container);
  mainSection.appendChild(ul);
});

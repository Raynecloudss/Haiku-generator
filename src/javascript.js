function generateHaiku(event) {
  event.preventDefault();
  let haikuElement = document.querySelector("#haiku-lines");
  new Typewriter("#haiku-lines", {
    strings: "Consider me",
    autoStart: true,
    delay: 85,
    cursor: null,
  });
}

let poemFormElement = document.querySelector("#haiku-generator");
poemFormElement.addEventListener("submit", generateHaiku);

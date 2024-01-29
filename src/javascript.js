function displayHaiku(response) {
  new Typewriter("#haiku-lines", {
    strings: response.data.answer,
    autoStart: true,
    delay: 85,
    cursor: null,
  });
}

function generateHaiku(event) {
  event.preventDefault();

  let topicInput = document.querySelector("#topic");
  let apiKey = "a38c4204at848f00bec4c7fabo002e83";
  let prompt = `User instructions: Generate a famous haiku about ${topicInput.value}`;
  let context =
    "You are a haiku expert. Your missions is to generate a 3 line haiku in basic HTML using <em> and <br /> without a title. Make sure to follow user instructions. Make sure sign the haiku 'SheCodes AI' at the bottom, and not the top using <strong>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayHaiku);

  let haikuElement = document.querySelector("#haiku-lines");
}

let poemFormElement = document.querySelector("#haiku-generator");
poemFormElement.addEventListener("submit", generateHaiku);

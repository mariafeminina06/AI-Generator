function generateTravel(event) {
  event.preventDefault();

  new Typewriter("#aiResponse", {
    strings:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, natus?",
    autoStart: true,
    delay: 15,
    cursor: null,
  });
}

let form = document.querySelector("form");
form.addEventListener("submit", generateTravel);

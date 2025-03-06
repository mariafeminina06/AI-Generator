function displayResponse(response) {
  console.log(response.data.answer);
  let aiResponseField = document.querySelector("#aiResponse");
  aiResponseField.classList.remove("generating");

  new Typewriter("#aiResponse", {
    strings: response.data.answer,
    autoStart: true,
    delay: 15,
    cursor: null,
  });
}

function generateTravel(event) {
  event.preventDefault();
  let destination = document.querySelector("#destination");
  let key = "72e8349d9ea254f743oacta0ef654b86";
  let prompt = `User Instruction: Please provide popular tourist attractions, popular eateries, local delicacies, modes of transport, local currency and popular hotels in the area while visiting ${destination.value}.`;
  let context =
    "You are an AI travel assistant. Please provide a travel guide based on the user instructions provided, providing the answer in basic HTML.  Do not include the ```htm`. Begin with the title `Travel Guide for `. Use a header list for each section of travel information and ol for the information. Be sure to follow the instructions and provide all needed category information.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  axios.get(apiUrl).then(displayResponse);

  let aiResponseField = document.querySelector("#aiResponse");
  aiResponseField.classList.remove("hidden");
  aiResponseField.classList.add("generating");
  aiResponseField.innerHTML = `One Moment... ⏳ <br />Generating your Travel Guide for <strong>${destination.value}</strong>`;
}

let form = document.querySelector("form");
form.addEventListener("submit", generateTravel);

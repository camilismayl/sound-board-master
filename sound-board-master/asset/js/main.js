const audios = [...document.querySelectorAll("audio")];
const buttonContainer = document.querySelector(".buttons");

// To take ID of audios and make them inner text of new buttons
audios.forEach((audio) => {
  let id = audio.getAttribute("id");
  const button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = id;

  buttonClick(button, audio);

  buttonContainer.appendChild(button);
});

// Function to click event of button
function buttonClick(button, audio) {
  button.addEventListener("click", () => {
    stopSounds();
    audio.play();
  });
}

// Function to stop audios
function stopSounds() {
  audios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}

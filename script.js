const textInput = document.querySelector('#text');
const speedInput = document.querySelector('#speed');
const ratePosition = document.querySelector('#rate');
const buttonPause = document.querySelector('#button-pause');

const utterance = new SpeechSynthesisUtterance();

speedInput.addEventListener('click', () => {
  const rateInput = speedInput.value;
  ratePosition.innerHTML = rateInput;
  console.log(rateInput);

})

buttonPause.addEventListener('click', pauseText)


// Falar em portugues.
utterance.lang = "pt-BR";

// Comecar a falar
const speak = (event) => {
  if (speechSynthesis.paused || speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }
  utterance.rate = speedInput.value || 1;
  speechSynthesis.speak(utterance);
}

// Parar de falar
const stop = () => {
  speechSynthesis.cancel();
  console.log("aqui...");
}

// pausa a fala do texto
function pauseText() {
  if (speechSynthesis.speaking) speechSynthesis.pause();
}

const setText = (event) => {
  utterance.text = event.target.innerText;

}
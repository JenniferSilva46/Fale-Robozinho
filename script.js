const utterance = new SpeechSynthesisUtterance();

utterance.lang = "pt-BR";
//utterance.rate = 2;

function speak() {
	speechSynthesis.speak(utterance);
}

function stop() {
  speechSynthesis.cancel();
  console.log("aqui...");
}

function setText(event) {
    utterance.text = event.target.innerText;
    console.log("aqui");
}

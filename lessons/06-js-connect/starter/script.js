// Готовая команда: ля первой октавы, 440 Гц. Разберём осциллятор на уроке 16.
function playA4() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.frequency.value = 440;
  osc.type = "sine";
  gain.gain.value = 0.12;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
  osc.stop(ctx.currentTime + 0.4);
}

// TODO: найди #playBtn и #status, по клику меняй текст и цвет
const playButton = document.querySelector("#playBtn");
const status = document.querySelector("#status");
const toneBtn = document.querySelector("#toneBtn");
console.log( playButton)
// TODO: найди #toneBtn, по клику вызови playA4()

// Пример:
// const playBtn = document.querySelector("#playBtn");
// const toneBtn = document.querySelector("#toneBtn");
// const status = document.querySelector("#status");
let isPlayng = false
playBtn.addEventListener("click", function (){
  isPlayng= !isPlayng
  if (isPlayng) {
    playBtn.style.background = "tomato"
    playBtn.textContent = "Pause"
    status.textContent = "Идет запись"
  }else{
    playBtn.style.background = "#7c5cff"
    playBtn.textContent = "Play"
    status.textContent = "Тишина… нажми Play или сыграй ля"
  }
})


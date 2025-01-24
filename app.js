const btn = document.getElementsByClassName("button-container")[0];
const message = document.getElementById("message");
const h1 = document.getElementById("btnInfo");

function buttonPressed() {
  if (btn.style.display === "none") {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
    h1.style.display = "none";
    message.style.display = "block";
    message.innerHTML = "<h1>Nuclear launch...</h1>";

    let countdown = 3;
    const interval = setInterval(() => {
      if (countdown > 0) {
        message.innerHTML = `<h1>${countdown}</h1>`;
        countdown--;
      } else {
        clearInterval(interval);
        const randomIq = Math.floor(Math.random() * 150);
        let iqMessage = `<h1>Your IQ is ${randomIq}</h1>`;

        if (randomIq < 70) {
          iqMessage += `<p>You are as intelligent as a <strong>🐒chimpanzee XD</strong>.</p>`;
        } else if (randomIq < 90) {
          iqMessage += `<p>You are as intelligent as a <strong>🐬dolphin XD</strong>.</p>`;
        } else if (randomIq < 130) {
          iqMessage += `<p>You are as intelligent as a <strong>🐶dog XD</strong>.</p>`;
        } else {
          iqMessage += `<p>You are above average intelligence!</p>`;
        }
        message.innerHTML = iqMessage;
      }
    }, 1000);
  }
}
btn.addEventListener("click", buttonPressed);

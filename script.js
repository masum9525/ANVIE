const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const title = document.getElementById("title");
const image = document.querySelector(".image");

// Make NO button run away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// YES clicked 💖
yesBtn.addEventListener("click", () => {
  title.textContent = "Yayyyyy 😍💘";
  question.textContent = "See you on the 14th, my Valentine ❤️";
  image.src = "dance.gif";

  noBtn.style.display = "none";
  yesBtn.style.display = "none";

  // Optional sound
  const audio = new Audio("Minions Cheering.mp4");
  audio.play().catch(() => {});
});

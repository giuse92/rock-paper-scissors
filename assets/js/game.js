let arrayOne = [
  { name: "Scissors", imgUrl: "./assets/images/icon-scissors.svg" },
  { name: "Paper", imgUrl: "./assets/images/icon-paper.svg" },
  { name: "Rock", imgUrl: "./assets/images/icon-rock.svg" },
  { name: "Lizard", imgUrl: "./assets/images/icon-lizard.svg" },
  { name: "Spock", imgUrl: "./assets/images/icon-spock.svg" },
];
//["Scissors", "Paper", "Rock", "Lizard", "Spock"]
let arrayTwo = arrayOne;
let pentagon = document.querySelector(".pentagon");
if (window.localStorage.getItem("score") === null) {
  window.localStorage.setItem("score", 0);
}

let addScore = (plusThis) => {
  let score = JSON.parse(window.localStorage.getItem("score"));
  window.localStorage.setItem("score", score + plusThis);
  let scoreSpan = document.querySelector(".score span");
  scoreSpan.innerHTML = score;
};

addScore(+0);

let winLose = () => {
  let youPicked = document.querySelector("button.you-picked");
  let housePicked = document.querySelector("button.house-picked");
  switch (true) {
    case youPicked.innerHTML === housePicked.innerHTML:
      addScore(+0);
      alert("pareggio");
      break;
    case youPicked.innerHTML === "Scissors" &&
      housePicked.innerHTML === "Paper":
      addScore(+1);
      alert("vinto");
      break;
    case youPicked.innerHTML === "Paper" &&
      housePicked.innerHTML === "Scissors":
      addScore(-1);
      alert("perso");
      break;
    case youPicked.innerHTML === "Paper" && housePicked.innerHTML === "Rock":
      addScore(+1);
      alert("vinto");
      break;
    case youPicked.innerHTML === "Rock" && housePicked.innerHTML === "Paper":
      addScore(-1);
      alert("perso");
      break;
    case youPicked.innerHTML === "Rock" && housePicked.innerHTML === "Lizard":
      addScore(+1);
      alert("vinto");
      break;
    case youPicked.innerHTML === "Lizard" && housePicked.innerHTML === "Rock":
      addScore(-1);
      alert("perso");
      break;
    case youPicked.innerHTML === "Lizard" && housePicked.innerHTML === "Spock":
      addScore(+1);
      alert("vinto");
      break;
    case youPicked.innerHTML === "Spock" && housePicked.innerHTML === "Lizard":
      addScore(-1);
      alert("perso");
      break;
    case youPicked.innerHTML === "Spock" &&
      housePicked.innerHTML === "Scissors":
      addScore(+1);
      alert("vinto");
      break;
    case youPicked.innerHTML === "Scissors" &&
      housePicked.innerHTML === "Spock":
      addScore(-1);
      alert("perso");
      break;
    case youPicked.innerHTML === "Scissors" &&
      housePicked.innerHTML === "Lizard":
      addScore(+1);
      alert("vinto");
      break;
    case youPicked.innerHTML === "Lizard" &&
      housePicked.innerHTML === "Scissors":
      addScore(-1);
      alert("perso");
      break;
    case youPicked.innerHTML === "Paper" && housePicked.innerHTML === "Spock":
      addScore(+1);
      alert("vinto");
      break;
    case youPicked.innerHTML === "Spock" && housePicked.innerHTML === "Paper":
      addScore(-1);
      alert("perso");
      break;
    case youPicked.innerHTML === "Rock" && housePicked.innerHTML === "Scissors":
      addScore(+1);
      alert("vinto");
      break;
    case youPicked.innerHTML === "Scissors" && housePicked.innerHTML === "Rock":
      addScore(-1);
      alert("perso");
      break;
    case youPicked.innerHTML === "Lizard" && housePicked.innerHTML === "Paper":
      addScore(+1);
      alert("vinto");
      break;
    case youPicked.innerHTML === "Paper" && housePicked.innerHTML === "Lizard":
      addScore(-1);
      alert("perso");
      break;
    case youPicked.innerHTML === "Spock" && housePicked.innerHTML === "Rock":
      addScore(+1);
      alert("vinto");
      break;
    case youPicked.innerHTML === "Rock" && housePicked.innerHTML === "Spock":
      addScore(-1);
      alert("perso");
      break;
    default:
      alert("Qualcosa è andato storto...");
      break;
  }
};

let housePicked = (arr) => {
  let housePicked = document.createElement("button");
  let localPicked = arr[Math.floor(Math.random() * arr.length)].name;
  housePicked.disabled = true;
  housePicked.textContent = localPicked;
  housePicked.classList.add("house-picked");
  let youPicked = document.querySelector("button.you-picked");
  youPicked.insertAdjacentElement("afterend", housePicked);
  let playAgainBtn = document.createElement("button");
  playAgainBtn.className = "play-again";
  playAgainBtn.textContent = "Play Again";
  housePicked.after(playAgainBtn);
  playAgainBtn.onclick = (e) => {
    let yourPick = document.querySelector("button.you-picked");
    let housePick = document.querySelector("button.house-picked");
    if (yourPick.disabled === true) {
      yourPick.remove();
      housePick.remove();
      buildBtns(arrayOne);
      playAgainBtn.remove();
    }
  };
};

let youPicked = (e) => {
  let youPickedThis = e.currentTarget.innerText;
  let btns = document.querySelectorAll("button.you-picked");
  for (let btn of btns) {
    if (btn.innerText === `${youPickedThis}`) {
      btn.disabled = true;
    } else {
      btn.remove();
    }
  }
  housePicked(arrayTwo);
  winLose();
  addScore(+0);
};

let buildBtns = (arr) => {
  for (let item of arr) {
    let btn = document.createElement("button");
    btn.className = "you-picked";
    btn.innerText = item.name;
    btn.style.backgroundImage = `url(${item.imgUrl})`;
    pentagon.insertAdjacentElement("afterbegin", btn);
    btn.addEventListener("click", youPicked);
  }
};

buildBtns(arrayOne);

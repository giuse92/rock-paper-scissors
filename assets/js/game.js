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
    case youPicked.name === housePicked.name:
      addScore(+0);
      break;
    case youPicked.name === "Scissors" && housePicked.name === "Paper":
      addScore(+1);
      break;
    case youPicked.name === "Paper" && housePicked.name === "Scissors":
      addScore(-1);
      break;
    case youPicked.name === "Paper" && housePicked.name === "Rock":
      addScore(+1);
      break;
    case youPicked.name === "Rock" && housePicked.name === "Paper":
      addScore(-1);
      break;
    case youPicked.name === "Rock" && housePicked.name === "Lizard":
      addScore(+1);
      break;
    case youPicked.name === "Lizard" && housePicked.name === "Rock":
      addScore(-1);
      break;
    case youPicked.name === "Lizard" && housePicked.name === "Spock":
      addScore(+1);
      break;
    case youPicked.name === "Spock" && housePicked.name === "Lizard":
      addScore(-1);
      break;
    case youPicked.name === "Spock" && housePicked.name === "Scissors":
      addScore(+1);
      break;
    case youPicked.name === "Scissors" && housePicked.name === "Spock":
      addScore(-1);
      break;
    case youPicked.name === "Scissors" && housePicked.name === "Lizard":
      addScore(+1);
      break;
    case youPicked.name === "Lizard" && housePicked.name === "Scissors":
      addScore(-1);
      break;
    case youPicked.name === "Paper" && housePicked.name === "Spock":
      addScore(+1);
      break;
    case youPicked.name === "Spock" && housePicked.name === "Paper":
      addScore(-1);
      break;
    case youPicked.name === "Rock" && housePicked.name === "Scissors":
      addScore(+1);
      break;
    case youPicked.name === "Scissors" && housePicked.name === "Rock":
      addScore(-1);
      break;
    case youPicked.name === "Lizard" && housePicked.name === "Paper":
      addScore(+1);
      break;
    case youPicked.name === "Paper" && housePicked.name === "Lizard":
      addScore(-1);
      break;
    case youPicked.name === "Spock" && housePicked.name === "Rock":
      addScore(+1);
      break;
    case youPicked.name === "Rock" && housePicked.name === "Spock":
      addScore(-1);
      break;
    default:
      alert("Qualcosa è andato storto...");
      break;
  }
};

let housePicked = (arr) => {
  let housePicked = document.createElement("button");
  let localPicked = arr[Math.floor(Math.random() * arr.length)];
  housePicked.disabled = true;
  housePicked.name = localPicked.name;
  housePicked.classList.add("house-picked");
  housePicked.style.backgroundImage = `url(${localPicked.imgUrl})`;
  let youPicked = document.querySelector("button.you-picked");
  youPicked.insertAdjacentElement("afterend", housePicked);
  let playAgainBtn = document.createElement("button");
  playAgainBtn.className = "play-again";
  playAgainBtn.textContent = "Play Again";
  housePicked.after(playAgainBtn);
  playAgainBtn.onclick = (e) => {
    let yourPick = document.querySelector("button.you-picked");
    let housePick = document.querySelector("button.house-picked");
    pentagon.style.backgroundImage = "url('./assets/images/bg-pentagon.svg')";
    if (yourPick.disabled === true) {
      yourPick.remove();
      housePick.remove();
      buildBtns(arrayOne);
      playAgainBtn.remove();
    }
  };
};

let youPicked = (e) => {
  let youPickedThis = e.currentTarget;
  let result = document.createElement("div");
  let btns = document.querySelectorAll("button.you-picked");
  pentagon.style.backgroundImage = "none";
  for (let btn of btns) {
    if (btn.name === `${youPickedThis.name}`) {
      btn.disabled = true;
      result.prepend(btn);
    } else {
      btn.remove();
    }
  }
  pentagon.append(result);
  result.className = "result";
  housePicked(arrayTwo);
  let housePickedBtn = document.querySelector("button.house-picked");
  result.append(housePickedBtn);
  winLose();
  addScore(+0);
};

let buildBtns = (arr) => {
  for (let item of arr) {
    let btn = document.createElement("button");
    btn.className = "you-picked";
    btn.name = item.name;
    btn.style.backgroundImage = `url(${item.imgUrl})`;
    pentagon.insertAdjacentElement("afterbegin", btn);
    btn.addEventListener("click", youPicked);
  }
};

buildBtns(arrayOne);

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

let highlightWinner = (youWinYouLose) => {
  let resultYouPicked = document.querySelector(
    ".pentagon .result .section-pick .you-picked"
  );
  let resultYouPickedStyle = getComputedStyle(resultYouPicked);
  let resultHousePicked = document.querySelector(
    ".pentagon .result .section-pick .house-picked"
  );
  let resultHousePickedStyle = getComputedStyle(resultHousePicked);
  if (youWinYouLose === "you win") {
    resultYouPicked.setAttribute(
      "style",
      `background-image: ${resultYouPickedStyle.backgroundImage}; pointer-events:none; box-shadow: ${resultYouPickedStyle.boxShadow}, 0px 0px 0 32px rgb(255 255 255 / 15%), 0 0 0 64px rgb(255 255 255 / 10%), 0 0 0 96px rgb(255 255 255 / 5%);`
    );
  } else if (youWinYouLose === "you lose") {
    resultHousePicked.setAttribute(
      "style",
      `background-image: ${resultHousePickedStyle.backgroundImage}; pointer-events:none; box-shadow: ${resultHousePickedStyle.boxShadow}, 0px 0px 0 32px rgb(255 255 255 / 15%), 0 0 0 64px rgb(255 255 255 / 10%), 0 0 0 96px rgb(255 255 255 / 5%);`
    );
  }
};

let addScore = (plusThis, text) => {
  let score = JSON.parse(window.localStorage.getItem("score"));
  window.localStorage.setItem("score", score + plusThis);
  let scoreSpan = document.querySelector(".score span");
  scoreSpan.innerHTML = score;
  let sectionWinLose = document.querySelector(".result .section-win-lose p");
  if (text !== null) {
    sectionWinLose.prepend(text);
    highlightWinner(text);
  }
};

addScore(+0, null);

let winLose = () => {
  let youPicked = document.querySelector("button.you-picked");
  let housePicked = document.querySelector("button.house-picked");
  switch (true) {
    case youPicked.name === housePicked.name:
      addScore(+0, "tie");
      break;
    case youPicked.name === "Scissors" && housePicked.name === "Paper":
      addScore(+1, "you win");
      break;
    case youPicked.name === "Paper" && housePicked.name === "Scissors":
      addScore(-1, "you lose");
      break;
    case youPicked.name === "Paper" && housePicked.name === "Rock":
      addScore(+1, "you win");
      break;
    case youPicked.name === "Rock" && housePicked.name === "Paper":
      addScore(-1, "you lose");
      break;
    case youPicked.name === "Rock" && housePicked.name === "Lizard":
      addScore(+1, "you win");
      break;
    case youPicked.name === "Lizard" && housePicked.name === "Rock":
      addScore(-1, "you lose");
      break;
    case youPicked.name === "Lizard" && housePicked.name === "Spock":
      addScore(+1, "you win");
      break;
    case youPicked.name === "Spock" && housePicked.name === "Lizard":
      addScore(-1, "you lose");
      break;
    case youPicked.name === "Spock" && housePicked.name === "Scissors":
      addScore(+1, "you win");
      break;
    case youPicked.name === "Scissors" && housePicked.name === "Spock":
      addScore(-1, "you lose");
      break;
    case youPicked.name === "Scissors" && housePicked.name === "Lizard":
      addScore(+1, "you win");
      break;
    case youPicked.name === "Lizard" && housePicked.name === "Scissors":
      addScore(-1, "you lose");
      break;
    case youPicked.name === "Paper" && housePicked.name === "Spock":
      addScore(+1, "you win");
      break;
    case youPicked.name === "Spock" && housePicked.name === "Paper":
      addScore(-1, "you lose");
      break;
    case youPicked.name === "Rock" && housePicked.name === "Scissors":
      addScore(+1, "you win");
      break;
    case youPicked.name === "Scissors" && housePicked.name === "Rock":
      addScore(-1, "you lose");
      break;
    case youPicked.name === "Lizard" && housePicked.name === "Paper":
      addScore(+1, "you win");
      break;
    case youPicked.name === "Paper" && housePicked.name === "Lizard":
      addScore(-1, "you lose");
      break;
    case youPicked.name === "Spock" && housePicked.name === "Rock":
      addScore(+1, "you win");
      break;
    case youPicked.name === "Rock" && housePicked.name === "Spock":
      addScore(-1, "you lose");
      break;
    default:
      alert("Something went wrong...");
      break;
  }
};

let housePicked = (arr) => {
  let resultDiv = document.querySelector(".pentagon .result");
  let housePicked = document.createElement("button");
  let localPicked = arr[Math.floor(Math.random() * arr.length)];
  housePicked.style.pointerEvents = "none";
  housePicked.name = localPicked.name;
  housePicked.classList.add("house-picked");
  housePicked.style.backgroundImage = `url(${localPicked.imgUrl})`;
  let youPicked = document.querySelector("button.you-picked");
  let playAgainBtn = document.createElement("button");
  playAgainBtn.className = "play-again";
  playAgainBtn.textContent = "Play Again";

  let sectionYouPicked = document.createElement("div");
  let titleYouPicked = document.createElement("p");
  titleYouPicked.textContent = "you picked";
  sectionYouPicked.className = "section-pick";
  sectionYouPicked.append(titleYouPicked, youPicked);
  let sectionWinLose = document.createElement("div");
  let titleWinLose = document.createElement("p");
  sectionWinLose.className = "section-win-lose";
  sectionWinLose.append(titleWinLose, playAgainBtn);
  let sectionHousePicked = document.createElement("div");
  let titleHousePicked = document.createElement("p");
  titleHousePicked.textContent = "the house picked";
  sectionHousePicked.className = "section-pick";
  sectionHousePicked.append(titleHousePicked, housePicked);
  resultDiv.append(sectionYouPicked, sectionWinLose, sectionHousePicked);

  playAgainBtn.onclick = (e) => {
    let yourPick = document.querySelector("button.you-picked");
    yourPick.classList.add("you-picked");
    let housePick = document.querySelector("button.house-picked");
    housePicked.classList.add("house-picked");
    if (window.outerWidth > 425) {
      pentagon.style.margin = "150px 0";
    } else {
      pentagon.style.margin = "110px auto";
      pentagon.style.marginTop = "50px";
    }

    pentagon.style.backgroundImage = "url('./assets/images/bg-pentagon.svg')";
    if (yourPick.style.pointerEvents === "none") {
      yourPick.remove();
      housePick.remove();
      buildBtns(arrayOne);
      playAgainBtn.remove();
      resultDiv.remove();
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
      btn.style.pointerEvents = "none";
      result.prepend(btn);
    } else {
      btn.remove();
    }
  }
  pentagon.style.margin = "20px 0";
  pentagon.append(result);
  result.className = "result";
  housePicked(arrayTwo);
  //let housePickedBtn = document.querySelector("button.house-picked");
  //result.append(housePickedBtn);
  winLose();
  addScore(+0, null);
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

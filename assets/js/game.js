let arrayOne = ["Scissors", "Paper", "Rock", "Lizard", "Spock"];
let arrayTwo = arrayOne;
let attribution = document.querySelector(".attribution");
let playAgainBtn = document.querySelector("button");

let winLose = () => {
  let youPicked = document.querySelector("button.you-picked");
  let pcPicked = document.querySelector("span.pc-picked");
  let score = null;
  switch (true) {
    case youPicked.innerHTML === pcPicked.innerHTML:
      alert("+0");
      break;
    case youPicked.innerHTML === "Scissors" && pcPicked.innerHTML === "Paper":
      alert("+1");
      break;
    case youPicked.innerHTML === "Paper" && pcPicked.innerHTML === "Scissors":
      alert("-1");
      break;
    case youPicked.innerHTML === "Paper" && pcPicked.innerHTML === "Rock":
      alert("+1");
      break;
    case youPicked.innerHTML === "Rock" && pcPicked.innerHTML === "Paper":
      alert("-1");
      break;
    case youPicked.innerHTML === "Rock" && pcPicked.innerHTML === "Lizard":
      alert("+1");
      break;
    case youPicked.innerHTML === "Lizard" && pcPicked.innerHTML === "Rock":
      alert("-1");
      break;
    case youPicked.innerHTML === "Lizard" && pcPicked.innerHTML === "Spock":
      alert("+1");
      break;
    case youPicked.innerHTML === "Spock" && pcPicked.innerHTML === "Lizard":
      alert("-1");
      break;
    case youPicked.innerHTML === "Spock" && pcPicked.innerHTML === "Scissors":
      alert("+1");
      break;
    case youPicked.innerHTML === "Scissors" && pcPicked.innerHTML === "Spock":
      alert("-1");
      break;
    case youPicked.innerHTML === "Scissors" && pcPicked.innerHTML === "Lizard":
      alert("+1");
      break;
    case youPicked.innerHTML === "Lizard" && pcPicked.innerHTML === "Scissors":
      alert("-1");
      break;
    case youPicked.innerHTML === "Paper" && pcPicked.innerHTML === "Spock":
      alert("+1");
      break;
    case youPicked.innerHTML === "Spock" && pcPicked.innerHTML === "Paper":
      alert("-1");
      break;
    case youPicked.innerHTML === "Rock" && pcPicked.innerHTML === "Scissors":
      alert("+1");
      break;
    case youPicked.innerHTML === "Scissors" && pcPicked.innerHTML === "Rock":
      alert("-1");
      break;
    case youPicked.innerHTML === "Lizard" && pcPicked.innerHTML === "Paper":
      alert("+1");
      break;
    case youPicked.innerHTML === "Paper" && pcPicked.innerHTML === "Lizard":
      alert("-1");
      break;
    case youPicked.innerHTML === "Spock" && pcPicked.innerHTML === "Rock":
      alert("+1");
      break;
    case youPicked.innerHTML === "Rock" && pcPicked.innerHTML === "Spock":
      alert("-1");
      break;
    default:
      alert("Qualcosa è andato storto...");
      break;
  }
};

let pcPicked = (arr) => {
  let pcPicked = document.createElement("span");
  let localPicked = arr[Math.floor(Math.random() * arr.length)];
  pcPicked.textContent = localPicked;
  pcPicked.classList.add("pc-picked");
  let youPicked = document.querySelector("button.you-picked");
  youPicked.insertAdjacentElement("afterend", pcPicked);
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
  pcPicked(arrayTwo);
  winLose();
};

let buildBtns = (arr) => {
  for (let item of arr) {
    let btn = document.createElement("button");
    btn.className = "you-picked";
    btn.innerText = item;
    attribution.insertAdjacentElement("beforebegin", btn);
    btn.addEventListener("click", youPicked);
  }
};

buildBtns(arrayOne);

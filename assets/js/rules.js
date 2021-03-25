let rulesModalBtn = document.querySelector("button.modal-rules");
let main = document.querySelector("main");
let footer = document.querySelector("footer");

let disableOrEnable = (rule) => {
  main.style.pointerEvents = rule;
  footer.style.pointerEvents = rule;
};

let openModal = (e) => {
  let showRulesModal = document.createElement("section");
  showRulesModal.className = "show-rules";
  let modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  let modalTitle = document.createElement("h2");
  modalTitle.textContent = "rules";
  let close = document.createElement("button");
  let closeImg = document.createElement("img");
  closeImg.src = "./assets/images/icon-close.svg";
  close.append(closeImg);
  close.addEventListener("click", closeModal);
  modalHeader.append(modalTitle, close);
  let rulesImg = document.createElement("img");
  rulesImg.src = "./assets/images/image-rules-bonus.svg";
  rulesImg.className = "rules-image-modal";
  showRulesModal.append(modalHeader, rulesImg);
  document.body.prepend(showRulesModal);
  rulesModalBtn.disabled = true;
  main.style.opacity = 0.2;
  disableOrEnable("none");
};

let closeModal = (e) => {
  let showedModal = document.querySelector("section.show-rules");
  showedModal.remove();
  rulesModalBtn.disabled = false;
  disableOrEnable("auto");
  main.style.opacity = 1;
};

rulesModalBtn.addEventListener("click", openModal);

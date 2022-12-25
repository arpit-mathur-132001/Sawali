const currentEl = document.getElementById("current");
const prevBtn1 = document.getElementById("prev-1");
const nextBtn1 = document.getElementById("next-1");
const prevNext1 = document.getElementById("prev-next-1");
const prevBtn2 = document.getElementById("prev-2");
const nextBtn2 = document.getElementById("next-2");
const prevNext2 = document.getElementById("prev-next-2");
const prevBtn3 = document.getElementById("prev-3");
const nextBtn3 = document.getElementById("next-3");
const prevNext3 = document.getElementById("prev-next-3");

// Next button
nextBtn1.addEventListener("click", () => {
  if (notes.length !== 0) {
    cardsEl[currentActiveCard].className = "card left";
    codesEl[currentActiveCard].className = "code left";
    inputEl[currentActiveCard].className = "input-container left";

    currentActiveCard = currentActiveCard + 1;

    updateCodeText(currentActiveCard);
    updateCardText(currentActiveCard);

    if (currentActiveCard > cardsEl.length - 1) {
      currentActiveCard = cardsEl.length - 1;
    }

    cardsEl[currentActiveCard].className = "card active";
    codesEl[currentActiveCard].className = "code active";
    inputEl[currentActiveCard].className = "input-container active";

    updateCurrentText();

    createCardForm.setAttribute(
      "action",
      `note/${lastId}/${titleName}/${currentActiveCard + 1}`
    );
  }
  if (currentActiveCard >= 9 && currentActiveCard < 99) {
    document.getElementById("prev-next-1").style =
      "display:flex; flex-direction:column; margin: auto 26.5px";
  }

  if (currentActiveCard >= 99) {
    document.getElementById("prev-next-1").style =
      "display:flex; flex-direction:column; margin: auto 18.5px;";
  }
});

// Prev button
prevBtn1.addEventListener("click", () => {
  if (notes.length !== 0) {
    cardsEl[currentActiveCard].className = "card right";
    codesEl[currentActiveCard].className = "code right";
    inputEl[currentActiveCard].className = "input-container right";

    currentActiveCard = currentActiveCard - 1;

    updateCodeText(currentActiveCard);
    updateCardText(currentActiveCard);

    if (currentActiveCard < 0) {
      currentActiveCard = 0;
    }

    if (currentActiveCard !== 0) {
      cardsEl[currentActiveCard - 1].className = "card left";
      codesEl[currentActiveCard - 1].className = "code left";
      inputEl[currentActiveCard - 1].className = "input-container left";
    }

    cardsEl[currentActiveCard].className = "card active";
    codesEl[currentActiveCard].className = "code active";
    inputEl[currentActiveCard].className = "input-container active";

    updateCurrentText();

    createCardForm.setAttribute(
      "action",
      `note/${lastId}/${titleName}/${currentActiveCard + 1}`
    );
  }
  if (currentActiveCard >= 9 && currentActiveCard < 99) {
    document.getElementById("prev-next-1").style =
      "display:flex; flex-direction:column; margin: auto 26.5px";
  }
  if (currentActiveCard < 9) {
    document.getElementById("prev-next-1").style =
      "display:inherit; margin: auto 10px";
  }
});

// Next button
nextBtn2.addEventListener("click", () => {
  if (notes.length !== 0) {
    cardsEl[currentActiveCard].className = "card left";
    codesEl[currentActiveCard].className = "code left";
    inputEl[currentActiveCard].className = "input-container left";

    currentActiveCard = currentActiveCard + 1;

    updateCodeText(currentActiveCard);
    updateCardText(currentActiveCard);

    if (currentActiveCard > cardsEl.length - 1) {
      currentActiveCard = cardsEl.length - 1;
    }

    cardsEl[currentActiveCard].className = "card active";
    codesEl[currentActiveCard].className = "code active";
    inputEl[currentActiveCard].className = "input-container active";

    document.getElementById("current").innerText = `${currentActiveCard + 1}/${
      cardsEl.length
    }`;

    createCardForm.setAttribute(
      "action",
      `note/${lastId}/${titleName}/${currentActiveCard + 1}`
    );
  }
});

// Prev button
prevBtn2.addEventListener("click", () => {
  if (notes.length !== 0) {
    cardsEl[currentActiveCard].className = "card right";
    codesEl[currentActiveCard].className = "code right";
    inputEl[currentActiveCard].className = "input-container right";

    currentActiveCard = currentActiveCard - 1;

    updateCodeText(currentActiveCard);
    updateCardText(currentActiveCard);

    if (currentActiveCard < 0) {
      currentActiveCard = 0;
    }

    if (currentActiveCard !== 0) {
      cardsEl[currentActiveCard - 1].className = "card left";
      codesEl[currentActiveCard - 1].className = "code left";
      inputEl[currentActiveCard - 1].className = "input-container left";
    }

    cardsEl[currentActiveCard].className = "card active";
    codesEl[currentActiveCard].className = "code active";
    inputEl[currentActiveCard].className = "input-container active";

    document.getElementById("current").innerText = `${currentActiveCard + 1}/${
      cardsEl.length
    }`;

    createCardForm.setAttribute(
      "action",
      `note/${lastId}/${titleName}/${currentActiveCard + 1}`
    );
  }
});

// Next button
nextBtn3.addEventListener("click", () => {
  if (notes.length !== 0) {
    cardsEl[currentActiveCard].className = "card left";
    codesEl[currentActiveCard].className = "code left";
    inputEl[currentActiveCard].className = "input-container left";

    currentActiveCard = currentActiveCard + 1;

    updateCodeText(currentActiveCard);
    updateCardText(currentActiveCard);

    if (currentActiveCard > cardsEl.length - 1) {
      currentActiveCard = cardsEl.length - 1;
    }

    cardsEl[currentActiveCard].className = "card active";
    codesEl[currentActiveCard].className = "code active";
    inputEl[currentActiveCard].className = "input-container active";

    document.getElementById("current").innerText = `${currentActiveCard + 1}/${
      cardsEl.length
    }`;

    createCardForm.setAttribute(
      "action",
      `note/${lastId}/${titleName}/${currentActiveCard + 1}`
    );
  }
});

// Prev button
prevBtn3.addEventListener("click", () => {
  if (notes.length !== 0) {
    cardsEl[currentActiveCard].className = "card right";
    codesEl[currentActiveCard].className = "code right";
    inputEl[currentActiveCard].className = "input-container right";

    currentActiveCard = currentActiveCard - 1;

    updateCodeText(currentActiveCard);
    updateCardText(currentActiveCard);

    if (currentActiveCard < 0) {
      currentActiveCard = 0;
    }

    if (currentActiveCard !== 0) {
      cardsEl[currentActiveCard - 1].className = "card left";
      codesEl[currentActiveCard - 1].className = "code left";
      inputEl[currentActiveCard - 1].className = "input-container left";
    }

    cardsEl[currentActiveCard].className = "card active";
    codesEl[currentActiveCard].className = "code active";
    inputEl[currentActiveCard].className = "input-container active";

    document.getElementById("current").innerText = `${currentActiveCard + 1}/${
      cardsEl.length
    }`;

    createCardForm.setAttribute(
      "action",
      `note/${lastId}/${titleName}/${currentActiveCard + 1}`
    );
  }
});

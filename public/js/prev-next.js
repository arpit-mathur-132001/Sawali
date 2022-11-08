const currentEl = document.getElementById("current");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const prevNext = document.getElementById("prev-next");

// Next button
nextBtn.addEventListener("click", () => {
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
      `note/${lastId}/${titleName}/${currentActiveCard}`
    );
  }
});

// Prev button
prevBtn.addEventListener("click", () => {
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

    cardsEl[currentActiveCard].className = "card active";
    codesEl[currentActiveCard].className = "code active";
    inputEl[currentActiveCard].className = "input-container active";

    updateCurrentText();

    createCardForm.setAttribute(
      "action",
      `note/${lastId}/${titleName}/${currentActiveCard}`
    );
  }
});

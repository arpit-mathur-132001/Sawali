const showBtn1 = document.getElementById("show1");
const showBtn2 = document.getElementById("show2");

const hideAddBtn = document.getElementById("hideAdd");
const hideUpdateBtn = document.getElementById("hideUpdate");

const addContainer1 = document.getElementById("add-container1");
const addContainer2 = document.getElementById("add-container2");

const clearBtn = document.getElementById("clear");

// Store DOM cards
const cardsEl = [];

// Create cards
function createCards() {
  for (var i = 0; i < notes.length; i++) {
    createCard(notes[i], i);
    if (codesArr[i] !== undefined) {
      createCode(codesArr[i], i);
    } else {
      createCode("", i);
    }
  }
}
createCards();

// Create a single card in DOM
function createCard(note, index) {
  const cardsContainer = document.getElementById("cards-container");
  const card = document.createElement("div");
  card.classList.add("card");

  if (index === 0) {
    card.classList.add("active");
  }

  card.innerHTML = `
      <div class="inner-card">
        <div class="inner-card-front">
          <xmp style="margin:0; white-space:break-spaces; overflow: auto">${note.question}</xmp>
        </div>
        <div class="inner-card-back">
          <xmp style="margin:0; white-space:break-spaces; overflow: auto">${note.answer}</xmp>
        </div>
      </div>
      `;

  card.addEventListener("click", () => card.classList.toggle("show-answer"));

  // Add to DOM cards
  cardsEl.push(card);

  cardsContainer.appendChild(card);

  updateCurrentText();
}

// Show number of cards
function updateCurrentText() {
  currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
}

const ques = document.getElementById("ques");
const ans = document.getElementById("ans");

if (currentActiveCard === 0 && notes.length !== 0) {
  ques.value = notes[currentActiveCard].question;
  ans.value = notes[currentActiveCard].answer;
}

// Update card number
function updateCardText(num) {
  if (currentActiveCard !== -1 && currentActiveCard !== notes.length) {
    ques.value = notes[currentActiveCard].question;
    ans.value = notes[currentActiveCard].answer;
  }
}

let len;
let arr;
let currPos;
let enterArr;
let checkBullet;

function getLineNumber(textarea, indicator) {
  len = textarea.value.substr(0, textarea.selectionStart).split("\n").length;
  currPos = textarea.selectionStart;

  arr = textarea.value.split("\n");
  enterArr = textarea.value.substr(0, textarea.selectionStart).split("\n");
  checkBullet = enterArr[len - 1][0];
}

const questionBullet = document.getElementById("question");

questionBullet.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.shiftKey && e.key === "L") {
    arr[len - 1] = "• " + arr[len - 1];

    questionBullet.value = "";

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != arr[arr.length - 1]) {
        questionBullet.value = questionBullet.value + arr[i] + "\n";
      } else {
        questionBullet.value = questionBullet.value + arr[i];
      }
    }
    questionBullet.selectionEnd = currPos + 2;
  }
  if (e.which === 13) {
    if (checkBullet === "•" && arr[len - 1] !== "• ") {
      e.preventDefault();
      questionBullet.value = questionBullet.value + "\n• ";
    } else if (arr[len - 1] === "• ") {
      e.preventDefault();
      questionBullet.value = questionBullet.value.slice(0, -2);
    }
  }
});

const answerBullet = document.getElementById("answer");

answerBullet.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.shiftKey && e.key === "L") {
    arr[len - 1] = "• " + arr[len - 1];

    answerBullet.value = "";

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != arr[arr.length - 1]) {
        answerBullet.value = answerBullet.value + arr[i] + "\n";
      } else {
        answerBullet.value = answerBullet.value + arr[i];
      }
    }
    answerBullet.selectionEnd = currPos + 2;
  }
  if (e.which === 13) {
    if (checkBullet === "•" && arr[len - 1] !== "• ") {
      e.preventDefault();
      answerBullet.value = answerBullet.value + "\n• ";
    } else if (arr[len - 1] === "• ") {
      e.preventDefault();
      answerBullet.value = answerBullet.value.slice(0, -2);
    }
  }
});

const questionUpdateBullet = document.getElementById("ques");

questionUpdateBullet.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.shiftKey && e.key === "L") {
    arr[len - 1] = "• " + arr[len - 1];

    questionUpdateBullet.value = "";

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != arr[arr.length - 1]) {
        questionUpdateBullet.value = questionUpdateBullet.value + arr[i] + "\n";
      } else {
        questionUpdateBullet.value = questionUpdateBullet.value + arr[i];
      }
    }
    questionUpdateBullet.selectionEnd = currPos + 2;
  }
  if (e.which === 13) {
    if (checkBullet === "•" && arr[len - 1] !== "• ") {
      e.preventDefault();
      questionUpdateBullet.value = questionUpdateBullet.value + "\n• ";
    } else if (arr[len - 1] === "• ") {
      e.preventDefault();
      questionUpdateBullet.value = questionUpdateBullet.value.slice(0, -2);
    }
  }
});

const answerUpdateBullet = document.getElementById("ans");

answerUpdateBullet.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.shiftKey && e.key === "L") {
    arr[len - 1] = "• " + arr[len - 1];

    answerUpdateBullet.value = "";

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != arr[arr.length - 1]) {
        answerUpdateBullet.value = answerUpdateBullet.value + arr[i] + "\n";
      } else {
        answerUpdateBullet.value = answerUpdateBullet.value + arr[i];
      }
    }
    answerUpdateBullet.selectionEnd = currPos + 2;
  }
  if (e.which === 13) {
    if (checkBullet === "•" && arr[len - 1] !== "• ") {
      e.preventDefault();
      answerUpdateBullet.value = answerUpdateBullet.value + "\n• ";
    } else if (arr[len - 1] === "• ") {
      e.preventDefault();
      answerUpdateBullet.value = answerUpdateBullet.value.slice(0, -2);
    }
  }
});

// Delete card
function proceed() {
  let form = document.getElementById("deleteForm");
  form.setAttribute("action", `/api/delete/${notes[currentActiveCard]._id}`);
  form.submit();
}

// Delete card
function proceedDeleteCode() {
  let form = document.getElementById("deleteCodeForm");
  form.setAttribute(
    "action",
    `/api/delete_code/${codesArr[currentActiveCard]._id}`
  );
  form.submit();
}

// Update card
function proceedUpdate() {
  let form = document.getElementById("update-card");
  form.setAttribute(
    "action",
    `/api/update/${notes[currentActiveCard]._id}/${currentActiveCard}`
  );

  form.submit();
}

// Event listeners

// Show add container
showBtn1.addEventListener("click", () => addContainer1.classList.add("show"));

// Show update container
showBtn2.addEventListener("click", () => addContainer2.classList.add("show"));

// Hide add container
hideAddBtn.addEventListener("click", () =>
  addContainer1.classList.remove("show")
);

// Hide update container
hideUpdateBtn.addEventListener("click", () =>
  addContainer2.classList.remove("show")
);

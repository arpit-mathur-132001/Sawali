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

  if (index === currentActiveCard) {
    card.classList.add("active");
  }

  card.innerHTML = `
      <div class="inner-card">
        <div class="inner-card-front">
          <div style="margin:0; white-space:break-spaces; overflow: auto">${note.question}</div>
        </div>
        <div class="inner-card-back">
          <div style="margin:0; white-space:break-spaces; overflow: auto">${note.answer}</div>
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
  // ques.value = notes[currentActiveCard].question;
  // ans.value = notes[currentActiveCard].answer;
  $("#ques").summernote("code", "");
  $("#ques").summernote("pasteHTML", notes[currentActiveCard].question);
  $("#ans").summernote("code", "");
  $("#ans").summernote("pasteHTML", notes[currentActiveCard].answer);
}

// Update card number
function updateCardText(num) {
  if (currentActiveCard !== -1 && currentActiveCard !== notes.length) {
    // ques.value = notes[currentActiveCard].question;
    // ans.value = notes[currentActiveCard].answer;
    $("#ques").summernote("code", "");
    $("#ques").summernote("pasteHTML", notes[currentActiveCard].question);
    $("#ans").summernote("code", "");
    $("#ans").summernote("pasteHTML", notes[currentActiveCard].answer);
  }
}

let len;
let arr;
let currPos;
let enterArr;
let checkBullet;

addCard = document.getElementById("add-card");
addCard.addEventListener("click", () => {
  let questionBullet = document.getElementById("question");
  questionBullet.value = questionBullet.value.replaceAll(/"/g, "'");
  let answerBullet = document.getElementById("answer");
  answerBullet.value = answerBullet.value.replaceAll(/"/g, "'");
});

// function getLineNumber(textarea, indicator) {
//   len = textarea.value.substr(0, textarea.selectionStart).split("\n").length;
//   currPos = textarea.selectionStart;

//   arr = textarea.value.split("\n");
//   enterArr = textarea.value.substr(0, textarea.selectionStart).split("\n");
//   checkBullet = enterArr[len - 1][0];
// }

// const questionBullet = document.getElementById("question");

// questionBullet.addEventListener("keydown", function (e) {
//   if (e.ctrlKey && e.shiftKey && e.key === "L") {
//     arr[len - 1] = "• " + arr[len - 1];

//     questionBullet.value = "";

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] != arr[arr.length - 1]) {
//         questionBullet.value = questionBullet.value + arr[i] + "\n";
//       } else {
//         questionBullet.value = questionBullet.value + arr[i];
//       }
//     }
//     questionBullet.selectionEnd = currPos + 2;
//   }
//   if (e.which === 13) {
//     if (checkBullet === "•" && arr[len - 1] !== "• ") {
//       e.preventDefault();
//       questionBullet.value = questionBullet.value + "\n• ";
//     } else if (arr[len - 1] === "• ") {
//       e.preventDefault();
//       questionBullet.value = questionBullet.value.slice(0, -2);
//     }
//   }
// });

// const answerBullet = document.getElementById("answer");

// answerBullet.addEventListener("keydown", function (e) {
//   if (e.ctrlKey && e.shiftKey && e.key === "L") {
//     arr[len - 1] = "• " + arr[len - 1];

//     answerBullet.value = "";

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] != arr[arr.length - 1]) {
//         answerBullet.value = answerBullet.value + arr[i] + "\n";
//       } else {
//         answerBullet.value = answerBullet.value + arr[i];
//       }
//     }
//     answerBullet.selectionEnd = currPos + 2;
//   }
//   if (e.which === 13) {
//     if (checkBullet === "•" && arr[len - 1] !== "• ") {
//       e.preventDefault();
//       answerBullet.value = answerBullet.value + "\n• ";
//     } else if (arr[len - 1] === "• ") {
//       e.preventDefault();
//       answerBullet.value = answerBullet.value.slice(0, -2);
//     }
//   }
// });

// const questionUpdateBullet = document.getElementById("ques");

// questionUpdateBullet.addEventListener("keydown", function (e) {
//   if (e.ctrlKey && e.shiftKey && e.key === "L") {
//     arr[len - 1] = "• " + arr[len - 1];

//     questionUpdateBullet.value = "";

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] != arr[arr.length - 1]) {
//         questionUpdateBullet.value = questionUpdateBullet.value + arr[i] + "\n";
//       } else {
//         questionUpdateBullet.value = questionUpdateBullet.value + arr[i];
//       }
//     }
//     questionUpdateBullet.selectionEnd = currPos + 2;
//   }
//   if (e.which === 13) {
//     if (checkBullet === "•" && arr[len - 1] !== "• ") {
//       e.preventDefault();
//       questionUpdateBullet.value = questionUpdateBullet.value + "\n• ";
//     } else if (arr[len - 1] === "• ") {
//       e.preventDefault();
//       questionUpdateBullet.value = questionUpdateBullet.value.slice(0, -2);
//     }
//   }
// });

// const answerUpdateBullet = document.getElementById("ans");

// answerUpdateBullet.addEventListener("keydown", function (e) {
//   if (e.ctrlKey && e.shiftKey && e.key === "L") {
//     arr[len - 1] = "• " + arr[len - 1];

//     answerUpdateBullet.value = "";

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] != arr[arr.length - 1]) {
//         answerUpdateBullet.value = answerUpdateBullet.value + arr[i] + "\n";
//       } else {
//         answerUpdateBullet.value = answerUpdateBullet.value + arr[i];
//       }
//     }
//     answerUpdateBullet.selectionEnd = currPos + 2;
//   }
//   if (e.which === 13) {
//     if (checkBullet === "•" && arr[len - 1] !== "• ") {
//       e.preventDefault();
//       answerUpdateBullet.value = answerUpdateBullet.value + "\n• ";
//     } else if (arr[len - 1] === "• ") {
//       e.preventDefault();
//       answerUpdateBullet.value = answerUpdateBullet.value.slice(0, -2);
//     }
//   }
// });

// Add card

// function Card() {
//   console.log(notes.length);
//   console.log(currentActiveCard);
//   if (currentActiveCard !== notes.length - 1) {
//   }
//   let form = document.getElementById("create-card-form");
//   form.submit();
// }

// Delete card
function proceed() {
  let form = document.getElementById("deleteForm");
  form.setAttribute(
    "action",
    `/api/delete/${notes[currentActiveCard]._id}/${lastId}/${titleName}/${
      currentActiveCard - 1
    }`
  );
  form.submit();
}

// Update card
function proceedUpdate() {
  let questionUpdateBullet = document.getElementById("ques");
  questionUpdateBullet.value = questionUpdateBullet.value.replaceAll(/"/g, "'");
  let answerUpdateBullet = document.getElementById("ans");
  answerUpdateBullet.value = answerUpdateBullet.value.replaceAll(/"/g, "'");

  let form = document.getElementById("update-card");
  form.setAttribute(
    "action",
    `/api/update/${notes[currentActiveCard]._id}/${lastId}/${titleName}/${currentActiveCard}`
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

const clearCardForm = document.getElementById("clear-card-form");
clearCardForm.setAttribute("action", `clear/${lastId}/${titleName}`);

if (currentActiveCard - 1 !== -1) {
  cardsEl[currentActiveCard - 1].className = "card left";
  codesEl[currentActiveCard - 1].className = "code left";
  inputEl[currentActiveCard - 1].className = "input-container left";
}

if (currentActiveCard + 1 !== cardsEl.length && currentActiveCard !== 0) {
  cardsEl[currentActiveCard + 1].className = "card right";
  codesEl[currentActiveCard + 1].className = "code right";
  inputEl[currentActiveCard + 1].className = "input-container right";
}

let createCardForm = document.getElementById("create-card-form");
console.log(document.getElementById("current").innerText);
if (document.getElementById("current").innerText !== "") {
  console.log("hi");
  createCardForm.setAttribute(
    "action",
    `note/${lastId}/${titleName}/${currentActiveCard + 1}`
  );
} else {
  console.log("hello");
  createCardForm.setAttribute("action", `note/${lastId}/${titleName}/${0}`);
}

if (currentActiveCard >= 9 && currentActiveCard < 99) {
  document.getElementById("prev-next-1").style =
    "display:flex; flex-direction:column; margin: auto 26.5px";
}

if (currentActiveCard < 9) {
  document.getElementById("prev-next-1").style =
    "display:inherit; margin: auto 10px";
}

if (currentActiveCard >= 99) {
  document.getElementById("prev-next-1").style =
    "display:flex; flex-direction:column; margin: auto 18.5px;";
}

const cardsExpand = document.getElementById("show5");
cardsExpand.addEventListener("click", () => {
  if (document.getElementById("cards-expand").classList == "fas fa-compress") {
    document.querySelector(".flex-inner-code").style = "display:flex;";
    document.getElementById("cards-container").style = "width:661px;";
    document.getElementById("prev-next-1").style = "display:inherit;";
    document.getElementById("prev-next-2").style = "display:none;";
    document.getElementById("cards-expand").classList = "fas fa-expand";
    document.getElementById("current").id = "current2";
    document.getElementById("current1").id = "current";
    document.getElementById("current").innerText = `${currentActiveCard + 1}/${
      cardsEl.length
    }`;
    if (currentActiveCard >= 9 && currentActiveCard < 99) {
      document.getElementById("prev-next-1").style =
        "display:flex; flex-direction:column; margin: auto 26.5px";
    }

    if (currentActiveCard >= 99) {
      document.getElementById("prev-next-1").style =
        "display:flex; flex-direction:column; margin: auto 18.5px;";
    }
  } else {
    document.querySelector(".flex-inner-code").style = "display:none;";
    document.getElementById("cards-container").style = "width:1420px;";
    document.getElementById("prev-next-1").style = "display:none;";
    document.getElementById("prev-next-2").style =
      "display:inherit; margin:20px;";
    document.getElementById("cards-expand").classList = "fas fa-compress";
    document.getElementById("current").id = "current1";
    document.getElementById("current2").id = "current";
    document.getElementById("current").innerText = `${currentActiveCard + 1}/${
      cardsEl.length
    }`;
  }
});

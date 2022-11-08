const lastId = document
  .getElementsByTagName("a")[0]
  .baseURI.split("/")
  .pop()
  .split("?")[0];

const titleName = document
  .getElementsByTagName("a")[0]
  .baseURI.split("/")
  .pop()
  .split("?")[1]
  .replace("%20", " ");

document.getElementById("title-name").innerText = titleName;

let currentActiveCard = document
  .getElementsByTagName("a")[0]
  .baseURI.split("/")
  .pop()
  .split("?")[2];

currentActiveCard = parseInt(currentActiveCard);

let createCardForm = document.getElementById("create-card-form");
createCardForm.setAttribute(
  "action",
  `note/${lastId}/${titleName}/${currentActiveCard + 1}`
);

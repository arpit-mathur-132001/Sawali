let currentActiveCard = 0;
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

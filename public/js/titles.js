title = document.getElementById("title");
titleForm = document.getElementById("title-form");

title.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    titleForm.submit();
  }
});

function createTitles() {
  for (var i = 0; i < titles.length; i++) {
    createTitle(titles[i], i);
  }
}
createTitles();

function createTitle(title, index) {
  const flexContainer = document.getElementById("flex-container");
  const newTitle = document.createElement("a");
  newTitle.classList.add("titles");
  newTitle.href = `/dashboard/${titles[index]._id}?${titles[index].Title}?0`;
  sessionStorage.setItem("title", titles[index].Title);
  newTitle.innerText = title.Title;
  flexContainer.appendChild(newTitle);
}

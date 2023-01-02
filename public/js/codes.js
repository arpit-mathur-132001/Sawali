const showBtn3 = document.getElementById("show3");
const showBtn4 = document.getElementById("show4");

const hideCodeBtn1 = document.getElementById("hideCode1");
const hideCodeBtn2 = document.getElementById("hideCode2");

const addContainer3 = document.getElementById("add-container3");
const addContainer4 = document.getElementById("add-container4");

const codesEl = [];
const inputEl = [];

// Codes array for storage of codes
let codesArr = [];
codesArr.length = notes.length;
for (let i = 0; i < codes.length; i++) {
  codesArr[codes[i].number] = codes[i];
}

// Create a single code in DOM
function createCode(data, index) {
  const codesContainer = document.getElementById("codes-container");
  const code = document.createElement("div");
  code.classList.add("code");

  if (index === currentActiveCard) {
    code.classList.add("active");
  }

  if (data !== "") {
    code.innerHTML = `
      <div class="inner-code">

        <pre class="inner-code-front">
          <code class="cpp" id="codeCard"><xmp>${data.code}</xmp>
          </code>
        </pre>

        <div class="inner-code-back"><xmp style="margin:0; white-space:break-spaces">${data.output}</xmp></div>

      </div>
      `;
  } else {
    code.innerHTML = `
      <div class="inner-code">

        <pre class="inner-code-front">
          <code class="cpp" id="codeCard"><xmp></xmp>
          </code>
        </pre>

        <div class="inner-code-back"></div>

      </div>
      `;
  }

  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-container");
  inputContainer.setAttribute("id", "input-container");

  if (index === currentActiveCard) {
    inputContainer.classList.add("active");
  }

  if (data !== "") {
    inputContainer.innerHTML = `
      <xmp class="inner-input" style="margin:0; white-space:break-spaces;">${data.input}</xmp>
      `;
  }

  codesContainer.appendChild(inputContainer);

  codesContainer.appendChild(code);

  // Add to DOM cards
  codesEl.push(code);
  inputEl.push(inputContainer);

  code.addEventListener("click", () => code.classList.toggle("show-answer"));
}

// Editor 1
const editor1 = document.getElementById("editor1");
var edit1 = ace.edit(editor1);
edit1.setTheme("ace/theme/twilight");
edit1.session.setMode("ace/mode/c_cpp");
edit1.setOptions({
  fontSize: "20px",
});

// Editor 2
const editor2 = document.getElementById("editor2");
var edit2 = ace.edit(editor2);
const textareaInput2 = document.getElementById("textareaInput2");
const updateOutput = document.getElementById("update-output");

if (codesArr[0] !== undefined) {
  if (currentActiveCard == 0) {
    edit2.setValue(codesArr[currentActiveCard].code);
    textareaInput2.value = codesArr[currentActiveCard].input;
    updateOutput.innerHTML = codesArr[currentActiveCard].output;
  }
}
function updateCodeText(num) {
  if (codesArr[num] !== undefined) {
    edit2.setValue(codesArr[num].code);
    textareaInput2.value = codesArr[currentActiveCard].input;
    updateOutput.innerHTML = codesArr[currentActiveCard].output;
  } else {
    edit2.setValue("");
    textareaInput2.value = "";
    updateOutput.innerHTML = "";
  }
}
edit1.setTheme("ace/theme/twilight");
edit1.session.setMode("ace/mode/c_cpp");
edit1.setOptions({
  fontSize: "20px",
});

edit2.setTheme("ace/theme/twilight");
edit2.session.setMode("ace/mode/c_cpp");
edit2.setOptions({
  fontSize: "20px",
});

let op;
// Show output of code
const textareaInput = document.getElementById("textareaInput");
const output = document.querySelector(".output");
const languageSelect = document.querySelector("#language");
let err;

function getData1() {
  let code = edit1.getValue();
  let input = textareaInput.value;
  let language = languageSelect.value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    code: code,
    language: language,
    input: input,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://api.codex.jaagrav.in", requestOptions)
    .then((response) => response.text())
    .then((result) => (output.innerText = JSON.parse(result).output))
    .catch((error) => console.log("error", error));
}

function getData2() {
  let code = edit2.getValue();
  let input = textareaInput2.value;
  let language = languageSelect.value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    code: code,
    language: language,
    input: input,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://api.codex.jaagrav.in", requestOptions)
    .then((response) => response.text())
    .then((result) => (updateOutput.innerText = JSON.parse(result).output))
    .catch((error) => console.log("error", error));
}

// Save output of code
function saveData() {
  let code = edit1.getValue();
  let input = textareaInput.value;
  let language = languageSelect.value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    code: code,
    language: language,
    input: input,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const res = fetch("https://api.codex.jaagrav.in", requestOptions)
    .then((response) => response.text())
    .then((result) => (output.innerText = JSON.parse(result).output))
    .catch((error) => console.log("error", error));

  res.then((output) => {
    hiddenCode = document.getElementById("hidden-code");
    const hideCode = document.createElement("textarea");
    code = code.toString().replaceAll('"', '\\"');
    hideCode.innerHTML = `${code}`;
    hideCode.name = "code";
    hideCode.type = "hidden";
    hiddenCode.appendChild(hideCode);

    hiddenInput = document.getElementById("hidden-input");
    const hideInp = document.createElement("textarea");
    hideInp.innerHTML = `${input}`;
    hideInp.name = "input";
    hideInp.type = "hidden";
    hiddenInput.appendChild(hideInp);

    hiddenOutput = document.getElementById("hidden-output");
    const hideOutput = document.createElement("textarea");
    hideOutput.innerHTML = `${output}`;
    hideOutput.name = "output";
    hideOutput.type = "hidden";
    hiddenOutput.appendChild(hideOutput);

    hiddenCodeNumber = document.getElementById("hidden-code-number");
    const hideCodeNumber = document.createElement("textarea");
    hideCodeNumber.innerHTML = `${currentActiveCard}`;
    hideCodeNumber.name = "number";
    hideCodeNumber.type = "hidden";
    hiddenCodeNumber.appendChild(hideCodeNumber);

    let form = document.getElementById("save-code");
    form.setAttribute(
      "action",
      `code/${lastId}/${titleName}/${currentActiveCard}`
    );

    form.submit();
  });
}

// Save output of updated code
function saveUpdatedData() {
  let code = edit2.getValue();
  let input = textareaInput2.value;
  let language = languageSelect.value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    code: code,
    language: language,
    input: input,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const res = fetch("https://api.codex.jaagrav.in", requestOptions)
    .then((response) => response.text())
    .then((result) => (output.innerText = JSON.parse(result).output))
    .catch((error) => console.log("error", error));

  res.then((output) => {
    hiddenCode = document.getElementById("hidden-updated-code");
    const hideCode = document.createElement("textarea");
    code = code.toString().replaceAll('"', '\\"');
    hideCode.innerHTML = `${code}`;
    hideCode.name = "code";
    hideCode.type = "hidden";
    hiddenCode.appendChild(hideCode);

    hiddenInput = document.getElementById("hidden-updated-input");
    const hideInp = document.createElement("textarea");
    hideInp.innerHTML = `${input}`;
    hideInp.name = "input";
    hideInp.type = "hidden";
    hiddenInput.appendChild(hideInp);

    hiddenOutput = document.getElementById("hidden-updated-output");
    const hideOutput = document.createElement("textarea");
    hideOutput.innerHTML = `${output}`;
    hideOutput.name = "output";
    hideOutput.type = "hidden";
    hiddenOutput.appendChild(hideOutput);

    hiddenCodeNumber = document.getElementById("hidden-updated-code-number");
    const hideCodeNumber = document.createElement("textarea");
    hideCodeNumber.innerHTML = `${currentActiveCard}`;
    hideCodeNumber.name = "number";
    hideCodeNumber.type = "hidden";
    hiddenCodeNumber.appendChild(hideCodeNumber);

    let form = document.getElementById("update-code");
    // form.setAttribute("action", `/api/code`);
    form.setAttribute(
      "action",
      `/api/update_code/${codesArr[currentActiveCard]._id}/${lastId}/${titleName}/${currentActiveCard}`
    );

    form.submit();
  });
}

// Delete code
function proceedDeleteCode() {
  let form = document.getElementById("deleteCodeForm");
  form.setAttribute(
    "action",
    `/api/delete_code/${
      codesArr[currentActiveCard]._id
    }/${lastId}/${titleName}/${currentActiveCard - 1}`
  );
  form.submit();
}

// Show code container
showBtn3.addEventListener("click", () => addContainer3.classList.add("show"));

// Show update code container
showBtn4.addEventListener("click", () => addContainer4.classList.add("show"));

// Hide code container
hideCodeBtn1.addEventListener("click", () =>
  addContainer3.classList.remove("show")
);

// Hide update container
hideCodeBtn2.addEventListener("click", () =>
  addContainer4.classList.remove("show")
);

const clearCodeForm = document.getElementById("clear-code-form");
clearCodeForm.setAttribute("action", `clear_codes/${lastId}/${titleName}`);

const codesExpand = document.getElementById("show6");
codesExpand.addEventListener("click", () => {
  if (document.getElementById("codes-expand").classList == "fas fa-compress") {
    document.querySelector(".flex-inner-card").style = "display:flex;";
    document.getElementById("codes-container").style = "width:500px;";
    document.getElementById("prev-next-1").style = "display:inherit;";
    document.getElementById("prev-next-3").style = "display:none;";
    document.getElementById("codes-expand").classList = "fas fa-expand";
    for (
      let i = 0;
      i < document.querySelectorAll(".input-container").length;
      i++
    ) {
      document.querySelectorAll(".input-container")[i].style =
        "margin-left: 515px;";
    }
    document.getElementById("current").id = "current3";
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
    document.querySelector(".flex-inner-card").style = "display:none;";
    document.getElementById("codes-container").style = "width:1263px;";
    document.getElementById("prev-next-1").style = "display:none;";
    document.getElementById("prev-next-3").style =
      "display:inherit; margin:20px;";
    document.getElementById("codes-expand").classList = "fas fa-compress";
    for (
      let i = 0;
      i < document.querySelectorAll(".input-container").length;
      i++
    ) {
      document.querySelectorAll(".input-container")[i].style =
        "margin-left: 1278px;";
    }
    document.getElementById("current").id = "current1";
    document.getElementById("current3").id = "current";
    document.getElementById("current").innerText = `${currentActiveCard + 1}/${
      cardsEl.length
    }`;
  }
});

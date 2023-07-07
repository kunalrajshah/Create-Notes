var btn = document.querySelector("#btn");
var notesContainer = document.querySelector(".notes-container");
var getnotes = document.querySelector(".input-box");

btn.addEventListener("click", addNotes);
//Adding Function Logic
function addNotes() {
  var inputbox = document.createElement("div");
  var inputdata = document.createElement("p");
  var img = document.createElement("img"); //create element as a image
  // Add 'p' and 'img' inside a single div so that on click on 'del logo' whole div delete.
  inputdata.className = "input-box";

  // Adding class name to div so that on click on del logo we can remove whole div box
  inputbox.className = "del-this-box";

  inputdata.setAttribute("contenteditable", "true");
  img.src = "image/delete.png"; // add src of image in created element img.
  inputbox.appendChild(inputdata).appendChild(img); // Append img inside the paragraph.
  notesContainer.appendChild(inputbox);
}

//Adding function on delete logo
notesContainer.addEventListener("click", removenotes);

//Adding function Logic
function removenotes(e) {
  if (e.target.tagName === "IMG") {
    var parent = document.querySelector(".del-this-box");
    parent.remove();
    setdata();
    // inside else if it take all paragraph inside p by 'queryall' and, the foreach part iterates over each paragraph element with the class "input-box" and assigns an onkeyup event handler to each of them. Whenever a key is released while typing inside any of these paragraph elements, the setdata() function is called to handle the data or perform an action based on the updated content.
  } else if (e.target.tagName === "P") {
    getnotes = document.querySelectorAll(".input-box");
    getnotes.forEach((nt) => {
      nt.onkeyup = function () {
        setdata();
      };
    });
  }
}

//Data set to LocalStorage
function setdata() {
  localStorage.setItem("data", notesContainer.innerHTML);
}

//Display data on refreshing and closing of window
function getdata() {
  notesContainer.innerHTML = localStorage.getItem("data");
}
getdata();

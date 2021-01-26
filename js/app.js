showNotes(); //When it Reloads it automatically show the Note
//If User Add a Note ,add it to a local storage
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
  let addtxt = document.getElementById("addtxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    //adding the note in the form of jSON in the notesObj[]
    notesObj = JSON.parse(notes);
  }
  let addtitle = document.getElementById("addtitle");
  let title = localStorage.getItem("title");
  if (title == null) {
    titleOBj = [];
  } else {
    titleOBj = JSON.parse(title);
  }
  titleOBj.push(addtitle.value);
  notesObj.push(addtxt.value);
  //converting JSON to String and adding in the local DATA
  localStorage.setItem("notes", JSON.stringify(notesObj));
  localStorage.setItem("title", JSON.stringify(titleOBj));
  addtitle.value = "";
  addtxt.value = "";
  showNotes();
});
//Show the Notes below
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let title = localStorage.getItem("title");
  if (title == null) {
    titleOBj = [];
  } else {
    titleOBj = JSON.parse(title);
  }

  let html = "";
  //Traversing each element in the notesOBJ Array
  notesObj.forEach(function (element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"> ${titleOBj[index]}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
    
  });

  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}
//function to delete a note
function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let title = localStorage.getItem("title");
  if (title == null) {
    titleOBj = [];
  } else {
    titleOBj = JSON.parse(title);
  }
  
  titleOBj.splice(index, 1);
  notesObj.splice(index, 1); //deleting that node from the particular index
  localStorage.setItem("notes", JSON.stringify(notesObj));
  localStorage.setItem("title", JSON.stringify(titleOBj));
  showNotes();
}

let modal = document.getElementById("addForm");
let openBtn = document.getElementById("openModal");
let closeBtn = document.querySelector(".closeModal");
let addBtn = document.querySelector(".addBook");
let read = document.getElementById("read-check");
let form = document.querySelector(".book-form");
let readBtn = document.querySelector(".read-button");

let container = document.querySelector(".library-container");
let title = document.getElementById("title");
let author = document.getElementById("author");
let pageCount = document.getElementById("pageCount");

const library = [];

openBtn.onclick = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = null;
}

addBtn.onclick = function() {
  newBook();
  modal.style.display = "none";
  form.reset();
}

function newBook() {
  if (read.checked == true) {
    read.value = "Yes";
  }else {
    read.value = "No";
  }

  let newBook = new book(title.value, author.value, pageCount.value, read.value);
  library.push(newBook);

  createCard(newBook);
}

function createCard(book) {
  let newBookCard = document.createElement("div");
  newBookCard.classList.add("book-card");

  newBookCard.innerHTML = `
  <span class="remove-card">Delete</span>
  <span class="indicator">Title</span>
  <div class="card-title"><span class="inner-info">${book.title}</span></div>
  <span class="indicator">Author</span>
  <div class="card-author"><span class="inner-info">${book.author}</span></div>
  <span class="indicator">pages</span>
  <div class="card-pages"><span class="inner-info">${book.pages}</span></div>
  <span class="indicator">Have you read this book?</span>
  <div class="card-read"><button class="read-button">${read.value}</button></div>
  `;

  container.appendChild(newBookCard);

  let newReadBtn = newBookCard.querySelector(".read-button");
  let deleteBtn = newBookCard.querySelector(".remove-card");

  if (read.value == "Yes") {
    newReadBtn.textContent = "Yes";
  }else if (read.value == "No") {
    newReadBtn.textContent = "No";
    newReadBtn.classList.add("unread-button");
  }

  newReadBtn.onclick = function() {
    if (newReadBtn.textContent == "Yes") {
      newReadBtn.textContent = "No";
      newReadBtn.classList.remove("read-button");
      newReadBtn.classList.add("unread-button") ;
    }else if (newReadBtn.textContent == "No") {
      newReadBtn.textContent = "Yes";
      newReadBtn.classList.remove("unread-button");
      newReadBtn.classList.add("read-button");
    }
  }

  deleteBtn.onclick = function() {
    newBookCard.remove();
  }  

} 

readBtn.onclick = function() {
  if (readBtn.textContent == "Yes") {
    readBtn.textContent = "No";
    readBtn.classList.remove("read-button");
    readBtn.classList.add("unread-button") ;
  }else if (readBtn.textContent == "No") {
    readBtn.textContent = "Yes";
    readBtn.classList.remove("unread-button");
    readBtn.classList.add("read-button");
  }
}






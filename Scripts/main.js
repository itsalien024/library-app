let modal = document.getElementById("addForm");
let openBtn = document.getElementById("openModal");
let closeBtn = document.querySelector(".closeModal");
let addBtn = document.querySelector(".addBook");
let read = document.getElementById("read-check");
let form = document.querySelector(".book-form");

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
  let newBook = title.value;
  newBook = new book(title.value, author.value, pageCount.value, read.value);
  library.push(newBook);
  
  let newBookCard = document.createElement("div");
  newBookCard.classList.add("book-card");

  newBookCard.innerHTML = `
  <span class="remove-card">Delete</span>
  <span class="indicator">Title</span>
  <div class="card-title"><span class="inner-info"></span></div>
  <span class="indicator">Author</span>
  <div class="card-author"><span class="inner-info"></span></div>
  <span class="indicator">pages</span>
  <div class="card-pages"><span class="inner-info"></span></div>
  <span class="indicator">Have you read this book?</span>
  <div class="card-read"><span class="inner-info"></span></div>
  `;

  container.appendChild(newBookCard);


}

for (let books of library) {

}








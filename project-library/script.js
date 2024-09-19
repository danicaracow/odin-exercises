function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const myLibrary = [];

const submitBook = document.querySelector("#submit-book");
const newBook = document.querySelector("#new-book");
const dialog = document.querySelector("dialog");
const form = document.querySelector("#book-form");

const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputRead = document.querySelector("#read");

const cardsContainer = document.querySelector(".container");

newBook.addEventListener("click", () => dialog.showModal());

form.addEventListener("submit", function(e) {
    addBookToLibrary(e);
});

function addBookToLibrary(event) {
    event.preventDefault();  // Prevents the default form submission behavior
    dialog.close();
    const book = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.checked);
    myLibrary.push(book);
    console.log(book.read);
    displayBooks(myLibrary);
    clearForm();
}

function displayBooks(library){
    clearContainer();

    library.forEach(element => {
        const card = document.createElement("div");
        const title = document.createElement("p");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("input");
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";

        deleteBtn.addEventListener("click", () =>{
            removeBook(cardsContainer, card);
        });

        read.addEventListener("change", function(){
            const index = getIndex(cardsContainer, card);
            myLibrary[index].read = read.checked;
        })

        read.setAttribute("class", "switch-container");
        read.setAttribute("type", "checkbox");

        cardsContainer.insertBefore(card, cardsContainer.firstChild);
        
        card.appendChild(title);
        title.textContent = element.title;
        card.appendChild(author);
        author.textContent = element.author;
        card.appendChild(pages);
        pages.textContent = element.pages;
        card.appendChild(read);
        read.checked = element.read;
        card.appendChild(deleteBtn);
    });
}

function clearForm(){
    inputTitle.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
    inputRead.checked = false;
}

function clearContainer(){
    cardsContainer.innerHTML = "";
}

function getIndex(bookContainer, book){
    return (myLibrary.length - 1) - Array.prototype.indexOf.call(bookContainer.children, book);
}

function removeBook(bookContainer, book){
    const index = getIndex(bookContainer, book);
    myLibrary.splice(index, 1);
    displayBooks(myLibrary);
    console.log(myLibrary);
}
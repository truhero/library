
// BOOK CLASS 
class Book {
    constructor(
      title = "Unknown",
      author = "Unknown",
      pages = "0",
      isRead = "false"
    ) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.isRead = isRead;
      this.info = function () {
        console.log(title + " by " + author + "(" + ")");
    };
    }
}

// BOOK ARRAY

let myLibrary = [] ;

function addBookToLibrary(newBook){
   if (myLibrary.some((book) => book.title === newBook.title)) return false;
   myLibrary.push(newBook);
   return true ;
}

function removeBookFromLibrary(bookTitle) {
    myLibrary = myLibrary.filter((book) => bookTitle !== bookTitle)
}

function getBook(bookTitle) {
    for (let book of myLibrary){
        if (book.title === bookTitle) {
            return book ;
        }
    }
    return null ;
}




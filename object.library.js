let obj = {
  _genres:{
    Crime:[],
    scienceFiction:[],
    Thriller:[],
    get getter(){
        return  this._genres;
        }
    }
}

function addBookToProperGenre(bookNAme,
                              bookPrice
                             ) {
  let book = {
    name:bookName,
    price:bookprice,
    }
  this._genres[genreName].push(book);
}

function getRandomBook(genreName) {
    books = this._genres[genreName];
    genreName[randomINdex] = Math.floor(Math.random()*Crime.length);
}
myBook = addBookToProperGenre();
console.log(myBook);

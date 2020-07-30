// Книжная библиотека

// Соберите свою собственную библиотеку с любимыми книгами

// 1.
// Создайте пустой объект library.

// 2.
// Добавьте приватное свойство _genres и присвойте ему значение пустого объекта.

// 3.
// В объект _genres добавьте три свойства, 'Crime', 'Science fiction', 'Thriller',
// каждый из которых должен быть пустым массивом.

// 4.
// Добавьте getter для свойства _genres. Оставьте его пустым.

// 5.
// Внутри геттера получите доступ к приватному свойству _genres и верните его.

// 6.
// Внутри объекта library добавьте метод addBookToProperGenre(), чтобы можно было
// добавить в библиотеку новую книгу согласно её жанра. Метод принимает 3 параметра
// genreName, bookName, bookPrice.

// 7.
// Метод addBookToProperGenre() должен создавать объект с названием book,
// у кторого есть 2 свойства name и price, которые он берет из параметров.
// Затем метод должен пушить объект book в соответствующий массив у объекта _genres
// согласно названию жанра genreName.

// 8.
// На случай, если вы не знаете что именно хотите прочитать, создайте метод, который
// выберет вам случайную книгу для прочтения. Итак внутри объекта library создайте
// метод getRandomBook() и передавайте ему параметр genreName.

// 9.
// Чтобы этот метод работал правильно, выполните следующие действия:
// – извлеките массив с книгами согласно выбранного жанра и присвойте его в
// переменную books.
// – сгенерируйте случайный индекс в пределах массива books.
// – округлите индекс в меньшую сторону
// – верните выбранную книгу

// 10.
// Теперь библиотека готова к заполнению. С помощью метода addBookToProperGenre()
// добавьте как минимум по 3 книги в каждый из жанров.

// 11.
// И наконец выберите себе случайную книгу для чтения с помощью
// метода getRandomBook(). Запишите результат в переменную myBook и сделайте вывод
// в консоль.

// {ваш код здесь}

let library = {

  _genres: {
      "Crime": [],
      "Thriller": [],
      "scienceFiction": []
  },

  get getter()  {
      return  this._genres;
      },

  addBookToProperGenre( genreName, bookName, bookPrice )  {
      let book = {
          name:bookName,
          price:bookPrice,
      };

      this._genres[genreName].push( book );
  },

  getRandomBook  ( genreName )  {
      let books = this._genres["Crime"];
      books[genreName] === Math.floor(Math.random()*(books.length));
  }

};

library.addBookToProperGenre("Crime", 'Остров', 50);
library.addBookToProperGenre("scienceFiction", 'Ствол', 100);
library.addBookToProperGenre("Thriller", "Кровь", 150);
library.addBookToProperGenre("Crime", "Рост", 50);
library.addBookToProperGenre("scienceFiction", "Падение", 100);
library.addBookToProperGenre("Thriller", "Взлет", 150);
library.addBookToProperGenre("Crime", "Взлет", 150);
library.addBookToProperGenre("scienceFiction", "Взлет", 150);
library.addBookToProperGenre("Thriller", "Взлет", 150);

 let myBook = library.getRandomBook( "Crime" );
console.log( myBook );


/*

Этот многострочный комментарий не удалять!!!

#
#
#
#
#

*/

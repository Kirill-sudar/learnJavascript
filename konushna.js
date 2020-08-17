// Моя конюшня

// В следующем задании вам предстоит разводить лошадей посредством JS.

// 1.
// Создайте пустой класс Horse. Внутри класса добавьте конструктор, который принимает
// в себя такие параметры: breed, color, isInStock
// (false по-умолчанию)

// 2.
// Все свойства имеют геттеры. Добавьте для каждого.

// 3.
// Добавьте сеттер для isInStock.

// 4.
// Под геттерами добавьте метод toggleInStockStatus, который меняет булевое
// значение свйства isInStock на противоположное.

// 5.
// Добавьте подкласс Arabian, который наследует (extend) все свойства и методы
// класса Horse.


// 6.
// У класса Arabian добавьте свойство price со значением по умолчанию 1000,
// задайте ему геттер.

// 7.
// У класса Arabian добавьте свойство raceResults и присвойте ему значение пустого
// массива.

// 8.
// У класса Arabian добавьте метод getAverageResults, который вычисляет средний
// результат всех забегов из массива raceResults.

// 9.
// Добавьте метод addRaceResult, который принимает в себя один аргумент race и пушит
// его в массив raceResults. Если средний результат всех забегов меньше 5 – увеличиваем
// цену на 10%. Если больше пяти, то уменьнаем. Если равно – оставляем неизменной.
// Если средний результат меньше либо равен 2,  – лошадь не продается.


// 10.
// Добавьте метод getPrice, котррый возвращает значение

// 10.
// Создайте экземпляр класса Arabian. И отправьте его на скачки 5 раз, записывая
// каждый раз разный случайный результат от 1 до 10.

// 11.
// Узнайте какая цена вашего скакуна, спустя 5 забегов и продается ли он.


// {ваш код здесь}

class Horse{

  constructor( breed, color )  {
    this._breed = breed;
    this._color = color;
    this._isInStock = false;
  }

    get breed()  {
        return  this._breed;
    }

    get color()  {
        return  this._color;
    }

    get isInStock()  {
        return  this._isInStock;
    }

        toggleInStockStatus()  {

          if ( this._isInStock === false || this._isInStock === true)  {
            this._isInStock = !this._isInStock;
          }

       }

    set isInStock(value)  {

        if( typeof value === 'boolean' ) return;
            this._isInStock = value;

    }

}


 class Arabian extends Horse  {

   constructor(breed, color)  {
     super(breed,color)
     this._price = 1000;
     this._raceResults= [];
   }

       get price()  {
           return this._price
       }


       getAverageResults()  {
         let l = this._raceResults.length;
         if (l <= 0) console.log("Лошадь еще не принимала участие в забегах");

         let sum = this._raceResults.reduce((sum, i) => sum + i);

         return Math.floor(sum / l);

       }

       addRaceResult(res) {
         if (typeof res !== 'number') {
         console.log("Тип данный должен быть числовым");
         return;
         }

               this._raceResults.push(res);

               let avg = this.getAverageResults();
               let gaineAmount = Math.floor(this._price * 0.1);

               if (avg > 5) this._price -= gaineAmount;

               if (avg < 5) this._price += gaineAmount;

               this._isInStock = avg <= 2 ?  false : true;
      }

}


let horse = new Arabian('arabian', ' snow-white');

function goHorseRacing() {
  for (let i = 1; i <= 5; i++) {
    horse.addRaceResult(Math.floor(Math.random()*10));
  }
}
goHorseRacing()

console.log("Скакун: "+horse.breed + horse.color)
console.log( "Цена скакуна :"+ horse.price )
console.log( "Продается: "+ horse.isInStock )


/*

Этот многострочный комментарий не удалять!!!

#
#
#
#
#

*/

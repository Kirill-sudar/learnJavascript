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

          if ( this._isInStock===false || this._isInStock===true)  {
            this._isInStock=!this._isInStock;
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
     this._price=1000;
     this._raceResults=[];
   }
//?! -> в чем разница с getPrice методом,какое значение этот метод тогда должен возвращать,если это уже делает геттер
       get price()  {
           return this._price
       }


       getAverageResults()  {
         if(this._raceResults.length=0)return console.log("Не было заездов")
           let sum=this._raceResults.reduce((a, b)=>a+b,0);
          let result=sum / this._raceResults.length;
          return result;

       }

       addRaceResult(res) {
               if (typeof res !== 'number') console.log("Тип данный должен быть числовым");

               this._raceResults.push(res);

               let avg = this.getAverageResults();
               let gaineAmount = Math.floor(this._price * 0.1);

               if (avg > 5) this._price -= gaineAmount;

               if (avg < 5) this._price += gaineAmount;

               this._isInStock = avg <= 2 ?  false : true;
      }



}


const horse=new Arabian("dvor","green")
horse.addRaceResult(2,1,5,5,6);

console.log(horse.price)
console.log(horse.isInStock)


// 11.
// Узнайте какая цена вашего скакуна, спустя 5 забегов и продается ли он.


// {ваш код здесь}

/*

Этот многострочный комментарий не удалять!!!

#
#
#
#
#

*/

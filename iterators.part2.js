//Итераторы часть 2
// Задание 12
//12. Дан массив с числами.
// Найди сумму первых N элементов до первого нуля.
// Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.


let iteratorArray = [1, 0, 8, 0, 4, 1, 2];

let reduceIterator = iteratorArray.reduce( (sum, el) =>{

if (el == 0) { console.log(sum) }

else {return sum + el;}

});

// Задание 13
//13. Дан массив с числами.
// Найди сумму последних N элементов до первого нуля с конца.
// Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0.

let reduceIteratorTwo = iteratorArray.reduceRight( (sum, el) => {

if (el == 0) {  console.log( sum );
} else {
  return sum + el;
  }
});


//Задание 14
//Дан массив с числами.
//Узнай сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
let reduceIteratorThree = iteratorArray.reduce((sum, el, index) => {

if (sum >10) {
  console.log(sum);
    console.log(index);
} else {
  return sum + el;
  }
});

//Задание 15
//Дан массив с числами.
// Узнай сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
let i=0;
let reduceIteratorFour = iteratorArray.reduceRight((sum, el, index) => {

if (sum>10) {
  console.log( sum );
     console.log( index+i );
 }else {
  ++i;
    return sum + el;
  }
});

//Задание 16
// Дан массив с числами.
// Оставь в нем только положительные числа. Затем извлеките квадратный корень из этих чисел.

let exerciseSixteen = [-1, -2, 3, 4, 5];

console.log(exerciseSixteen.filter(el => el >0 ).map(Math.sqrt))

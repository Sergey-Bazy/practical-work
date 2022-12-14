/*Практическое задание 3.4
 программе задана переменная value, в которую записано дробное число. Выполните следующие операции:

 округлите значение переменной "вверх" до целого значения;
 округлите значение переменной "вниз" до целого значения;
 округлите значение переменной по правилам математики до целого значения;
 посчитайте сумму полученных выше значений и из результата возьмите корень квадратный;
 из результата возьмите целую часть числа и выведите в консоль.
 
 Примеры значений переменных:
 value = 5.4
 
 Пример результата:
 4 
const value = 5.4;
const ceil = Math.ceil(value);
const floor = Math.floor(value);
const round = Math.round(value);
const sqrt = Math.sqrt(ceil + floor + round);
const trunc = Math.trunc(sqrt);
console.log(Math.round(trunc));*/

// ***************************************************************************************

/* Практическое задание 3.5
В программе заданы две переменные a и b с числовыми значениями. Выведите в консоль произведение значений этих переменных, возведенное в квадрат.


Пример значений переменных:
let a = 2;
let b = 4;

Пример результата:
64 

let sum = a * b;
console.log(Math.pow(sum,2)); */

// *****************************************************************************************

/* Практическое задание 3.6
В программе заданы две переменные a и b с числовыми значениями. Посчитайте длину гипотенузы в прямоугольном треугольнике, если значения a и b являются длинами катетов. Результат выведите в консоль.


Пример значений переменных:
let a = 3;
let b = 4;

Пример результата:
5

console.log(Math.hypot(a, b)); // Метод Math.hypot() возвращает квадратный корень суммы квадратов своих аргументов. */

//********************************************************************************************

/* Практическое задание 3.7

В программе задана переменная obj, в которую записан объект со свойствами name, last_name и age, в которых хранятся имя, фамилия и возраст пользователя соответственно. Сформируйте строку по примеру и выведите ее в консоль. Обратите внимание, что имя и фамилию требуется заключить в различные виды кавычек.


Пример значений переменных:
name: "Анатолий", last_name: "Максимов", age: 32

Пример результата:
Имя: "Анатолий" Фамилия: 'Максимов' Возраст: 32

let str = `Имя: "${obj.name}" Фамилия: '${obj.last_name}' Возраст: ${obj.age}`;
console.log(str); */

// ********************************************************************************************

/* Практическое задание 3.8

В программе заданы три переменные name, last_name, age, в которых хранятся имя, фамилия и возраст пользователя соответственно. Сформируйте объект с ключами name, last_name, age и значениями из соответствующих переменных. Выведите этот объект в консоль.


Пример значений переменных:
name = "Анатолий"
last_name = "Максимов"
age = 32

Пример результата:
{name: "Анатолий", last_name: "Максимов", age: 32}

let obj = {
    name: name,
    last_name: last_name,
    age: age
   }
   
   console.log(obj); */

//    *********************************************************************************************

/* Практическое задание 3.9

В программе задана переменная value. Выведите в консоль ее тип. Не забудьте, что функция typeof со значением аргумента null выдает неправильный результат. При значении null необходимо вывести "null".


Пример значений переменных:
let value = "привет";

Пример результата:
"string"

if (value === null)  { console.log("null") } else { console.log (typeof value) } */

// **************************************************************************************************

/* Практическое задание 3.10

В программе объявлены две переменные num_1 и num_2, в которых записаны численные значение в строковом виде. Преобразуйте строки в числа и посчитайте их сумму. Результат выведите в консоль.


Пример значений переменных:
num_1 = "3"
num_2 = "5"

Пример результата:
8

console.log(+num_1 + +num_2 ) */

// *****************************************************************************************************

/* Практическое задание 3.11

В программе объявлена переменная size, в которой записано строковое значение. В строке size записано число и единицы измерения. Необходимо "достать" численное значение вывести в консоль.

Пример значений переменных:
size = "500.5%"

Пример результата:
500.5

console.log(parseFloat(size)) */

// ******************************************************************************************************

/* Практическое задание 3.12

В программе заданы три переменные a, b и c, в которых хранятся длина, ширина и высота прямоугольного параллелепипеда с указанием единиц измерения. Напишите программу, которая рассчитывает объем прямоугольного параллелепипеда и выводит результат в консоль без единиц измерения.


Пример значений переменных:
a = "5px"

b = "7px"

c = "10px"

Пример результата:
350

//*************************************************************

                                                                 УСЛОВНЫЕ ОПЕРАТОРЫ!!!


Практическое задание 4.1

В программе задана переменная speed с числовым значением. Реализуйте программу, которая в зависимости от условия выполняет следующее действие:

если значение от 0 до 30 включительно, выведите строку Вы едете слишком медленно;
если значение от 31 до 70 включительно, выведите строку Вы едете с нормальной скоростью;
в ином случае выведите Вы едете слишком быстро, сбавьте скорость.

Пример значений переменных:
speed = 60

Пример результата:
"Вы едете с нормальной скоростью"

if(speed <= 30){
    console.log("Вы едете слишком медленно");
    }
    else if(speed >= 31 & speed <= 70){
    console.log("Вы едете с нормальной скоростью");
    }
    
    else {console.log("Вы едете слишком быстро, сбавьте скорость")
    }; */

// *****************************************************************************************

/* Практическое задание 4.2

В программе объявлена переменная price, в которой хранится строка со значением цены. Переведите значение переменной в число (parseInt) и в зависимости от полученного значения выполните следующее действие:

если записанное значение оказалось не числом, выведите в консоль сообщение Не число;
если число равно 0 или является отрицательным, выведите в консоль сообщение Число не корректное;
в ином случае выведите в консоль значение числа.

Пример значений переменных:
price = "12 рублей"

Пример результата:
12

let int = parseInt(price);
if(isNaN(int)){
  console.log("Не число");
}
else if(int <= 0 ){
  console.log("Число не корректное")
}
else{
  console.log(int)
} */
// **********************************************************************************************

/* Практическое задание 4.3
В программе объявлены три переменные a, b и c, в которые записаны числовые значения. Определите максимальное значение и выведите его в консоль, но помните: методом max пользоваться нельзя.


Пример значений переменных:
a = 32

b = 5

c = 14

Пример результата:
32

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else {
    console.log(c);
}
 */
// ******************************************************************************************************

/* Практическое задание 4.4

В программе объявлены две переменные — temp и weather. Объявите переменную activity и присвойте ей значение по следующему правилу:
если значение переменной temp больше либо равно 25, a переменная weather имеет значение "clear", тогда значение переменной activity должно быть "golf";
если значение переменной temp от 10 до 24, a переменная weather имеет значение "clear", тогда значение переменной activity должно быть "bowling";
в ином случае значение переменной activity должно быть "hiking".

Пример значений переменных:
temp = 25

weather = "clear"

Пример результата:
"golf"

let activity ="";

if(temp >= 25 && weather == "clear" ) {
  activity = "golf";
}
else if(temp >= 10 && temp <=24 &&  weather == "clear"){
  activity = "bowling";
}
else{
  activity = "hiking";
} */

// *********************************************************************************************************

/* Практическое задание 4.5

В программе определены две переменные со строковым значением word_1 и word_2. Допишите программу таким образом, чтобы в консоль выводилась строка наибольшей длины.


Пример значений переменных:
word_1 = "машина"

word_2 = "стол"

Пример результата:
"машина"

console.log((word_1.length > word_2.length)?word_1:word_2 ); */

// ***********************************************************************************************************

/* Практическое задание 4.6

В программе объявлена переменная task, в которой записано одно из строковых значений: удалить, переименовать, редактировать. Напишите программу, которая выводит в консоль:

delete – при значении task – удалить;
rename – при значении task – переименовать;
edit – при значении task – редактировать.

Пример значений переменных:
task = "переименовать"

Пример результата:
"rename"

switch(task){
    case "удалить" :
      console.log("delete")
      break;
  case "переименовать" :
      console.log("rename")
      break;
  case "редактировать" :
      console.log("edit")
  } */

//   *****************************************************************************************************************

/* Практическое задание 4.7

В программе объявлены две переменные — price и range. Переменная range может принимать одно из трех строковых значений — month/day/week. Переменная price хранит в себе числовое значение. Необходимо написать программу, которая формирует строку с использованием данных переменных по следующему шаблону:


<значение price> Р в <эквивалент значения range на русском языке>

Пример значений переменных:

price = 10000

range = "day"


Пример результата:

10000 Р в день.

switch(range){
case "month":
    console.log(`${price} Р в месяц`);
    break;
case "day":
    console.log(`${price} Р в день`);
    break;
case "week":
    console.log(`${price} Р в неделю`);
} */

//   *****************************************************************************************************************

/*  Практическое задание 4.8

В программе объявлены три переменные — a, b и sign. В переменных a и b хранятся числовые значения. В переменную sign записано строковое значение одного из математических операторов +, -, /, *. Напишите простой калькулятор, который в зависимости от значения переменной sign будет совершать соответствующие математические операции с переменными a и b. Результат необходимо выводить в консоль. Гарантируется, что переменная b не равна нулю.


Примеры значений переменных:

a = 2

b = 6

sign = "*"

Пример результата:

12 

switch(sign){
    case"+":console.log(a+b);break;
    case"-":console.log(a-b);break;
    case"*":console.log(a*b);break;
    case"/":console.log(a/b);break;
   } */

//    *************************************************************************************************************************

/* Практическое задание 4.9

Необходимо доработать решение из задания 4.7

В дополнение к заданию 4.7 необходимо правильно обработать случай деления на 0. При попытке поделить на 0 программа должна выводить в консоль сообщение: Делить на 0 нельзя!.

Пример значений переменных:

a = 2

b = 0

sign = "/"

Пример результата:

Делить на 0 нельзя!
 */

/* switch(sign){
 case"+":console.log(a+b);break;
 case"-":console.log(a-b);break;
 case"*":console.log(a*b);break;
 case"/":
         if(b==0){
        console.log("Делить на 0 нельзя!");
       } else {
        console.log(a/b);
       }
        break;
    } */

// ******************************************************************************************************************

// ЦЫКЛЫ!!!

/*    Практическое задание 5.1

    В программе объявлены две переменные start и end. Используя цикл, посчитайте сумму чисел из диапазона значений от start до end (включая концы), кратные значению 5. Результат выведите в консоль.

Пример значений переменных:

start = 0 end = 50
Пример результата:

275

let result = 0;

while(start <= end){
    if(start % 5 === 0){
        result = result + start;
    }
    start++;
    console.log(result);
} */
// ***********************************************************************************************************************

/* Практическое задание 5.2

В программе объявлена переменная word со строковым значением. Переверните строку, используя цикл, и выведите результат в консоль.


Пример значений переменных:
word = "мир"

Пример результата:
"рим"

let reverse = "";

for(let index = word.length - 1;index >=0; index--){
reverse += word[index];
}

console.log(reverse); */

// *************************************************************************************************************

/* Практическое задание 5.3

Определите, является ли word палиндромом:

если является, выведите в консоль "Слово является палиндромом!";
если не является, выведите в консоль "Слово не является палиндромом!".
Примечание:

Строка word состоит только из букв разного регистра (большие и маленькие).


Пример значений переменных:
word = "Доход"

Пример результата:
"Слово является палиндромом!"

let word_low = word.toLowerCase();
let result = "";

for (let i = word_low.length - 1; i >=0; i--){
  result += word_low[i];
}

if (result === word_low ){
  console.log("Слово является палиндромом!");
}
  else{
    console.log("Слово не является палиндромом!")
  } */

//   ********************************************************************************************************

// ФУНКЦИИ!!!

/*  Практическое задание 6.1 
   
В программе объявлена переменная price, в которую записано числовое значение. Напишите функцию priceMessage(), которая выводит в консоль сообщение "Данный товар стоит X рублей", где вместо X указано значение переменной price. Вызовите функцию после ее определения.


Пример значений переменных:
price = 80000

Пример результата:
"Данный товар стоит 80000 рублей"

function priceMessage(){
    console.log(`Данный товар стоит ${price} рублей`);
  }
   priceMessage(); */

//    **********************************************************************************************************

/* Практическое задание 6.2

В программе объявлены две переменные с числовым значением — num_1 и num_2. Напишите функцию mult, которая принимает два аргумента и возвращает их произведение. Вызовите функцию mult и передайте ей в качестве аргументов значения переменных num_1 и num_2, а результат выведите в консоль.


Пример значений переменных:
num_1 = 3

num_2 = 6

Пример результата:
18

function mult(a,b){
    let result =a * b;
    return result;
   }
   
   let m = mult(num_1,num_2);
   console.log(m); */

//    **************************************************************************************************************

/* Практическое задание 6.3

В программе объявлена переменная num, в которую записано числовое значение. Напишите функцию square(), которая возвращает квадрат этого числового значения. Обратите внимание, что функция обращается к глобальной переменной, а не получает значение в качестве аргумента.


Пример значений переменных:
num = 9

Пример результата:
81

function square() {
  let result = num * num
  return result
}

 */
// *******************************************************************************************************************

/* Практическое задание 6.4

В программе объявлена переменная num, в которой записано числовое значение. Используя цикл, возведите значение переменной в квадрат три раза. Каждый результат конкатенируйте через пробел и выведите в консоль.

Пример значений переменных:
num = 2

Пример результата:
"4 16 256"

function gerSquares(n,cnt=3){
    let result = n;
    let str = "";
    while(cnt){
      result = result ** 2;
      if(cnt !==1){
        str += result + " ";
      } else{
        str += result;
      }
     
      cnt--;
    }
    return str
  }
  
  console.log(gerSquares(num)); */

//   **************************************************************************************************************************

 /* Практическое задание 6.5

В программе объявлена переменная data, в которой записано строковое значение. Напишите функцию getNumber(data), которая преобразовывает строку в число по следующему правилу:

если переменная data содержит не число, функция должна вернуть численное значение 0;
если переменная data содержит число, например "123", то функция возвращает числовое значение 123.
Вызовите эту функцию и выведите результат в консоль.

Пример значений переменных:
data = "привет"

Пример результата:
0

function getNumber(data) {
  data = parseFloat(data);
  if (Number.isNaN(data) === true){
 console.log(0);
 
 }else {
 console.log(data);
 }
 }
 getNumber(data); */

//  ************************************************************************************************************************************

/* Практическое задание 6.6

В программе объявлены две переменные — value и total, в которых записаны числовые значения. Напишите функцию getPercent(value, total), которая возвращает процент числа value от значения total. Вызовите эту функцию с value и total в качестве аргументов. Результат работы функции выведите в консоль.


Пример значений переменных:
value = 4

total = 80

Пример результата:
5

function getPercent(value,total){
  return (value / total) *100;
  }
  let result=getPercent(value,total);
  console.log(result); */

// *************************************************************************************************************************

//                                                            МАССИВЫ: ОСНОВЫ

/* Практическое задание 9.1

В программе объявлена переменная list, представляющая массив значений. Используя методы массивов, выполните следующие действия:

добавьте в начало массива новый элемент со значением Яблоко;
удалите последний элемент массива;
добавьте в конец массива новый элемент со значением Клубника.
После выполнения всех перечисленных действий выведите значение переменной list в консоль.


Пример значений переменных:
list = ["Груша", "Яблоко"]

Пример результата:
["Яблоко", "Груша", "Клубника"]

list.unshift("Яблоко");
list.pop();
list.push("Клубника");

console.log(list.parseInt); */

// ******************************************************************************************************************************

/* Практическое задание 9.2

В программе объявлена переменная list, в которую записан массив из строковых значений. Посчитайте и выведите в консоль элемент с максимальной длиной. Если элементов с такой длиной несколько, выведите первый.


Пример значений переменных:
list = ["Груша", "Яблоко"]

Пример результата:
"Яблоко" 
let longestWord = '';
for (let index = 0; index< list.length; index++) {
  if (list[index].length > longestWord.length) {
    longestWord = list[index];
  }
console.log(longestWord);
} */

// ***********************************************************************************************************************************

/* Практическое задание 9.3

В программе объявлена переменная list, которая содержит массив чисел. Используя цикл, посчитайте сумму чисел и выведите в консоль.


Пример значений переменных:
list = [23, 13, 3]

Пример результата:
39

var res = 0; 
for (var i = 0; i < list.length; i++) {
  res = list[0] + list[1] + list[2];
}
console.log(res) */

// ********************************************************************************************

//Практическое задание 9.4

// В программе объявлены две переменные — list_1 и list_2, в каждой из которых хранится массив из чисел. Объедините два массива в один и каждое значение возведите в квадрат. Результат выведите в консоль.

// Значения переменных:
// list_1 = [12, 3]

// list_2 = [2, 1]

// Результат:
// [144, 9, 4, 1]

// let sumArray = list_1.concat(list_2);

// for(let i in sumArray){
//   sumArray[i] = sumArray[i] ** 2;
// }

//   console.log(sumArray);

// **********************************************************************************************************

/* Практическое задание 9.5

В программе объявлена переменная list, в которую записан массив из положительных и отрицательных числовых значений. Используя цикл, посчитайте сумму положительных чисел и выведите результат в консоль.


Пример значений переменных:
list = [12, -4, 5, 32, 2],

Пример результата:
51

let sum = 0;
for(let i = 0; i < list.length; i++){
  if (list[i] > 0)
  {sum += list[i]}
}

console.log(sum); */

// **********************************************************************************************************************

/* Практическое задание 9.6
В программе объявлена переменная list, в которую записан массив числовых значений от 1 до 100. Используя цикл, сформируйте сумму из простых чисел этого диапазона и выведите результат в консоль.


Пример значений переменных:
list = [1, 2, 3, ... 99, 100]

Пример результата:
1060
let sum = 0
primeNum:
    for (let i of list) {
        if (i == 0 || i == 1) {
            sum += 0
        } else {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) continue primeNum;
            }
            sum += i
        }
    }
console.log(sum); */

// *************************************************************************************************************************
/* Практическое задание 9.7

В программе объявлена переменная list, в которую записан массив из числовых значений. Рассчитайте произведение максимального и минимального элементов массива. Результат выведите в консоль.


Пример значений переменных:
list = [2, 45, 3, 23, 6]

Пример результата:
90

var max = 0;
var min = list[0];

    for (var i = 0; i < list.length; i++) { 
        
        if (list[i] > max) {
            max = list[i];

        }
        if(list[i] < min) {
            min = list[i];
        }
    }
    
console.log(max * min); */

// **************************************************************************************************************************

/* Практическое задание 9.8

В программе объявлена переменная list, в которую записан массив из числовых значений. Напишите программу, которая переворачивает массив list и выводит результат в консоль. Метод массива reverse() использовать нельзя.


Пример значений переменных:
list = [2, 45, 3, 23, 6]

Пример результата:
[6, 23, 3, 45, 2]

var newString =  [];
for (var i = list.length - 1; i >=0; i--) {
    newString.push(list[i]);
}
 console.log(newString);
 */

// *******************************************************************************************************************************

/* Практическое задание 9.9

В программе объявлена переменная sentence со строковым значением. Преобразуйте эту строку в массив так, чтобы каждое слово было отдельным элементом массива. Результат выведите в консоль.

Метод строки split() использовать нельзя.


Пример значений переменных:
sentence = "Завтра будет лучше чем вчера"

Пример результата:
['Завтра', 'будет', 'лучше', 'чем', 'вчера']

let position = 0;
const myArray = [''];
for (let i = 0; i < sentence.length; i++){
    if(sentence.charAt(i) == ' '){
        position++;
        myArray.push('');
    }
    else {
        myArray[position] += sentence.charAt(i);
    }
}
console.log(myArray); */

// ************************************************************************************************************************************

// Практическое задание 9.10
/* В программе объявлена переменная list, в которую записан массив из числовых значений. Напишите функцию count(list), которая принимает массив в качестве аргумента и возвращает количество четных элементов в массиве. Вызовите функцию count(list) и в качестве аргумента передайте ей список list. Выведите в консоль то, что вернет функция.


Пример значений переменных:
list = [2, 45, 3, 23, 6]

Пример результата:
2

function count(list) {
  let s = 0;
  for (let i = 0; i < list.length;i++){
      if (list[i] % 2 ==0){
          s++;
      }
  }
  return s;
  }
  console.log(count(list)); */

// **********************************************************************************************************************************

/* Практическое задание 9.11
В программе объявлена переменная list, в которую записан массив из числовых значений. Гарантируется, что массив не пустой. Реализуйте функцию average(list), которая принимает в качестве аргумента массив, рассчитывает среднее значение элементов массива, округляет получившееся значение по правилам математики и получившееся значение возвращает. Вызовите функцию average(list) и в качестве аргумента передайте список list. То, что функция вернет, необходимо вывести в консоль.


Пример значений переменных:
list = [2, 45, 3, 23, 6]

Пример результата:
16

let list = [2, 45, 3, 23, 6];
function average(list){
  
  let s = 0;
  
  for(let i = 0; i < list.length; i++ ){
    s += list[i];
   
  }
   return Math.round(s / list.length) 
}

console.log(average(list)); */

// ****************************************************************************************************

/* Практическое задание 9.12

В программе объявлена переменная list, в которой записан массив из чисел и логических значений. Используя цикл, посчитайте сумму числовых значений до первого логического значения. Дойдя до логического значения, остановите цикл. Результат выведите в консоль.


Пример значений переменных:
list = [2, 54, 2, 54, false, 2]

Пример результата:
112

let sum = 0;

        for(let i = 0; i < list.length; i++){
            if(typeof(list[i]) == "number"){
                sum += list[i];
            } else {
                break;
            }
        }

        console.log(sum);
/*
Решение 2:

for(let i = 0; i < list.length; i++){
          if(typeof(list[i]) == "boolean"){
            break;
          } else {
            sum += list[i];
          }
        }
        console.log(sum); */

// ******************************************************************************************************

/* Практическое задание 9.13

Используя цикл, сформируйте массив list со значениями от 10 до 20. Выведите значение переменной list в консоль.

let start =10;
let result  = [];
while (start <= 20) {
    result.push(start++);
}
console.log(result);
 */

// ************************************************************************************************************

/* Практическое задание 9.14

В программе объявлена переменная list, в которую записан массив. Используя цикл, сформируйте массив numbers_list, который содержит в себе только числа из массива list. Если в процессе прохода циклом по массиву list обнаружится значение false, последующие значения рассматривать не нужно. В конце программы выведите значение переменной numbers_list в консоль.


Пример значений переменных:
list = [2, "привет", 23, true, 2, false, 2]

Пример результата:
[2, 23, 2]

let numbers_list = [];

        for(let i = 0; i < list.length; i++){
            if(typeof(list[i]) == "number"){
                numbers_list.push(list[i]);
            } else if (list[i] == false){
                break;
            }
        }
console.log(numbers_list); */

// **********************************************************************************************************

/* Практическое задание 9.15

В программе объявлена переменная list, в которой записан массив из строковых значений. Напишите программу, которая считает количество элементов в массиве list без учета элементов со значением "default" и выводит результат в консоль. Сравнение должно быть регистронезависимым.


Пример значений переменных:
list = ["Лёша", "default", "полке", "клопа", "нашёл"]

Пример результата:
4

let newList = [];
        let num = 0;

        for(let i = 0; i < list.length; i++){
            list[i] = list[i].toLowerCase(); 
            if(list[i] == "default"){
                continue;
            } else {
                newList.push(list[i]);
            }
            num = newList.length;
        }
        console.log(num); */

// *************************************************************************************************************

/* Практическое задание 9.16

В программе объявлена переменная list, в которую записан массив из строковых значений. Сформируйте строку из первых букв каждого элемента массива и выведите ее в консоль. Гарантируется, что каждый элемент массива не нулевой длины.


Пример значений переменных:
list = ["почтовый","желание","абсолютный","закрытый"]

Пример результата:
"пжаз"

решение 1
l = list.length,
z = 0,
n = "";

for (; z < l; ++z)
{
n += list[z].charAt(0);
}
console.log(n);

решение

n = "";
for (z= 0; z < list.length; ++z)
{
n += list[z].charAt(0);
}
console.log(n); */

// **************************************************************************************************************

/* Практическое задание 9.17

В программе объявлена переменная obj, содержащая объект с подобным набором значений:

{
        "Яблоко": "фрукт",
        "Арбуз": "ягода",
        "Помидор": "овощ",
        "Огурец": "овощ",
        "Вишня": "ягода"
}
Напишите скрипт, который формирует новый объект со значениями и их количеством. Выведите новый объект в консоль.

Пример результата:
{
    "фрукт": 1,
    "ягода": 2,
    "овощ": 2
}


let newObj = {};
  for(let key in obj){
  newObj[obj[key]] = (newObj[obj[key]] || 0) + 1;
}
console.log(newObj); */

// *****************************************************************************************************************

/* Практическое задание 9.18

В программе объявлена переменная list, в которую записан массив из объектов. В каждом объекте записаны название продукта и его стоимость.

Выведите в консоль название продукта, цена которого является максимальной в заданном массиве. Если таких несколько, выведите название первого из них.


Пример значений переменных:
 list = [
 {product: "Apple", price: 25},
 {product: "Cherry", price: 32},
 {product: "Strawberry", price: 45}
]
Пример результата:
"Strawberry"

et maxPrice = 0;
    let goodName = 0;

    for (let key in list){
        if (list[key].price > maxPrice){
        maxPrice = list[key].price;
        goodName = key;
        }
    }
    console.log(list[goodName].product); */

// *********************************************************************************************************************

//                                                                      JS 2

//                                                              Базовые строковые функции

/* Практическое задание 1.1.

В программе задана переменная message со строковым значением. Определите наличие подстроки привет в начале строки переменной message. Если данное условие выполняется, выведите в консоль булевое значение true, в ином случае — false. Сравнение должно быть без учета регистра. Правильный ответ выведите в консоль.


let lowerMess = message.toLowerCase();
if(lowerMess.startsWith("привет") === true) {
console.log(true);
} else{
  console.log(false)
} */

// *************************************************************************************************************************

/*  Практическое задание 1.2.

 В программе задана переменная greetings со строковым значением. Определите позицию последнего вхождения подстроки username в значении переменной greetings. Результат выведите в консоль.


Пример значений переменных:

greetings = "Приветствую, username! Сегодня вы получили два сообщения от username."
Пример результата:

60

let sumGreetings = greetings.toLowerCase();
let twoSumGreetings = sumGreetings.lastIndexOf("username");
console.log(twoSumGreetings); */

// **************************************************************************************************************************

Практическое задание 1.3.

В программе задана переменная firstDiv со строковым значением. Определите, встречаются ли в данной строке два парных тега <p>. Выведите в консоль булевое значение true, если встречается, и false — в ином случае.


Пример значений переменных:

firstDiv = "<div><p>Первый заголовок</p><p>Второй заголовок</p></div>"
Пример результата:

true


// *****************************************************************************************************************************

Практическое задание 1.4.

В программе объявлена переменная road со строковым значением, которая задает протяженность дороги. Необходимо из строки убрать подстроку km, оставив только численное значение. Его необходимо конвертировать в мили, округлить до одного знака после запятой, а результат вывести в консоль. Помните, что 1 километр равен 0,62 мили.


Пример значений переменных:

road = 15 km
Пример результата:

9.3





// ********************************************************************************************************************************

Практическое задание 1.5.

В программе задана переменная words со строковым значением. Напишите условный оператор, который выводит в консоль сообщение В строке больше одного слова, если строка содержит больше одного слова, в ином случае в консоль должна выводиться фраза В строке одно слово.


Пример значений переменных:

words = "Солнечная панель"
Пример результата:

"В строке больше одного слова"



// **********************************************************************************************************************************

//                                                             Сравнение строк.


/* Практическое задание 1.6.

В программе объявлена переменная symbols со строковым значением. В данной строке могут встречаться буквенные символы и цифры. Опишите условие, которое выводит в консоль строку Первый символ цифра, если первый символ переменной symbols является цифрой. В противном случае необходимо вывести строку Первый символ не цифра.


Пример значений переменных:

symbols = "Первый номер"
Пример результата:

"Первый символ не цифра"


if(isNaN(symbols[0]) == false){
  console.log("Первый символ цифра")
}
else{
  console.log("Первый символ не цифра")
}
 */

// **********************************************************************************************************************************
/* 
Практическое задание 1.7.

В программе объявлена переменная symbols со строковым значением. Напишите условный оператор, который реализует следующую логику:

Если сумма числовых значений Unicode первых двух символов делится на два без остатка, необходимо получившееся число конвертировать в unicode-символ и вывести в консоль
В ином случае необходимо вывести сообщение Символ обнаружить не удалось

Пример значений переменных:

symbols = "floor"
Пример результата:

"Ò"

let oneUnicod =  symbols.codePointAt(0);
let twoUnicod =  symbols.codePointAt(1);
let summ = oneUnicod + twoUnicod;
if(summ % 2 == 0){
  console.log(String.fromCharCode(summ))
} else{
  console.log("Символ обнаружить не удалось")
} */

// ***********************************************************************************************************************************



//                                                           Работа с регулярными выражениями

Практическое задание 1.8.

В программе задана переменная phone со строковым значением. В ней хранится номер телефона и, помимо цифр, иные символы. Преобразуйте строку так, чтобы в номере отсутствовали следующие символы: (,/:/,*/ ). (запетая тут не нужна. она поставлен чтобы не комментировалась задача.)


Пример значений переменных:

phone = "+712:34567*8,90"
Пример результата:

"+71234567890"




// ************************************************************************************************************************************

Практическое задание 1.9.

В программе задана переменная emails со строковым значением. В ней указано несколько значений электронной почты через пробел. Преобразуйте данное значение в массив так, чтобы каждая почта в строке являлась элементом массива. Результат выведите в консоль.


Пример значений переменных:

emails = "example@ex.ru primer@primer.com email@com.ru"
Пример результата:

["example@ex.ru", "primer@primer.com", "email@com.ru"]


// **************************************************************************************************************************************

Практическое задание 1.10.

В программе задана переменная ticket со строковым значением. Напишите условный оператор, который работает по следующей логике:

Если в билете после буквенных символов и тире идут 8 цифр подряд, программа должна вывести в консоль сообщение Выбран билет на концерт
Если в билете после буквенных символов идут 12 цифр подряд, программа должна вывести в консоль сообщение Выбран билет в театр
В противном случае выведите в консоль сообщение Билет не определен

Пример значений переменных:

ticket = "BM-12234567:RU"
Пример результата:

"Выбран билет на концерт"

// **************************************************************************************************************************************

//                                                                 Метод splice

Практическое задание 2.1.

В программе задана переменная values, которая хранит массив со строковыми и булевыми значениями. Замените булевое значение с минимальным индексом на строковое значение Булевый тип. Преобразованный массив выведите в консоль. Примечание: подразумевается решение без методов массивов, просто вспомним, как работать с массивами и циклами!


Пример значений переменных:

values = ["Строка", true, "Число", "Объект", "Не число", false]
Пример результата:

["Строка", "Булевый тип", "Число", "Объект", "Не число", false]
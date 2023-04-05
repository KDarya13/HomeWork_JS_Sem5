
//Задание 5
//Дано 2 массива 
//Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

//1 вариант
const obj = {};
for (let i =0; i < en.length; i++) {
    obj[en[i]] = ru[i];
}
console.log(obj);

//2 вариант
const newWeek = en.reduce(function (arr, i, j) {arr[i] = ru[j]; return arr;}, {});
console.log(newWeek);
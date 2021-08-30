// const number = [1, 2, 3, 4, 5];
// console.log(number);

// const moreNumbers = new Array(5);//gives .length
// console.log(moreNumbers);

// const yetMoreNum = Array.of(1, 2);
// console.log(yetMoreNum);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListNum = Array.from(number);
// console.log(arrayListNum);

// const ArrOfStrings = ["sda", "214"];
// const analyticsData = [[1, 1.6], [-5, 1, 3]];

// for (const data of analyticsData) {
//     for (const dataPoint of data) {
//         console.log(dataPoint);
//     }
// }

//                              Array Methods

// const hobbies = ["Sports", "Cooking"];
// hobbies.push('Read');
// hobbies.unshift("Coding");
// hobbies.pop();//last value
// hobbies.shift();
// console.log(hobbies);
// hobbies[1] = 'CODING';
// hobbies[5]="rest";//rarely used
// console.log(hobbies);

// hobbies.splice(1, 0, "Good Food");
// console.log(hobbies);
// const removedElement = hobbies.splice(-1, 1);
// console.log(removedElement, hobbies);

// const testResult = [1, 5.2, 1.2, 10.22, -1, 10];
// const arr = [1, 23, 4, 5]
// const storedResult = testResult.slice(0, 3);
// const storedResult = testResult.concat(arr)

// console.log(testResult);
// console.log(storedResult);
// console.log(storedResult.lastIndexOf(1));
// const personData = [{ name: "Max", age: 22 }, { name: "Vines", age: 32 }]
// const max = personData.find((person, index, persons) => {
//     return person.name === "Max";
// });
// console.log(max);
// const maxIndex = personData.findIndex((person, index) => {
//    return person.name === "Max";

// });
// console.log(maxIndex);

//---------------------------------------- Loops ------------------------------------

// const prices = [10.00, 7, 3.99, 6.5];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// for (const price of prices) {

//     taxAdjustedPrices.push(price * (1 + tax));
// }
// prices.forEach((item, indx, prices) => {
//     const priceObs = { index: indx, taxAdjPrice: item * (1 + tax) };
//     taxAdjustedPrices.push(priceObs);
// });

// console.log(taxAdjustedPrices);

//------------------------------------ Map --------------------------------------------

const prices = [10.00, 7, 3.99, 6.5];
const tax = 0.19;
const taxAdjPrices = prices.map((price, idx, prices) => {
    const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) }
    return priceObj;
});
// console.log(prices,taxAdjPrices);

const sortPrices = prices.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return -1;
    }
});
console.log(sortPrices.reverse());
const filteredArray = prices.filter(price => price >= 7);
console.log(filteredArray);

const sum = prices.reduce((prevVal, curVal) => prevVal + curVal, 0);

console.log(sum);
const data = ['new york;10.99;2000'];
const transformData = data.toString().split(';');

console.log(transformData);

const nameFrag = ['Max', 'Orwell'];

const name = nameFrag.join(' ');

const copiedNameFrag = [...nameFrag];

nameFrag.push("Mister")

console.log(nameFrag, copiedNameFrag);

console.log(Math.min(...prices));

const persons = [{ name: 'Max', age: 20 }, { name: 'Orwell', age: 33 }];
const copiedPersons = [...persons];
persons.push({ name: 'ana', age: 3 });

console.log(persons, copiedPersons);

console.clear();

const nameData = ['Dan', 'Michael',"Mr",23];

const [firstname, lastname,...otherInfo] = nameData;

console.log(firstname,lastname, otherInfo);
console.clear();

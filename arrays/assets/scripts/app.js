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

const testResult = [1, 5.2, 1.2, 10.22, -1, 10];
const storedResult = testResult.slice(0,3);

testResult.push(15151315.3333)

console.log(testResult);
console.log(storedResult);
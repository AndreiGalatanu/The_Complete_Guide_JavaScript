
const ids = new Set(["hi", "from", "wa"]);
for (const entry of ids.values()) {
    console.log(entry);
}

//   video 22
console.clear();

const person1 = { name: "Max" };
const person2 = { name: "Bob" };

const personData = new Map([[person1, [{ date: 'yesterday', price: 20 }]]])
personData.set(person2, [{ }])
console.log(personData);
console.log(personData.get(person1));


console.log("======================");
for (const [key, value] of personData.entries()) {
    console.log(key, value);
}
console.clear();
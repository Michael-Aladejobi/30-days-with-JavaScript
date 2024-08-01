const personsArray = [
    {
        name: "person1",
        age: 30,
        country: "USA",
    },
    {
        name: "person2",
        age: 36,
        country: "RUSSIA",
    },
    {
        name: "person3",
        age: 38,
        country: "INDIA",
    },
    {
        name: "person3",
        age: 38,
        country: "INDIA",
    },
    {
        name: "person4",
        age: 40,
        country: "INDIA",
    },
];

let checkEveryArrayMethodWithExample = personsArray.every((person) => {
    return person.age >= 30;
});
console.log(checkEveryArrayMethodWithExample);



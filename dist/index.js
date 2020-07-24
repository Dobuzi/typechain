const person = {
    name: "Dobuzi",
    age: 29,
    gender: "male",
};
const sayHello = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
const init = () => {
    console.log(sayHello(person));
};
init();
//# sourceMappingURL=index.js.map
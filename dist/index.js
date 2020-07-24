class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const person = new Human("Dobuzi", 30, "male");
const sayHello = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
const init = () => {
    console.log(sayHello(person));
};
init();
//# sourceMappingURL=index.js.map
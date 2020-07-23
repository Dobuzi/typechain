const myName = "Dobuzi";
const age = 29;
const gender = "male";

const sayHello = (name, age, gender?) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

const init = () => {
    sayHello(myName, age);
};

init();

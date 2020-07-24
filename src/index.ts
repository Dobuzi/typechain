const myName = "Dobuzi";
const age = 29;
const gender = "male";

const sayHello = (name: string, age: number, gender?: string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

const init = () => {
    console.log(sayHello(myName, age, gender));
};

init();

// console.log("hello world");

// TODO: Logical AND (&&) Operator Logical OR (||) Operator

function getName() {
    return "Abdur Rahim"
}


let a = false;
let b = true;

// console.log(a && b);
// console.log(a || b);
// console.log(a && getName());
// console.log(a || getName());


// example
// console.log(a&&b && b || a);


// TODO: Template Literals;

let firstName = "Abdur Rahim";
let surName = "Mohammad";

let prefix = "Mr.";

// console.log(prefix + " " + firstName + " " + surName);

// console.log(`${prefix} ${firstName} ${surName}`);

// TODO: Ternary Operator

let returnAge = true;

function getAgeInfo(age) {
    return `This person is ${age} year old`
}

function getCity() {
    return 'This person is from USA'
}

if (returnAge) {
    console.log(getAgeInfo(30));
} else {
    console.log(getCity());
}

// NOTE: condition ? statementForTrue : statementForFalse

returnAge ? console.log(getAgeInfo(30)) : console.log(getCity());




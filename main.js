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
    // console.log(getAgeInfo(30));
} else {
    // console.log(getCity());
}

// NOTE: condition ? statementForTrue : statementForFalse

// returnAge ? console.log(getAgeInfo(30)) : console.log(getCity());



// TODO: Object and Array Destructuring;
// TODO: Shorthand Property Names;

const id = 1;
const title = "Product 1";
const rating = 5;


const product = {
    id,
    title,
    rating
}

// console.log(product);

const productOne = {
    productName: "productOne",
    productDescription: "Product Description"
}

// let productName = productOne.productName;
// let productDescription = productOne.ProductDescription

const { productName, productDescription } = productOne

// console.log(productName, productDescription);

let arr = ["jhon", "Doe", "Random"];

// let arrFirstEle = arr[0];
// let arrSecondEle = arr[1];


let [arrFirstEle, arrSecondEle, arrThirddEle] = arr

// console.log(arrFirstEle, arrSecondEle, arrThirddEle);



// TODO: Default Parameters

function sum(numOne = 1, numTwo = 1) {
    return numOne + numTwo
}

let result = sum(10, 13)

// console.log(result);


// TODO: spread Operators, rest operators


const arrOne = [11, 222, 3, 2, 2, 2, 2, 45];
const arrTwo = [23432142, 23432, 234]


// console.log([...arrOne, ...arrTwo]);


function someThing(a, b, ...c) {
    console.log(a, b, c)
    return "Hello"
}

console.log(someThing(1, 2, 3,3,68,7));



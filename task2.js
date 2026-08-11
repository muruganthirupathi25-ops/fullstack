// task1 variables studends details

let studentName = "ak kumar";
var age = 23;
const course = "MCA";
let mark =95;
console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Course:", course);
console.log("Mark:", mark);

// task2 user input

let name = prompt("enter your name:");
let age = prompt("enter your age:");
console.log("name:",name);
alert("your age is : " + age);

// task3 data type

let stringValue ="ak thala";
let numberValue =33;
let booleanValue=true;
let undefinedValue;
let nullValue = null;
console.log(stringValue, typeof stringValue);
console.log(numberValue, typeof numberValue);
console.log(booleanValue,typeof booleanValue);
console.log(undefinedValue,typeof undefinedValue);
console.log(nullValue,typeof nullValue);

// task4 array shopping list

let products = [
    "Shirt",
    "Pant",
    "Shoes",
    "Watch",
    "Bag",
    "Cap"
];

console.log("frist product:",products[0]);
console.log("third product:",products[2]);
console.log("last product:",products[products.length -1]);
console.log("complete array:",products);

// task5 object employee details

let employee={
    name:"akthala",
    age:23,
    role:"full stack developer",
    salary:40000
};
console.log("name:",employee.name);
console.log("age:",employee.age);
console.log("role:",employee.role);
console.log("salary:",employee.salary);

//task6 Arithmetic operator bbill calculator

let productPrice= 500;
let productQuantity=3;

let totalPrice =productPrice * productQuantity;
let discount =100;
let finalAmounnt =totalPrice -discount;
console.log("total price:",totalPrice);
console.log("discouunt:",discount);
console.log("final amount:",finalAmounnt);

// task7  comparison operator

console.log(25 > 20);   true
console.log(15 < 10);   false
console.log(50 == "50");  true
console.log(50 === "50");  false
console.log(100 != "100");  false
console.log(100 !== "100"); true

// task8 logical operators

console.log(10 > 5 && 20 > 15 || 5 > 10);

//         true && true=true||false=true

console.log(10 < 5 || 20 >= 20 && 5 == "5");

//         false || true= true && true=true

console.log(15 === "15" || 10 > 5 && 8 < 3);

//     false||true=true &&false= fasle

console.log(20 >= 20 && 5 !== "5" || 10 < 5);

//     true && true= true || false=true

console.log(25 < 20 || 30 == "30" && 10 >= 10);

//       false||true= true&& true=true


//  task9 ternary operator -login

let passwordcorrect = true;
let result = passwordcorrect
       ?"login successfful" 
       : "imnvalid password";

       console.log(result);

    //task10 type casting marks  
    
    
    let mark11="80";
    let mark22="70";

    let num11 = number(mark11);
    let num22 = number(mark22);
    let total = num11+num22;
    console.log(total);

    // task11 voting eligibility

    let age =20;
    if(age>=18){
        console.log("you can vote");
        
    }else{
        console.log("you cannot vote");
        
    }
   
    // task12 student grade
     
    let mark = 85;

if (mark > 100 || mark < 0) {
    console.log("Invalid Mark");
} else if (mark >= 90) {
    console.log("A Grade");
} else if (mark >= 75) {
    console.log("B Grade");
} else if (mark >= 50) {
    console.log("C Grade");
} else if (mark >= 45){

    console.log("D Grade");
}else{
    
    console.log("Fail");
}


// task13 time greeting

let time = 15;

if (time >= 1 && time <= 6) {
    console.log("Early Morning");

} else if (time >= 7 && time <= 12) {
    console.log("Good Morning");

} else if (time >= 13 && time <= 15) {
    console.log("Good Afternoon");

} else if (time >= 16 && time <= 19) {
    console.log("Good Evening");

} else if (time >= 20 && time <= 24) {
    console.log("Good Night");

} else {
    console.log("Invalid Time");
}
    
    // task14  nested if- jod eligibility 

let age = 25;
let height = 175;
let weight = 75;

if (age >= 21) {

    if (height >= 170) {

        if (weight >= 70) {
            console.log("Candidate is eligible");
        } else {
            console.log("Weight must be 70 kg or above");
        }

    } else {
        console.log("Height must be 170 cm or above");
    }

} else {
    console.log("Age must be 21 or above");
}

// task15 switch -traffic light


let trafficLight = "yellow";

switch(trafficLight){
    case "red":
        console.log("stol the vehicle");
        break;

        case "yollow":
        console.log("get start");
        break;
        
        case "green":
            console.log("go");
            break;

            default:
                console.log("invalid traffic light");
                
            
        
}





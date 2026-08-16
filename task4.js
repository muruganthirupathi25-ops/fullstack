// task1 salary calcutor

let salary =30000;
let bouns = 5000;
let tax = 2000;
console.log("final salary:" +(salary + bouns - tax))

// task2 predict the output

let a=10;
let b=a++;
let c=++a;
console.log(a);   12
console.log(b);   10
console.log(c);   12

// task3 logical operators
 console.log(10 > 5 && 20 < 10 || 5 ==="5");

            //  true && false =false|| false=false
 console .log(10 < 5 || 20 >=20 && 5 == "5");

    //    false||true=true&&true=true
console.log(!(10>5));
    // false 


    // task4 atm withdrawal

    let balance =10000;
    let withdrawal =2500;
    if(withdrawal >0 && withdrawal<= balance && withdrawal% 100 ===0){
        balance = balance -withdrawal;

        console.log("withdrawal successful");
        console.log("remaining balance :"+balance);
        
        
    } else{
        if (withdrawal<=0) {
            console.log("invaild amount");
            
            
        }else if(withdrawal> balance){
            console.log("insufficient balabce");
            
        }else{
            console.log("amount must be a multiple of 100");
            
        }
    }

    // task5 student grade

    let mark =78;

    if(mark >= 90&& mark<=100){
       console.log("grade A");
        
    }else if (mark >=80 && mark<=89) {
        console.log("grade B");
        
        
    }else if (mark >= 70 && mark <= 79) {

        console.log("grade C");
        
        
    }else if (mark >= 60 && mark<=69) {
        console.log("grade D");
        
        
    }else{
        console.log("fail");
        
    }

    // task6 nested login

    let username="admin";
    let password = "1234";
    let  otp = "5555";

    if (username === "admin"){
        if(password === "1234"){
            if(otp === 5555){
                console.log("log successful");
                
            }else{
                console.log("invalid username");
            }
        }else{ 
            console.log("invalid password");
        
            }

            }else{
                console.log("invalid otp");
                
            }


        // task7 number pattern
      
        for (let i = 1; i<=10; i++){
            console.log(i);
            
        }
        // 1
        // 2
        // 3
        // 4
        // 5
        // 6
        // 7
        // 8
        // 9
        // 10


    //task8  multiplication table
    
    let num =7;

    for(let i =1; i<=10;i++){
        console.log(num + " x " + i +" = " + (num * i));
        
    }

    // 7 x 1 = 7
    // 7 x 2 = 14
    // 7 x 3 = 21.....
    // 7 x 10 = 70

    // task9 reverse countdown

    let t=10;
     while (t >=0) {
        console.log(t);
        t--;
        
     }

    //  10
    // 9
    // 8
    // 7....
    // 0

    // task10 otp system

    let correctotp =1234;
    let attempts =0;
    let otp;

    while (attempts<3) {
        otp=Number(prompt("enter otp"))

        if(otp === correctotp){
            console.log("otp verified");
            break;
            
        }else{
            attempts++;
            console.log("invalid otp");
            
        }
        
    }
    if(attempts ===3){
        console.log("account blocked");
        
    }


    // task11 array search 

    let fruits =[ "apple","banana","orange","grapes","mango"]

     for(let m=0;m< fruits.length;m++){
        console.log(fruits[m]);
        
     }
     console.log("firsr fruit:" + fruits[0]);
     console.log("last fruit:" + fruits[fruits.length -1]);
     
    //  task12 object details 


    let employee={
        name:"arun",
        empid:"stk-101",
        role:"developer",
        salary:45000
    };

    for(let key in employee){
        console.log(key + ":" +employee[key]);

    
        
    }

    // task13 calculator function 
    function calculator(a,b,operator) {

        if (operator === "+") {
            return a+b;
            
        }else if (operator === "-") {
            return a-b;
            
        }else if (operator === "*") {
            return a*b;
            
        }else if (operator === "/") {
            return a/b;
            
        }else if (operator === "%") {
            return a% b;
            
        }else{
            return "invaild operator";
        }
    }

    console.log(calculator(20,5,"+"));
    console.log(calculator(20,5,"*"));
    console.log(calculator(20,5,"%"));

    // task14 employee salary


    function salaryDetails(salary , bonus) {
        return salary + bonus;
        
    }
    console.log(salaryDetails(40000 ,5000));

    // task15  function with default perameter

    function employee (name, role = "Trainee") {
        console.log("name:"+name);
        console.log("role:"+role);
        
    }
    employee("arun");
    employee("kamal","developer")
    

    // task16 callback task

    function add(a,b){
        return a+b;
    }
    function sub(a,b) {
        return a-b;

        
    }
    function mul(a,b) {
        return a*b;

        
    }
    
    function calculate(a,b,callback) {
        let result = callback(a,b);
        console.log(result);
        
        
    }

    calculate(13,9,add);  22
    calculate(45,45,sub);  0
    calculate(1,80,mul);  80

    // task17 gererator task'


    function* rewards() {
      yield"$100 cashback";
         yield"10% discount";
        yield"$500 cashback";
        yield"20% discount";
        yield"better luck next time";
        
    }
    let reward=rewards();

    console.log(reward.next().value);
    console.log(reward.next().value);
    console.log(reward.next().value);
    console.log(reward.next().value);
    console.log(reward.next().value);
    

    // task18  spread operator

   let frontend =["html","css","javascript"];
   let backend =["node","express","mongodb"]
   
   let fullStack=[...frontend,...backend];

   console.log(fullStack);
   

//    task19 array destructuring

let student= ["arun","mca",8.9,"developer"];
let [name,department,cgpa,role]=student;
console.log(name);
console.log(department);
console.log(cgpa);
console.log(role);

// task20 nested object destructuring


let company ={
    name:"stackly",
    employee:{
        name:"arun",
        role:"developer",
        salary:50000
    }
};

let {
    employee:{
        name:employeeName,
        role,
        salary

    }
}=company;

console.log(employeeName);
console.log(role);
console.log(salary);


// final challenge - mini project

let students = [
    {
        name: "arun",
        department: "ece",
        mark: 85
    },
    {
        name: "kamal",
        department: "cse",
        mark: 72
    },
    {
        name: "livin",
        department: "ece",
        mark: 92
    }
];

// 1. Print all students

function printStudents() {
    for (let student of students) {
        let { name, department, mark } = student;
        console.log(name + " - " + department + " - " + mark);
    }
}

// 2. Print only ECE students

function printECEStudents() {
    for (let student of students) {
        let { name, department, mark } = student;

        if (department === "ece") {
            console.log(name + " - " + department + " - " + mark);
        }
    }
}

// 3. Find students who scored above 80

function above80() {
    for (let student of students) {
        let { name, mark } = student;

        if (mark > 80) {
            console.log(name + " - " + mark);
        }
    }
}

// 4. Calculate total marks

function totalMarks() {
    let total = 0;

    for (let student of students) {
        total = total + student.mark;
    }

    return total;
}

// 5. Calculate average

function averageMarks() {
    let total = totalMarks();
    return total / students.length;
}

// 6. Display highest mark

function highestMark() {
    let highest = students[0].mark;

    for (let student of students) {
        if (student.mark > highest) {
            highest = student.mark;
        }
    }

    return highest;
}

// 7. Display lowest mark

function lowestMark() {
    let lowest = students[0].mark;

    for (let student of students) {
        if (student.mark < lowest) {
            lowest = student.mark;
        }
    }

    return lowest;
}

// Calling functions

console.log("All students:");
printStudents();

console.log("ECE students:");
printECEStudents();

console.log("Students above 80:");
above80();

console.log("Total mark: " + totalMarks());

console.log("Average mark: " + averageMarks());

console.log("Highest mark: " + highestMark());

console.log("Lowest mark: " + lowestMark());
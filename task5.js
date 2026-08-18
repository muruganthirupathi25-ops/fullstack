// task1 student details

let name="akthala";
let age =29;
let department="full stack developer";
let cgpa=8.4;

console.log("name:" + name);
console.log("age:" + age);
console.log("department:" + department);
console.log("cgpa:" + cgpa);


console.log(`name: ${name}`);
console.log(`age: ${age}`);
console.log(`department: ${department}`);
console.log(`cgpa: ${cgpa}`);

// task2 simple calculator

let a=20;
let b=10;

console.log("addition:" + (20+10));
console.log("subtraction:" + (20-10));
console.log("multiplication:" + (20*10));
console.log("division:" + (20/10));
console.log("modulus:" + (20%10));
console.log("power:" + (20 **10));

// task3 age checker

let age =Number(prompt("enter your age:"))

if(age >=18){
   console.log("eligible to vote");
    
}else{
    console.log("not eligible");
    
}

// task4 student grade

let marks=Number(prompt("enter your marks:"));

if(marks >= 90&& marks <=100){
    console.log("A");
    
}else if (marks >=80 && marks <=89) {
    console.log("B");
    
    
}else if (marks >=70 && marks <=79) {
      console.log("C");
      
    
}else if (marks >=60 && marks <=69) {
    console.log("D");
    
    
}else{
    console.log("below 6o with fail");
    
}

// task5 login system

let correctUsername="admin";
let correctPassword="1234";

let username = prompt("enter username:");
let password =prompt("enter password:");

if(username === correctUsername){
    if(password === correctPassword){
        console.log("login successful");
        
    }else{
        console.log("invalid password");
        
    }
}else{
    if (password === correctPassword) {
        console.log("invalid username");
        
        
    }else{
        console.log("invalid credentials");
        
    }
}

// task6 atm withdrawal

let balance = 10000;

let amount=Number(prompt("enter withdrawal amount"));
if (amount <=0) {

    console.log("invalid amount");
    
    
}else if(amount > balance){
    console.log("insufficent balance");
    
}else if(amount % 100 !== 0){
    console.log("amount must be a multiple of 100");
    
    
}else{
    balance=balance-amount;
    console.log("withdrawal successful ");
    console.log("remaining balance: $"+balance);
    
    
}


// task7  multiplication table

let num =Number(prompt("enter a number"))

for(let n =1; n<=10; n++){
    console.log(num + "x" +n+ "=" + (num * n));
    
}


// task8 reverse number 


let num =12345;
let reverse =0;
 while (num > 0) {

    let digit= num % 10;
    reverse = reverse * 10 + digit;
    num= Math.floor(num / 10);
    
 }
 console.log(reverse);

//  task9  otp system

let correctOtp =1234;
let attemts =0;
 while(attemts < 3){
    let otp = Number(prompt("enter opt:"));
    if (otp === correctOtp) {
        console.log("otp verified");
        break;
        
        
    }else{
        attemts++;
        if (attemts === 3) {
            console.log("account blacked");
            
            
        }else{
            console.log("try again");
            
        }
    }
 }
 

//  task10  slary calculator

function calculateSalary(basicSalary , bonus) {
    return basicSalary + bonus;
    
}
let salary = calculateSalary(30000 ,5000);
console.log(salary);

// task11 calculator function

function add(a,b){
    return a+b;

}
function subtract(a,b) {
    return a-b;

    
}
function multiple(a,b) {
    return a*b;
    
}
function divide(a,b) {
    return a/b;

    
}
console.log(add(20,80));
console.log(subtract(50,70));
console.log(multiple(80,2));
console.log(divide(100,10));

// task12  eligibility function


function checkEligibility(age , height, weight) {
    if (age >= 21 && height >=170 && weight >=70) {
        return "eligible";
        
    }else{
        return "not eligible";
    }
    
}
console.log(checkEligibility(22,175,78));

// task13 shopping cart

let cart =["laptop","mouse","keyboard"]

cart.push("monitor");
cart.splice(1,1)
cart.unshift("headset");
cart.pop();
console.log(cart);

// task14  find maximum

let numbers =[10,45,23,89,67];

numbers.sort((a,b)=> b - a);

console.log(numbers[0]);

// task15  remove duplicate values

let number =[1,2,3,2,4,1,5];

let max=[];

for(let num of number){
    if(!max.includes(num)){
        max.push(num)
    }
}
console.log(uniqueNumber);


// task16 employee salary filter

let employees=[
    { name: "arun", salary:30000},
    {name: "bala",salary:50000},
    {name: "kumar",salary:25000},
    {name: "ravi",salary:70000}
]
 let filterSalary=employees.filter(function(employee){
    return employee.salary >= 40000;
 })
 console.log(filterSalary);
 

//  task17 increase salary

let employees1 = [
    { name: "arun", salary: 30000 },
    { name: "bala", salary: 50000 },
    { name: "kumar", salary: 25000 },
    { name: "ravi", salary: 70000 }
];

let updatedEmployee = employees1.map(function(employee) {
    if (employee.salary < 40000) {
        employee.salary = employee.salary + 5000;
    } else {
        employee.salary = employee.salary + 10000;
    }

    return employee;
});

console.log(updatedEmployee);


// task18 total salary

let employees1 = [
    { name: "arun", salary: 30000 },
    { name: "bala", salary: 50000 },
    { name: "kumar", salary: 25000 },
    { name: "ravi", salary: 70000 }
];

let totalSalary = employees1.reduce(function(total , employee){
    return total + employee.salary;

},0);
console.log(totalSalary);


// task19 check employee

let employees1 = [
    { name: "arun", salary: 30000 },
    { name: "bala", salary: 50000 },
    { name: "kumar", salary: 25000 },
    { name: "ravi", salary: 70000 }
];

let  aa2=employees1.some(function (employee) {
    return employee.salary >100000;
    
});

let bb2 =employees1.every(function (employee) {
    return employee.salary >=20000;
    
});

console.log("any employee earning more than $100000:"+aa2);
console.log("all employee earning at least $ 20000:"+bb2);


// task20 employee management mini program


let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 35000
    },
    {
        id: 102,
        name: "Bala",
        department: "HR",
        salary: 45000
    },
    {
        id: 103,
        name: "Kumar",
        department: "IT",
        salary: 60000
    }
];

// 1print all employee name using foreach()

employees.forEach(function(employee){
     console.log(employee.name);
     
})

// 2 get only it employees using filter()

let itEmployee=employees.filter(function (employee) {
    return employee.department === "IT";
    
});
console.log(itEmployee);


//3 increase every salary by 10% using map()

let increaseSalary=employees.map(function (employee) {
    return{
        ...employee,
        salary: employee.salary * 1.10
    };
    
});

console.log(increaseSalary);

// 4find employee with salary $ 45000 using find()

let find45000=employees.find(function (employee) {
    return employee.salary === 45000;    
});
console.log(find45000);

// 5 calcuate total salary using reduce()

let totalSalary=employees.reduce(function (total,employee) {
    return total+employee.salary;

    
}, 0);

console.log(totalSalary);

// 6 check whether anyone earns above $50000 using some()

let above50000=employees.some(function (employee) {
    return employee.salary >50000;
    
});
console.log(above50000);

// 7 check whether anyone earns above $20000using every()

let above20000 =employees.every(function (employee) {
    return employee.salary >20000;

    
});

console.log(above20000);

// 8sort employee by salary from hightest and lowest
  
let sortEmployee=[...employees].sort(function (a,b) {
    return b.salary - a.salary;
    
});
console.log(sortEmployee);

// 9 destructure each employee name and salary
 employees .forEach(function (employee) {
    let{name,salary}=employee;
    console.log(name,salary);
    
    
 });

//  10 use the spread operator to create a new employee list

let newEmployee =[...employees];
 console.log(newEmployee);
 


























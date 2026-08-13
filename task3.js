// task1  employee eligibilty

let employeeName =prompt("enter your name :");
let employeeAge = prompt("enter your age:");
let experience= Number(prompt("enter experience in year:"));
let salary = Number(prompt("enter the salary:"))

if(age >=21&& experience >= 1 && salary >=20000){
    console.log("employee is eligible");
    
}else{
    if(age< 21){
        console.log("employee is not eligible the age is a below 21");
        
    }
    if(experience < 1){
        console.log("employee is not eligible the experience is a below 1 year");

        
    }
    if(slary < 20000){
        console.log("employee is not salary the salary is a below 2000");
        
    }
}

// task2  atm withdrawal 

 let balance = 10000;
 let amount =Number(prompt("enter the withdrawal amount"));

 if (amount >0 && amount <=balance && amount % 100 === 0){
    balance= balance-amount;

    console .log ("withdrawal successful ");
    console.log("remaining balance $" + balance);

 }else{
    if(amount <=0){
        console.log("invalid amount :amount must be greater than 0 ");
        
    }else if (amount > balance) {
        console.log("invalid amount must be balance");
        
        
    }else if ( amount % 100 !== 0) {
        console.log("invaild amount : withdrawal amount shounld be a mutilpe of 100");
        
        
    }
 }

//  task3 login system with 3 attempts

let correctUsername ="akthala";
let correctPassword="936127";
let attempt=0;
let loginSuccessful=false;
 while (attempt <3){
    let username =prompt("enter username:");
    let password = prompt("enter password:");
    attempts ++;

    if(username === correctUsername && password === correctPassword){
        console.log("login successful");
        loginSuccessful = true;
        break;
        
    }else{
        console.log("wrong username or password");
        console.log("attempt remaining: " +(3-attempt));
        

    }
 }
 if(!loginSuccessful){
    console.log("amount locked");
    
 }

//  task4 student grade system 

let math = Number(prompt("enter math mark"));
let english = Number(prompt("enter english marks:"));
let  science = Number(prompt("enter science mark"));
let social = Number(prompt("enter social mark:"));
let computer = Number(prompt("enter computer mark:"));
let total=math + english + science + social + computer;
let average =total/5;
let grade;

if(average>=90){
    grade="A";

}else if (average >= 80) {
    grade ="b";
    
}else if (average>=70) {
    grade = "C";

    
}else if (average >=60) {
    grade ="D";
}else{
    grade="f";
}

console.log( "total="+ total);
console.log("average="+ average);
console.log("grade ="+ grade);

// task5 number pattern
// 1to 5
for(let f=1;f<=5;f++){
    console.log(f);
    
} 

// 5to1
for(let h=5;h>=1;h--){
    console.log(h);
}

// 1to5 pattern 12345

let ak ="";
for(let g=1; i<=5;g++){
    ak = ak + g + "";
    
}
console.log(ak);



// task6  shopping cart

let products =["laptop","mouse","keyboard","monotor"];
let prices =[50000,1000,2000,15000];

let total=0;
 for(let ak1=0; ak1 < products.length; i++){
    console.log(products[i] + "-$" +prices[i]);
    total =total+prices[i];
    
 }
console.log("total= $ total");


// task7  employee object

let employee1 ={
    name :"akthala",
    empid:"stk-101",
    role: "software enginer",
    salary:45000
};

for (let key in employee1) {
    console.log(key + " : " + employee1[key]);
}


function calculateBonus(){
    if(employee1.salary >=40000){
        console.log("bonus=5000");
        
    }else{
        console("bouns=3000");
    }
}
calculateBouuse();


// task8 bank account functions
 
function deposit(balance,amount){
    balance=balance+amount;
    console.log("deposited:$"+amount);
    return balance;
}
function withdrawn(balance,amount){
    balance =balance-amount;
    console.log("withdrawn:$"+balance);
    return balance;
}

function checkbalance(balance){
    console.log("current balance :$"+balance);
    return balance;
    
}

let balance=10000;
balance=deposit(balance,5000);
balance =withdraw(balance,2000);
checkbalance(balance);


// task9 callbback calculator

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function calculate(callback,a,b){
    return callback(a,b);
}
console.log(calculate(add,20,10));
console.log(calculate(sub,20,10));
console.log(calculate(add,20,10));
console.log(calculate(add,20,10));




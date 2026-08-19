
// task6 employee management system

let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"],
        
    },
    {
        id: 102,
        name: "ak",
        department: "HR",
        salary: 35000,
        experience: 3,
        skills: ["Communication", "Excel"],
        
    },
    {
        id: 103,
        name: "Priya",
        department: "Finance",
        salary: 55000,
        experience: 4,
        skills: ["Excel", "SQL"],
      
    },
    {
        id: 104,
        name: "Rahul",
        department: "IT",
        salary: 65000,
        experience: 5,
        skills: ["Java", "Spring Boot", "SQL"],
       
    },
    {
        id: 105,
        name: "Divya",
        department: "Marketing",
        salary: 28000,
        experience: 1,
        skills: ["SEO", "Marketing"],
        
    },
    {
        id: 106,
        name: "Vijay",
        department: "IT",
        salary: 75000,
        experience: 6,
        skills: ["JavaScript", "React", "Node.js"],
     
    },
    {
        id: 107,
        name: "Meena",
        department: "Sales",
        salary: 30000,
        experience: 2,
        skills: ["Sales", "Communication"],
       
    },
    {
        id: 108,
        name: "Suresh",
        department: "IT",
        salary: 90000,
        experience: 7,
        skills: ["Java", "Python", "AWS"],
        
    }
];

// 1 display all employee

employees.forEach(function (employee) {
    console.log(employee.id);
    console.log(employee.name);
    console.log(employee.department);
    console.log(employee.salary);
    console.log(employee.experience);
    console.log(employee.skills);
});

    // 2 find employee 

    let find =employees.filter(function (employee) {

        return employee.salary > 40000;
        
    });
    console.log(find);
    
    
    // 3 find a particular employee

    let employee=employees.find(function (employee) {
        return employee.id ===106;

        
    });

    console.log(employee);
    

    // 4calculate total salary

    let totalSalary = employees.reduce(function (total,employee) {
        return total + employee.salary;        
    },0);
    console.log(totalSalary);


    // 5 check salary condition

    let checkSalary = employees.some(function ( employee) {
        return employee.salary > 100000;
        
    });
    console.log(checkSalary);
    

    // 6 check experience

    let checkExperience = employees.every(function (employee) {
        return employee.experience >=1;
        
    });
    console.log(checkExperience);

    // 7 sort employees


    employees.sort(function (a,b) {
        return b.salary - a.salary;
        
    })
    console.log(employees);
    
    // 8 array manipulation


    employees.push({
        id: 109,
    name: "Karthik",
    department: "IT",
    salary: 50000,
    experience: 3,
    skills: ["Java", "SQL"]
    });

    console.log(employees);

    employees.pop();

    console.log(employees);

    employees.unshift({
    id: 110,
    name: "Anitha",
    department: "HR",
    salary: 40000,
    experience: 2,
    skills: ["Excel", "Communication"]
});


console.log(employees);

employees.shift();

console.log(employees);

// 9 destructuring 


let employee1 =employees[1];

let{
    name,
    department,
    salary
} = employee1;

let [skill1,skill2,skill3]=employee1.skills;

console.log("name:",name);
console.log("department:",department);
console.log("salary:",salary);
console.log("skill1 :",skill1);
console.log("skill2 :",skill2);
console.log("skills : ",skill3);


// 10 speard operator

let spreadOperator =[...employees];

console.log(spreadOperator);

// 11 rest operator

function employeeSkills(name, ...skills) {
    console.log("employee name:" ,name);
    console.log("skills:",skills);
    
        
}

employeeSkills("Arun","HTML","CSS","Javascript");

// 12 function

function addEmployee(employee) {
    employees.push(employee);
}

function deleteEmployee(id) {
    employees = employees.filter(function(employee) {
        return employee.id !== id;
    });
}

function searchEmployee(id) {
    return employees.find(function(employee) {
        return employee.id === id;
    });
}

function calculateTotalSalary() {
    return employees.reduce(function(total, employee) {
        return total + employee.salary;
    }, 0);
}

function displayEmployees() {
    employees.forEach(function(employee) {
        console.log(employee);
    });
}

addEmployee({
    id: 109,
    name: "Karthik",
    department: "IT",
    salary: 50000,
    experience: 3,
    skills: ["Java", "SQL"]
});

deleteEmployee(109);

console.log(searchEmployee(104));

console.log("Total Salary:", calculateTotalSalary());

displayEmployees();


//13 conditional statements

employees.forEach(function(employee) {
    if (employee.salary <= 30000) {
        console.log(employee.name + " - Junior");
    } else if (employee.salary <= 60000) {
        console.log(employee.name + " - Mid Level");
    } else {
        console.log(employee.name + " - Senior");
    }
});

// 14  date 

employees[0].joiningDate = new Date("2022-06-15");
employees[1].joiningDate = new Date("2021-08-10");
employees[2].joiningDate = new Date("2020-04-20");
employees[3].joiningDate = new Date("2019-03-12");
employees[4].joiningDate = new Date("2023-07-25");
employees[5].joiningDate = new Date("2018-05-18");
employees[6].joiningDate = new Date("2022-09-05");
employees[7].joiningDate = new Date("2017-02-14");

employees.forEach(function(employee) {
    console.log("Name:", employee.name);
    console.log("Joining Year:", employee.joiningDate.getFullYear());
    console.log("Joining Month:", employee.joiningDate.getMonth());
});

// 15 user input

let id = Number(prompt("Enter employee ID"));

let employee = employees.find(function(employee) {
    return employee.id === id;
});

if (employee) {
    console.log("ID:", employee.id);
    console.log("Name:", employee.name);
    console.log("Department:", employee.department);
    console.log("Salary:", employee.salary);
    console.log("Experience:", employee.experience);
    console.log("Skills:", employee.skills);
} else {
    console.log("Employee not found");
}








    
    
    
    

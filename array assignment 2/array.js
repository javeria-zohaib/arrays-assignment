// // =========== part-1 :BASIC ARRAY ============
/*
1. Define a type alias named Product to represent a product with the following
properties:
• name (string): The name of the product.
• price (number): The price of the product.
• inventory (object): An object containing inventory details including:
• stock (number): The number of products available.
• colorOptions (string[ ]): An array listing available colors.
2. Create an array named products containing at least three product objects. Each
product object should include a name, price, and inventory details.
3. Implement a function named changeColor that takes a product object and a new
color as input. This function should update the color property of the product and
adjust the price based on the new color (implement your own logic, e.g., increase by
10% for red, decrease by 5% for blue).
4. Display each product's name, price, stock, and available colors. Iterate through the
products array and print each product's details.*/
var products = [{
        name: "laptop",
        price: 12000,
        inventory: {
            stock: 3000,
            coloroption: ["black", "silver"],
        }
    },
    {
        name: "smartwatch",
        price: 3000,
        inventory: {
            stock: 5000,
            coloroption: ["white", "black"],
        }
    },
    {
        name: "headphone",
        price: 1200,
        inventory: {
            stock: 1000,
            coloroption: ["white", "black"],
        }
    },
];
function changeColor(products, newcolor) {
    products.inventory.coloroption.push(newcolor);
    if (newcolor === "blue") {
        products.price += products.price * 0.15;
    }
    else if (newcolor === "red") {
        products.price -= products.price * 0.05;
    }
    else if (newcolor === "purple") {
        products.price += products.price * 0.95;
    }
    else if (newcolor === "silver") {
        products.price -= products.price * 0.10;
    }
    else {
        console.log(" sorry ! this ".concat(newcolor, " is not available"));
    }
}
function displayproductdetails(product) {
    product.forEach(function (products) {
        console.log("Name:".concat(products.name));
        console.log("Price: ".concat(products.price));
        console.log("Stock: ".concat(products.inventory.stock));
        console.log("Available color :".concat(products.inventory.coloroption));
    });
}
changeColor(products[0], "blue");
changeColor(products[1], "red");
changeColor(products[2], "purple");
displayproductdetails(products);
var employee = [{
        name: "sara",
        hoursWorked: 22,
        hourlyRate: 30,
        salary: 0,
    },
    {
        name: "ali",
        hoursWorked: 23,
        hourlyRate: 60,
        salary: 0,
    },
    {
        name: "akram",
        hoursWorked: 18,
        hourlyRate: 80,
        salary: 0,
    },
];
function calculatesalary(employee) {
    employee.forEach(function (employee) {
        employee.salary = employee.hoursWorked * employee.hourlyRate;
        if (employee.hoursWorked >= 20) {
            employee.salary *= 1.20;
            console.log("bonusgiven");
        }
    });
}
calculatesalary(employee);
console.log(employee);
employee.forEach(function (employee) { return (console.log("Employee:".concat(employee.name, ",Salary:").concat(employee.salary))); });
var students = [{
        name: "sara",
        grades: [86, 78, 84],
    },
    {
        name: "Ali",
        grades: [65, 78, 67],
    },
    {
        name: "Areeba",
        grades: [99, 86, 91],
    }
];
function calculateaveragegrade(grades) {
    var total = 0;
    for (var _i = 0, grades_1 = grades; _i < grades_1.length; _i++) {
        var grade = grades_1[_i];
        total += grade;
    }
    return total / grades.length;
}
students.forEach(function (student) {
    var averagegrade = calculateaveragegrade(student.grades);
    console.log("".concat(student.name, ": Average grade =").concat(averagegrade));
});

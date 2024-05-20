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
 
type Product={
    name:string,
    price:number,
    inventory:{
        stock:number,
        coloroption:string[],
    }
}
let products:Product[]=[{
    name:"laptop",
    price:12000,
    inventory:{
        stock:3000,
        coloroption:["black","silver"],
    }},
    {
        name:"smartwatch",
        price:3000,
        inventory:{
            stock:5000,
            coloroption:["white","black"],
        }



    },
    { 
        name:"headphone",
        price:1200,
        inventory:{
            stock:1000,
            coloroption:["white","black"],
        }
    },
]
function changeColor(products:Product,newcolor:string){
    products.inventory.coloroption.push(newcolor);
    if(newcolor === "blue"){
        products.price += products.price*0.15;
    }
    else if (newcolor === "red"){
        products.price -= products.price*0.05;
    }
    else if  (newcolor === "purple"){
        products.price += products.price*0.95;
    }
    else if (newcolor === "silver"){
        products.price -= products.price*0.10;
    }
    else{console.log(` sorry ! this ${newcolor} is not available`)}
} 
function displayproductdetails (product:Product[]){
    product.forEach(products => {
        console.log(`Name:${products.name}`)
        console.log(`Price: ${products.price}`)
        console.log(`Stock: ${products.inventory.stock}`)
        console.log(`Available color :${products.inventory.coloroption}`)
    })
}
changeColor(products[0],"blue")
changeColor(products[1],"red")
changeColor(products[2],"purple")
displayproductdetails(products)
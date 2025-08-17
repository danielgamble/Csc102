// create the function to manage the stats
function updateChefStats(){
    // get the total number of pizzas from the page
    let totalPizzas = parseInt(document.getElementById("divTotalPizzas").textContent);

    // get the new number of pizzas
    let newPizzasNum = parseInt(document.getElementById("numPizzas").value);

    // new total of pizzas
    let newPizzaTotal = totalPizzas + newPizzasNum;

    // variable to keep track of pizza chef level
    let chefLevel = "";

    // assign a level based on number of pizzas
    if (newPizzaTotal > 100){
        chefLevel = "Pizza Chef Guru";
    } 

    else if (newPizzaTotal > 80){
        chefLevel = "Pizza Chef Extraordinaire";
    }
        
    else if (newPizzaTotal > 60){
        chefLevel = "Pizza Chef Chief ";
    }

    else if (newPizzaTotal > 40){
        chefLevel = "Pizza Chef Apprentice ";
    }

    else{
        chefLevel = "Beginner";

    }

    // update total pizzas on page
    document.getElementById("divTotalPizzas").textContent = newPizzaTotal;

    // update the baking level
    document.getElementById("divBakingLevel").textContent = chefLevel;
}

// set up available toppings
//let topping1 = "Pepperoni";
//let topping2 = "Sausage";
//let topping3 = "Mushrooms";
//let topping4 = "Ham";
//let topping5 = "Pineapple";

// add toppings to page\
//document.getElementById("divToppings").textContent = topping1 + ", " + topping2 + ", " + topping3 + ", " + topping4 + ", " + topping5; 


// set up an array to hold the toppings and print them out to the page
let arrToppings = ["Pepperoni", "Sausage", "Mushrooms", "Ham", "Pineapple", "Bacon"];

// you can also set up an empty array to fill later
let arrDoughTypes = [];

// a variable to hold the toppings
let toppings = "";

// loop through the array to print out the toppings
for (let i = 0; i <arrToppings.length; i++){
    // each time we loop through the array, add the topping name to the toppings variable
    toppings += arrToppings[i] + "<br>";
}

// Show the array contents on the page
document.getElementById("divToppings").innerHTML = toppings;

// Show all toppings before the button is clicked
window.onload = function() {
    let arrToppings = [ "Tomato", "Lettuce", "Onion", "Cheese", "Pickles", "Bacon", "Avocado", "Mushrooms", "Jalapeños", "BBQ Sauce", "Ketchup", "Mustard", "Mayo", "Sriracha", "Fried Egg", "Pineapple", "Spinach", "Roasted Red Peppers", "Feta Cheese", "Guacamole", "Coleslaw", "Fries", "Chili", "Chips", "Ham" ];
    let toppings = "";
    for (let i = 0; i < arrToppings.length; i++) {
        toppings += arrToppings[i] + "<br>";
    }
    var toppingsDiv = document.getElementById("divToppings");
    if (toppingsDiv) {
        toppingsDiv.innerHTML = toppings;
    }
}
function updateBurgerStats() {

    //gets the current total number of burgers from HTML
    let totalBurgers = parseInt(document.getElementById("divTotalBurgers").textContent);

    //get the new number of burgers
    let newBurgerNum = parseInt(document.getElementById("numBurgers").value);

    // new total of burgers
    let newBurgerTotal = totalBurgers + newBurgerNum;

    //variable to keep track of the burger chef levels
    let chefLevel = "";

    //assign a level based on number of burgers
    if (newBurgerTotal >= 100) {
        chefLevel = "Burger Master";
    }

    else if (newBurgerTotal > 80) {
        chefLevel = "Burger Expert";
    }

    else if (newBurgerTotal > 60) {
        chefLevel = "Burger Specialist";
    }

    else if (newBurgerTotal > 40) {
        chefLevel = "Burger Enthusiast";
    }

    else if (newBurgerTotal > 20) {
        chefLevel = "Burger Apprentice";
    }

    else {
        chefLevel = "Novice";
    }


    //update total burgers in HTML
    document.getElementById("divTotalBurgers").textContent = newBurgerTotal;

    //update the chef level in HTML
    document.getElementById("divGrillingLevel").textContent = chefLevel;



    //set up available toppings
    var topping1 = "Tomato";
    var topping2 = "Lettuce";
    var topping3 = "Onion";
    var topping4 = "Cheese";
    var topping5 = "Pickles";
    var topping6 = "Bacon";
    var topping7 = "Avocado";
    var topping8 = "Mushrooms";
    var topping9 = "Jalapeños";
    var topping10 = "BBQ Sauce";
    var topping11 = "Ketchup";
    var topping12 = "Mustard";
    var topping13 = "Mayo";
    var topping14 = "Sriracha";
    var topping15 = "Fried Egg";
    var topping16 = "Pineapple";
    var topping17 = "Spinach";
    var topping18 = "Roasted Red Peppers";
    var topping19 = "Feta Cheese";
    var topping20 = "Guacamole";
    var topping21 = "Coleslaw";
    var topping22 = "Fries";
    var topping23 = "Chili";
    var topping24 = "Chips";
    var topping25 = "Ham";


    //add toppings to the HTML
    document.getElementById("divToppings").textContent = topping1 + ", " + topping2 + ", " + topping3 + ", " + topping4 + ", " + topping5 + ", " + topping6 + ", " + topping7 + ", " + topping8 + ", " + topping9 + ", " + topping10 + ", " + topping11 + ", " + topping12 + ", " + topping13 + ", " + topping14 + ", " + topping15 + ", " + topping16 + ", " + topping17 + ", " + topping18 + ", " + topping19 + ", " + topping20 + ", " + topping21 + ", " + topping22 + ", " + topping23 + ", " + topping24 + ", " + topping25;

    //set up an array of toppings
    let arrToppings = [ "Tomato", "Lettuce", "Onion", "Cheese", "Pickles", "Bacon", "Avocado", "Mushrooms", "Jalapeños", "BBQ Sauce", "Ketchup", "Mustard", "Mayo", "Sriracha", "Fried Egg", "Pineapple", "Spinach", "Roasted Red Peppers", "Feta Cheese", "Guacamole", "Coleslaw", "Fries", "Chili", "Chips", "Ham" ];

    //set up an array of burger bun types
    let arrDoughTypes = [ "Regular", "Whole Wheat", "Gluten-Free", "Sesame Seed", "Pretzel", "Brioche", "Sourdough", "Multigrain", "Potato", "Ciabatta" ];

    //variable to hold the toppings

    let toppings = "";

   //loop through the toppings array and add them to the toppings variable
    for (let i = 0; i < arrToppings.length; i++) {
        toppings += arrToppings[i] + "<BR>";
    } 


    //show array contents in HTML
    document.getElementById("divToppings").innerHTML = toppings;

}
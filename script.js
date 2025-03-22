// script.js
// smoothie class to handle orders
class Smoothie {
    constructor(customerName, base, fruits, extras, size) {
        this.customerName = customerName;
        this.base = base;
        this.fruits = fruits || []; // empty if no fruits
        this.extras = extras || []; // same for extras
        this.size = size;
    }
    // name based on what user has selected
    getSmoothieName() {
        let name = "";
        
        // check fruits 1st
        if (this.fruits.length > 0) {
            name = this.fruits[0]; // select the fruit
            if (this.fruits.length > 1) {
                name += " Mix"; // add mix if more 1 or more fruits
            }
        } else {
            name = "Plain"; // if not selected, just plain
        }

        // add the base 
        name += " " + this.base;

        // protein or else peanut butter
        if (this.extras.includes("Protein Powder")) {
            name += " Power";
        } else if (this.extras.includes("Peanut Butter")) {
            name += " Nutty";
        }
        return name;
    }
     // price calculation
    getPrice() {
        let basePrices = { Small: 4, Medium: 6, Large: 8 }; // starting prices
        let fruitCost = this.fruits.length * 0.5; // 50 cents each fruit
        let extraCost = this.extras.length * 1; // buck per extra
        return (basePrices[this.size] + fruitCost + extraCost).toFixed(2);
    }

    // build the description based on selection
    getDescription() {
        let fruitList = this.fruits.length > 0 ? this.fruits.join(", ") : "no fruits";
        let extraList = this.extras.length > 0 ? this.extras.join(", ") : "no extras";
        let coolName = this.getSmoothieName();
        return `Hey ${this.customerName}! Your ${this.size} "${coolName}" smoothie is ready! It’s got a ${this.base} base, ${fruitList}, and ${extraList}. Total: $${this.getPrice()}. Enjoy!!`;
    }
}


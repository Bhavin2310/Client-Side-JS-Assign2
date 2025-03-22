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

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

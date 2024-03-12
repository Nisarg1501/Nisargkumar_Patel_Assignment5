"use strict";

let coins = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    cents: 0,

    makeChange: function(cents) {
        if (isNaN(cents) || cents < 0 || cents > 99) {
            throw new Error("Please enter a valid number between 0 and 99");
        }

        this.quarters = Math.floor(cents / 25);
        cents %= 25;
        this.dimes = Math.floor(cents / 10);
        cents %= 10;
        this.nickels = Math.floor(cents / 5);
        this.cents = cents % 5;
    }
};

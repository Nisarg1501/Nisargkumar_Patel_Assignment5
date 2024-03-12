"use strict";

$(document).ready( () => {
    let coins = new Coins();
    $("#calculate").click( () => {
        // get the number of cents from the user
        let cents = Math.floor( parseInt( $("#cents").val() ) );
        
        try {
            coins.makeChange(cents);

            $("#quarters").val(coins.quarters);
            $("#dimes").val(coins.dimes);
            $("#nickels").val(coins.nickels);
            $("#pennies").val(coins.cents);

            $("#cents").focus();
        } catch (error) {
            alert(error.message);
        }
    });

    $("#cents").focus();
});

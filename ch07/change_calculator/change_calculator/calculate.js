var $ = function (id) {
    return document.getElementById(id);
};

var calculateChange = function () {
    var cents = parseInt($('cents').value);
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;

    if (isNaN(cents) || cents < 0 || cents > 99) {
        $('inputError').textContent = 'Please enter a valid number between 0 and 99';
        $('quarters').value = '';
        $('dimes').value = '';
        $('nickels').value = '';
        $('pennies').value = '';
    }
    else {
        $('inputError').textContent = '';

        quarters = Math.floor(cents / 25);
        cents %= 25;
        dimes = Math.floor(cents / 10);
        cents %= 10;
        nickels = Math.floor(cents / 5);
        pennies = cents % 5;

        $('quarters').value = quarters;
        $('dimes').value = dimes;
        $('nickels').value = nickels;
        $('pennies').value = pennies;
    }
};

window.onload = function () {
    $("calculate").onclick = calculateChange;
};
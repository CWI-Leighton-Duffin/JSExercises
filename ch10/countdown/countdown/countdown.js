"use strict";
var $ = function(id) { return document.getElementById(id); };

var calculateDays = function() {
    var event = $("event").value;
    var dt = $("date").value;  
    var message = $("message").firstChild;  
    var date, days, today, oneDay;
    
    // clear previous message
    clearMessage(message);
    
    //make sure task and due date are entered and correct
    if (entriesMade(event, dt)) {
        message.nodeValue = "Please enter both a name and a date.";
    } else if (validateDate(dt)){
            message.nodeValue = "Please enter the date in MM/DD/YYYY format.";
        }

    // if no error messages, calculate and display days until event
    if (hasNoError(message)) {
        date = new Date(dt);
        //calculate days
        days = calculate(date);

        //create and display message
        display(days, message, event);
    }
};

window.onload = function() {
    $("countdown").onclick = calculateDays;
    $("event").focus();
};
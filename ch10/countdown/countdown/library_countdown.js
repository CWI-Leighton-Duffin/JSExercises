"use strict";

var clearMessage = function(messageNode) {
    messageNode.nodeValue = " ";
};

var hasNoError = function(messageNode) {
    return messageNode.nodeValue === " ";
};

var entriesMade = function(event, dt) {
 return (event.length === 0 || dt.length === 0);
};

var validateDate = function (dt) {
    var date = new Date(dt);
    var year = dt.substring(dt.length - 4);
    return (dt.indexOf("/") === -1 || isNaN(year) || date === "Invalid Date");
};

var calculate = function (dt) {
    var today = new Date();
  return Math.ceil((dt.getTime() - today.getTime()) / (24*60*60*1000));
};

var display = function (days, message, event) {
    if (days === 0) {
        message.nodeValue = "Hooray! Today is " + event + "!";
    }
    if (days < 0) {
        event = event.substring(0,1).toUpperCase() + event.substring(1); // capitalize event
        message.nodeValue = event + " happened " + Math.abs(days) + " day(s) ago.";
    }
    if (days > 0) {
        message.nodeValue = days + " day(s) until " + event + "!";
    }
};
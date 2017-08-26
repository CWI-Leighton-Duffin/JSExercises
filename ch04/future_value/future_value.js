var $ = function (id) {
    return document.getElementById(id);
};

var calculateFutureValue = function (investment, rate, years) {
    var futureValue = investment;
    for (var i = 1; i <= years; i++) {
        futureValue += futureValue * rate / 100;
    }
    return futureValue.toFixed(2);
};

var processEntries = function () {
    var investment = parseFloat($("investment").value);
    var rate = parseFloat($("annual_rate").value);
    var years = parseInt($("years").value);
    var valid = true;

    if (isNaN(investment) || investment <= 0 || investment > 100000) {
        $("investment_error").textContent = "Must be between 0 and 100000";
        valid = false;
    }
    else {
        $("investment_error").textContent = "";
    }
    if (isNaN(rate) || rate <= 0 || rate > 15) {
        $("rate_error").textContent = "Must be between 0 and 15";
        valid = false;
    }
    else {
        $("rate_error").textContent = "";
    }
    if (isNaN(years) || years <= 0 || years > 50) {
        $("years_error").textContent = "Must be between 0 and 50";
        valid = false;
    }
    else {
        $("years_error").textContent = "";
    }
    if (valid) {
        $("future_value").value = calculateFutureValue(investment, rate, years);
    }
};

window.onload = function () {
    $("calculate").onclick = processEntries;
    $("investment").focus();
};
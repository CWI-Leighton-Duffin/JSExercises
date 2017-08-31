var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [89, 98, 77, 88];

var $ = function (id) {
    return document.getElementById(id);
};

var addScore = function () {
    if ($('name').value === '' || $('score').value === '' ||
        isNaN($('score').value) || $('score').value < 0 || $('score').value > 100) {
        $('inputError').textContent = "You must enter a name and a valid score.";
    }
    else {
        $('inputError').textContent = '';
        names.push($('name').value);
        scores.push(parseInt($('score').value));
    }
};

var calcAverage = function (scores) {
    var total = 0;
    for (var i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
};

var getHighScoreIndex = function (scores) {
    var highScore = 0;
    var highScoreIndex = -1;
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] > highScore) {
            highScore = scores[i];
            highScoreIndex = i;
        }
    }
    return highScoreIndex;
};

var displayResults = function () {
    var highScoreIndex = getHighScoreIndex(scores);
    //clear previous results
    $('results').innerHTML = '';
    //create Results header
    var h2 = document.createElement('h2');
    h2.textContent = 'Results';
    $('results').appendChild(h2);
    //create results content
    var averageP = document.createElement('p');
    var highP = document.createElement('p');
    averageP.textContent = 'Average score = ' + Math.round(calcAverage(scores));
    highP.textContent = 'High score = ' + names[highScoreIndex] + ' with a score of ' + scores[highScoreIndex];
    $('results').appendChild(averageP);
    $('results').appendChild(highP);
};

var displayScores = function () {
    $('scores').innerHTML = '';
    //create Scores header
    var h2 = document.createElement('h2');
    h2.textContent = 'Scores';
    $('scores').appendChild(h2);
    //create Scores table header
    var table = document.createElement('table');
    $('scores').appendChild(table);
    var tHead = table.tHead;
    if (tHead === null) {
        tHead = table.createTHead();
    }
    var row = tHead.insertRow(-1);
    var name = document.createElement('th');
    name.textContent = 'Name';
    row.appendChild(name);
    var score = document.createElement('th');
    score.textContent = 'Score';
    row.appendChild(score);
    //create Scores table body
    var tBody = table.tBodies[0];
    if (tBody === undefined) {
        tBody = document.createElement("tbody");
        table.appendChild(tBody);
    }
    for (var i = 0; i < names.length; i++) {
        row = tBody.insertRow(-1);
        var cell = row.insertCell(-1);
        cell.textContent = names[i];
        cell = row.insertCell(-1);
        cell.textContent = scores[i];
    }

};

window.onload = function () {
    $("add").onclick = addScore;
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
};



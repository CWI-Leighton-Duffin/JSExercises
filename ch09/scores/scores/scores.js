var students = [];
// var students = [['Sam', 'Gamgee', '75'], ['Leighton', 'Duffin', '100'], ['Saphell', 'Zorlak', '10']];

var $ = function (id) { return document.getElementById(id); };

var displayScores = function () {
    var total = 0;
    $('scores').value = '';
    for (var i = 0; i < students.length; ++i) {
        $('scores').value += students[i][1] + ', ' + students[i][0] + ' : ' + students[i][2] + '\r';
        total += parseInt(students[i][2]);
    }
    if (students.length > 0) $('average_score').value = Math.round(total / students.length);
};

var addScore = function () {
    students.push([$("first_name").value, $("last_name").value, $("score").value]);
    displayScores();
    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("score").value = "";
    $("first_name").focus();
};

var clearScores = function () {
    students = [];

    // remove the score data from the web page
    $("average_score").value = "";
    $("scores").value = "";
    
    $("first_name").focus();
};

var sortScores = function () {
    students.sort(function (a, b) {
        if (a[1].toLowerCase() === b[1].toLowerCase()) return 0;
        else if (a[1].toLowerCase() > b[1].toLowerCase()) return +1;
        else if (a[1].toLowerCase() < b[1].toLowerCase()) return -1;
    });
     displayScores();
};

window.onload = function () {
    $("add_button").onclick = addScore;
    $("clear_button").onclick = clearScores;    
    $("sort_button").onclick = sortScores;    
    $("first_name").focus();
};
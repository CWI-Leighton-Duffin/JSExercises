// window.onload = function() {
//     var date = new Date();
//     document.getElementById('footerDate').innerHTML = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
// };

window.onload = function() {
    var date = new Date();
    var footerDate = document.getElementById('footerDate');
    footerDate.innerHTML = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
};


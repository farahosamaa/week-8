var getusername = prompt("username");

console.log(getusername);

document.getElementById("username").innerText = getusername

//tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
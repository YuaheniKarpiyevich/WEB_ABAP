document.getElementById("NewPageButton").onclick = function () {
    window.open('https://www.tut.by', '_blanc');
}

document.getElementById("DeleteContentButton").onclick = function () {
    document.body.innerHTML="";
}
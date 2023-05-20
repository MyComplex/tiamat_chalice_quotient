var title = document.getElementById("showhide");
var begin = document.getElementById("quiz_start");

begin.addEventListener("click", function(){
    title.style.display = "block";
    begin.textContent = "end";
});

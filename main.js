var elSiteBody = document.querySelector(".cite-body");
var elMenuBtn = document.querySelector(".js-dark-mode-btn");

elMenuBtn.addEventListener("click", function(){

   elSiteBody.classList.toggle("dark-mode");

});
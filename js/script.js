var link = document.querySelector(".connection-btn");
var active = document.querySelector(".js-activated");
var f = function(e) {
  e.target.classList.toggle(active);
}
link.addEventListener("click", f);

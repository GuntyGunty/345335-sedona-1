var link = document.querySelector("connection-button");
var activated = document.querySelector(".activated");
var f = function(e) {
  e.target.classList.toggle(activated);
}
link.addEventListener("click", f);

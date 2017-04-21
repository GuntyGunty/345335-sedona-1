var btn = document.querySelector(".connection-btn");
btn.classList.add("jsactivated");
btn.addEventListener("click", function(e) {
  e.target.classList.toggle("jsactivated");
});

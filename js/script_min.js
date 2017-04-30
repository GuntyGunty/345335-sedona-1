var btn = document.querySelector(".connection-btn");
btn.classList.add("jsactivated"), btn.addEventListener("click", function(t) {
  t.target.classList.toggle("jsactivated")
});

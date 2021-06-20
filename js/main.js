const collaspable = document.querySelectorAll(".collaspable");
collaspable.forEach((item) =>
item.addEventListener("click", function(){
    this.classList.toggle("collaspable--expanded");
})
);
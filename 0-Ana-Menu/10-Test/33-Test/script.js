document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".button");
    buttons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            alert("تم النقر على الزر: " + this.textContent);
        });
    });
});
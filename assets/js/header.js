
//============ nav bar hover effects===============
let ls = document.querySelectorAll("nav li");

ls.forEach(li => {
  li.addEventListener("mouseenter", () => {
    ls.forEach(item => item.style.opacity = "0.4"); // dim all
    li.style.opacity = "1"; // highlight hovered one
    li.style.transform = "scale(1.1)"; 
    li.style.cursor = "pointer";
    // small zoom effect
  });

  li.addEventListener("mouseleave", () => {
    ls.forEach(item => {
      item.style.opacity = "1";
      item.style.transform = "scale(1)";
      item.style.cursor = "auto";
    });
  });
});


var balls = document.getElementsByClassName("ball");
var arr = [...balls];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
        document.documentElement.setAttribute("data-theme", "theme-1");
      } else if (index == 1) {
        document.documentElement.setAttribute("data-theme", "theme-2");
      } else {
        document.documentElement.setAttribute("data-theme", "theme-3");
      }
 
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});
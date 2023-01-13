var balls = document.getElementsByClassName("ball");
var arr = [...balls];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
 
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});
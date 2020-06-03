const spinner = document.querySelector("#spinner");
const allElements = document.querySelectorAll(".invisible");

window.onload = function () {
  spinner.style.display = "none";
  spinner.style.transition = "all ease-in .5s;";
  allElements.forEach(function (element) {
    element.classList.add("fade_in");
    element.classList.remove("invisible");
  });
};

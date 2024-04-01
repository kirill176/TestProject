import * as flsFunctions from "./modules/functions.js";
import gsap from "gsap";

flsFunctions.isWebp();

document.addEventListener("DOMContentLoaded", function () {
  gsap.from(".home", {
    opacity: 0,
    duration: 2,
  });
});

window.addEventListener("scroll", function (e) {
  console.log("scroll");
});

var about = document.querySelector(".about");
var aboutAnimated = false;
var tasks = document.querySelector(".tasks");
var tasksAnimated = false;
var projects = document.querySelector(".projects");
var images = document.querySelectorAll(".projects__row img");
var projectsAnimated = false;
gsap.set(images, { opacity: 0 });
gsap.set(about, { opacity: 0 });
gsap.set(tasks, { opacity: 0 });

window.addEventListener("wheel", function () {
  var aboutRect = about.getBoundingClientRect();
  var tasksRect = tasks.getBoundingClientRect();
  var projectsRect = projects.getBoundingClientRect();

  if (!aboutAnimated && aboutRect.top < window.innerHeight) {
    gsap.to(about, {
      opacity: 1,
      duration: 2,
      delay: 0.5,
    });
    aboutAnimated = true;
  }

  if (!tasksAnimated && tasksRect.top < window.innerHeight) {
    gsap.to(".tasks", {
      opacity: 1,
      duration: 2,
      delay: 0.5,
    });
    tasksAnimated = true;
  }
  if (!projectsAnimated && projectsRect.top < window.innerHeight) {
    images.forEach(function (image, index) {
      gsap.to(image, {
        opacity: 1,
        duration: 2,
        delay: index * 0.3,
      });
      projectsAnimated = true;
    });
  }
});

const burger = document.querySelector(".header__burger");
const list = document.querySelector(".header__list");

burger.onclick = function () {
  list.classList.toggle("open");
  burger.classList.toggle("click");
};

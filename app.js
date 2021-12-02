
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const btnDeveloper = document.querySelector(".btn-developer");
const btnWebsite = document.querySelector(".btn-website");

navToggle.addEventListener ("click", function () {
     console.log(links.classList);

    links.classList.toggle("show-links");
});
btnDeveloper.addEventListener("click", function() {
    location.href = "about.html"
});
btnWebsite.addEventListener("click", function() {
    location.href = "skills.html"
});
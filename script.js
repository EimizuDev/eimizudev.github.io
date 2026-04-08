const hero = document.getElementById('hero-nav');
const aboutMe = document.getElementById('about-me-nav');
const projects = document.getElementById('projects-nav');
const contacts = document.getElementById('contacts-nav');
const hoverSlider = document.getElementById('hover-slider');
const navUl = document.querySelector("nav ul");

function GetNavElement(index) {
  if (index === 0) {
    return hero;
  }
  else if (index === 1) {
    return aboutMe;
  }
  else if (index === 2) {
    return projects;
  }
  else if (index === 3) {
    return contacts;
  }

  return;
}

function TransformHoverSlider(index) {
  if (window.innerWidth <= 768) {
    const navButtonBounds = hero.getBoundingClientRect();

    hoverSlider.style.height = navButtonBounds.height + "px";
    hoverSlider.style.width = navUl.getBoundingClientRect().width + "px";

    hoverSlider.style.transform = "translateY(" + (index * (navButtonBounds.height + 5) + 1) + "px)";
  } else {
    hoverSlider.style.width = GetNavElement(index).getBoundingClientRect().width + "px";
    hoverSlider.style.height = "100%";

    let widthSum = 0;
    for (let i = 0; i < index; i++) {
      const width = GetNavElement(i).getBoundingClientRect().width;

      widthSum += width + 5.3;
    }

    hoverSlider.style.transform = "translateX(" + widthSum + "px)";
  }
}

TransformHoverSlider(0);

const navHam = document.querySelector(".nav-hamburger");

function ToggleHam() {
  navUl.classList.toggle("active");
  hoverSlider.classList.toggle("active");
  navHam.classList.toggle("active");
}

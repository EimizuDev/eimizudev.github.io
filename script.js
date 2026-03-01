const hero = document.getElementById('hero');
const aboutMe = document.getElementById('about-me');
const projects = document.getElementById('projects');
const contacts = document.getElementById('contacts');
const hoverSlider = document.getElementById('hover-slider');

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
  const indexBounds = GetNavElement(index).getBoundingClientRect();
  hoverSlider.style.width = indexBounds.width + 'px';

  let widthSum = 0;
  for (let i = 0; i < index; i++) {
    const width = GetNavElement(i).getBoundingClientRect().width;

    widthSum += width + 5;
  }

  hoverSlider.style.transform = "translateX(" + widthSum + "px)";
}

TransformHoverSlider(0)

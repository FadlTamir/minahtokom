let section = document.querySelectorAll('nav');
window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY  + 599;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add('show-animation');
    }
    else {
      sec.classList.remove('show-animation')
    }
  })

}
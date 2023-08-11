// _______________________________________________________________ menu _______________________________________________________________
const menuLinks = document.querySelectorAll("#menu > a");
const menuItemIds = ["technologia", "gama", "efekty", "opinia", "rutyna"];
const menuItems = menuItemIds.map(id => document.getElementById(id));
menuLinks.forEach((linkDiv, index) => {
  linkDiv.addEventListener("click", () => {
    menuLinks.forEach(menuLink => menuLink.classList.remove("text-primary"))
    linkDiv.classList.add("text-primary")
    menuItems.forEach(element => element.classList.add("lg:hidden"));
    menuItems[index].classList.remove("lg:hidden");
  })
})


// _______________________________________________________________ slides _______________________________________________________________
import { Splide } from '@splidejs/splide';



const instructionsCarousel = new Splide('#instructions', {
  classes: {
    arrows: 'splide__arrows arrows',
    arrow: 'splide__arrow arrow',
    prev: 'splide__arrow__prev prev',
    next: 'splide__arrow__next next',
    pagination: 'splide__pagination pagination',
    page: 'splide__pagination__page page',
  },
});
instructionsCarousel.mount();

// _______________________________________________________________ animations _______________________________________________________________

const animatedElements = document.querySelectorAll('[data-animation]');

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const {
      animation,
      duration = '500ms',
      timing = 'ease-in',
      delay = '500ms',
      iteration = '1',
      direction = 'normal',
      fill = 'backwards',
    } = entry.target.dataset;
    if (entry.isIntersecting) {
      entry.target.style.animation = `${animation} ${duration} ${timing} ${delay} ${iteration} ${direction} ${fill}`;
    }
  });
});

animatedElements.forEach((element) => {
  animationObserver.observe(element);
});

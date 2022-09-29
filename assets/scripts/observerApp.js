const observedElements = document.querySelectorAll(".observer-item");

const observer = new IntersectionObserver(
  (elements) => {
    elements.forEach((element) => {
      element.target.classList.toggle("show", element.isIntersecting);
      if (element.isIntersecting) {
        observer.unobserve(element.target);
      }
    });
  },
  {
    threshold: 0.25,
  }
);

observedElements.forEach((el) => {
  observer.observe(el);
});

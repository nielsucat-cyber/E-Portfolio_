const slideshows = {};

function initSlideshow(id, captions = []) {
  const container = document.getElementById(id);
  const slides = container.querySelectorAll(".slide");
  const captionElement = container.nextElementSibling; // caption div right after slideshow
  slideshows[id] = { index: 0, slides, captions, captionElement };

  slides.forEach(s => s.style.display = "none");
  slides[0].style.display = "flex";
  if (captionElement && captions.length > 0) {
    captionElement.textContent = captions[0];
  }
}

function changeSlide(id, n) {
  const s = slideshows[id];
  if (!s) return;
  s.slides[s.index].style.display = "none";
  s.index = (s.index + n + s.slides.length) % s.slides.length;
  s.slides[s.index].style.display = "flex";
  if (s.captionElement && s.captions.length > 0) {
    s.captionElement.textContent = s.captions[s.index];
  }
}

// initialize all slideshows
document.addEventListener("DOMContentLoaded", () => {
  initSlideshow("demand-slideshow", ["Demand", "Demand Function", "Demand Curve", "Demand Schedule"]);
  initSlideshow("supply-slideshow", ["Supply", "Supply Function", "Supply Curve", "Supply Schedule"]);
  initSlideshow("elasticity-slideshow", ["Elasticity", "Elasticity Formula", "Elasticity Curve", "Elasticity Example"]);
  initSlideshow("equilibrium-slideshow", ["Equilibrium", "Shortage", "Equilibrium Curve", "Surplus"]);
  initSlideshow("pamilihan-slideshow", ["Monopolyo", "Monopolistikong Kompetisyon", "Monopsony", "Oligopolyo"]);
  initSlideshow("pamahalaan-slideshow", ["Pamahalaan", "Pamilihan vs Pamahalaan"]);
});
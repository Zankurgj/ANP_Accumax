document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  $(".js--information-slider").owlCarousel({
    animateOut: "fadeOutLeftBig",
    animateIn: "fadeInLeftBig",
    items: 1,
    loop: false,
    dots: false,
    mouseDrag: false,
    nav: false,
    thumbs: true,
    thumbsPrerendered: true,
    thumbImage: false,
    thumbContainerClass: "js--information-slider-thumbs",
    thumbItemClass: "js--information-slider-thumb-item",
    responsive: {
      0: {
        dots: false,
      },
      993: {
        dots: true,
      },
    },
  });

  $(".js--feature-slider").owlCarousel({
    items: 1,
    loop: false,
    dots: false,
    mouseDrag: false,
    nav: true,
  });

  ScrollTrigger.create({
    trigger: ".js--head-img-trigger",
    // markers: true,
    start: "top center",
    end: "70% top",
    toggleClass: "show",
  });

  initSliderMobile();
  initTeamParallax();
});

const initSliderMobile = () => {
  const mobileCarousel = () => {
    const checkWidth = $(window).width();
    const owlPost = $(".js--slider-mobile");
    for (let i = 0; i < owlPost.length; i++) {
      if (checkWidth > 992) {
        if (typeof $(owlPost[i]).data("owl.carousel") != "undefined") {
          $(owlPost[i]).data("owl.carousel").destroy();
        }
        $(owlPost[i]).removeClass("owl-carousel");
      } else if (checkWidth <= 992) {
        $(owlPost[i]).addClass("owl-carousel");
        $(owlPost[i]).owlCarousel({
          items: 1,
          dots: false,
          loop: true,
          nav: true,
          mouseDrag: false,
        });
      }
    }
  };
  mobileCarousel();
  $(window).resize(mobileCarousel);
};

const initTeamParallax = () => {
  const checkWidth = $(window).width();
  if (checkWidth > 992) {
    const tlTeamDesctop = gsap.timeline({
      scrollTrigger: {
        trigger: ".js--team-img-trigger",
        start: "-200 center",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
    });
    tlTeamDesctop.to(".team-item--1", { y: 150, ease: "none" }, 0);
    tlTeamDesctop.to(".team-item--2", { y: -150, ease: "none" }, 0);
  }
};

const onCounterMinus = (id) => {
  let val = getCounterVal(id);
  if (val > 0) {
    --val;
  }
  setCounterVal(id, val);
};
const onCounterPlus = (id) => {
  let val = getCounterVal(id);
  ++val;
  setCounterVal(id, val);
};
const getCounterVal = (id) => {
  return document.getElementById(id).value;
};
const setCounterVal = (id, val) => {
  const costItem = document.querySelector(`[data-counter-cost-id="${id}"]`);
  let costVal = +costItem.dataset.counterCost;
  document.getElementById(id).value = val;
  costItem.innerHTML = String(costVal * val);
};

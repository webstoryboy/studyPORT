console.clear();

gsap.registerPlugin(MorphSVGPlugin);

const original = gsap.utils.toArray("#original path");
const morphStretched = gsap.utils.toArray("#morph-stretched path");
const morphStretchedBold = gsap.utils.toArray("#morph-stretched-bold path");
const morphStretchedBolder = gsap.utils.toArray("#morph-stretched-bolder path");

gsap
  .timeline({
  repeat: -1,
  repeatDelay: 0.2,
  defaults: {
    duration: 1.5,
    ease: "elastic.inOut",
    stagger: 0.1,
    delay: 0.05,
  }
})
  .to("#original path", {
  morphSVG: (i) => morphStretched[i]
})
  .to("#original path", {
  stagger: 0.04,
  morphSVG: (i) => morphStretchedBold[i]
})
  .to("#original path", {
  stagger: 0.08,
  morphSVG: (i) => morphStretchedBolder[i]
})
  .to("#original path", {
  stagger: 0.08,
  morphSVG: (i) => original[i]
});
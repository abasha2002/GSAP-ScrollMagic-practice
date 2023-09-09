let flightPath;

function updateFlightPath() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 768) {
    flightPath = {
      curviness: 1.5,
      autoRotate: true,
      values: [
        { x: 100, y: -40 },
        { x: 300, y: 30 },
        { x: 400, y: -50 },
        { x: 450, y: 0 },
        { x: 500, y: 30 },
        { x: 600, y: 70 },
        { x: 700, y: -150 },
        { x: 500, y: -110 },
        {x: 1000, y: -200},
        { x: window.innerWidth/2, y: 650 },
      ],
    };
  } else {
    flightPath = {
      curviness: 1.5,
      autoRotate: true,
      values: [
        { x: 30, y: -140 },
        { x: 50, y: 150 },
        { x: 110, y: -250 },
        { x: 80, y: 0 },
        { x: 20, y: 30 },
        { x: -30, y: 130 },
        { x: 50, y: -210 },
        { x: 70, y: -120 },
        { x: window.innerWidth/2, y: 50 },
      ],
    };
  }
}

// Initial call to set the correct flightPath on page load
updateFlightPath();

// Listen for window resize events and update flightPath
window.addEventListener("resize", updateFlightPath);

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".paper-plane", 1, {
    bezier: flightPath,
    ease: Power1.easeInOut,
  })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 4000,
  triggerHook: 0,
})

.setTween(tween)
.setPin(".animation")
.addTo(controller);


let deathPath;

function updateDeathPath() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 768) {
    deathPath = {
      curviness: 1,
      autoRotate: true,
      values: [
        { x: 50, y: -30 },
        { x: 100, y: -60 },
        { x: 200, y: 240 },
        { x: 500, y: 100 },
        { x: 300, y: -60 },
        { x: 200, y: -105 },
        { x: 600, y: 90 },
        { x: 700, y: -160 },
        { x: 900, y: 200 },
        { x: 800, y: 250 },
        { x: window.innerWidth, y: 650 },
      ],
    };
  } else {
    deathPath = {
      curviness: 1,
      autoRotate: true,
      values: [
        { x: 30, y: -140 },
        { x: 50, y: 80 },
        { x: 10, y: -50 },
        { x: 180, y: 10 },
        { x: 20, y: 130 },
        { x: -30, y: -230 },
        { x: 150, y: -160 },
        { x: 70, y: 300 },
        { x: window.innerWidth, y: 650 },
      ],
    };
  }
}

// Initial call to set the correct deathPath on page load
updateDeathPath();

// Listen for window resize events and update deathPath
window.addEventListener("resize", updateDeathPath);

const deathTween = new TimelineLite();

deathTween.add(
  TweenLite.to(".death", 1, {
    bezier: deathPath,
    ease: Power1.easeOut,
  })
);

const controll = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
  triggerElement: ".death-animation",
  duration: 5000,
  triggerHook: 0,
})
  .setTween(deathTween)
  .setPin(".death-animation")
  .addTo(controll);

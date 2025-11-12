/* ---- particles.js config ---- */
document.addEventListener("DOMContentLoaded", () => {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": { "enable": true, "value_area": 1000 }
      },
      "color": { "value": "#00ff00" },
      "shape": {
        "type": "circle",
        "stroke": { "width": 0.1, "color": "#000" }
      },
      "opacity": { "value": 0.1},
      "size": { "value": 3, "random": true },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#a6a5a2",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "grab" },
        "onclick": { "enable": true, "mode": "push" }
      },
      "modes": {
        "grab": { "distance": 150, "line_linked": { "opacity": 1 } },
        "push": { "particles_nb": 4 }
      }
    },
    "retina_detect": true
  });
});

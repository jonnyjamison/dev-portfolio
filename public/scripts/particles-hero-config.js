particlesJS("particles-hero", {
  particles: {
    /* small, soft cluster that fades toward the hero content */
    number: {
      value: 8,
      density: { enable: true, value_area: 100 },
    },
    size: {
      value: 10,
      random: true,
    },
    move: {
      speed: 0.6,
      direction: "none",
      out_mode: "out",
    },
    opacity: {
      value: 0.35,
    },
    color: {
      /* match the site's accent color (softened by opacity/mix-blend) */
      value: "#00ff00",
    },
    line_linked: {
      enable: true,
      distance: 80,
      opacity: 0.9,
      color: "#00ff00",
      width: 1,
    },
  },
  interactivity: {
    events: {
      onhover: { enable: false },
    },
  },
  retina_detect: true,
});

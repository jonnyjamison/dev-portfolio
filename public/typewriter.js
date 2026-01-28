function whenReady(fn, tries = 80) {
  const ok = typeof window.gsap !== "undefined" && typeof window.TextPlugin !== "undefined";
  if (ok) return fn();
  if (tries <= 0) return console.error("❌ GSAP/TextPlugin never became available");
  setTimeout(() => whenReady(fn, tries - 1), 50);
}

function init() {
  console.log("✅ init called");

  // Ensure plugin is registered
  window.gsap.registerPlugin(window.TextPlugin);

  const words = [
    "Jonny.",
    "mad about MATLAB.",
    "passionate about Python.",
    "silly about Simulink.",
    "an F1 nerd.",
    "average at tennis.",
    "based in London.",
    "an MX5 owner.",
    "keen to collaborate.",
  ];

  const textBox = document.querySelector(".text");
  if (!textBox) {
    console.error("❌ .text element not found");
    return;
  }

  window.gsap.to(".cursor", { opacity: 0, ease: "power2.inOut", repeat: -1 });

  const masterTl = window.gsap.timeline();
  const mainTl = window.gsap.timeline({ repeatDelay: 1.8, repeat: -1 });

  words.forEach((word, index) => {
    const delay = index === 0 ? 0 : 1;

    const textTl = window.gsap.timeline({
      delay,
      onComplete: () => {
        setTimeout(() => {
          textBox.classList.add("selected");
          setTimeout(() => {
            textBox.textContent = "";
            textBox.classList.remove("selected");
          }, 300);
        }, 1500);
      },
    });

    textTl.to(".text", {
      text: word,
      duration: 1.5,
      ease: "power1.in",
      delay,
    });

    mainTl.add(textTl);
  });

  masterTl.to(".hi", { text: "I'm", duration: 1, ease: "power1.in" }).add(mainTl);
}

window.addEventListener("load", () => whenReady(init));

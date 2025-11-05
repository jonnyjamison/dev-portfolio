function init() {

    let words = ["Jonny.", 
      "mad about MATLAB.", 
      "passionate about Python.", 
      "silly about Simulink.", 
      "an F1 nerd.", 
      "average at tennis."];
      
    let textBox = document.querySelector('.text');

    gsap.to('.cursor', {opacity:0, ease: "power2.inOut", repeat:-1});
    
    const masterTl = gsap.timeline();
    
    let mainTl = gsap.timeline({
        repeatDelay: 1.8,
        repeat: -1
    });

    words.forEach((word, index, words) => {
        const delay = word === words[0] ? 0 : 1;
        let textTl = gsap.timeline({
            delay: delay,
            onComplete: () => {
                setTimeout(() => {
                    textBox.classList.add('selected');

                    setTimeout(() => {
                        textBox.textContent = '';
                        textBox.classList.remove('selected');
                    }, 300);
                }, 1500)
            }
        });
        textTl.to('.text', {
            text: word,
            duration: 1.5,
            ease: 'power1.In',
            delay: delay
        });

        mainTl.add(textTl);
    });
    
    masterTl.to('.hi', {text: "I'm", duration: 1, ease: 'power1.In'})
        .add(mainTl);
}

window.addEventListener('load', init);

import { useEffect, useState } from 'react';

function RevealBoxes() {

    const [hasRunReveal, setHasRunReveal] = useState(false);

    useEffect(() => {
        const revealBoxes = document.querySelectorAll('.reveal');
        if (!hasRunReveal && revealBoxes.length > 0 ) {
            const callback = (el) => {
                el.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                }
                });
            };
            const observer = new IntersectionObserver(callback);
            revealBoxes.forEach((el, i) => {
                observer.observe(el);
                el.style.transitionDelay = '.' + i + 's';
            });
            setHasRunReveal(true);

        }
    }, [hasRunReveal]);
}

export default RevealBoxes;
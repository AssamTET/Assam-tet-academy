document.addEventListener("DOMContentLoaded", () => {

    const waitForTrack = setInterval(() => {
        const track = document.getElementById("carouselTrack");
        if (!track) return;

        clearInterval(waitForTrack);
        const slides = document.querySelectorAll(".slide");
        let index = 0;

        function visibleSlides() {
            if (innerWidth < 768) return 1;
            if (innerWidth < 1024) return 2;
            return 4;
        }

        function maxIndex() {
            return slides.length - visibleSlides();
        }

        function updateCarousel() {
            const slideWidth = 100 / visibleSlides();
            track.style.transform = `translateX(-${index * slideWidth}%)`;
        }

        window.onresize = () => {
            if (index > maxIndex()) index = maxIndex();
            updateCarousel();
        };

        setInterval(() => {
            index = index < maxIndex() ? index + 1 : 0;
            updateCarousel();
        }, 4000);

        updateCarousel();
    }, 100);
});

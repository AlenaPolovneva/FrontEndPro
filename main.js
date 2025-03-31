document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slider');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('#next');
    const dotsContainer = document.querySelector('.dots');
    let currentIndex = 0;

    function createDots() {
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
            dotsContainer.appendChild(dot);
        });
    }

    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentIndex ? 'block' : 'none';
        });

        prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
        nextBtn.style.display = currentIndex === slides.length - 1 ? 'none' : 'block';

        // Оновлення індикаторів
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
    nextBtn.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });
    createDots();
    updateSlider();
});
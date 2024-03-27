{/* <img id="slide-1" src="Images/Photo1.jpg" alt="fury is classified">
<img id="slide-2" src="Images/Photo2.jpg" alt="duel of giants">
<img id="slide-3" src="Images/Photo3.jpg" alt="imperial is classified">  */}

const carousel = document.getElementById('slider')
const slides = ['Images/Photo1.jpg', 'Images/Photo2.jpg', 'Images/Photo3.jpg']
let currentSlide = 0


setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length
    const slide = document.createElement('img')
    slide.src = slides[currentSlide]
    const nextSlide = document.createElement('img')
    nextSlide.src = slides[(currentSlide + 1) % slides.length]
    
    carousel.appendChild(slide)
    carousel.appendChild(nextSlide)

    const lastSlide = slides.shift()
    slide.classList.add('fade-in-animation')
    slide.classList.add('fade-out-animation')
    slides.push(lastSlide)
    setTimeout(() => {
        carousel.removeChild(slide)
        carousel.removeChild(nextSlide)
    }, 3000)
}, 3000)
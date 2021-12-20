const clouds = document.querySelectorAll('.clouds'),
    birds = document.querySelector('.birds'),
    sun = document.querySelector('.sun'),
    sky = document.querySelector('.sky')
window.addEventListener('scroll', () => {
    shadow = document.querySelector('.shadow')
    for (let i = 0; i < clouds.length; i++) {
        const cloud = clouds[i];
        let speed = cloud.getAttribute('speed')
        cloud.style.transform = `translateX(${window.scrollY * speed}px)`
        console.log(window.scrollY);
    }
    let speedy = birds.getAttribute('speedy'),
        direction = birds.getAttribute('direction')
    if (window.scrollY > 0) {        
        birds.style.transform = `translateY(${window.scrollY*direction}px) scale(${window.scrollY/speedy})`
    }
     else if (window.scrollY == 0) {
        birds.style.transform = `translateY(${window.scrollY*direction}px) scale(0)`
    }
    // if (window.scrollY < 250) {
    //     birds.style.transform = ` scale(0)`
    // } else if (window.scrollY == 0) {
    //     birds.style.transform = 'scale(1)'
    // }

    let sun = document.querySelector('.sun'),
        sun_around = document.querySelector('.sun_around'),
        sunshine = document.querySelector('.sunshine'),
        sunshine2 = document.querySelector('.sunshine2')
    sun.style.transform = `translateY(${window.scrollY}px)`
    sun_around.style.transform = `translateY(${window.scrollY}px) rotate(${window.scrollY}deg)`
    sunshine.style.transform = `translateY(${window.scrollY}px)`
    sunshine2.style.transform = `translateY(${window.scrollY}px)`
    if (window.scrollY < 250) {
        setTimeout(() => {
            shadow.style.opacity = '0'
        }, 100);
    }
    else if (window.scrollY > 250) {
        setTimeout(() => {
            shadow.style.opacity = '1'
        }, 100);
    }
})

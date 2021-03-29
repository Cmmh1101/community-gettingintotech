/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
}

// skewed hero triangles ===================
const TriangleOne = document.querySelector('.triangleOne');
const TriangleTwo = document.querySelector('.triangleTwo');

window.addEventListener('scroll', function() {
    const value1 = -15 + window.scrollY / 45;
    const value2 = 15 + window.scrollY / -45;
    TriangleOne.style.transform = "skewY(" + value1 + "deg)";
    TriangleTwo.style.transform = "skewY(" + value2 + "deg)";
})

// end of skewed hero triangles ===================

// togle contact form =============================

var contactBtn = document.getElementsByClassName('contactButton')

var contactForm = document.getElementsByClassName('contactForm')

var clickedBtn = function() {
    contactForm[0].classList.toggle('active')
}

contactBtn[0].addEventListener('click', clickedBtn)

console.log(contactBtn[0])

// ============== SCROLL REVEAL ===================

ScrollReveal().reveal('#hero');
ScrollReveal().reveal('#intro', { delay: 500 });
ScrollReveal().reveal('#path', { delay: 500 });
ScrollReveal().reveal('#resources', { delay: 500 });
ScrollReveal().reveal('.rscContainer', { delay: 500 });
ScrollReveal().reveal('#contact', { delay: 500 });

// ============== END OF SCROLL REVEAL ===================
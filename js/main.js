// Função debounce

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	}
}

// Animação do H1 - Section One

const $sectionOneH1 = document.querySelector('.section-one-text');

function breakLetters(element) {
    const arrayLetters = element.innerHTML.split('');
    element.innerHTML = '';
    arrayLetters.forEach((letra, i) => {
        setTimeout(() => element.innerHTML += letra, 40 * i);
    });
}

breakLetters($sectionOneH1);

// Animação ao clicar - Scroll suave

const $headerAnchors = document.querySelectorAll('.anchor-animation a[href^="#"]');

function scrollToIdOnClick(event) {
    event.preventDefault(); 
    const destiny = document.querySelector(event.target.getAttribute('href')).offsetTop;

    window.scroll({
        top: destiny-70,
        behavior: 'smooth'
    });
}

$headerAnchors.forEach((item) => {
    item.addEventListener("click", scrollToIdOnClick)
});

// Animação do Header

const $header = document.querySelector(".header");
const $sectionOneText = document.querySelector(".section-one-text");

function animeScroll() {
    const windowTop = window.pageYOffset;
    if (windowTop > ($sectionOneText.offsetTop + 150)) {
        $header.classList.add("header-anime");
    } else {
        if ($header.classList.contains("header-anime")) {
            $header.classList.remove("header-anime");
        }
    }
}

window.addEventListener('scroll', debounce(()=>{
    animeScroll();
}, 100));

// Animação ao Scroll 

const $imagesAnimation = document.querySelectorAll("[data-anime]");

function animeScrollImages() {

    $imagesAnimation.forEach((element)=>{
        const windowTop = window.pageYOffset + (window.innerHeight*3)/4;
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
                element.classList.remove("animate");
        }
    });
}

window.addEventListener('scroll', debounce(()=>{
    animeScrollImages();
}, 200));
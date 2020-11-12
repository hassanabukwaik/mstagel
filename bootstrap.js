const $spansOpen = document.querySelector(".open-sidebar")

$spansOpen.addEventListener("click", () => {
	document.querySelector(".sidbar").style.display = "block";
	document.querySelector(".sidbar").style.transition = "all 0.5s ease 1s";
	document.querySelector(".sidbar-background").style.display = "block"
})


document.querySelector(".sidbar-background").addEventListener("click", () => {
	document.querySelector(".sidbar").style.transition = "all 1s";
	document.querySelector(".sidbar").style.display = "none";
	document.querySelector(".sidbar-background").style.display = "none"
})
$(document).ready(function(){
    $('.product-photo').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});
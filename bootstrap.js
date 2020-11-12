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
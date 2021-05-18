// Hambuger Menu
const navigator = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

navigator.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(response => {
    response.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
})
})

//Hamburger menu animation
$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});


//trigger animation when a nav link is selected
$(document).ready(function(){
	$('.nav-link').click(function(){
		$('#nav-icon').toggleClass('open');
	});
});

//Hamburger menu hover
$(document).ready(function(){
    $('.menu-bar').hover(
        function(){
        $('.menu-bar').css("background", "#1bb6e6"); }
        ,function(){
        $('.menu-bar').css("background", "#bdbcbc");
    });
});   

// Current date
const currentMoment = moment();
var todayDate = $("#today-date").text(currentMoment.format("dddd, MMM Do YYYY"));

$(document).ready(() => {

	$('li').children('a').click((e) => {
		e.preventDefault();
	});
	
	$('#menu-toggle').click(() => {
		$('ul').toggleClass('show');
	});	
});
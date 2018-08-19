$(document).ready(() => {
    $('.para').hide();

    $('.btn').click( function(){
        $(this).siblings('p.para').slideToggle(500);

        $(this).parent().siblings().children('.para').slideUp(500);
    });
});
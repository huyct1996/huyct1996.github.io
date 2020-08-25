$(document).ready(function() {
    $('ul li').click(function() {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    });
    $('.menu-toggle').click(function() {
        $('nav .menu').toggleClass('active');
        $(this).toggleClass('open');
    });
    $('.menu .search .ic-search i').click(function() {
        $('.menu .search .form-search').toggleClass('open');
    });
});
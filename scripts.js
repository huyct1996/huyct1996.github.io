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


// Javascript

// SCROLL NAV
var nav = document.querySelector('nav');
var navToTop = nav.offsetTop;

window.onscroll = function myFunction() {
    if(window.pageYOffset > navToTop) {
        nav.classList.add('nav-fixed');
    }else {
        nav.classList.remove('nav-fixed');
    }
}

// OVERLAY
// var imgOverlay = document.getElementsByClassName("thumbnail-img");
// imgOverlay[0].addEventListener("mouseover", overlayMe);

// var overlay = document.getElementsByClassName("overlay");

// function openOverlay() {
//     overlay[0].classList.add('open');
//     console.log(overlay);
// }

// function outOverlay() {
//     overlay[0].classList.remove('open');
// }
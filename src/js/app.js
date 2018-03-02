const $ = require('jquery');
const slick = require('slick-carousel');
//const popper = require('popper');
const bootstrap = require('bootstrap');

const topFunction = function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
};

$(document).ready(function() {
    $("#hideSearch").on('click', function(){
        $(".showSearch").slideUp();
    });

    $("#showSearch").click(function(){
        $(".showSearch").slideDown();
    });
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrollTop").style.display = "block";
        } else {
            document.getElementById("scrollTop").style.display = "none";
        }
    };
    $("#scrollTop").on("click", function () {
        topFunction();
    });

    $("#categories").slick({
        rows: 2,
        slidesToShow: 6,
        centerMode: true,
        // the magic
        responsive: [{

            breakpoint: 1170,
            settings: {
                rows: 2,
                slidesToShow: 5,
                infinite: true
            }

        },{
            breakpoint: 1024,
            settings: {
                rows: 1,
                slidesToShow: 4,
                infinite: true
            }
        }, {
            breakpoint: 768,
            settings: {
                rows: 1,
                centerMode: false,
                slidesToShow: 3
            }
        }, {

            breakpoint: 500,
            settings: {
                rows: 1,
                centerMode: false,
                slidesToShow: 2
            }
        }]
    });

    $('[data-toggle="collapse"]').collapse('hide');
    $('#filterShow').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('fixed');
        $('#wrapper').toggleClass('toggled');

    });
    $('.navbar-toggler').click(function() {
        console.log('click');
        $('.menu-open').toggleClass('d-none');
        $('.menu-close').toggleClass('d-block');
    });
});
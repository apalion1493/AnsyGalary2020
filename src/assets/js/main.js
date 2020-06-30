jQuery(function($){
    $(document).mouseup(function (e){
        let div = $(".header__search");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.header__search').removeClass('active');
        }
    });
});

$('.btn.header__search-btn').click(function () {
    $('.header__search').toggleClass('active');
    $('#header').toggleClass('openSearch');
});

// $('.header__search-icon').click(function () {
//     $('#header').toggleClass('openSearch');
// });

$('.header__search-bg').click(function () {
    $('#header').removeClass('openSearch');
    $('.header__search').removeClass('active');
});

$('.header__search-closeIcon').click(function () {
    $('#header').removeClass('openSearch');
    $('.header__search').removeClass('active');
});

// jQuery(function($){
//     $(document).mouseup(function (e){
//         let div = $(".header__mob-search-container");
//         if (!div.is(e.target) && div.has(e.target).length === 0) {
//             $('#header').removeClass('openSearch');
//         }
//     });
// });

$('#header__mob-burger').click(function () {
    $('#header').toggleClass('active');
});

$('.main-text__wrapper-mobil-btn').click(function () {
    $('.main-text__wrapper').toggleClass('active');
});




$('#catalog-page__switch-1').click(function () {
    $('.catalog-page__switch').removeClass('active');
    $(this).addClass('active');
    $('#catalog-page').addClass('catalog-page__mob-two').removeClass('catalog-page__mob-one');
});

$('#catalog-page__switch-2').click(function () {
    $('.catalog-page__switch').removeClass('active');
    $(this).addClass('active');
    $('#catalog-page').removeClass('catalog-page__mob-two').addClass('catalog-page__mob-one');
});

// $('.filtration__btn-mobil').click(function () {
//     $('.mobil-filter').addClass('active');
//     $('.catalog-body').addClass('overflowHidden');
//     $('.header__catalog').addClass('open');
//     $('#header').addClass('hasFilter').removeClass('noFilter');
// });

// $('.header__catalog-btn-filter').click(function () {
//     $('.mobil-filter').addClass('active');
//     $('.catalog-body').addClass('overflowHidden');
//     $('.header__catalog').addClass('open');
//     $('#header').addClass('hasFilter').removeClass('noFilter');
// });


// $('.header__catalog-btn-close').click(function () {
//     $('.mobil-filter').removeClass('active');
//     $('.catalog-body').removeClass('overflowHidden');
//     $('#header').addClass('noFilter').removeClass('hasFilter');
// });


$('.catalog-page__scale-block-minus').click(function () {
    $('.catalog-page__scale').removeClass('enlarged').addClass('reduced');
    $('#catalog-page').addClass('catalog-page_cardFourth')
});

$('.catalog-page__scale-block-plus').click(function () {
    $('.catalog-page__scale').removeClass('reduced').addClass('enlarged');
    $('#catalog-page').removeClass('catalog-page_cardFourth')
});

var header = $('#header');
var scrollPrev = 0;

$(window).scroll(function() {

    var scrolled = $(window).scrollTop();

    if ( scrolled > 100 && scrolled > scrollPrev ) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
});



$(window).scroll(function() {
    var scrollPrev1 = 0;

    var scrolled = $(window).scrollTop();

    if ( scrolled > 100 && scrolled > scrollPrev1 ) {
        header.addClass('noLogo');
    } else {
        header.removeClass('noLogo');
    }
    scrollPrev1 = scrolled;
});

$(window).scroll(function() {
    var scrollPrev1 = 0;

    var scrolled = $(window).scrollTop();

    if ( scrolled > 190 && scrolled > scrollPrev1 ) {
        $('.noFilter .header__catalog').addClass('open');
    } else {
        $('.noFilter .header__catalog').removeClass('open');
    }
    scrollPrev1 = scrolled;
});



////////

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "none") {
            panel.style.display = "flex";
        } else {
            panel.style.display = "none";
        }
    });
}

var filterButtonClose = document.querySelector('#filtration__header');
var catalogPage = document.querySelector('#catalog-page');
var container = document.querySelector('.catalog-page__switchGroup');
if (filterButtonClose) {
    filterButtonClose.addEventListener('click', function () {
        catalogPage.classList.toggle("catalog-page_filterNo");
    });
}




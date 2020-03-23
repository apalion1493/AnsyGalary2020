function testFunc() {
    $('.header__search').addClass('active');
}

jQuery(function($){
    $(document).mouseup(function (e){
        let div = $(".header__search");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(div).removeClass('active');
        }
    });
});

$('.header__search-icon').click(function () {
    $('#header').addClass('openSearch');
});

jQuery(function($){
    $(document).mouseup(function (e){
        let div = $(".header__mob-search-container");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('#header').removeClass('openSearch');
        }
    });
});

$('#header__mob-burger').click(function () {
    $('#header').toggleClass('active');
});

$('.main-text__wrapper-mobil-btn').click(function () {
    $('.main-text__wrapper').toggleClass('active');
});

// jQuery(function($){
//     $(document).mouseup(function (e){
//         let div = $(".header__mob-menu");
//         if (!div.is(e.target) && div.has(e.target).length === 0) {
//             $('#header').removeClass('active');
//         }
//     });
// });

let acc = document.getElementsByClassName("accordion");
let i;

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

let filterButtonClose = document.querySelector('#filtration__header');
let catalogPage = document.querySelector('#catalog-page');
filterButtonClose.addEventListener('click', function () {
    catalogPage.classList.toggle("catalog-page_filterNo");
});



const container = document.querySelector('.catalog-page__switchGroup');


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

$('.filtration__btn-mobil').click(function () {
    $('.mobil-filter').addClass('active');
    $('.header__catalog').addClass('open')
});

$('.header__catalog-btn').click(function () {
    $('.header__catalog').removeClass('open');
    $('.mobil-filter').removeClass('active');
});

$('.catalog-page__scale-increase').click(function () {
    $('.catalog-page__scale').removeClass('enlarged').addClass('reduced');
    $('#catalog-page').addClass('catalog-page_cardFourth')
});

$('.catalog-page__scale-reduce').click(function () {
    $('.catalog-page__scale').removeClass('reduced').addClass('enlarged');
    $('#catalog-page').removeClass('catalog-page_cardFourth')
})
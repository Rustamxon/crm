var $window = $(window),
  $navbar = $('header nav.navbar'),
  // $responsiveDirections = $('#fixRightSideBar'),
  $numbersForresponsive = $('.numbersForresponsive'),
  $contactsPageFormCols = $('#contactsPage form .contactsInputs'),
  $contactsPageImgCols = $('#contactsPage form .contactsIllustrator'),
  $contactsPageSideBar = $('#contactsPageSideBar');

$(document).ready(function() {
  responsive();
});

$window.resize(function() {
  responsive();
});

function responsive() {
  if ($window.width() <= 1680) {
    $('.opportunity .featuresDetails').removeClass('px-5');
  } else {
    $('.opportunity .featuresDetails').addClass('px-5')
  }
  if ($window.width() <= 1440) {
    $('.faqSection .container-fluid').addClass('justify-content-center');
  } else{
    $('.faqSection .container-fluid').removeClass('justify-content-center');
  }
  if ($window.width() <= 1366 && $window.width() > 1024) {
    $('.tab_content .flex-wrapper').removeClass('justify-content-between');
    $('.tab_content .flex-wrapper').addClass('justify-content-start');
  } else {
    $('.tab_content .flex-wrapper').addClass('justify-content-between');
    $('.tab_content .flex-wrapper').removeClass('justify-content-start');
  }
  if ($window.width() <= 1280) {
    $('#featuresBlock .container-fluid div.row:nth-child(1)').removeClass('mb-5');
    $('#featuresBlock .container-fluid div.row:nth-child(2)').addClass('align-items-center');
    $('.opporTabsContent-item .container-fluid').removeClass('pl-0');
  } else if ($window.width() > 1280) {
    $('.opporTabsContent-item .container-fluid').addClass('pl-0');
  } else {
    $('#featuresBlock .container-fluid div.row:nth-child(1)').addClass('mb-5');
    $('#featuresBlock .container-fluid div.row:nth-child(2)').removeClass('align-items-center');
  }
  if ($window.width() <= 1200 && $window.width() > 1024) {
    $navbar.addClass('ml-auto');
    $('ul.navbar-nav').removeClass('mr-auto')
    $('ul.navbar-nav').addClass('m-auto')
  }
  else {
    $navbar.removeClass('.ml-auto');
  }
  if ($window.width() <= 1200) {
    $contactsPageSideBar.addClass('slideRightSidebar');
    $('.opporTabsContent-item .opporContainers').removeClass('justify-content-center');
    $('.opporTabsContent-item .opporContainers').addClass('justify-content-evenly');
    $('.opporTabsContent-item .opporsWrapperRow').addClass('justify-content-center');
    $('.opporTabsContent-item .opporDescrCol').removeClass('col-md-5');
    $('.opporTabsContent-item .opporDescrCol').addClass('col-md-8');
    $('#featuresBlock .col-md-9').addClass('mx-auto');
    $('.additionalOptions .container').removeClass(['pl-0', 'ml-0']);
    $('.discounts .container').removeClass('ml-0');
    
    $('.faqSection .container-fluid').removeClass('pl-0');
    // $responsiveDirections.addClass('responsiveDirections');
    // $(".responsiveDirections").mCustomScrollbar({
    //   theme: "dark-2"
    // });
  } else {
    $contactsPageSideBar.removeClass('slideRightSidebar');
    $('.opporTabsContent-item .opporContainers').addClass('justify-content-center');
    $('.opporTabsContent-item .opporContainers').removeClass('justify-content-evenly');
    $('.opporTabsContent-item .opporsWrapperRow').removeClass('justify-content-center');
    $('.opporTabsContent-item .opporDescrCol').addClass('col-md-5');
    $('.opporTabsContent-item .opporDescrCol').removeClass('col-md-8');
    $('#featuresBlock .col-md-9').removeClass('mx-auto');
    $('.additionalOptions .container').removeClass(['pl-0', 'ml-0']);
    $('.discounts .container').addClass('ml-0');
    
    $('.faqSection .container-fluid').addClass('pl-0');
    // $(".responsiveDirections").mCustomScrollBar('destroy');
    // $responsiveDirections.removeClass('responsiveDirections');
  }
  if ($window.width() <= 1200) {
    $contactsPageFormCols.removeClass('col-lg-5');
    $contactsPageFormCols.addClass('col-lg-7');
    $('.otherBreadcrumbs').removeClass('pl-0');
    $contactsPageImgCols.removeClass('col-lg-4');
    $contactsPageImgCols.addClass('col-lg-5');
  } else if ($window.width() > 1200) {
    $('.otherBreadcrumbs').addClass('pl-0');
  }
  if ($window.width() == 1200) {
    $('.advImg').removeClass('col-xl-4');
    $('.advInfo').removeClass('col-xl-5');
    $contactsPageFormCols.removeClass('col-xl-4');
  } else if ($window.width() > 1200) {
    $('.advImg').addClass('col-xl-4');
    $('.advInfo').addClass('col-xl-5');
    $contactsPageFormCols.addClass('col-xl-4');
  }
  if ($window.width() <= 1152 && $window.width() > 1024) {
    $('.tab_content .flex-wrapper').removeClass('justify-content-start');
    $('.tab_content .flex-wrapper').addClass('justify-content-evenly');
  } else {
    $('.tab_content .flex-wrapper').removeClass('justify-content-evenly');
  }
  if ($window.width() <= 1024) {
    $numbersForresponsive.addClass('ml-auto');
    $('.advSideBar').addClass('slideRightSidebar');
    $('.advImg').removeClass('col-lg-6');
    $('.advImg').addClass('mx-auto');
    $('.advInfo').removeClass('col-lg-8');
    $('.headerWrapper ul li.nav-item.active').removeClass('h-100');
    $('#contactsPageBody .fixRightSideBar.background .socials').removeClass('justify-content-center');
    $('#contactsPageBody .fixRightSideBar.background .socials').addClass('justify-content-around');
    $('.section.discounts .container').removeClass('pl-0');
    $('.discountsColumn').removeClass('col-lg-7');
    $('.discountsColumn').addClass('col-lg-8');
    $('#opporChangeList-tab-content .opporTabsContent-item').removeClass('withSimilarBg');
  } else {
    $numbersForresponsive.removeClass('ml-auto');
    $('.advSideBar').removeClass('slideRightSidebar');
    $('.advInfo').addClass('col-lg-8');
    $('.headerWrapper ul li.nav-item.active').addClass('h-100');
    $('#contactsPageBody .fixRightSideBar.background .socials').addClass('justify-content-center');
    $('#contactsPageBody .fixRightSideBar.background .socials').removeClass('justify-content-around');
    $('.section.discounts .container').addClass('pl-0');
    $('.discountsColumn').removeClass('col-lg-8');
    $('.discountsColumn').addClass('col-lg-7');
    $('#opporChangeList-tab-content .opporTabsContent-item').addClass('withSimilarBg')
  }
  if ($window.width() <= 992) {
    $contactsPageImgCols.addClass('mx-auto');
    $contactsPageImgCols.addClass('mb-3');
  } else {
    $contactsPageImgCols.removeClass('mx-auto');
    $contactsPageImgCols.removeClass('mb-3');
  }
  if ($window.width() <= 800) {
    $('#faqCarousel .container').removeClass('h-100');
  } else if ($window.width() > 800) {
    $('#faqCarousel .container').addClass('h-100');
  }
}
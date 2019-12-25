$(document).ready(function () {       
  $('#contactsPageBody #fp-nav').addClass('contactsPageLeftNavbar');
  $('.otherBreadcrumbs ol li.active').text($('.bind-btns-to-fullpage span:nth-child(1)').text());
  $('.bind-btns-to-fullpage span').click(function () {
    var number = parseInt($(this).index()) + 1;
    $.fn.fullpage.moveTo(number);
  });  
  $('.btnNext').click(function () {
    var number = parseInt($(this).index()) + 1;
    $.fn.fullpage.moveTo(number);
  });
  $('.btnPrew').click(function () {
    var number = parseInt($(this).index());
    $.fn.fullpage.moveTo(number);
  });
  $('#directionsModalCarousel').owlCarousel({
    loop: false,
    margin: 40,
    nav: true,
    navText: ["<img src='img/left.svg'>", "<img src='img/right.svg'>"],
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1366:{
        items: 4
      }
    }
  });
  $('.tariffsCarousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    navText: ["<img src='img/arrowhead-thin-outline-to-the-left.svg'>", "<img src='img/arrow-point-to-right.svg'>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });
  $('#addOptionsCarousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: ["<img src='img/arrowhead-thin-outline-to-the-left.svg'>", "<img src='img/arrow-point-to-right.svg'>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1366: {
        items: 4
      }
    }
  });
  $('#faqCarousel').owlCarousel({
    loop: false,
    margin: 50,
    nav: true,
    navText: ["<img src='img/arrowhead-thin-outline-to-the-left.svg'>", "<img src='img/arrow-point-to-right.svg'>"],
    items: 1,
    smartSpeed: 1000
  });  
  $('.opporChangeList span').click(function () {
    var number = parseInt($(this).index()) + 1;
    if (!isNaN(number) && number > 0) {
      $('.opporChangeList span').removeClass('activeFeature');
      $('.opporChangeList span:nth-child(' + number + ')').addClass('activeFeature');
    }
  });
  $(".numbersListOpen").click(function (event) {
    $(".respNumbersList").toggleClass("showlist");
    event.stopPropagation();
  });
  $(document).click(function (event) {
    if (!$(event.target).hasClass('showlist')) {
      $(".respNumbersList").removeClass("showlist");
    }
  });  
  $('#demoBlurEffect').on('click', function () {
    $('body').addClass('bluredModal');
  });  
  $('#exampleModal2').on('hidden.bs.modal', function () {
    $('body').removeClass('bluredModal');
  });
  $('#exampleModal2').on('shown.bs.modal', function () {
    var clientPhone = document.querySelector("#clientPhoneNumber");
    var clientTelegram = document.querySelector("#clientTelegram");
    window.intlTelInput(clientPhone, {
      initialCountry: "uz",
      separateDialCode: true,
      onlyCountries: ["cs", "kz", "kg", "ru", "sa", "tj", "tr", "ae", "gb", "us", "uz"],
      utilsScript: "js/utils.js"
    });
    window.intlTelInput(clientTelegram, {
      initialCountry: "uz",
      separateDialCode: true,
      onlyCountries: ["cs", "kz", "kg", "ru", "sa", "tj", "tr", "ae", "gb", "us", "uz"],
      utilsScript: "js/utils.js"
    });
  });  
  $("#navbarSupportedContent ul li").on('click', function () {
    $(this).siblings().removeClass('activeBorder')
    $(this).addClass('activeBorder');
  });
  $(".tariffsCarousel a").on('click', function () {
    $(this).parent().parent().find('a').removeClass('activeTariff')
    $(this).addClass('activeTariff');
  });
  $(".connectBtn").on('click', function () {
    $("#tariffs .data-tab-content .tariffDescription").addClass("none");
    $("#tariffs form").addClass("tarifFormActive");
  });
  $(".closeTariffsForm").on('click', function () {
    $("#tariffs .data-tab-content .tariffDescription").removeClass("none");
    $("#tariffs form").removeClass("tarifFormActive");
  });
  $("#chooseFirmType").select2({
    dropdownParent: $("#exampleModal2"),
    tags: true,
    searchInputPlaceholder: 'Введите запрос'
  });
  $('#chooseFirmType').on('select2:open', function (e) {
    $(".select2-selection.select2-selection--single").addClass("select2BoxShadow")
  });
  $('#chooseFirmType').on('select2:close', function (e) {
    $(".select2-selection.select2-selection--single").removeClass("select2BoxShadow")
  });
  $('.navbar-toggler').on('click', function () {
    $(this).toggleClass('closeHamburger');
    $('#navbarSupportedContent').toggleClass('show');
  });
  $('.navbarCloseButton').on('click', function () {
    $('#navbarSupportedContent').removeClass('show');
    $('.navbar-toggler').removeClass('closeHamburger')
  });
  $(".miniDirectionsWrapper").mCustomScrollbar({
    theme: "dark-2"
  });
  var $window = $(window),
      $navbar = $('header nav.navbar'),
      // $responsiveDirections = $('#fixRightSideBar'),
      $numbersForresponsive = $('.numbersForresponsive'),
      $contactsPageFormCols = $('#contactsPage form .contactsInputs'),
      $contactsPageImgCols = $('#contactsPage form .contactsIllustrator'),
      $contactsPageSideBar = $('#contactsPageSideBar');
  $window.resize(function resize() {
    if ($window.width() <= 1680){
      $('.opportunity .featuresDetails').removeClass('px-5');
    } else{
      $('.opportunity .featuresDetails').addClass('px-5')
    }
    if ($window.width() <= 1366 && $window.width() > 1024){      
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
    if($window.width() <= 1200){
      $contactsPageSideBar.addClass('slideRightSidebar');
      $('.opporTabsContent-item .opporContainers').removeClass('justify-content-center');
      $('.opporTabsContent-item .opporContainers').addClass('justify-content-evenly');
      $('.opporTabsContent-item .opporsWrapperRow').addClass('justify-content-center');
      $('.opporTabsContent-item .opporDescrCol').removeClass('col-md-5');
      $('.opporTabsContent-item .opporDescrCol').addClass('col-md-8');
      $('#featuresBlock .col-md-9').addClass('mx-auto');
      $('.additionalOptions .container').removeClass(['pl-0', 'ml-0']);
      $('.discounts .container').removeClass('ml-0');
      $('.faqSection .container-fluid').addClass('justify-content-center');
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
      $('.faqSection .container-fluid').removeClass('justify-content-center');
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
    if ($window.width() <= 1152 && $window.width() > 1024){
      $('.tab_content .flex-wrapper').removeClass('justify-content-start');
      $('.tab_content .flex-wrapper').addClass('justify-content-evenly');
    } else {
      $('.tab_content .flex-wrapper').removeClass('justify-content-evenly');
    }
    if ($window.width() > 1024){
      $('.fullpageBlock').fullpage({
        autoScrolling: true,
        navigation: true,
        navigationPosition: 'left',
        showActiveTooltip: false,
        scrollingSpeed: 1500,
        normalScrollElements: '#geoLocationmap',
        continuousVertical: true,
        scrollOverflow: true,
        scrollOverflowOptions: {
          click: false
        },
        onLeave: function (origin, destination, direction) {
          var number = parseInt(destination);
          if (!isNaN(number) && number > 0) {
            $('.bind-btns-to-fullpage span').removeClass('activeFeature');
            $(`.bind-btns-to-fullpage span:nth-child(${number})`).addClass('activeFeature');
          }
          var otherBreadCrumps = $('.bind-btns-to-fullpage span.activeFeature').text()
          $('.otherBreadcrumbs ol li.active').text(otherBreadCrumps);
          let contactsMapBlock = $('#mapBlock');
          let additionalInfoBtn = $('.openSideBarBtn')
          if (!contactsMapBlock.hasClass('active')) {
            // additionalInfoBtn.addClass('btnMapPosition')
          } else {
            // additionalInfoBtn.removeClass('btnMapPosition')
          }
        },
      });
      $('.opportunities.active').fullpage({
        autoScrolling: true,
        navigation: true,
        navigationPosition: 'left',
        showActiveTooltip: false,
        scrollingSpeed: 1500,
        continuousVertical: true,
        scrollOverflow: true
      });
      $(document).on('click', '[data-tab]', function () {
        var tabTariffs = $(this).attr('data-tab');
        if (tabTariffs != undefined && tabTariffs != '') {
          $('.data-tab-item').removeClass('active');
          $('[data-tab-item="' + tabTariffs + '"]').addClass('active');
        }
      });
      $(document).on('click', '[data-tab-op]', async function () {
        var tabOppors = $(this).attr('data-tab-op');
        var breadCrumbActive = $('.opporChangeList span.activeFeature').text();
        if (tabOppors != undefined && tabOppors != '') {
          $('.opporTabsContent-item').removeClass('active');
          $('[data-tab-item="' + tabOppors + '"]').addClass('active');
          $('.opporTabsContent-item').fadeOut(100);
          // $('.opporTabsContent-item .section *').fadeOut(300);
          $('.opporTabsContent-item.active').fadeIn(800);
          // $('.opporTabsContent-item.active .section *').fadeIn(900);
        }
        $.fn.fullpage.destroy('all');
        $('.opportunities.active').fullpage({
          autoScrolling: true,
          navigation: true,
          navigationPosition: 'left',
          showActiveTooltip: true,
          scrollingSpeed: 1500,
          continuousVertical: true,
          scrollOverflow: true
        });
        $('#opporPageBreadCrumbs li.active').text(breadCrumbActive);
        if (tabOppors == 'oppor-main-tab') {
          $('.opporChangeList span').removeClass('activeFeature');
          $('.opporChangeList span:nth-child(1)').addClass('activeFeature');
          $('#opporPageBreadCrumbs #breadcrumb-item--name').text($('.opporChangeList span:nth-child(1)').text());
        }
        $('.scrollDownBtn').click(function () {
          var number = parseInt($(this).index()) + 1;
          $.fn.fullpage.moveTo(number);
        });
      }); 
    } else if ($window.width() <= 1024) {
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
    }
    if ($window.width() <= 992) {
      $contactsPageImgCols.addClass('mx-auto');        
      $contactsPageImgCols.addClass('mb-3');        
    } else {
      $contactsPageImgCols.removeClass('mx-auto');  
      $contactsPageImgCols.removeClass('mb-3');   
    }
    if ($window.width() <= 800) {
      $('#tarif--items-list').mCustomScrollbar({
        axis: "x",
        theme: "light"
      });
    } else if ($window.width() > 800) {
      $('#tarif--items-list').mCustomScrollbar('destroy');
    }    
  }).trigger('resize');
  $(document).on('click', '.tab-btn', function () {
    var $parent = $(this).closest('.tabsWrapper');
    var tab = $(this).data('tab');
    $parent.find('.tab-btn').removeClass('active');
    $(this).closest('.tab-btn').addClass('active');
    $parent.find('.tabs_item').removeClass('active');
    $parent.find('.tabs_item').slideUp();
    if (tab != undefined) {
      var $tab = $parent.find('[data-tab-item="' + tab + '"]');
      if ($tab != undefined && $tab.length > 0) {
        $tab.slideDown();
      }
    }
  });
  $('.openSideBarBtn').on('click', function () {
    $('.sideBarResponsive').toggleClass('opporList');
  });
  $('.openSideBarBtn').on('click', function(){
    $('.slideRightSidebar').toggleClass('showSideBar');
  });
});

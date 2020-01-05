var winwidth = $(window).width();
var fullPageSectionConfig = {
  autoScrolling: true,
  navigation: true,
  navigationPosition: 'left',
  showActiveTooltip: true,
  scrollingSpeed: 1500,
  continuousVertical: true,
  scrollOverflow: true
}
$(document).ready(function () {
  initFullpage();
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
  // Multi fullpage init
  var $opportunities = $('.opportunities');
  if ($opportunities != undefined && $opportunities.length > 0) {
    if (winwidth > 1024) {
      $('.opportunities.active').fullpage(fullPageSectionConfig);
    }
    $(document).on('click', '[data-tab-op]', async function () {
      var tabOppors = $(this).attr('data-tab-op');

      var fullPageOpportunities = checkFullPage('.opportunities');

      if (fullPageOpportunities) {
        $.fn.fullpage.destroy('all');
        $('.opportunities').removeClass('fullpage-wrapper fp-destroyed');
      }

      if (tabOppors != undefined && tabOppors != '') {
        $('.opporTabsContent-item').removeClass('active');
        $('[data-tab-item="' + tabOppors + '"]').addClass('active');
        $('.opporTabsContent-item').fadeOut(100);
        $('.opporTabsContent-item.active').fadeIn(800);

        $('#opporChangeList-tab span').removeClass('active');
        $(this).addClass('active');

        var breadCrumbText = $('#opporChangeList-tab .active').text();
        $('#opporPageBreadCrumbs li.active').text(breadCrumbText);
      }

      if (winwidth > 1024) {
        $('.opportunities.active').fullpage(fullPageSectionConfig);
      }
    });
  }
  // Other scripts
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
  $('.openSideBarBtn').on('click', function () {
    $('.sideBarResponsive').toggleClass('opporList');
  });
  $('.openSideBarBtn').on('click', function () {
    $('.slideRightSidebar').toggleClass('showSideBar');
  });
});
$(window).resize(function () {
  winwidth = $(window).width();  
  var fullPageBlock = checkFullPage('.fullpageBlock');
  var fullPageOpportunities = checkFullPage('.opportunities');
  if (winwidth > 1024) {
    if (!fullPageBlock) {
      initFullpage();
    }
    if (!fullPageOpportunities) {
      $('.opportunities.active').fullpage(fullPageSectionConfig);
    }
  } else {
    if (fullPageBlock) {
      $.fn.fullpage.destroy('all');
    }
    if (fullPageOpportunities) {
      $.fn.fullpage.destroy('all');
      $('.opportunities').removeClass('fullpage-wrapper fp-destroyed');
    }
  }
});
function initFullpage() {
  if (winwidth > 1024) {
    var $fullPageBlock = $('.fullpageBlock');

    if ($fullPageBlock != undefined && $fullPageBlock.length > 0) {
      $fullPageBlock.fullpage({
        autoScrolling: true,
        navigation: true,
        navigationPosition: 'left',
        showActiveTooltip: false,
        scrollingSpeed: 1500,
        normalScrollElements: '#geoLocationmap',
        continuousVertical: true,
        scrollOverflow: true,
        afterRender: function () {
          initScrollBar();
          initOwlCarousel();
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
    }
  } else {
    initScrollBar();
    initOwlCarousel();
  }
}
function initScrollBar() {
  if (winwidth <= 900) {
    $('#tarif--items-list').mCustomScrollbar({
      axis: "x",
      theme: "light"
    });
  }
}
function initOwlCarousel() {
  $('#addOptionsCarousel').owlCarousel({
    items: 1,
    margin: 30,
    nav: true,
    navText: ["<img src='img/arrowhead-thin-outline-to-the-left.svg'>", "<img src='img/arrow-point-to-right.svg'>"],
    responsive: {
      0: {
        margin: 0
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });
  $('#faqCarousel').owlCarousel({
    loop: false,
    margin: 5,
    nav: true,
    navText: ["<img src='img/arrowhead-thin-outline-to-the-left.svg'>", "<img src='img/arrow-point-to-right.svg'>"],
    items: 1,
    smartSpeed: 1000
  });
  // $('#directionsModalCarousel').owlCarousel({
  //   loop: false,
  //   margin: 40,
  //   nav: true,
  //   navText: ["<img src='img/left.svg'>", "<img src='img/right.svg'>"],
  //   dots: true,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     768: {
  //       items: 2
  //     },
  //     992: {
  //       items: 3
  //     },
  //     1366:{
  //       items: 4
  //     }
  //   }
  // });
  // $('.tariffsCarousel').owlCarousel({
  //   loop: false,
  //   margin: 10,
  //   nav: false,
  //   dots: false,
  //   navText: ["<img src='img/arrowhead-thin-outline-to-the-left.svg'>", "<img src='img/arrow-point-to-right.svg'>"],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     600: {
  //       items: 3
  //     },
  //     1000: {
  //       items: 5
  //     }
  //   }
  // });

  // $('#addOptionsCarousel').owlCarousel({
  //   loop: true,
  //   margin: 30,
  //   nav: true,
  //   navText: ["<img src='img/arrowhead-thin-outline-to-the-left.svg'>", "<img src='img/arrow-point-to-right.svg'>"],
  //   responsiveClass: true,
  //   responsive:{
  //     300:{
  //       items: 1
  //     },
  //     768: {
  //       items: 3
  //     },
  //     992:{
  //       items: 4
  //     }
  //   }
  // });
}
function checkFullPage(classname) {
  var fullPage = false;

  if ($(classname).hasClass('fullpage-wrapper')) {
    if ($(classname).hasClass('fp-destroyed')) {
      fullPage = false;
    } else {
      fullPage = true;
    }
  } else {
    fullPage = false;
  }

  return fullPage;
}
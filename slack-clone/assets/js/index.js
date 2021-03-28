$(window).scroll(function nav_position() {
  $('.nav-container').css(
    $(window).scrollTop() > 100
      ? { 'position': 'fixed', 'top': '10px', "left": '0', 'right': '0', 'border-radius': '50px', 'background-color': '#fff', 'box-shadow': '0 4px 40px rgba(0,0,0,8%)' }
      : { 'position': 'relative', 'top': 'auto', 'background': 'transparent', 'box-shadow': 'none' }
  );
  return nav_position;
});

// Launch Dropdown
$(".btn-click").on("click", function () {
  $(".btn-click").toggleClass("btn-filled-dark")
  $(".launch-drop-down").toggle();
});

// Mobile Menu Open
$(".nav-menu-btn").click(function () {
  $(".mobile-nav").transition({
    opacity: 1,
    x: 0,
  })
});

// Mobile Menu Close
$(".mobile-nav-close").click(function () {
  $(".mobile-nav").transition({
    opacity: 0,
    x: 1000,
  })
});

// Mobile Product List Expanded
$(".list-expanded").click(function () {
  $(".list-expanded").toggleClass('active');
  $(".mobile-nav-product-list").toggle();
});

// Footer Nav List Expanded
var footerNavList = $(".footer-nav-list-item");
var footerNavLink = $('.footer-nav-link');

footerNavList.click(function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active').find(footerNavLink).slideUp();
  } else {
    $(".footer-nav-list-item.active .footer-nav-link").slideUp();
    $('.footer-nav-list-item.active').removeClass('active');
    $(this).addClass('active').find(footerNavLink).slideDown();
  }
  return false;
})


// footerNavList.click(function(){
// 	if(false == $(this).next().is(':visible')) {
// 		$('.footer-nav-link').slideUp(300);
//     footerNavList.addClass('rotate')
// 	}  else {
//     footerNavList.removeClass('rotate')
//   }
// 	$(this).next().slideToggle(300);
// });
// $('.footer-nav-list:eq(0)').show();

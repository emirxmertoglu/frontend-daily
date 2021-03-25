$(window).scroll(function nav_position() {
  $('.header-container').css(
    $(window).scrollTop() > 100
      ? { 'position': 'fixed', 'top': '10px', "left": '0', 'right': '0', 'background': '#fff', 'box-shadow': '0 4px 40px rgba(0,0,0,.08)' }
      : { 'position': 'relative', 'top': 'auto', 'background': 'transparent', 'border-radius': '50px', 'box-shadow': 'none' }
  );
  return nav_position;
});

$(".btn-click").on("click", function () {
  $(".btn-click").toggleClass("btn-filled-dark")
  $(".launch-drop-down").toggle();
});
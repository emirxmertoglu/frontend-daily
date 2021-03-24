$(window).scroll(function nav_position() {
  $('.header-container').css(
    $(window).scrollTop() > 100
      ? { 'position': 'fixed', 'top': '10px', "left": '0', 'right': '0', 'background': '#fff' }
      : { 'position': 'relative', 'top': 'auto', 'background': 'transparent', 'border-radius': '50px' }
  );
  return nav_position;
}());
$(document).ready(function () {
  console.log("ready!");
  $('header').addClass('active');
  $('header .phone').addClass('active');
});

$(document).on('scroll', function () {
  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();

  // pierwsza sekcja
  const $post1 = $('.posts .post:nth-of-type(1)');
  const post1FromTop = $post1.offset().top;
  const post1FromHeight = $post1.outerHeight();

  const $post2 = $('.posts .post:nth-of-type(2)');
  const post2FromTop = $post2.offset().top;
  const post2FromHeight = $post2.outerHeight();

  const $post3 = $('.posts .post:nth-of-type(3)');
  const post3FromTop = $post3.offset().top;
  const post3FromHeight = $post3.outerHeight();

  if (scrollValue > post1FromTop + post1FromHeight - windowHeight) {
    $post1.addClass('active');
  }
  if (scrollValue > post2FromTop + post2FromHeight - windowHeight) {
    $post2.addClass('active');
  }
  if (scrollValue > post3FromTop + post3FromHeight - windowHeight) {
    $post3.addClass('active');
  }

  // Czyściciel
  if (scrollValue < 100) {
    $('.posts .post').removeClass('active');
  }
})
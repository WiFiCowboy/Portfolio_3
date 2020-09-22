// collapse navbar on click
$(".navbar-nav>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

// smooth scroll
let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
});

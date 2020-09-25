// collapse navbar on click
function collapseNavBar() {
  $(".navbar-nav>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
}

// smooth scroll
let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
});

function insertProjectData() {
  // get the data
  // loop through data
  // build the element
  // apppend the element

  // this test works , you need to refactor
  let code =
    '<div class=${"card"}></div>' +
    '<div class="card-body">' +
    "This is some text within a card block." +
    "</div>";
  $(".test-js").append(code);
}

// Control for running app, call functions on start up
function masterControl() {
  insertProjectData();
  collapseNavBar();
}

$(masterControl);

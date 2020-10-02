const PROJECTS = [
  {
    title: "title 1",
    description: "desc 1",
    image: "./assets/logo.png",
    about: "about 1",
    stack: ["html", "css", "javascript"],
  },
  {
    title: "title 2",
    description: "desc 2",
    image: "./assets/logo.png",
    about: "about 2",
    stack: ["html", "css", "javascript"],
  },
  {
    title: "title 3",
    description: "desc 3",
    image: "./assets/logo.png",
    about: "about 3",
    stack: ["html", "css", "javascript"],
  },
  {
    title: "title 4",
    description: "desc 4",
    image: "./assets/logo.png",
    about: "about 4",
    stack: ["html", "css", "javascript"],
  },
];

// bug need to fix , wont collapse
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

  PROJECTS.forEach((item) => {
    // item.key to get data
    $(".test-js").append(
      `<div class="container col-lg">
      <div class="card">
        <img
          class="card-img-top"
          src="${item.image}"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
          <div
            class="btn-group"
            role="group"
            aria-label="project-buttons"
          >
            <button type="button" class="btn btn-secondary">
              Demo
            </button>
            <button type="button" class="btn btn-secondary">
              Code
            </button>
            <button type="button" class="btn btn-secondary">
              About
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>`
    );
  });
}

// Control for running app, call functions on start up
function masterControl() {
  insertProjectData();
  // collapseNavBar();
}

$(masterControl);

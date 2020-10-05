const PROJECTS = [
  {
    id: "project1",
    title: "title 1",
    description: "desc 1",
    image: "./assets/logo.png",
    about: "about 1",
    stack: ["html", "css", "javascript"],
  },
  {
    id: "project2",
    title: "title 2",
    description: "desc 2",
    image: "./assets/logo.png",
    about: "about 2",
    stack: ["html", "css", "javascript"],
  },
  {
    id: "project3",
    title: "title 3",
    description: "desc 3",
    image: "./assets/logo.png",
    about: "about 3",
    stack: ["html", "css", "javascript"],
  },
  {
    id: "project4",
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
      `
      <div class="container col-lg">
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
              <button type="button" class="btn btn-secondary" data-toggle="modal"   data-target=${
                "#" + item.id
              }>
                About
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div class="modal fade" id=${
        item.id
      } tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"     aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${item.title}</h5>
            <button type="button" class="close" data-dismiss="modal"  aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <p>${item.about}</p>
              </div>
              <br>
              <div class="row">
              <h5 class="modal-title" id="exampleModalLabel">Tech Stack</h5>
                <div class="col-sm-3 col-example">
                Level 1: .col-sm-3
                
                </div>
                <div class="col-sm-3 col-example">
                Level 1: .col-sm-3
                
                </div>
                <div class="col-sm-3 col-example">
                Level 1: .col-sm-3
                
                </div>
                <div class="col-sm-3 col-example">
                Level 1: .col-sm-3
                
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
      </div>
      `
    );
  });
}

// Control for running app, call functions on start up
function masterControl() {
  insertProjectData();
  // collapseNavBar();
}

$(masterControl);

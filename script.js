const project = [
  {
    title: "title 1",
    description: "desc 1",
    image: "image 1",
    about: "about 1",
    stack: ["html", "css", "javascript"],
  },
  {
    title: "title 2",
    description: "desc 2",
    image: "image 2",
    about: "about 2",
    stack: ["html", "css", "javascript"],
  },
  {
    title: "title 3",
    description: "desc 3",
    image: "image 3",
    about: "about 3",
    stack: ["html", "css", "javascript"],
  },
  {
    title: "title 4",
    description: "desc 4",
    image: "image 4",
    about: "about 4",
    stack: ["html", "css", "javascript"],
  },
];
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

  STORE[questionNumber].answers.forEach(function (answerValue, answerIndex) {
    $(`<label class="something" for="${answerIndex}">
    <input class="radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
    <span>${answerValue}</span>
  </label>
  `).appendTo($(".quizQA").find("fieldset"));
  });

  project.answers
    .forEach((item) => {
      $('<div class="card"></div><div class="card-body">${}</div>');
    })
    .appendTo($(".test-js"));

  // this test works , you need to refactor
  let code =
    '<div class=${"card"}></div>' +
    '<div class="card-body">' +
    "This is some text within a card block." +
    "</div>";
  $(".test-js").append(code);

  project.title.forEach((element) => {
    console.log(element);
  });
}

// Control for running app, call functions on start up
function masterControl() {
  insertProjectData();
  collapseNavBar();
}

$(masterControl);

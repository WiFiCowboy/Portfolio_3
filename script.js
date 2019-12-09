// Vanilla JS
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');


navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});

// jQuery DOM manipulation  
function collapseNav(){
    $('.nav-links').click(function(){
        $('ul').removeClass('active'); 
    });
};

function masterControl(){
    collapseNav();
};

$(masterControl);
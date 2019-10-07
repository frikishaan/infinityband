
$(document).ready(function () {

    $('.sidenav').sidenav();

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        duration: 250
    });
    setInterval(() => {
        $('.carousel').carousel('next');
    }, 4000);

    $('.modal').modal();
    $('.datepicker').datepicker();

    $('.scrollspy').scrollSpy();

});

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > window.innerHeight - 300 ||
        document.documentElement.scrollTop > window.innerHeight - 300
    ) {
        // document.getElementById("navbar").style.top = "0";
        document.getElementById("nav").classList.add("theme");
        document.getElementById("nav").classList.remove("transparent");
    } else {
        // document.getElementById("navbar").style.top = "-70px";
        document.getElementById("nav").classList.add("transparent");
        document.getElementById("nav").classList.remove("theme");
    }
}

const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

function showToast(msg) {
    M.toast({ html: msg, classes: 'green' });
}

// Scrolling effect
$(document).ready(function () {
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
});
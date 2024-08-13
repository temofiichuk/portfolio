
$(document).ready(function () {

    // MENU

    $(".open").on('click', function () {
        $(".menu").toggle(200);
        $(".menu-open").toggle(0);
        $(".menu-fixed").toggle(250);
    });

    $(".menu-close").on('click', function () {
        $(".menu").toggle(500);
        $(".menu-open, .menu-fixed").toggle(0);
    });

    // HOME-HEADER

    $(".open-driver").on('click', function () {
        $(".header").fadeIn(500);
        $(".home-gangways, .home-pass").fadeOut(1);
    });

    // HOME-PASS

    $(".open-pass").on('click', function () {
        $(".home-pass").fadeIn(500);
        $(".header, .home-gangways").fadeOut(1);
    });

    // HOME-GANGWAYS

    $(".open-gangways").on('click', function () {
        $(".home-gangways").fadeIn(500);
        $(".home-pass, .header").fadeOut(1);
    });

    // HOVER BLOCK

    $("#hover-one").on('mouseover', function () {
        $("#hover-pass").fadeIn(450);
        $("#hover-driver, #hover-gangways").fadeOut(0);
    });

    $("#hover-two").on('mouseover', function () {
        $("#hover-driver").fadeIn(450);
        $("#hover-gangways, #hover-pass").fadeOut(0);
    });

    $("#hover-three").on('mouseover', function () {
        $("#hover-gangways").fadeIn(450);
        $("#hover-driver, #hover-pass").fadeOut(0);
    });


    function visibilityName(a) {

        let i = a + " .name-location";

        $(a).on('mouseover', function () {
            $(i).css('visibility', 'visible');
        });

        $(a).on('mouseout', function () {
            $(i).css('visibility', 'hidden');
        });

        $(a).on('mousemove', function (e) {
            let pos = $(this).offset();
            let elemLeft = pos.left;
            let elemTop = pos.top;
            let Xinner = e.pageX - elemLeft - 50;
            let Yinner = e.pageY - elemTop - 65;
            $(i).css({
                'position': "absolute",
                'top': Yinner,
                'left': Xinner
            });
        });
    };

    visibilityName('.name-serbia');
    visibilityName('.name-moscow');
    visibilityName('.name-hungary');



});


function visibilityPoint(parent, child) {
    let allParent = document.querySelectorAll(parent);
    allParent.forEach((item, index) => {
        index++;
        item.addEventListener('mouseover', () => {
            let a = parent + ":nth-child(" + index + ") " + child;
            $(a).css('visibility', 'visible');
            item.addEventListener('mouseout', () => {
                $(a).css('visibility', 'hidden');
            });
        });
    });
};

visibilityPoint('.one', '.point-info');
visibilityPoint('.two', '.point-info');
visibilityPoint('.three', '.point-info');


$('.slider, .our').slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
});


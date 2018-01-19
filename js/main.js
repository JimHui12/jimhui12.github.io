(function($){
    "use strict";
    // Subpages resize    
    function subpages_resize() {
        var subpagesHeight = $('.pt-page-current').height();
        $(".subpages").height(subpagesHeight + 50);
    }

    // Portfolio subpage filters
    function protfolio_init() {
        var protfolio_grid = $('#portfolio_grid'),
        protfolio_filter = $('#portfolio_filters');

        if (protfolio_grid) {
            protfolio_grid.shuffle({
                speed: 450,
                itemSelector: 'figure'
            });

            $('.site-main-menu').on("click", "a", function (e) {
                protfolio_grid.shuffle('update');
            });

            protfolio_filter.on("click", ".filter", function (e) {
                protfolio_grid.shuffle('update');
                e.preventDefault();
                $('#portfolio_filters .filter').parent().removeClass('active');
                $(this).parent().addClass('active');
                protfolio_grid.shuffle('shuffle', $(this).attr('data-group') );
                setTimeout(function(){
                    subpages_resize();

                }, 500);
            });
        }
    }

    // Contact form validator
    $(function () {
        $('#contact-form').validator();

        $('#contact-form').on('submit', function (e) {
            if (!e.isDefaultPrevented()){
                var url = "contact_form/contact_form.php";

                $.ajax({
                    type: "POST",
                    url: url,
                    data: $(this).serialize(),
                    success: function (data)
                    {
                        var messageAlert = 'alert-' + data.type;
                        var messageText = data.message;

                        var alertBox = '<div class="alert ' + messageAlert + 'alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                        if (messageAlert && messageText) {
                            $('#contact-form').find('.messages').html(alertBox);
                            $('#contact-form')[0].reset();
                        }
                    }

                });
                return false;
            }
        });
    });

    // Hide Mobile menu
    function mobileMenuHide() {
        var windowWidth = $(window).width();
        if (windowWidth < 1024) {
            $('#site_header').addClass('mobile-menu-hide');
        }
    }

    //On Window load & Resize
    $(window)
    .on('load', function() { //Load
    // Animation on Page Loading
    $(".preloader").fadeOut("slow");

    // initializing page transition.
    var ptPage = $('.subpages');
    if (ptPage[0]) {
        PageTransition.init({
            menu: 'ul.site-main-menu',
        });
    }
})
.on('resize', function() { //Resize
mobileMenuHide();

setTimeout(function(){
    subpages_resize();
}, 500);
})
.scroll(function () {
    if ($(window).scrollTop() < 20 ) {
        $('.header').removeClass('sticked');
    } else {
        $('.header').addClass('sticked');
    }
})
.scrollTop(0);

// On Document Load
$(document).on('ready', function() {
    // Initialize Portfolio grid
    var $portfolio_container = $("#portfolio-grid");

    $portfolio_container.imageLoaded(function () {
        setTimeout(function(){
            protfolio_init(this);
        }, 500);
    })

    // Portfolio hover effect init
    $(' #portfolio_grid > figure ').each( function() { $(this).hoverdir(); } );

    // Blog grid init
    setTimeout(function(){
        var $container = $(".blog-masonry");
        $container.masonry();
    }, 500);

    // Mobile menu
    $('.menu-toggle').on("click", function () {
        $('#site_header').toggleClass('mobile-menu-hide');
    });

    


})








})
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













})
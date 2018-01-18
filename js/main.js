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

    















})
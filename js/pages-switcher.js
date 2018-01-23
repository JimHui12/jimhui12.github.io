/*
* Template Name: PRO Card - Material Resume / CV / vCard Template
* Author: lmpixels
* Author URL: http://themeforest.net/user/lmpixels
* Version: 1.0
*/

var PageTransitions = (function ($, options) {
    "use strict";
    var defaultStartPage = "home",
        sectionContainer = $(".subpages"),
        isAnimating = false,
        endCurrentPage = true,
        endNextPage = false,
        windowArea = $(window),
        animEndEventNames = {
            'WebkitAnimation'   : 'webkitAnimationEnd',
            'OnAnimation'       : 'oAnimationEnd',
            'msAnimation'       : 'MsAnimationEnd',
            'animation'         : 'animationend'
        },

        // animation end event name
        animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],

        // support css animations
        support = Modernizr.cssanimations;
    
    function init(options) {
        
        // Get all the .pt-page sections.
        $('.pt-page').each( function() {
            var $page = $(this);
            $page.data('originalClassList', $page.attr('class'));
        });

        // Get all the .pt-wrapper div which is the parent for all pt-div
        sectionContainer.each( function() {
            if (location.hash === "") {
                $('section[data-id]='+ pageStart + ']').addClass('pt-page-current');
            }
        });

        // Adding click event to main menu link
        $('.pt-trigger').on("click", function (e) {
            e.preventDefault();
            if (isAnimating) {
                return false;
            }
            var pageTrigger = $(this);
            
            activeMenuItem( pageTrigger );
            
            Animate( pageTrigger );
            
            location.hash = $(this).attr('href');
        
        });

        window.onhashchange = function(event) {
            if(location.hash) {
                if (isAnimating) {
                    return false;
                }
                var menuLink = $(menu+' a[href*="'+location.hash.split('/')[0]+'"]');
                activeMenuItem( menuLink );
                Animate(menuLink);

                ajaxLoader();
            }
        };

        var menu = options.menu,
        pageStart = getActiveSection();

        location.hash = pageStart;
        var menuLink = $(menu+' a[href*="'+location.hash.split('/')[0]+'"]');

        activeMenuItem(menuLink);

        Animate(menuLink);

        $('body').append('<div id="page-ajax-loader" class="page-ajax-loaded animated rotateInDownRight"></div>');
        ajaxLoader();
    }

    function getActiveSection() {
        if(location.hash === ""){
            return location.hash = defaultStartPage;
        }
        else {
            return location.hash;
        }
    }

    function activeMenuItem(item) {
        if ( !item ) {
            return false;
        }

        var navLink = $(item);
        navLink = navLink['0'];
        navLink = $(navLink.parentNode);

        if(navLink) {
            $('ul.site-main-menu li').removeClass('active');
            navLink.addClass('active');
        }
    }

    function ajaxLoader() {
        // Check for hash value in URL
        var ajaxLoadedContent = $('#page-ajax-loaded');

        function showContent() {
            ajaxLoadedContent.removeClass('rotateOutDownRight closed');
            ajaxLoadedContent.show();
            $('body').addClass('ajax-page-visible');
        }

        function hideContent() {
            $('#page-ajax-loaded').addClass('rotateOutDownRight closed');
            $('body').removeClass('ajax-page-visible');
            setTimeout(function(){
                $('#page-ajax-loaed.closed').html('');
                ajaxLoadedContent.hide();
            }, 500);
        }

    }


    

})
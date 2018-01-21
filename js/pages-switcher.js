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

    }


})
/**
 * Created by Ofir Nadav on 21-Dec-15.
 */
'use strict';

angular.module('myApp.gdSlimSlider', [])

.component('gdSlimSlider', {
    templateUrl: 'components/gd-slim-slider/gd-slim-slider.html',
    controller: function () {
        console.log('component: ggd-slim-slider');
        // remap jQuery to $
        (function($){})(window.jQuery);
        /*-----------------------------------------------------------------------------------*/
        /*  HOMEPAGE SLIDER - thanks to user Samich: http://jsfiddle.net/GPuh6/23/light/
        /*-----------------------------------------------------------------------------------*/

        $('.slider .slide:first').addClass('active').fadeIn(200);

        function rotate(index) {
            $('.slider .slide.active').removeClass('active').fadeOut(300, function() {
                $('.slider .slide:eq(' + index + ')').addClass('active').fadeIn(300);
            });
        }

        $('.slider-nav li a').click(function() {
            var index = $(this).parent().index('li');
            rotate(index);
            return false;
        });

        setInterval(function() {
            var $next = $('.slider .slide.active').next();

            if ($next.length == 0)
                $next = $('.slider .slide:first');

            rotate($next.index());
        }, 5000); //Control the timing in mseconds
    }
});
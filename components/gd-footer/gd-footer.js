/**
 * Created by Ofir Nadav on 21-Dec-15.
 */
'use strict';

angular.module('myApp.gdFooter', [])

.component('gdFooter', {
    templateUrl: 'components/gd-footer/gd-footer.html',
    controller: function () {
        console.log('component: gd-footer');
        /*-----------------------------------------------------------------------------------*/
        /*  FOOTER COPYRIGHT YEAR
        /*-----------------------------------------------------------------------------------*/
        var currentYear = (new Date).getFullYear();
        $('span.date').text(currentYear);
    }
});
'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pages/contact', {
    templateUrl: 'pages/contact/contact.html',
    controller: 'contactCtrl'
  });
}])

.controller('contactCtrl', [function() {
      console.log('contactCtrl');
      /*-----------------------------------------------------------------------------------*/
      /*  INPUT WATERMARKS (PLACEHOLDERS)
      /*-----------------------------------------------------------------------------------*/
      $('.jq_watermark').watermark();


      /*-----------------------------------------------------------------------------------*/
      /*  CONTACT FORM
       /*-----------------------------------------------------------------------------------*/
      $("#ajax-contact-form").submit(function() {
        var str = $(this).serialize();

        $.ajax({
          type: "POST",
          url: "includes/contact-process.php",
          data: str,
          success: function(msg) {
            // Message Sent? Show the 'Thank You' message
            if(msg == 'OK') {
              var result = '<div class="notification_ok">Your message has been sent. Thank you!</div>';
              //$("#fields").hide();
            } else {
              result = msg;
            }
            $('#note').html(result);
          }
        });
        return false;
      });
}]);
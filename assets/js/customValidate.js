$(document).ready(function() {
    $('.form-signin').validate({
       rules: {
           email: {
               required: true,
               email: true
           },
           password: {
               minlength: 6,
               required: true
           },
           keyid: {
               required: true
           },
           vcode: {
               required:true
           }
       },
        success: function(element){
            element.text("OK!").addClass('valid')
        }
    });
});
$(document).ready(function(){
    $('#contact-form').submit(function(event){
        event.preventDefault();

        var name  = $('#name').val();
        var email  = $('#email').val();
        var message  = $('#message').val();

        if(name === '' || email === '' || message === ''){
            $('#form-result').html(`
            <div class="alert alert-danger">
                    Please enter all inputs!
            </div>
            `);
        }else{
             $('#form-result').html(`
            <div class="alert alert-success">
                    Message sent, thank you
            </div>
            `);

             name  = $('#name').val('');
             email  = $('#email').val('');
             message  = $('#message').val('');
           
        }
    })
});
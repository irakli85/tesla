$(document).ready(function(){
    $('#showPassword').on('click', function(){
        const passwordForm = $('#password');
        const passwordFormType = passwordForm.attr('type');
        
        if(passwordFormType === "password"){
            passwordForm.attr('type', 'text')
            $(this).removeClass('bi-eye').addClass('bi-eye-fill')
        }else{
            passwordForm.attr('type', 'password')
            $(this).removeClass('bi-eye-fill').addClass('bi-eye')
        }
    })
})
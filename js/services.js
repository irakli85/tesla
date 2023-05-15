$(document).ready(function(){
    $('.card').on('mouseenter', function(){
        $(this).find('.card-title').css('color', '#675da9')
    })

    $('.card').on('mouseleave', function(){
        $(this).find('.card-title').css('color', '')
    })

    $('.col-md-4').on('mouseenter', function(){
        $(this).find('.card').css('box-shadow', 'rgba(0, 0, 0, 0.35) 0px 5px 15px')
    })

    $('.col-md-4').on('mouseleave', function(){
        $(this).find('.card').css('box-shadow', '')
    })

 
        
})
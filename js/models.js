$(document).ready( function(){
    $('.team-member').click( function(){
        // const memberId = $(this).data('member-id');
        const memberName = $(this).find('h2').text();
        const memberImg = $(this).find('img').attr('src');
        const memberDesc = $(this).find('p').text();

        $('#model-title').text(memberName);
        $('#model-image').attr('src', memberImg);
        $('#model-description').text(`Tesla ${memberName} , ${memberDesc}`);
        $('#model').fadeIn(300);
    });

    $('#close-btn, #model').click(function(event){
        if(event.target == this){
            $('#model').fadeOut(300);
        }
    })
})
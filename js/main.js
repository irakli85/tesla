

$(document).ready(function(){
    var SliderCurrent = $('.slider img');
    var CurrentIndex = 0;
    var SliderSpeed = 3000;

    function nextImage(){
        //deletes active classes
        SliderCurrent.eq(CurrentIndex).removeClass('active');

        //deletes current index
        CurrentIndex = (CurrentIndex + 1) % SliderCurrent.length;

        //შემდეგ ფოტოზე აქტიური კლასის დამატება
        SliderCurrent.eq(CurrentIndex).addClass('active');
    }

    setInterval(nextImage, SliderSpeed);

    const items = [
        {id: 1,
         src: './src/Icon4.svg',
         htext: 'Many Choices',
         ptext: 'For businesses, the tax credits are nonrefundable, so you cant get back more on the credit than you owe in taxes.' 
        },
        {id: 2, 
         src: './src/Icon5.svg',
         htext: 'Fast and On Time',
         ptext: 'Several government entities offer electric vehicle and solar incentives for customers, often taking the form of a rebate.' 
        },
        {id: 3,  
         src: './src/Icon6.svg',
         htext: 'Affordable Price',
         ptext: 'Incentives listed here are provided for your convenience only and should not be considered an absolute and complete list. '
        },
        {id: 4,
        src: './src/Icon4.svg',
        htext: 'Many Choices',
        ptext: 'For businesses, the tax credits are nonrefundable, so you cant get back more on the credit than you owe in taxes.' 
        },
        {id: 5, 
        src: './src/Icon5.svg',
        htext: 'Fast and On Time',
        ptext: 'Several government entities offer electric vehicle and solar incentives for customers, often taking the form of a rebate.' 
        },
        {id: 6,  
        src: './src/Icon6.svg',
        htext: 'Affordable Price',
        ptext: 'Incentives listed here are provided for your convenience only and should not be considered an absolute and complete list. '
        }
    ]

    items.forEach(item => {
        const itemCard = `
            <div class="item-class">            
                <img src='${item.src}'/>
                <h2>${item.htext}</h2>
                <p>${item.ptext}</p>
                <a href='#'>Read More</a>
            </div>
        `;
        $('.carousel').append(itemCard);
    })

    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    })
});


const close = document.getElementById('close');
const menuBar = document.getElementById('menu');
const menuBtn = document.getElementById('menuBtn');

function openMenu(){
    menuBar.classList.add('active');    
}

function closeMenu(){
    menuBar.classList.remove('active'); 
}

close.addEventListener("click", closeMenu);
menuBtn.addEventListener("click", openMenu);



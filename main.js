

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
         ptext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur accusamus quo modi totam dolorem. Perferendis ' 
        },
        {id: 2, 
         src: './src/Icon5.svg',
         htext: 'Fast and On Time',
         ptext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur accusamus quo modi totam dolorem. Perferendis ' 
        },
        {id: 3,  
         src: './src/Icon6.svg',
         htext: 'Affordable Price',
         ptext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur accusamus quo modi totam dolorem. Perferendis '
        },
        {id: 4,
            src: './src/Icon4.svg',
            htext: 'Many Choices',
            ptext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur accusamus quo modi totam dolorem. Perferendis ' 
           },
        {id: 5, 
        src: './src/Icon5.svg',
        htext: 'Fast and On Time',
        ptext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur accusamus quo modi totam dolorem. Perferendis ' 
        },
        {id: 6,  
        src: './src/Icon6.svg',
        htext: 'Affordable Price',
        ptext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur accusamus quo modi totam dolorem. Perferendis '
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
    // menuBar.style.transform = 'translateX(100%)';
}

close.addEventListener("click", closeMenu);
menuBtn.addEventListener("click", openMenu);



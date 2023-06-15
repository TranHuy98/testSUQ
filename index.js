


// //dropdown

$('.has-dropdown').click(function () { 
    if($('#dropdown').hasClass('dropdown-active')){
        $('#dropdown').removeClass('dropdown-active');
    }
    else{
        $('#dropdown').addClass('dropdown-active');
    }
});





// banner


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items:1,
    autoplay:true,
    autoplayTimeout: 10000,
    dots:true,
})

//end banner


//logo items render

let logoItems  = document.getElementById('logo-items');
let renderLogoItems = "";
for (let i=1;i<=17;i++){
    renderLogoItems += `<div class="logo-item">
    <img src="./assets/logo/logo${i}.png" alt="">
</div>`
};

logoItems.innerHTML = renderLogoItems;

//end logo items render



//offer
$('#service-tab-button').click(function(){
    $('#industries-tab-button').removeClass('offer-tab-active');
    $('#product-tab-button').removeClass('offer-tab-active');
    $(this).addClass('offer-tab-active');
    $('#service-tab').fadeIn(300);
    $('#service-tab').css('display','flex');
    $('#industries-tab').css('display','none');
    $('#product-tab').css('display','none');
});

$('#industries-tab-button').click(function(){
    $('#service-tab-button').removeClass('offer-tab-active');
    $('#product-tab-button').removeClass('offer-tab-active');
    $(this).addClass('offer-tab-active');
    $('#industries-tab').fadeIn(300);
    $('#industries-tab').css('display','flex');
    $('#service-tab').css('display','none');
    $('#product-tab').css('display','none');
});

$('#product-tab-button').click(function(){
    $('#service-tab-button').removeClass('offer-tab-active');
    $('#industries-tab-button').removeClass('offer-tab-active');
    $(this).addClass('offer-tab-active');
    $('#product-tab').fadeIn(300);
    $('#product-tab').css('display','flex');
    $('#industries-tab').css('display','none');
    $('#service-tab').css('display','none');
});
//end offer


//counter
const counters = document.querySelectorAll('.count-target');

const runTime = 500;

counters.forEach((counter) => {
    let start = 0;
    let end = Number(counter.getAttribute('data-target'));
    let duration = Math.floor(runTime/end);

    let display = setInterval(function(){
        start +=1;
        counter.innerHTML = start;
        if(start >= end){
            clearInterval(display);
        }
    }, duration);
});






//end counter
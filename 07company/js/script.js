
// header_Main
$(".navbar>ul>li").hover(function(){
    $(this).addClass("on");
},function(){
    $(this).removeClass("on");
});

// toggle
$(".toggle").click(function(){
    $(".navbarClone").css("left",0);
    $(".overlay").show();
})
$(".overlay").click(function(){
    $(".navbarClone").css("left","-100%");
    $(".overlay").hide();
});

// acco
$(".navbarClone>ul>li>a").click(function(e){
    e.preventDefault();

    $(".navbarClone>ul>li>a").parent().find(".tsubmenu").slideUp();
    if( $(this).hasClass("active") ){
        $(".navbarClone>ul>li>a").removeClass("active");
        
    }else{
        $(this).parent().find(".tsubmenu").slideDown();
        $(".navbarClone>ul>li>a").removeClass("active");
        $(this).addClass("active");
    }
})

// colorbox
$(".youtube").colorbox({
    iframe:true,innerWidth:700,innerHeight:394
})

// swiper_visualWrap
var swiper1 = new Swiper('.first', {
    
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {

        }
    }
        
    

  });

// #news_slide
setInterval(slideNum, 3000)

let num = 0;
function slideNum() {
    num++;
    if (num == 4) {
        num = 1;
        $(".newsImg").css("left", 0);
    }
    $(".newsImg").stop().animate({left: num * -310 }, 500)
}

// text#1
setInterval(slideNum1,3000)

let num1 = 0;
let view1 = 1;
function slideNum1(){
    num1++;
    if ( num1 == $(".slide_Text1>p").length){
        num1 = 0;
    }
    $(".slide_Text1>p").eq(num1).css({"z-index":view1++,opacity:0}).stop().animate({opacity:1},500)

}
// text#2
setInterval(slideNum2,3000)

let num2 = 0;
let view2 = 1;
function slideNum2(){
    num2++;
    if ( num2 == $(".slide_Text2>p").length){
        num2 = 0;
    }
    $(".slide_Text2>p").eq(num2).css({"z-index":view2++,opacity:0}).stop().animate({opacity:1},500)

}

// text#3
setInterval(slideNum3,3000)

let num3 = 0;
let view3 = 1;
function slideNum3(){
    num3++;
    if ( num3 == $(".slide_Text3>p").length){
        num3 = 0;
    }
    $(".slide_Text3>p").eq(num3).css({"z-index":view3++,opacity:0}).stop().animate({opacity:1},500)
}

// swiper_MENU

var swiper2 = new Swiper('.second', {
        
    slidesPerView:2,
    spaceBetween:10,
    loop:false,
    pagination:false,
    //     autoplay:{
    //     delay:3000,
    //     disableOnInteraction:false,
    // },

    // pagination:{
    //     el:".swiper-pagination",
    //     clickable:true,
    // },

    breakpoints: {
        768: {
            slidesPerView:4,
            spaceBetween:10,
            enabled:false,
        
        },
    },
});

// scroll_header

document.querySelector(".scroll").innerHTML = window.pageYOffset;

const scroll = document.querySelector(".scroll");
const header = document.querySelector("#header");

window.addEventListener("scroll",function(){
    let scrollY = window.pageYOffset;

    scroll.innerHTML = Math.floor(scrollY);

    if (scrollY == 0){
        header.setAttribute("style","background-color:transparent")
    }else{
        header.setAttribute("style","background-color:white")
    }

})

// swiper_card
var swiper3 = new Swiper('.third', {

    slidesPerView:1,
    spaceBetween:20,
    freeMode : false,
    loop:true,
    pagination:false,
    // centeredSlides:true,
    // autoplay:{
    //     delay:3000,
    //     disableOnInteraction:false,
    // }
    breakpoints: {
        768: {
        },
    },

      
    // pagination:{
    //     el:".swiper-pagination",
    //     clickable:true,
    // },

});

// top

$(window).scroll(function(){
    let scrollY = window.pageYOffset

    if($("body").height() / 3 < scrollY){
        $(".top").fadeIn();
    }else{
        $(".top").fadeOut();
    }
})
$(".top").click(function(){
    $("html,body").animate({scrollTop:0},300)
})












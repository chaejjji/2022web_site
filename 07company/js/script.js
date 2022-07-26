console.log("test");

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

// dom
// $(".dom").hover(function(){
//     $(this).addClass("on")
// },function(){
//     $(this).removeClass("on")
// })



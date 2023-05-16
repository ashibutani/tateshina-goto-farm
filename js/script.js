// $(function(){
//     $(".hm_menu").on("click",function(){
//         $(".sp_nav").slideToggle(300);
//         $(".hm_open, .hm_close").toggleClass("active");       

//     });
// });


// $(function () {
//     $(".sp_nav ul li a").on("click", function () {

//         $(".sp_nav").fadeOut();
//         $(".hm_open, .hm_close").toggleClass("active"); 
//     });
// });

$(function () {
    $(".hm_menu").on("click", function () {
        $(".sp_nav").slideToggle(300);
        $(".hm_menu span").toggleClass("active");

    });
});


$(function () {
    $(window).resize(function () {/*画面サイズが変更された時*/
        $(".sp_nav").css("display", "none");/*sp-nav-areaを消す*/
        $(".hm_menu span").removeClass("active");/*クラスactiveをつけるとボタンがななめになるので、クラスactiveを消す*/
    });
});
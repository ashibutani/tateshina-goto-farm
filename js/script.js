

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



const swiper = new Swiper(".swiper", {

    slidesPerView: 'auto', // コンテナ内に表示させるスライド数（CSSでサイズ指定する場合は 'auto'）
    spaceBetween: 24, // スライド間の余白（px）
    centeredSlides: true, // アクティブなスライドを中央に配置する


    loop: true,  // 無限ループさせる
    loopedSlides: 8,


    speed: 300, // スライドアニメーションのスピード（ミリ秒）


});


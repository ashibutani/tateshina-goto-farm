

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


//アコーディオンをクリックした時の動作
$('.title').on('click', function () {//タイトル要素をクリックしたら
    var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作

    if ($(this).hasClass('close')) {//タイトル要素にクラス名closeがあれば
        $(this).removeClass('close');//クラス名を除去し
    } else {//それ以外は
        $(this).addClass('close');//クラス名closeを付与
    }
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function () {
    $('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
    $(".open").each(function (index, element) {	//openクラスを取得
        var Title = $(element).children('.title');	//openクラスの子要素のtitleクラスを取得
        $(Title).addClass('close');				//タイトルにクラス名closeを付与し
        var Box = $(element).children('.box');	//openクラスの子要素boxクラスを取得
        $(Box).slideDown(500);					//アコーディオンを開く
    });
});

$(document).ready(function () {

    $('#form').submit(function (event) {
        var formData = $('#form').serialize();
        $.ajax({
            url: "https://docs.google.com/forms/hogehoge",
            data: formData,
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    $(".end-message").slideDown();
                    $(".submit-btn").fadeOut();
                    //window.location.href = "thanks.html";
                },
                200: function () {
                    $(".false-message").slideDown();
                }
            }
        });
        event.preventDefault();
    });

});


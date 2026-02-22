jQuery("#js-button-drawer").on("click", function () {
  jQuery(this).toggleClass("is-checked");
  jQuery("#js-drawer").slideToggle();
  jQuery("body").toggleClass("is-fixed");
});

// ハンバーガーメニュー内のリストをクリックしたらハンバーガーメニューを閉じる
jQuery(".header__nav-link").on("click", function () {
  jQuery("#js-button-drawer").removeClass("is-checked");
  jQuery("#js-drawer").slideUp();
  jQuery("body").removeClass("is-fixed");
});

//TOPへ戻るボタン
jQuery(window).scroll(function () {
  const position = jQuery(this).scrollTop();
  if (position > 300) {
    jQuery(".return-page-top").show(300);
  } else {
    jQuery(".return-page-top").hide(300);
  }
});

//スムーススクロール
jQuery('a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  let header = jQuery(".header").innerHeight();
  let speed = 800;
  let id = jQuery(this).attr("href");
  let target = jQuery("#" == id ? "html" : id);
  let position = jQuery(target).offset().top;
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed
  );
});

//カレント表示
$(function () {
  var set = 100; //ウインドウ上部からどれぐらいの位置で変化させるか
  var boxTop = new Array();
  var current = -1;
  //各要素の位置
  //position-nowは場所を取得したい対象の要素に付ける
  $(".position-now").each(function (i) {
    boxTop[i] = $(this).offset().top;
  });
  //最初の要素にclass="positiion-now"をつける
  changeBox(0);
  //スクロールした時の処理
  $(window).scroll(function () {
    scrollPosition = $(window).scrollTop();
    for (var i = boxTop.length - 1; i >= 0; i--) {
      if ($(window).scrollTop() > boxTop[i] - set) {
        changeBox(i);
        break;
      }
    }
  });
  //ナビの処理
  function changeBox(secNum) {
    if (secNum != current) {
      current = secNum;
      secNum2 = secNum + 1; //以下にクラス付与したい要素名と付与したいクラス名
      $(".header__nav-link").removeClass("link-current");

      //位置によって個別に処理をしたい場合
      if (current == 0) {
        $("#about_link_js").addClass("link-current");
        // 現在地がsection1の場合の処理
      } else if (current == 1) {
        $("#skill_link_js").addClass("link-current");
        // 現在地がsection2の場合の処理
      } else if (current == 2) {
        // 現在地がsection3の場合の処理
        $("#works_link_js").addClass("link-current");
      }
    }
  }
});
// //クリックしたリストの画像、タイトル、本文を取得してのモーダル表示
// $(".works__list-item").on("click", function (e) {
//   e.preventDefault(); //aタグの動作無効化
//   $(".dialog")[0].showModal(); //ダイアログ表示
//   //画像情報を取得
//   let img = $(this).find(".prizes__list-image").attr("src");
//   $(".dialog__img").children("img").attr("src", img);
//   //タイトル情報を取得
//   let title = $(this).find(".prizes__list-text").text();
//   $(title).remove("br");
//   $(".dialog__title").text(title);
//   //テキスト情報を取得
//   let text = $(this).find(".prizes__modal-text").html();
//   $(".dialog__text").html(text);
// });
// //ダイアログ閉じる
// $(".dialog__btn").on("click", function () {
//   $(".dialog")[0].close();
// });

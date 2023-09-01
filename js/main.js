$(function () {
  // 메인 슬라이드
  $(".mainVisual .slide").slick({
    dots: true,
    autoplay: true,
    arrows: true,

    pauseOnFocus: false,
    pauseOnHover: false,

    prevArrow: $("#prev"),
    nextArrow: $("#next"),
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    fade: true,
  });

  // 숫자입력칸 3자리 ,표시
  $("#amount").on("keyup", function () {
    $(this).val($(this).val().toLocaleString("ko-KR"));
  });

  // to_top 버튼
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 500) {
      $(".top_btn").addClass("on");
    } else {
      $(".top_btn").removeClass("on");
    }
    console.log(scrollTop);
  });

  $(".top_btn a").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      700
    );
    return false;
  });

  // 신청페이지 버튼 클릭시 미구현 되어있기에 경고창 표시
  $(".ch_req_btn button").on("click", function () {
    alert("현재 요청버튼에 submit 구현이 되어있지 않습니다.");
  });
});

let totalAmount = 0;

function addAmount(amount) {
  totalAmount += amount;
  updateMoney();
}

function resetAmount() {
  totalAmount = 0;
  updateMoney();
}

function updateMoney() {
  const amountInput = document.getElementById("amount");
  amountInput.value = totalAmount;
}

updateMoney();

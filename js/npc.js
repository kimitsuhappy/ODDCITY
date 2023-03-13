$(".nppc").mouseenter(
  function () {
    $(this).css("background-color", "#333");
    $(this).css("color", "white");
    $(this).text("使用者進來了喔!!!!!!!");
  }
)
$(".nppc").mouseleave(
  function () {
    $(this).css("background-color", "white");
    $(this).css("color", "#333");
    $(this).text("使用者移入了嗎?");
  }
)
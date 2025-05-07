$(document).ready(function () {
  $("iframe").each(function () {
    $(this).contents().find("#voc_block").remove();
    $("#voc_block").remove();
  });
});
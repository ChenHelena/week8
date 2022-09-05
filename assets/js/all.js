"use strict";

//navbar
$(function () {
  $(".navbar-toggler").on("click", function () {
    $(this).find(".fa-solid").toggleClass("d-none");
  });
});
$(function () {
  $(".searchBtn").on("click", function () {
    $(".navbar-show").toggleClass("d-none");
  });
});
$(function () {
  $(".navbar-return").on("click", function () {
    $(".navbar-show").toggleClass("d-none");
  });
});
//# sourceMappingURL=all.js.map

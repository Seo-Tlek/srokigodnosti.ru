(function () {
  var track = document.querySelector(".slider-track");
  if (!track) return;
  document.querySelectorAll("[data-dir]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var card = track.querySelector(".card");
      var gap = 16;
      var step = card ? card.getBoundingClientRect().width + gap : 286;
      track.scrollBy({ left: step * Number(btn.getAttribute("data-dir")), behavior: "smooth" });
    });
  });
})();

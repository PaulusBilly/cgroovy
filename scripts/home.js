$(document).ready(function () {
  var $inner = $("#curatedPicksList .curated-picks-inner");
  var $cards = $inner.children(".curated-pick");
  var cardWidth = 220;
  var gap = 30;
  var visibleCount = 3;
  var totalCards = $cards.length;
  var currentIndex = 0;

  $cards.css({
    "min-width": cardWidth + "px",
    "max-width": cardWidth + "px",
    flex: "0 0 " + cardWidth + "px",
  });

  function updateSlider(animate) {
    var offset = -(currentIndex * (cardWidth + gap));
    if (animate) {
      $inner.stop().animate({ "margin-left": offset + "px" }, 400, "swing");
    } else {
      $inner.css("margin-left", offset + "px");
    }
  }

  $(".curated-arrow-left").on("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider(true);
      updateArrows();
    }
  });
  $(".curated-arrow-right").on("click", function () {
    if (currentIndex < totalCards - visibleCount) {
      currentIndex++;
      updateSlider(true);
      updateArrows();
    }
  });

  function updateArrows() {
    $(".curated-arrow-left").prop("disabled", currentIndex === 0);
    $(".curated-arrow-right").prop(
      "disabled",
      currentIndex >= totalCards - visibleCount
    );
  }
  updateArrows();
  updateSlider(false);
});

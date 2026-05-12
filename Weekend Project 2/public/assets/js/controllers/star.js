document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");
  let currentRating = 0; // store current rating

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      const rating = index + 1;

      if (currentRating === rating) {
        // clicking the same star again clears the rating
        currentRating = 0;
      } else {
        currentRating = rating;
      }

      stars.forEach((s, i) => {
        if (i < currentRating) {
          s.classList.add("active");
          s.classList.remove("fa-regular");
          s.classList.add("fa-solid");
        } else {
          s.classList.remove("active");
          s.classList.remove("fa-solid");
          s.classList.add("fa-regular");
        }
      });
    });
  });
});

const video = document.querySelector(".video__player");
const play = document.querySelector(".video__controller--play");
const front = document.querySelector(".video__controller--front");
const back = document.querySelector(".video__controller--back");

play.addEventListener("click", function () {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

// volumeup.addEventListener("click", function () {
//   if (video.volume + 0.1 >= 1) {
//     video.volume = 1;
//   } else {
//     video.volume += 0.1;
//   }
// });

// volumedown.addEventListener("click", function () {
//   if (video.volume - 0.1 <= 0) {
//     video.volume = 0;
//   } else {
//     video.volume -= 0.1;
//   }
// });

front.addEventListener("click", function () {
  if (video.currentTime >= video.duration - 10) {
    video.currentTime = 0;
  } else {
    video.currentTime += 10;
  }
});

back.addEventListener("click", function () {
  if (video.currentTime <= 10) {
    video.currentTime = 0;
  } else {
    video.currentTime -= 10;
  }
});

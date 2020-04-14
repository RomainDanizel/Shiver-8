const video = document.querySelector(".video__player");
const play = document.querySelector(".video__controller--play");
const volumeup = document.querySelector(".video__controller--volumeup");
const volumedown = document.querySelector(".video__controller--volumedown");
const front = document.querySelector(".video__controller--front");
const back = document.querySelector(".video__controller--back");

play.addEventListener("click", function () {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

volumeup.addEventListener("click", function () {
  if (video.volume + 0.1 >= 1) {
    video.volume = 1;
  } else {
    video.volume += 0.1;
  }
});

volumedown.addEventListener("click", function () {
  if (video.volume - 0.1 <= 0) {
    video.volume = 0;
  } else {
    video.volume -= 0.1;
  }
});

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

function update(video) {
  const duration = video.duration;
  const time = video.currentTime;
  const fraction = time / duration;
  const percent = Math.ceil(fraction * 100);
  const progress = document.querySelector(".video__controller--progressbar");
  progress.style.width = percent + "%";
  progress.textContent = percent + "%";
}

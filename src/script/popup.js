let films = document.querySelectorAll(".poster");
let popup = document.querySelector(".popup");
for (let i = 0; i < films.length; i++) {
  let film = films[i];
  film.addEventListener("click", function () {
    popup.classList.toggle("is-open");
  });
}

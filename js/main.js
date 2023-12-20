//SCROLL TO TOP BTN

let scrollBtn = document.querySelector(".scroll-btn");

window.onscroll = function () {
  if (this.scrollY >= 400) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
};

scrollBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

//COPYRIGHT DATE

let year = document.getElementById("year");
let dateNow = new Date();

year.innerHTML = dateNow.getFullYear();

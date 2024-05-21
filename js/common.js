document.querySelector(".burger-menu").addEventListener("click", (e) => {
    e.target.classList.toggle("open");
    document.querySelector(".sidebar").classList.toggle("show-mob-menu");
  });
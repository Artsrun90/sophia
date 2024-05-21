document.querySelector(".burger-menu").addEventListener("click", (e) => {
  e.target.classList.toggle("open");
  document.querySelector(".sidebar").classList.toggle("show-mob-menu");
});

document.querySelectorAll('.js-drop').forEach(element => {
  element.addEventListener('click', () => {
    element.classList.toggle('open')
  })
});

document.querySelector('.sidebar-nav-item--right').addEventListener('click', (e) => {
  document.querySelector('.sidebar').classList.toggle('open')
});

document.querySelectorAll('.main-checkbox').forEach(main => {
  main.addEventListener('click', () => {
    const parent = main.closest('.table-responsive')
    const checkboxes =parent.querySelector('ul').querySelectorAll('.form-check-input')
    if (main.checked) {
      checkboxes.forEach(el => {el.checked = true});
    } else {
      checkboxes.forEach(el => {el.checked = false});      
    }
  })
});

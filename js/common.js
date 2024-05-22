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

const inputField = document.querySelector('.element-form');
const formInput = inputField.querySelector('input')
formInput.addEventListener('focus', () => {
  inputField.querySelector('i').style.display = 'none';
});

formInput.addEventListener('blur', () => {
  inputField.querySelector('i').style.display = 'block';
});

document.querySelectorAll('.sidebar-nav-item__txt').forEach(menItem => {
  menItem.addEventListener('click', () => {
    menItem.closest('ul').closest('li').querySelector('.js-drop').classList.remove('open')
    document.querySelector('.sidebar').classList.remove('open')
  })
});
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
    const checkboxes = parent.querySelector('ul').querySelectorAll('.form-check-input')
    if (main.checked) {
      checkboxes.forEach(el => { el.checked = true });
    } else {
      checkboxes.forEach(el => { el.checked = false });
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

$(document).ready(function () {
  const options = {
    placeholder: 'Product Description',
    tabsize: 2,
    height: 120,
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'underline', 'clear']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link', 'picture', 'video']],
      ['view', ['fullscreen', 'codeview', 'help']]
    ]
  }
  $('#summernote').summernote(options);
  $('#card-summernote').summernote(options);
});

const mainSwiper = new Swiper(".table-header-swiper", {
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 5,
    },
    640: {
      slidesPerView: 5,
    },
    760: {
      slidesPerView: 8,
    },
    1024: {
      slidesPerView: 12,
    },
    1600: {
      slidesPerView: 12,
    },
  }
});

const modalSwiper1 = new Swiper(".modal-swiper-1", {
  spaceBetween: 0,
  navigation: {
    nextEl: ".modal-swiper-1-button-next",
    prevEl: ".modal-swiper-1-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 5,
    },
    640: {
      slidesPerView: 5,
    },
    760: {
      slidesPerView: 8,
    },
    1024: {
      slidesPerView: 12,
    },
    1600: {
      slidesPerView: 12,
    },
  },
  on: {
    reachEnd: function () {
      document.querySelector('.modal-swiper-1').style.paddingRight = '30px';
    },
    fromEdge: function () {
      document.querySelector('.modal-swiper-1').style.paddingRight = '0';
    }
  }
});

['.tab-swiper-1', '.tab-swiper-2'].forEach(element => {
  new Swiper(element, {
    spaceBetween: 0,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      420: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 3,
      },
      760: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 6,
      },
      1600: {
        slidesPerView: 8,
      },
    }
  });
});
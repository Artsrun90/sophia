const tooltipTrigerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
tooltipTrigerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
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
  document.querySelector('.sidebar').classList.toggle('open');
  collapseSidebar();
});

document.querySelectorAll('.main-checkbox').forEach(main => {
  main.addEventListener('click', () => {
    main.classList.remove('childs-not-full-checked')
    const parent = main.closest('.table-responsive')
    const checkboxes = parent.querySelector('ul').querySelectorAll('.form-check-input')
    if (main.checked) {
      checkboxes.forEach(el => { el.checked = true });
    } else {
      checkboxes.forEach(el => { el.checked = false });
    }
  })
});

const inputForm = document.querySelector('.element-form');
const formInput = inputForm.querySelector('input')
formInput.addEventListener('focus', () => {
  inputForm.querySelector('i').style.display = 'none';
});

formInput.addEventListener('blur', () => {
  if (!formInput.value.trim()) {
    inputForm.querySelector('i').style.display = 'block';
  }
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

[1, 2, 3, 4].forEach(num => {
  console.log(num);
  new Swiper(`.modal-swiper-${num}`, {
    spaceBetween: 0,
    navigation: {
      nextEl: `.modal-swiper-${num}-button-next`,
      prevEl: `.modal-swiper-${num}-button-prev`,
    },
    breakpoints: {
      320: {
        slidesPerView: 4,
      },
      640: {
        slidesPerView: 4,
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
        document.querySelector(`.modal-swiper-${num}`).style.paddingRight = '30px';
      },
      fromEdge: function () {
        document.querySelector(`.modal-swiper-${num}`).style.paddingRight = '0';
      }
    }
  });
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

document.querySelector('.sidebar').addEventListener('mouseleave', (e) => {
  if (window.innerWidth > 1024) {
    collapseSidebar()   
  }
});

function collapseSidebar() {
  const openItems = document.querySelector('.sidebar').querySelectorAll('.open');
  openItems.forEach(item => item.classList.remove('open'));
}
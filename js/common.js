let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {
    container: 'body',
    trigger: 'hover'
  });
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
  // collapseSidebar();
  toggleSubMenu()
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

const tabs = document.querySelectorAll('.custom-tab-item')
tabs.forEach(el => {
  el.addEventListener('click', () => {
    tabs.forEach(e => e.classList.remove('active'));
    el.classList.add('active')
  })
});

document.querySelector('.sidebar').addEventListener('mouseleave', (e) => {
  if (window.innerWidth > 1024) {
    toggleSubMenu()
  }
});

document.querySelector('.sidebar').addEventListener('mouseenter', (e) => {
  if (window.innerWidth > 1024) {
    toggleSubMenu()
  }
});

function collapseSidebar() {
  const openItems = document.querySelector('.sidebar').querySelectorAll('.open');
  openItems.forEach(item => item.classList.remove('open'));
}

function toggleSubMenu() {
  const openItems = document.querySelector('.sidebar').querySelectorAll('.open');
  openItems.forEach(item => {
    const next = item.nextElementSibling;
    if (next.tagName.toLowerCase() === 'ul') {
      next.classList.toggle('toggle-sub-menu')
    }
  })

}

function initTabs() {
  document.querySelectorAll('.custom-tab-item').forEach(element => {
    element.addEventListener('click', () => {
      const contentId = element.closest('ul').getAttribute('data-tab-content')
      const tabId = element.getAttribute('data-content-id')
      const content = document.getElementById(contentId)
      content.querySelectorAll('.tab-pane').forEach(t => {
        t.classList.remove('active')
        t.classList.remove('show')
      });
      document.getElementById(tabId).classList.add('active')
      document.getElementById(tabId).classList.add('show')
    })
  });
}

initTabs()

$('.tree-view li').on('click', function (event) {
  const mainCheckbox = $(event.target).closest('.table-responsive').find('.main-checkbox')
  if (event.target.className == 'form-check-input') {
    $('.single-check').prop('checked', false)
    document.querySelectorAll('.form-check-input').forEach(element => {
      element.classList.remove('single-check')
    });
  } else {
    $('.single-check').prop('checked', false)
    document.querySelectorAll('.form-check-input').forEach(element => {
      element.classList.remove('single-check')
    });
    $('.tree-view li input:checked').prop('checked', false);
    $(this).find('input[type="checkbox"]').prop('checked', true);
    $(this).find('input[type="checkbox"]').addClass('single-check')
  }
  const notChecked = $(event.target).closest('.table-responsive').find('input[type="checkbox"]:not(:checked)')
  if (!mainCheckbox.prop('checked')) {
    mainCheckbox.addClass('childs-not-full-checked')
  } else {
    if (!notChecked.length) {
      mainCheckbox.removeClass('childs-not-full-checked')
    } else {
      mainCheckbox.addClass('childs-not-full-checked')
    }
  }
  mainCheckbox.prop('checked', true)
});


const dropdownInput = document.querySelector('.type-dropdown-input');
const dropdownList = document.querySelector('.type-dropdown-list');
const dropdownItems = document.querySelectorAll('.type-dropdown-item');
const clearIcon = document.querySelector('.type-icon-clear');

// Toggle dropdown list
dropdownInput.addEventListener('click', () => {
  dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
});

// Select item from dropdown
dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    dropdownInput.value = item.textContent;
    dropdownList.style.display = 'none';
  });
});

// Clear selected item
clearIcon.addEventListener('click', () => {
  dropdownInput.value = '';
});

// Close dropdown if clicked outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.type-dropdown-container')) {
    dropdownList.style.display = 'none';
  }
});

const selectModal = document.getElementById('selectModal')
document.getElementById('open-select-modal').addEventListener('click', () => {
  selectModal.classList.add('show')
  selectModal.style.display = 'block'
  selectModal.style.zIndex = '1060'
})

const body = document.querySelector('body')
document.querySelector('.close-select-modal').addEventListener('click', () => {
  selectModal.classList.remove('show')
  selectModal.style.display = 'none'
  selectModal.style.zIndex = '0'
})

document.querySelectorAll('.main-table-row').forEach(element => {
  element.addEventListener('dblclick', () => {
    const back = document.createElement('div')
    back.classList.add('modal-backdrop')
    back.classList.add('fade')
    back.classList.add('show')
    const modal = document.getElementById('cardModal')
    modal.querySelector('.close-cart-item-modal').addEventListener('click', () => {
      modal.classList.remove('show')
      modal.style.display = 'none'
      modal.style.zIndex = '0'
      document.querySelector('.modal-backdrop').remove()
      body.classList.remove('modal-open')
      body.style.overflow = 'visible'
      body.style.paddingRight = '0px'
    })
    modal.classList.add('show')
    modal.style.display = 'block'
    modal.style.zIndex = '1051'
    body.appendChild(back)
  })
});

document.querySelectorAll('.open-current-cart-modal').forEach(element => {
  element.addEventListener('click', () => {
    const modal = document.getElementById('cardItemModal')
    modal.querySelector('.close-cart-item-modal').addEventListener('click', () => {
      modal.classList.remove('show')
      modal.style.display = 'none'
      modal.style.zIndex = '0'
    })
    modal.classList.add('show')
    modal.style.display = 'block'
    modal.style.zIndex = '1052'

    initTabs()
  })
});
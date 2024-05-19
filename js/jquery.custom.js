const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function () {

  const leftTreeId = '#tree-view';
  const leftSortable = new TreeSortable({
    treeSelector: leftTreeId,
    maxLevel: 3
  });
  leftSortable.run();

  leftSortable.onSortCompleted(async (event, ui) => {
    const previous = ui.item[0].previousElementSibling
    if (
      (previous.classList.contains('branch-level-1') || previous.classList.contains('branch-level-2')) &&
      (ui.item[0].classList.contains('branch-level-2') || ui.item[0].classList.contains('branch-level-3'))
    ) {
      if (!previous.querySelector('.bi-caret-down-fill') && !arraysEqual(previous.classList, ui.item[0].classList)) {
        const button = document.createElement('button')
        button.classList.add('btn')
        button.classList.add('close-open')
        button.innerHTML = '<i class="bi bi-caret-down-fill"></i>'
        button.addEventListener('click', function () {
          const currentLi = this.closest('li');
          const parentUl = currentLi.parentElement;
          const currentLevelClass = Array.from(currentLi.classList).find(className => className.startsWith('branch-level-'));
        
          if (!currentLevelClass) {
            return; // если currentLevelClass не определен, выйти из функции
          }
        
          let isClosing = !button.classList.contains('opened');
          button.classList.toggle('opened', isClosing);
        
          // Функция для скрытия/показа дочерних элементов с сохранением состояния
          const toggleChildren = (liElement, hide) => {
            let nextSibling = liElement.nextElementSibling;
            while (nextSibling && !nextSibling.classList.contains('branch-level-1')) {
              if (hide) {
                // Сохранение текущего состояния видимости дочернего элемента
                if (!nextSibling.dataset.previousDisplay) {
                  nextSibling.dataset.previousDisplay = nextSibling.style.display || 'block';
                }
                nextSibling.style.display = 'none';
              } else {
                // Восстановление предыдущего состояния видимости дочернего элемента
                if (nextSibling.dataset.previousDisplay) {
                  nextSibling.style.display = nextSibling.dataset.previousDisplay;
                  delete nextSibling.dataset.previousDisplay;
                }
              }
              // Рекурсивное скрытие/показ дочерних элементов
              if (nextSibling.querySelector('.btn.close-open.opened')) {
                toggleChildren(nextSibling, hide);
              }
              nextSibling = nextSibling.nextElementSibling;
            }
          };
        
          toggleChildren(currentLi, isClosing);
        });
        
        previous.querySelector('.checkbox-area').prepend(button)
      }
    }
    document.querySelector('#tree-view').querySelectorAll('li').forEach(li => {
      const next = li.nextElementSibling
      if ((next && next.classList.contains('branch-level-1')) && (li.classList.contains('branch-level-1') || li.classList.contains('branch-level-2'))) {
        const btn = li.querySelector('.close-open')
        if (btn) {
          btn.remove()
        }
      }
    });
  });

  $('#tree-view li').on('click', function (event) {
    if (event.target.className == 'form-check-input') {
      $('.single-check').prop('checked', false)
    } else {
      $('#tree-view li input:checked').prop('checked', false);
      $(this).find('input[type="checkbox"]').prop('checked', true);
      $(this).find('input[type="checkbox"]').addClass('single-check')
    }
  });

  function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }  
    return true;
  }


  // document.querySelectorAll('.close-open').forEach(button => {
  //   button.addEventListener('click', function () {
  //     const currentLi = this.closest('li');
  //     const parentUl = currentLi.parentElement;
  //     const currentLevelClass = Array.from(currentLi.classList).find(className => className.startsWith('level-'));
  //     let foundNextLevel = false;

  //     for (let i = Array.from(parentUl.children).indexOf(currentLi) + 1; i < parentUl.children.length; i++) {
  //       const siblingLi = parentUl.children[i];
  //       if (siblingLi.classList.contains(currentLevelClass)) {
  //         foundNextLevel = true;
  //         break;
  //       }
  //       siblingLi.classList.toggle('hidden');
  //     }
  //   });
  // });


  //
  // $('#js-sidebar-toogler').on('click', function(){
  //   $('#js-sidebar').add('#js-layout').toggleClass('open')
  // })

  //
  // $('.js-drop').on('click', function(e){
  //   e.preventDefault();
  //   if ($(this).hasClass('open')){
  //     $(this).removeClass('open');
  //     $(this).next('ul').slideUp(200);
  //   } else{
  //     $('.js-drop.open').next('ul').slideUp(200);
  //     $('.js-drop.open').removeClass('open');
  //     $(this).addClass('open');
  //     $(this).next('ul').slideDown(200);
  //   }   
  // })
});
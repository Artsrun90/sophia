$('.property-row').on('click', function (event) {
    const mainCheckbox = $(event.target).closest('.tab-pane').find('.main-checkbox')
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
      $('.property-row span input:checked').prop('checked', false);
      $(this).find('input[type="checkbox"]').prop('checked', true);
      $(this).find('input[type="checkbox"]').addClass('single-check')
    }
    const notChecked = $(event.target).closest('.tab-pane').find('input[type="checkbox"]:not(:checked)')
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

  document.querySelectorAll('.main-checkbox').forEach(main => {
    main.addEventListener('click', () => {
      main.classList.remove('childs-not-full-checked')
      const parent = main.closest('.tab-pane')
      const checkboxes = parent.querySelectorAll('.form-check-input')
      if (main.checked) {
        checkboxes.forEach(el => { el.checked = true });
      } else {
        checkboxes.forEach(el => { el.checked = false });
      }
    })
  });
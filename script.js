document.addEventListener('DOMContentLoaded', () => {
  const orderForm = document.getElementById('orderForm');
  const successMessage = document.getElementById('successMessage');

  if (orderForm) {
    orderForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let isValid = true;
      const requiredInputs = orderForm.querySelectorAll('[required]');

      requiredInputs.forEach((input) => {
        const formGroup = input.closest('.form-group');

        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('invalid');
          if (formGroup) formGroup.classList.add('has-error');
        } else {
          input.classList.remove('invalid');
          if (formGroup) formGroup.classList.remove('has-error');
        }
      });

      if (isValid) {
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Надсилання...';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Надіслати заявку';
          
          orderForm.reset();
          successMessage.style.display = 'block';

          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 5000);
        }, 1000);
      }
    });

    orderForm.querySelectorAll('input, select, textarea').forEach((element) => {
      element.addEventListener('input', () => {
        const formGroup = element.closest('.form-group');
        element.classList.remove('invalid');
        if (formGroup) formGroup.classList.remove('has-error');
      });
    });
  }
});
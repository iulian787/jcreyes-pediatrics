const body = document.body;
const navToggle = document.querySelector('.nav-toggle');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdown = document.querySelector('.dropdown');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (dropdownToggle && dropdown) {
  dropdownToggle.addEventListener('click', (event) => {
    if (window.innerWidth <= 900) {
      event.preventDefault();
      const isOpen = dropdown.classList.toggle('open');
      dropdownToggle.setAttribute('aria-expanded', String(isOpen));
    }
  });
}

const appointmentForm = document.querySelector('#appointment-form');

if (appointmentForm) {
  const successPanel = document.querySelector('.form-success');

  const showError = (id, message) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = message;
    el.style.display = message ? 'block' : 'none';
  };

  const normalizePhone = (value) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length !== 10) return null;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  appointmentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let hasError = false;
    const parentName = appointmentForm.querySelector('[name="parentName"]').value.trim();
    const childName = appointmentForm.querySelector('[name="childName"]').value.trim();
    const phone = appointmentForm.querySelector('[name="phone"]').value.trim();
    const email = appointmentForm.querySelector('[name="email"]').value.trim();
    const preferred = appointmentForm.querySelector('[name="preferredTime"]').value.trim();
    const message = appointmentForm.querySelector('[name="message"]').value.trim();

    showError('error-parent', '');
    showError('error-phone', '');
    showError('error-preferred', '');

    if (!parentName) {
      showError('error-parent', 'Please enter the parent or guardian name.');
      hasError = true;
    }

    const normalizedPhone = normalizePhone(phone);
    if (!normalizedPhone) {
      showError('error-phone', 'Please enter a 10-digit phone number.');
      hasError = true;
    }

    if (!preferred) {
      showError('error-preferred', 'Please share your preferred day/time.');
      hasError = true;
    }

    if (hasError) return;

    const payload = {
      parentName,
      childName: childName || null,
      phone: normalizedPhone,
      email: email || null,
      preferredTime: preferred,
      message,
      submittedAt: new Date().toISOString(),
    };

    console.log('Appointment request:', payload);

    appointmentForm.reset();
    if (successPanel) {
      successPanel.style.display = 'block';
      successPanel.focus();
    }
  });
}

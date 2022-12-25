const contactFormEl = document.querySelector('.login-form');

contactFormEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {};
  for (let i = 0; i < contactFormEl.elements.length; i++) {
    const input = contactFormEl.elements[i];
    if (input.name) {
      formData[input.name] = input.value;
    }
  }

  if (formData.email && formData.password) {
    console.log(formData);
    contactFormEl.reset();
  } else {
    alert('Усі поля повинні бути заповнені');
  }
});
const formRef = document.querySelector('form.login-form');

formRef.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  const {
    elements: { email, password },
  } = event.currentTarget;
  const form = { email: email.value, password: password.value };

  event.preventDefault();

  if (email.value === '' || password.value === '') {
    return alert(`Заповніть полe ${email.value === '' ? 'Email' : 'Password'}`);
  }

  console.log(form);
  event.currentTarget.reset();
}

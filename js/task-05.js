const userNameInputEl = document.querySelector('#name-input');
const userNameOutputEl = document.querySelector('#name-output');

userNameInputEl.addEventListener('input', () => { 
    if (userNameOutputEl.textContent = userNameInputEl.value) {
        return;
    } else {
        userNameOutputEl.textContent =  "Anonymous";
    }
});
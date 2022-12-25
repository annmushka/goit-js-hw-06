
  const inputElement = document.querySelector('#font-size-control');
  const spanElement = document.querySelector('#text');

  inputElement.addEventListener('input', function() {
    
    spanElement.style.fontSize = this.value + 'px';
  });

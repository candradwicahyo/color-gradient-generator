window.onload = () => {
  
  const box = document.querySelector('.color-box');
  const input = document.querySelector('.input');
  
  function colorGradientGenerator() {
    let string = 'abcdef0123456789';
    let degree = Math.floor((Math.random() * 360) + 1);
    let hex1 = getHexCode(string);
    let hex2 = getHexCode(string);
    
    box.style.background = putValue(degree, hex1, hex2);
    input.value = putValue(degree, hex1, hex2, true);
  }
  
  colorGradientGenerator();
  
  function getHexCode(param) {
    let string = '#';
    for (let i = 0; i < 6; i++) {
      string += param[Math.floor(Math.random() * param.length)];
    }
    return string.toUpperCase();
  }
  
  function putValue(degree, hex1, hex2, show = false) {
    return `${(show == true) ? 'background: ' : ''}linear-gradient(${degree}deg, ${hex1}, ${hex2})`;
  }
  
  function sweetalert(icon, title, text) {
    return swal.fire ({
      icon: icon,
      title: title,
      text: text
    });
  }
  
  const generateButton = document.querySelector('.generate');
  generateButton.addEventListener('click', colorGradientGenerator);
  
  function copy() {
    const copyButton = document.querySelector('.copy');
    copyButton.addEventListener("click", () => {
      input.select();
      document.execCommand("copy");
      sweetalert('success', 'Success :)', 'code has been copied!');
    });
  }
  
  copy();
  
}
const button = document.querySelector('.btn');
const text = document.querySelector('.text');
const container = document.querySelector('.container');
text.style.border = "transparent";

button.addEventListener('click', handler);

function handler() {
    text.classList.toggle('open');
    if (text.classList.contains('open') == false) {
        document.title = "none";
        setTimeout(() => {
            text.style.border = "transparent";
        }, 500); 
    } else {
        text.style.border = "1px solid rgba(199, 206, 211, 0.993)";
    }
}



container.addEventListener('mouseenter', () => {
    // Устанавливаем границу при наведении
    container.style.border = '1px dashed rgb(56, 55, 55)';

    // Через 1 секунду убираем границу
    setTimeout(() => {
        container.style.border = '0';
    }, 400);
});
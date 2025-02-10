const progress = document.getElementById('progress');
const form = document.getElementById('form');
const input = document.querySelector('input');
const btnSend = document.getElementById('send');



function uploadFile(e) {
    let xhr = new XMLHttpRequest(); // создаём переменную
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload'); ///инициализируем запрос
    let percent = (input.files[0].size) / 100;
    xhr.upload.onprogress = function (event) {
        /// console.log(`Отправлено ${event.loaded} из ${event.total} байт`);
        progress.value = (Math.round(event.loaded / percent)) / 100;
    };
    xhr.send(input.files[0]);///отправляем запрос
    e.preventDefault();
}

form.addEventListener('submit', uploadFile);
window.addEventListener('input', event => { /*добавляем обработчик события input на window*/
    console.log(event.target.value); /*здесь через fetch можно отправлять данные себе на сервер*/
}, {capture: true})
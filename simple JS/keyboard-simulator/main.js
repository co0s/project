document.addEventListener('DOMContentLoaded', event => {
    const input = document.getElementById('kb-input') /*получаем дом Элемент с инпутом*/
    const expectedString = 'qwerty' /*та строка которую мы ожидаем получить*/

    input.addEventListener('keypress', event => { /*регистриркем событие нажатия на кнопку в инпуте*/
        const newValue = event.target.value + event.key;
        if (newValue === expectedString){
            alert('вы закончили упражнение');
        } else if (!expectedString.startsWith(newValue)) {
            event.preventDefault(); /*предотвращаем ввод неверного символа*/
        }
    })
})
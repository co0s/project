document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.querySelector('.js-open-modal');
    const modal = document.querySelector(openButton.dataset.target) /*выбирает дата атрибут , то есть обращение к дата атрибуту с тегом таргет*/

    openButton.addEventListener('click', () => {
        modal.style.display = 'block'/*добавляем сласс*/
    })

    modal.querySelector('.modal-dialog').addEventListener('click', event => {
        // event.stopPropagation() /*можно кликать внутри окна*/
        event._isClickWithModal = true /*устанавливаем флаг/*/
    })

    modal.addEventListener('click', event => {
        if (event._isClickWithModal) return /*проверяем флаг если есть то ничего не делаем*/
        modal.style.display = 'none' /*тоже стили*/
    })

})


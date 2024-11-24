const form = document.getElementById('myForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const middleName = document.getElementById('middleName').value;

    const fullName = `${lastName} ${firstName} ${middleName}`;
    const formattedFullName = formatName(fullName);

    resultDiv.insertAdjacentHTML('beforeend', `<p>${formattedFullName}</p>`);

    // Очистка полей формы
    form.reset();
});

function formatName(name) {
    const allowedChars = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя- ';
    let formattedName = '';

    for (let i = 0; i < name.length; i++) {
        if (allowedChars.includes(name[i].toLowerCase())) {
            formattedName += i === 0 ? name[i].toUpperCase() : name[i].toLowerCase();
        }
    }

    return formattedName.trim().replace(/\s+/g, ' ').replace(/^-|-$/g, '');
}

// Обработчик события blur для всех полей ввода
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('blur', () => {
        input.value = formatName(input.value);
    });
});
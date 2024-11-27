export function render(data) {
    const container = document.createElement('div')
    container.classList = ('container','py-4')
    container.innerHTML = `
    <h1>детальная информация ${data.title}</>
    <img src="./image.png" alt="${data.name}" style="max-width: 300px">
    <p class="lead">${data.description}</p>
    <p class="display-3">${data.price}</p>
    `
    return container
}

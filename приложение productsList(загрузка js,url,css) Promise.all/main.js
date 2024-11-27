const cssPromises = {}

function loadResource(src) { //src здесь это то что будем грузить
    //JS module
    if (src.endsWith('.js')) {
        return import(src)
    }
    //CSS 
    if (src.endsWith('.css')) {
        if (!cssPromises[src]) {
            const link = document.createElement('link')
            link.rel = 'stylesheet'
            link.href = src //ссылка это то что пришло из src
            cssPromises[src] = new Promise(resolve => {
                link.addEventListener('load', () => resolve())
            })
            document.head.append(link)
        }
        return cssPromises[src]
    }
    //данные сервера
    return fetch(src).then(res => res.json())
}

const appContainer = document.getElementById('app')
const searchParams = new URLSearchParams(location.search)

const productId = searchParams.get('productId')

function renderPage(moduleName, apiUrl, css) {
    Promise.all([moduleName, apiUrl, css].map(src => loadResource(src)))
        .then(([pageModule, data]) => {
            appContainer.innerHTML = ''
            appContainer.append(pageModule.render(data))
             console.log(data);
        })
}

// async function renderPage (moduleName, apiUrl, css) {  //то же самое что и Promise только через async/await
//     const [pageModule, data] = await Primise.all(
//         [moduleName, apiUrl, css].mao(src => loadResource(src))
//     )
//     appContainer.innerHTML = ''
//     appContainer.append(pageModule.render(data))
// }


if (productId) {
    //загрузка детальной страницы
    renderPage(
        './product-details.js',
        `https://api.escuelajs.co/api/v1/products/${productId}`,
        'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
    )
} else {
    renderPage(
        './product-list.js',
        'https://api.escuelajs.co/api/v1/products',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
    )
}

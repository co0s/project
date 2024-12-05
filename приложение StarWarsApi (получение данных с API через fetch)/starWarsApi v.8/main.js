const cssPromises = {}

export function loadResource(src) {
    //js
    if (src.endsWith('.js')) {
        return import(src)
    }
    //css
    if (src.endsWith('.css')) {
        if (!cssPromises[src]) {
            const link = document.createElement('link')
            link.rel = 'stylesheet'
            link.href = src
            cssPromises[src] = new Promise(resolve => {
                link.addEventListener('load', () => resolve())
            })
            document.head.append(link)
        }
        return cssPromises[src]
    }
    //src
    return fetch(src).then(res => res.json())
}

const appContainer = document.getElementById('app')
const searchParams = new URLSearchParams(location.search) //получаем данные из адресной строки
const filmId = searchParams.get('filmId')

function renderPage(moduleName, apiUrl, css) {
    Promise.all([moduleName, apiUrl, css].map(src => loadResource(src)))
        .then(([pageModule, data]) => {
            // let planets = data.planets
            // let species = data.species

            // if(planets && species) {
            //     const planetsArr = Promise.all(planets.map((src) => loadResource(src)))

            //     const speciesArr = Promise.all(species.map((src) => loadResource(src)))

            //     Promise.all([planetsArr, speciesArr]).then(([planets, species]) => {
            //         appContainer.innerHTML =  ""
            //         appContainer.append(pageModule.render(data, planets, species))
            //     })
            // }
            appContainer.innerHTML = ''
            appContainer.append(pageModule.render(data))
        })
}


if (filmId) {
    //загрузка детальной страницы
    renderPage(
        './films-details.js',
        `https://swapi.dev/api/films/${filmId}`,
        'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
    )
} else {
    renderPage(
        './films-list.js',
        'https://swapi.dev/api/films/',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
    )
}


// window.addEventListener('popstate', () => {
//     renderPage(
//         filmId ? './films-details.js' : './films-list.js',
//         filmId ? `https://swapi.dev/api/films/${filmId}` : 'https://swapi.dev/api/films/',
//         'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
//     )
// })




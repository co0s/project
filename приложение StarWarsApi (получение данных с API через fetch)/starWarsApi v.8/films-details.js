export function render(data) {

    console.log(data);
    const episodeMap = {
        1: 'IV',
        2: 'V',
        3: 'VI',
        4: 'I',
        5: 'II',
        6: 'III',
    }
    const container = document.createElement('div')
    container.classList.add('container', 'py-4')
    const appContainer = document.getElementById('app')

    if (data.episode_id === 4) {
        appContainer.style.backgroundImage = 'url(img/ep4.jpg)'
    }
    if (data.episode_id === 5) {
        appContainer.style.backgroundImage = 'url(img/ep5.webp)'
    }
    if (data.episode_id === 6) {
        appContainer.style.backgroundImage = 'url(img/ep6.jpg)'
    }
    if (data.episode_id === 1) {
        appContainer.style.backgroundImage = 'url(img/ep1.jpeg)'
    }
    if (data.episode_id === 2) {
        appContainer.style.backgroundImage = 'url(img/ep2.jpg)'
    }
    if (data.episode_id === 3) {
        appContainer.style.backgroundImage = 'url(img/ep3.webp)'
    }


    container.innerHTML = ""

    const blockWrapper = document.createElement('div')
    blockWrapper.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'white')




    const titleEpisode = document.createElement('h1')
    titleEpisode.textContent = `${episodeMap[data.episode_id]} ${data.title}`
    titleEpisode.classList.add('white')



const wrapperHeader = document.createElement('div')
wrapperHeader.classList.add('d-flex', 'justify-content-between')



    const wrapperFilmDirector = document.createElement('div')

    const filmDirectorText = document.createElement('h5')
    filmDirectorText.textContent = 'Director:'
    filmDirectorText.classList.add('white')
    const filmDirectorData = document.createElement('p')
    filmDirectorData.textContent = data.director
    filmDirectorData.classList.add('grey')
  
 const wrapperFilmProducer = document.createElement('div')

    const filmProducerText = document.createElement('h5')
    filmProducerText.textContent = 'Producer:'
    filmProducerText.classList.add('white')
    const filmProducerData = document.createElement('p')
    filmProducerData.textContent = data.producer
    filmProducerData.classList.add('grey')



    const wrapperFilmRelease = document.createElement('div')

    const filmReleaseText = document.createElement('h5')
    filmReleaseText.textContent = 'Release:'
    filmReleaseText.classList.add('white')
    const filmReleaseData = document.createElement('p')
    filmReleaseData.textContent = data.release_date
    filmReleaseData.classList.add('grey')




    const btnBack = document.createElement('a')
    btnBack.classList.add('btn', 'btn-primary')
    btnBack.textContent = 'Back to episodes'
    btnBack.href = '/'

    const descr = document.createElement('p')
    descr.classList.add('text-size', 'grey')
    descr.textContent = `${data.opening_crawl}`

    const itemsWrapper = document.createElement('div')
    itemsWrapper.classList.add('d-flex', 'justify-content-between')


    const wrapperPlanets = document.createElement('div')

    const titlePlanets = document.createElement('h5')
    titlePlanets.textContent = 'Planets:'
    titlePlanets.classList.add('white')

    const loadingPlanets = document.createElement('p')
    loadingPlanets.classList.add('planets-list', 'text-size')
    loadingPlanets.textContent = 'Loading...'
    loadingPlanets.classList.add('grey')


    const wrapperCharacters = document.createElement('div')

    const titleCharacters = document.createElement('h5')
    titleCharacters.textContent = 'Characters:'
    titleCharacters.classList.add('white')
   

    const loadingCharacters = document.createElement('p')
    loadingCharacters.classList.add('characters-list', 'text-size')
    loadingCharacters.textContent = 'Loading...'
    loadingCharacters.classList.add('grey')


    const wrapperVehicles = document.createElement('div')


    const titleVehicles = document.createElement('h5')
    titleVehicles.textContent = 'Vehicles:'
    titleVehicles.classList.add('white')

    const loadingVehicles = document.createElement('p')
    loadingVehicles.classList.add('vehicles-list', 'text-size')
    loadingVehicles.textContent = 'Loading...'
    loadingVehicles.classList.add('grey')


    const wrapperStarships = document.createElement('div')

    const titleStarships = document.createElement('h5')
    titleStarships.textContent = 'Starships:'
    titleStarships.classList.add('white')

    const loadingStarships = document.createElement('p')
    loadingStarships.classList.add('starships-list', 'text-size')
    loadingStarships.textContent = 'Loading...'
    loadingStarships.classList.add('grey')


    const wrapperSpecies = document.createElement('div')

    const titleSpecies = document.createElement('h5')
    titleSpecies.textContent = 'Species:'
    titleSpecies.classList.add('white')

    const loadingSpecies = document.createElement('p')
    loadingSpecies.classList.add('species-list', 'text-size')
    loadingSpecies.textContent = 'Loading...'
    loadingSpecies.classList.add('grey')


    blockWrapper.append(titleEpisode)

    wrapperPlanets.append(titlePlanets, loadingPlanets)
    wrapperSpecies.append(titleSpecies, loadingSpecies)
    wrapperCharacters.append( titleCharacters, loadingCharacters)
    wrapperVehicles.append(titleVehicles, loadingVehicles)
    wrapperStarships.append(titleStarships, loadingStarships)

    wrapperFilmDirector.append(filmDirectorText, filmDirectorData)
    wrapperFilmProducer.append(filmProducerText, filmProducerData)
    wrapperFilmRelease.append(filmReleaseText, filmReleaseData)

wrapperHeader.append(wrapperFilmDirector, wrapperFilmProducer, wrapperFilmRelease)

    itemsWrapper.append(wrapperPlanets, wrapperSpecies, wrapperCharacters, wrapperVehicles, wrapperStarships)
    container.append(blockWrapper, titleEpisode, wrapperHeader, descr, itemsWrapper)
    appContainer.append(btnBack)


    //     container.innerHTML =
    //         `
    //  <div class='d-flex justify-content-between align-items-center'>
    //      <h1>${episodeMap[data.episode_id]} ${data.title}</h1>
    //     <a href ='?' class='btnBack btn btn-primary'>Back to episodes</a>
    //  </div>
    //  <p class="lead">${data.opening_crawl}</p>
    //  <h2>Planets:</h2>
    //  <p class="lead planets-list">Loading...</p>
    //  <h2>Species in the episode:</h2>
    //  <p class="lead species-list">Loading...</p>
    //  `

    const planetPromises = data.planets.map(planetApi => fetch(planetApi).then(res => res.json()));
    const speciePromises = data.species.map(specieApi => fetch(specieApi).then(res => res.json()));
    const characterPromises = data.characters.map(characterApi => fetch(characterApi).then(res => res.json()));
    const vehiclePromises = data.vehicles.map(vehicleApi => fetch(vehicleApi).then(res => res.json()));
    const starshipPromises = data.starships.map(starshipApi => fetch(starshipApi).then(res => res.json()));

    // Объединяем оба массива промисов
    Promise.all([...planetPromises, ...speciePromises, ...characterPromises, ...vehiclePromises, ...starshipPromises ])
        .then(results => {
            // Разделяем результаты на планеты и виды
            const planets = results.slice(0, planetPromises.length);
            const species = results.slice(speciePromises.length);
            const characters = results.slice(characterPromises.length);
            const vehicles = results.slice(vehiclePromises.length);
            const starships = results.slice(starshipPromises.length);


            // Обновляем список планет
            document.querySelector('.planets-list').innerHTML = '';
            planets.forEach(planet => {
                document.querySelector('.planets-list').innerHTML += `${planet.name} <br>`;
            });

            // Обновляем список видов
            document.querySelector('.species-list').innerHTML = '';
            species.forEach(specie => {
                document.querySelector('.species-list').innerHTML += `${specie.name} <br>`;
            });

            // Обновляем список героев
            document.querySelector('.characters-list').innerHTML = '';
            characters.forEach(character => {
                document.querySelector('.characters-list').innerHTML += `${character.name} <br>`;
            });

            // Обновляем список машин
            document.querySelector('.vehicles-list').innerHTML = '';
            vehicles.forEach(vehicle => {
                document.querySelector('.vehicles-list').innerHTML += `${vehicle.name} <br>`;
            });

            // Обновляем список кораблей
            document.querySelector('.starships-list').innerHTML = '';
            starships.forEach(starship => {
                document.querySelector('.starships-list').innerHTML += `${starship.name} <br>`;
            });




        })
        .catch(error => {
            console.error('Ошибка:', error);
        });



    // btnBack.addEventListener('click', (e) => {
    //     e.preventDefault()
    //     window.history.back
    //     renderPage(
    //         './films-list.js',
    //         'https://swapi.dev/api/films/',
    //         'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
    //     )
    // })
    return container
}







// Promise.all(
//     [
//         './film-details.js',
//         `https://swapi.dev/api/films/${filmId}`,
//         'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
//     ].map((src) => loadResource(src))
// ).then(([pageModule, data]) => {
//     Promise.all(
//         [...data.planets, ...data.species].map((src) = loadResource(src))
//     ).then((arr) => {
//         appContainer.innerHTML = ''
//         const container = pageModule.render(
//             data,
//             arr.slice(0, data.planets.length),
//             arr.slice(data.species.length)
//         )
//         appContainer.append(container)
//     })
// })







// Promise.all([data.planets].map((src) => loadResource(src)))
// .then((arr) => {
//     let planets = arr.slice(0, data.planets.length)
//     for(const planet of planets)
//         console.log(planet);
//     const listPlanets = document.createElement('li')
//     const linkPlanets = document.createElement('a')
//     linkPlanets.textContent = planets.name
//     listPlanets.append(linkPlanets)
//     itemPlanets.append(listPlanets)

// })


// container.append(title, planetsTitle, speciesTitle)

// return container

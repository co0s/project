export function render(data) {

    const episodeMap = {
        1: 'IV',
        2: 'V',
        3: 'VI',
        4: 'I',
        5: 'II',
        6: 'III',
    }


    const container = document.createElement('div')
    container.classList.add(
        'd-flex',
        'justify-content-between',
        'flex-wrap',
        'py-4',
        'bgi',
        'pa'
    )


    
    // for (const film of data.results) {

    data.results.forEach((film, index) => {
        // const ul = document.createElement('ul')
        // ul.textContent = 'asd'
        // ul.classList.add('ul')
        
        const filmCard = document.createElement('ul')

        const li = document.createElement('li')
        li.classList.add('li')

        const title = document.createElement('h5')
        const descr = document.createElement('p')
        const detailsBtn = document.createElement('a')
        detailsBtn.classList = ('detailsBtn')

        // const image = document.createElement('img')
        // const cardBody = document.createElement('div')
        



        // filmCard.style.width = '18%'
        // filmCard.classList.add('card', 'my-2')
        // image.classList.add('card-img-top')
        // cardBody.classList.add('card-body', 'bgt')
        title.classList.add('card-title')
        descr.classList.add('card-text')
        // detailsBtn.classList.add('btn', 'btn-primary')

        // filmCard.append(image)
        // filmCard.append(cardBody)
        // cardBody.append(title)
        // cardBody.append(descr)
        // cardBody.append(detailsBtn)
        filmCard.append(li)
        li.append(title,descr,detailsBtn)


        title.textContent = `${episodeMap[film.episode_id]} ${film.title}`
        descr.textContent = film.director
        detailsBtn.textContent = 'Подробнее'
        detailsBtn.href = `?filmId=${index + 1}`

        container.append( filmCard)
    })

    return container
}


// {/* <div class="card" style="width: 18rem;">
// <img src="..." class="card-img-top" alt="...">
// <div class="card-body">
//   <h5 class="card-title">Card title</h5>
//   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div> */}


// characters
// :
// (18) ['https://swapi.dev/api/people/1/', 'https://swapi.dev/api/people/2/', 'https://swapi.dev/api/people/3/', 'https://swapi.dev/api/people/4/', 'https://swapi.dev/api/people/5/', 'https://swapi.dev/api/people/6/', 'https://swapi.dev/api/people/7/', 'https://swapi.dev/api/people/8/', 'https://swapi.dev/api/people/9/', 'https://swapi.dev/api/people/10/', 'https://swapi.dev/api/people/12/', 'https://swapi.dev/api/people/13/', 'https://swapi.dev/api/people/14/', 'https://swapi.dev/api/people/15/', 'https://swapi.dev/api/people/16/', 'https://swapi.dev/api/people/18/', 'https://swapi.dev/api/people/19/', 'https://swapi.dev/api/people/81/']
// created
// :
// "2014-12-10T14:23:31.880000Z"
// director
// :
// "George Lucas"
// edited
// :
// "2014-12-20T19:49:45.256000Z"
// episode_id
// :
// 4
// opening_crawl
// :
// "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy...."
// planets
// :
// (3) ['https://swapi.dev/api/planets/1/', 'https://swapi.dev/api/planets/2/', 'https://swapi.dev/api/planets/3/']
// producer
// :
// "Gary Kurtz, Rick McCallum"
// release_date
// :
// "1977-05-25"
// species
// :
// (5) ['https://swapi.dev/api/species/1/', 'https://swapi.dev/api/species/2/', 'https://swapi.dev/api/species/3/', 'https://swapi.dev/api/species/4/', 'https://swapi.dev/api/species/5/']
// starships
// :
// (8) ['https://swapi.dev/api/starships/2/', 'https://swapi.dev/api/starships/3/', 'https://swapi.dev/api/starships/5/', 'https://swapi.dev/api/starships/9/', 'https://swapi.dev/api/starships/10/', 'https://swapi.dev/api/starships/11/', 'https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/13/']
// title
// :
// "A New Hope"
// url
// :
// "https://swapi.dev/api/films/1/"
// vehicles
// :
// (4) ['https://swapi.dev/api/vehicles/4/', 'https://swapi.dev/api/vehicles/6/', 'https://swapi.dev/api/vehicles/7/', 'https://swapi.dev/api/vehicles/8/']
// [[Prototype]]
// :
// Object
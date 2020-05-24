window.addEventListener('load', start)

let inputFrequency = null
let inputRange = null
let divPodcasts = null


function start() {
    console.log('Dom carregado!')

    inputFrequency = document.querySelector('#inputFrequency')
    inputRange = document.querySelector('#inputRange')
    divPodcasts = document.querySelector('#divPodcasts')

    window.addEventListener('input', handleRangeChange)

    handlePodcastFrom(inputFrequency)
}

function handleRangeChange(e) {
    let currentFrequency = e.target.value
    inputFrequency.value = currentFrequency

    handlePodcastFrom(currentFrequency)
}

function handlePodcastFrom(frequency) {
    let foundPodcast = null

    // estudar outros metodos de percorrer array
    for (let i = 0; i < podcasts.length; i++) {
        let currentPodcast = podcasts[i];
        
        if ( currentPodcast.id == frequency ) {
            foundPodcast = currentPodcast
            break
        }
    }

    renderPodcast(foundPodcast)
}

function renderPodcast(podcast) {
    if ( !podcast ) {
        divPodcasts.innerHTML = 'Podcast nao encontrado'
        return
    } 

    // dica: aplicar desestruturacao

    const title = document.createElement('h2')
    title.textContent = `${podcast.title}`

    const img = document.createElement('img')
    img.src = `${podcast.img}`

    const description = document.createElement('p')
    description.textContent = `${podcast.description}`

    divPodcasts.innerHTML = ''
    divPodcasts.appendChild(title)
    divPodcasts.appendChild(img)
    divPodcasts.appendChild(description)
 

}
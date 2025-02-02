export function requestApi(searchTerm) {
    const url = `https://679f87ba24322f8329c3f02a.mockapi.io/api/artists26/Artists`; //Link do mockapi
    
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data.filter(artist => 
                artist.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        })
        .catch((error) => {
            console.error('Erro ao carregar o JSON:', error);
            return [];
        });
}

export function displayResults(results, resultArtist, resultPlaylist) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    // Limpa resultados anteriores
    artistName.innerText = '';
    artistImage.src = '';

    // Exibe os resultados
    if (results.length > 0) {
        const firstArtist = results[0]; // Exibe apenas o primeiro artista encontrado
        artistName.innerText = firstArtist.name;
        artistImage.src = firstArtist.urlImg;
    }

    resultArtist.classList.remove('hidden')
}
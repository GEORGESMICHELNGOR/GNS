async function parallelCalls(urls) {
    try {
       
        const responses = await Promise.all(urls.map(fetchDataFromAPI));

        
        console.log('Réponses obtenues pour toutes les URL :', responses);
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
    }
}


function fetchDataFromAPI(url) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            
            const mockData = { url, data: `Données de ${url}` };
            
            resolve(mockData);
        }, Math.random() * 2000); 
    });
}


const urls = ['url1', 'url2', 'url3'];
parallelCalls(urls);

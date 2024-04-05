async function concurrentRequests() {
    try {
        
        const [response1, response2] = await Promise.all([
            fetchDataFromAPI('url1'), 
            fetchDataFromAPI('url2')  
        ]);

       
        const combinedResults = {
            data1: response1,
            data2: response2
        };

        console.log('Résultats combinés des deux appels d\'API :', combinedResults);
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


concurrentRequests();

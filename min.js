async function awaitCall() {
    try {
      
        const data = await fetchDataFromAPI();
        
        console.log('Données récupérées de l\'API :', data);
    } catch (error) {
       
        console.error('Erreur lors de la récupération des données de l\'API :', error);
    }
}


function fetchDataFromAPI() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           
            const mockData = { id: 1, name: 'Données d\'exemple' };
            
            resolve(mockData);
        }, 1000); 
    });
}


awaitCall();

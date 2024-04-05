
async function awaitCall() {
    try {
        
        const data = await fetchDataFromAPI();
        
        console.log('Données récupérées de l\'API :', data);
    } catch (error) {
       
        console.error('Erreur lors de la récupération des données de l\'API :', error.message);
    }
}


function fetchDataFromAPI() {
    
    return new Promise((resolve, reject) => {
      
        setTimeout(() => {
            
            reject(new Error('Échec de l\'appel d\'API : la ressource demandée est introuvable'));
        }, 1000); 
    });
}


awaitCall();


async function chainedAsyncFunctions() {
  
    try {
       
        await asyncFunction1();
        
        await asyncFunction2();
        
        await asyncFunction3();
    } catch (error) {
       
        console.error('Erreur dans une des fonctions asynchrones :', error);
    }
}


async function asyncFunction1() {
    await delay(1000);
    console.log('Première fonction asynchrone terminée');
}

async function asyncFunction2() {
    await delay(1000);
    console.log('Deuxième fonction asynchrone terminée');
}

async function asyncFunction3() {
    await delay(1000);
    console.log('Troisième fonction asynchrone terminée');
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


chainedAsyncFunctions();

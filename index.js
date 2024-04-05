async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        await delay(1000); 
        console.log(value);
    }
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);

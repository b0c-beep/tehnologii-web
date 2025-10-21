const getObjectFromUrl = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) { 
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject('Fetch error: ' + error.messe));
    });
}

getObjectFromUrl('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log('Fetched data:', data))
    .catch(error => console.error(error));
getObjectFromUrl('https://invalid-url.example.com')
    .then(data => console.log('Fetched data:', data))
    .catch(error => console.error(error));


const countryBorders = (country) => {
    return new Promise((resolve, reject) => {
        fetch(`https://restcountries.com/v3.1/name/${country}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                const boundaries = data[0].borders;
                resolve(boundaries);
            })
            .catch(error => reject('Fetch error: ' + error.message));
    });
}

countryBorders('Germany')
    .then(boundaries => console.log('Country boundaries:', boundaries))
    .catch(error => console.error(error));
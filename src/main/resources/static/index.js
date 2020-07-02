document.getElementById('sqli-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('POST', 'https://insecure-website.herokuapp.com/api', true);

    // Handle request response
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Ok post
        } else {
            // Error to handle
        }
    };

    request.setRequestHeader('Content-Type', 'application/json');
    // Send request
    const badIdea = {name: document.getElementById('sqli-input').value};
    request.send(JSON.stringify(badIdea));
});

const request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://insecure-website.herokuapp.com/api', true);

// Handle request response
request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        // Ok get
        console.log(request.response);
        const movieList = JSON.parse(request.response);

        for (let movie of movieList) {
            const liElement = document.createElement('li');
            liElement.innerHTML = movie.name;
            document.getElementById('movie-titles').appendChild(liElement);
        }
    } else {
        // Error to handle
    }
};

request.setRequestHeader('Content-Type', 'application/json');
// Send request
request.send();

const fetchFact = function () {
    const xhr = new XMLHttpRequest(); // similar to HTTParty

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return; // The data is not ready yet.
        }

        const data = JSON.parse(xhr.responseText);
        
        const p = document.createElement('p');
        p.innerHTML = data.text;
        document.body.appendChild(p);
    };
    
    xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
    xhr.send(); // asynchronous (runs in the background)
    
};

document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact(); // First fact free

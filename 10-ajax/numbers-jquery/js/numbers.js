const fetchFact = function () {
    $.ajax('http://numbersapi.com/random/trivia?json').done(function (data) {
        $('#fetch').after(`<p>${ data.text }</p>`)
    });    
};

$('#fetch').on('click', fetchFact);
fetchFact(); // First fact free

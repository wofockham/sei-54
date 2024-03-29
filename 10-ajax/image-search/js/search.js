'use strict';

var state = {
    currentPage: 1,
    lastPageReached: false
};

var searchFlickr = function searchFlickr(keywords) {

    if (state.lastPageReached) return;

    console.log('Searching for', keywords);

    var flickrURL = 'https://api.flickr.com/services/rest';

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        page: state.currentPage++,
        nojsoncallback: 1 // please don't be bored enough to read up this
    }).done(showImages).done(function (response) {
        console.log(response);
        if (response.photos.page >= response.photos.pages) {
            state.lastPageReached = true;
        }
    });
};

var showImages = function showImages(results) {
    _(results.photos.photo).each(function (photo) {
        var thumbnail = generateURL(photo);
        var $img = $('<img>', { src: thumbnail });
        $('#images').append($img);
    });
};

var generateURL = function generateURL(p) {
    return ['http://farm', p.farm, '.static.flickr.com/', p.server, '/', p.id, '_', p.secret, '_q.jpg' // change 'q' to something else for different sizes (see documentation)
    ].join('');
};

$(document).ready(function () {
    $('#search').on('submit', function (event) {
        event.preventDefault(); // disable the form from being submitted to a server.

        $('#images').empty();
        state.currentPage = 1;
        state.lastPageReached = false;

        var searchTerms = $('#query').val();
        searchFlickr(searchTerms);
    });

    // Higher Order Function
    var relaxedSearchFlickr = _.debounce(searchFlickr, 4000, true); // true: leading edge (don't wait to run)

    $(window).on('scroll', function () {
        // calculate the scrollBottom (how close we are to the end of the document)
        var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

        if (scrollBottom < 600) {
            var searchTerms = $('#query').val();
            relaxedSearchFlickr(searchTerms);
        }
    });
});
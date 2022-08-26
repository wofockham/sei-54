$(document).ready(function () {
    $('#subreddit').on('blur', function () {
        const subs = $(this).val();
        fetchImages(subs);
    });

    fetchImages('eyebleach');
});

let timer = null;

const fetchImages = (subreddits) => {
    clearTimeout(timer);
    $('.wallpaper').remove();
    
    $.getJSON(`https://api.reddit.com/r/${ subreddits }.json?limit=100`).done((response) => {
        console.log(response);
        response.data.children.forEach((post) => {
            if (post.data.url.endsWith('jpg') || post.data.url.endsWith('png')) {
                const url = `url(${ post.data.url })`; // convert to CSS syntax
                $('<div class="wallpaper">').css('background-image', url).appendTo('body');
            }
        })
    });

    const fadeNext = function (nth) {
        $('.wallpaper.show').removeClass('show');
        $('.wallpaper').eq(nth).addClass('show');

        timer = setTimeout(() => fadeNext(nth + 1), 5000); // recursion
    };

    fadeNext(0);
};

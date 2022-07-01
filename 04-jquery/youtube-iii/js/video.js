$(document).ready(function () {
    const $links = $('a');
    console.log($links.length);

    // Thumbnails
    for (let i = 0; i < $links.length; i++) {
        const link = $links[i]; // retrieve the vanilla DOM node
        const $link = $(link);  // turn the DOM node back into a jQuery object

        const href = $link.attr('href'); // getter
        const thumbnailURL = youtube.generateThumbnailUrl(href);

        const $image = $('<img>'); // detached jQuery object
        $image.attr('src', thumbnailURL); // setter
        $link.prepend($image);
    }

    // Video player
    $links.on('click', function (event) {
        event.preventDefault(); // Disables the browser's default behaviour (don't follow the link!)

        const href = $(this).attr('href');
        const embedURL = youtube.generateEmbedUrl(href);

        const embedCode = `<iframe width="560" height="315" src="${ embedURL }" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        $('#player').hide().html(embedCode).fadeIn(5000); // chaining
    });

    $('h2').funText(100, 'candy');
    $('a').funText(50, 'reverseRainbow');
});
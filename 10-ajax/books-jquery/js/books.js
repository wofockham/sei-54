const fetchCover = function (bookTitle) {
    $.ajax('https://www.googleapis.com/books/v1/volumes?q=title:' + bookTitle).done(function (data) {
       const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
        $('#cover').attr('src', cover);
    });
};

$('#search').on('submit', function (event) {
    event.preventDefault();

    const title = $('#title').val();
    fetchCover(title);
});

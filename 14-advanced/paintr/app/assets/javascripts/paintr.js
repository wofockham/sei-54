$(document).ready(function () {
    $('#add-color').on('click', () => {
        const color = $('#color').val();
        const $swatch = $('<div />').addClass('swatch').css('background-color', color);
        $swatch.appendTo('.palette'); // $('.palette').append($swatch)
    });
});
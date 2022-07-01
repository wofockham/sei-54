$('body').css('font-family', 'Arial, sans-serif');

const $nickname = $('#nickname');
$nickname.html('The Blade');

$('#favorites').html('custard, <strong>cheesecake</strong>, jalapenos');
$('#hometown').html('Sydney');

$('li').addClass('listitem');

$('<img>').attr('src', 'http://www.fillmurray.com/150/150').appendTo('body');

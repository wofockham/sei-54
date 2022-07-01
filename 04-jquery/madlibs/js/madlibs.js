const makeMadLib = function () {
    const noun = $('#noun').val(); // string
    const adjective = $('#adjective').val();
    const name = $('#person').val();

    const story = `${ name } really likes ${ adjective } ${ noun }`;
    
    $('#story').prepend(`<p>${ story }</p>`);
};

$('#lib-button').on('click', makeMadLib);
const makeMadLib = function () {
    const nounInput = document.getElementById('noun');
    const noun = nounInput.value;

    const adjective = document.getElementById('adjective').value;
    const name = document.getElementById('person').value;

    const story = `${ name } really likes ${ adjective } ${ noun }`;    
    document.getElementById('story').innerHTML = story;
};

const button = document.getElementById('lib-button');

button.addEventListener('click', makeMadLib);
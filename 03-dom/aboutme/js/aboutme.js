document.body.style.fontFamily = 'Arial, sans-serif';

const nickname = document.getElementById('nickname');
nickname.innerHTML = 'The Blade';

document.getElementById('favorites').innerHTML = 'custard, cheesecake, jalapenos';
document.getElementById('hometown').innerText = 'Sydney';

const items = document.getElementsByTagName('li');
for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.className = 'listitem';
}

const img = document.createElement('img'); // detached DOM node
img.src = 'http://www.fillmurray.com/50/50';
document.body.appendChild(img);
const str = 'built with love and dreams';
const textContainer = document.querySelector('.animated-text');

let position = 0;

const typeText = () => {
    if (position === str.length) return;
    textContainer.textContent += str[position];
    position++;
    setTimeout(typeText, getRandomInt());
}

function getRandomInt(min = 50, max = 350) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand)
}

typeText();
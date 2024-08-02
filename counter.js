const nums = document.querySelectorAll('.num');
const container = document.querySelector('.counter');

let activated = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > textContainer.offsetTop - textContainer.offsetHeight - 200 && activated === false) {
        nums.forEach(counter => {
            counter.innerText = 0;
            let count = 0;

            function updateCount() {
                const target = parseInt(counter.dataset.count);
                if (count < target) {
                    count++;
                    counter.innerText = count;
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            }
            updateCount();
            activated = true;
        });

    } else if (window.scrollY < textContainer.offsetTop - textContainer.offsetHeight - 500 || window.scrollY === 0 && activated === true) {
        nums.forEach(counter => {
            counter.innerText = 0;
        });
        activated = false;
    }
});



function initializeCanvas() {
    for (let i = 0; i < 16; i++) {
        
        let tempContainDiv = document.createElement('div');
        masterContainer.appendChild(tempContainDiv);


        for (let j = 0; j < 16; j++) {
            let tempDiv = document.createElement("div");
            tempDiv.classList.add('divPixel');
            tempContainDiv.appendChild(tempDiv);
        }
    }

    activateCanvas();
}


function activateCanvas() {
    const allDivPixels = document.querySelectorAll('.divPixel');

    masterContainer.addEventListener('mouseover', (event) => {
        let target = event.target;
        console.log(target);
        target.classList.add('colored');
    })
}

const activateButton = document.querySelector('.activate');
const masterContainer = document.querySelector('.master-container');

activateButton.addEventListener('click', () => {
    initializeCanvas();
});



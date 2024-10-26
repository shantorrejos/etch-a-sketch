const activateButton = document.querySelector('.activate');
const masterContainer = document.querySelector('.master-container');

activateButton.addEventListener('click', () => {
    initializeCanvas();
});

let test = 0;


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
}

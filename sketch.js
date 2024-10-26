function initializeCanvas(width, height, resolution) {

    console.log(width, height, resolution);

    modal.style.display = 'none';

    const masterContainer = document.querySelector('.master-container')
    masterContainer.style.width = width + 'px'
    masterContainer.style.height = height + 'px'

    for (let i = 0; i < resolution; i++) {
        
        let tempContainDiv = document.createElement('div');
        tempContainDiv.classList.add('divContainPixel');
        masterContainer.appendChild(tempContainDiv);

        for (let j = 0; j < resolution; j++) {
            let tempDiv = document.createElement("div");
            tempDiv.classList.add('divPixel');
            tempContainDiv.appendChild(tempDiv);
        }
    }
}

function clearCanvas() {
    const divContainers = document.querySelectorAll('.divContainPixel');
    
    divContainers.forEach(div => {
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
        masterContainer.removeChild(div);
    });

    console.log('divs cleared');
}

// function takeUserCanvas() {
//     modal.style.display = 'block';

//     const modalWidth = document.querySelector('#canvasWidth');
//     const modalHeight = document.querySelector('#canvasHeight');
//     const modalResolution = document.querySelector('#canvasResolution');

//     canvasWidth = modalWidth.value;
//     canvasHeight = modalHeight.value;
//     canvasResolution = modalResolution.value;    
// }

const activateButton = document.querySelector('.activate');
const masterContainer = document.querySelector('.master-container');
const modal = document.querySelector('.modal-container');
const modalButton = document.querySelector('.submitButton');
const modalWidth = document.querySelector('#canvasWidth');
const modalHeight = document.querySelector('#canvasHeight');
const modalResolution = document.querySelector('#canvasResolution');

let canvasWidth = 600;
let canvasHeight = 600;
let canvasResolution = 16;

initializeCanvas(canvasWidth, canvasHeight, canvasResolution);

// display the modal if button is clicked
activateButton.addEventListener('click', () => {
    modal.style.display = 'block';

    // If user changes their mind
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      } 
});

// the modal is displayed; clicking the button takes the user input values
modalButton.addEventListener('click', () => {
    canvasWidth = modalWidth.value;
    canvasHeight = modalHeight.value;
    canvasResolution = modalResolution.value; 
    clearCanvas();
    initializeCanvas(canvasWidth, canvasHeight, canvasResolution);
});

masterContainer.addEventListener('mouseover', (event) => {
    if (event.ctrlKey) {
        let target = event.target;
        target.classList.add('colored');
    }
})
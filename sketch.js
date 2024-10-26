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

// generates a random base color: returns rgb(x, y, z)
// XYZ can be either 0, 150, 250. This restricts color selection to onloy vibrant colors
function generateRandomColor(arr) {
    let rgb = arr;
    let x;

    for (let i = 0; i < rgb.length; i++) {
        x = Math.floor((Math.random() * 3) + 1);

        if (x === 1) {
            rgb[i] = 0
        } else if (x === 2){
            rgb[i] = 150
        } else if (x === 3){
            rgb[i] = 255
        }
    }

    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
}

// Paint with black brush
function colorPixelNormal(event) {

    // If ctrl key is pressed, paint. If shift, erase
    if (event.ctrlKey) {
        let target = event.target;
        target.style.backgroundColor = '#2e2e2e';
    }
    else if (event.shiftKey) {
        let target = event.target;
        target.style.backgroundColor = 'antiquewhite';
    } 
}

// Paint with rainbow brush
function colorPixelRainbow(event) {

    // If ctrl key is pressed, paint. If shift, erase
    if (event.ctrlKey) {
        let target = event.target;
        target.style.backgroundColor = generateRandomColor([0, 0, 0]);
    }
    else if (event.shiftKey) {
        let target = event.target;
        target.style.backgroundColor = 'antiquewhite';
    } 
}

const activateButton = document.querySelector('.activate');
const masterContainer = document.querySelector('.master-container');
const modal = document.querySelector('.modal-container');
const modalButton = document.querySelector('.submitButton');
const modalWidth = document.querySelector('#canvasWidth');
const modalHeight = document.querySelector('#canvasHeight');
const modalResolution = document.querySelector('#canvasResolution');
const eraseButton = document.querySelector('.eraseAll');
const toggleGrid = document.querySelector('.toggleGrid');
const toggleRainbow = document.querySelector('.toggleRainbow');

let canvasWidth = 600;
let canvasHeight = 600;
let canvasResolution = 16;
let toggleBorder = true;
let rainbow = false;

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

// Hover listener. Checks whether to use normal brush or rainbow brush.
masterContainer.addEventListener('mouseover', (event) => {
    if (rainbow === false) {
        colorPixelNormal(event);
    } else if (rainbow === true) {
        colorPixelRainbow(event);
    }
})

// Erase all: Removes the colored class from all pixel divs
eraseButton.addEventListener('click', () => {
    const gridDivPixel = document.querySelectorAll('.divPixel')
    gridDivPixel.forEach(div => {
        div.style.backgroundColor = 'antiquewhite';
    })
})


// Toggle the black grid
toggleGrid.addEventListener('click', () => {
    const gridDivPixel = document.querySelectorAll('.divPixel')

    // Checks if toggle === or =/= true, adds or removes border, set it darkgray, then change the toggle.
    if (toggleBorder === true) {
        gridDivPixel.forEach(div => {
        div.style.border = '1px solid'
        })
        toggleBorder = false
        toggleGrid.style.backgroundColor = 'darkgray';
    } else if (toggleBorder === false) {
        gridDivPixel.forEach(div => {
            div.style.border = '0px solid'
            })
        toggleBorder = true;
        toggleGrid.style.backgroundColor = '';
    }
})

toggleRainbow.addEventListener('click', () => {

    rainbow = !rainbow
    if (rainbow === true) {
        toggleRainbow.style.backgroundColor = 'darkgray'
    } else if (rainbow === false){
        toggleRainbow.style.backgroundColor = '';
    }
    
});


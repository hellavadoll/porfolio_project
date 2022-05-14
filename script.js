const qaButton = document.getElementById('qa-button');
const qaDetails = document.getElementById('qa-details');
const devButton = document.getElementById('dev-button');
const devDetails = document.getElementById('dev-details');
const designButton = document.getElementById('design-button');
const designDetails = document.getElementById('design-details');
 
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
      domElement.style.transition = 'display 2s ease-in-out';
    } else {
      domElement.style.display = 'none';
      domElement.style.transition = 'display 2s ease-in-out';
    }
}

const restoreButtonColor = (domElement) => {
    domElement.style.backgroundColor = '#e4f2fe';
    domElement.style.fontWeight = 'normal';
    domElement.style.transition = 'backgroundColor 2s ease-in-out';
}

const changeButtonColor = (domElement) => {
    domElement.style.backgroundColor = '#5790b1';
    domElement.style.fontWeight = 'bolder';
    domElement.style.transition = 'backgroundColor 2s ease-in-out';
}

/* QA Button Interactions */

qaButton.addEventListener('mouseenter', () => {
    changeButtonColor(qaButton);
});

qaButton.addEventListener('mouseleave', () => {
    restoreButtonColor(qaButton);
});

qaDetails.addEventListener('mouseenter', () => {
    changeButtonColor(qaDetails);
});

qaDetails.addEventListener('mouseleave', () => {
    restoreButtonColor(qaDetails);
});

qaButton.addEventListener('click', () => {
  toggleHiddenElement(qaDetails);
  toggleHiddenElement(qaButton);
});

qaDetails.addEventListener('click', () => {
    toggleHiddenElement(qaDetails);
    toggleHiddenElement(qaButton);
});

/* Dev Button Interactions */

devButton.addEventListener('mouseenter', () => {
    changeButtonColor(devButton);
});

devButton.addEventListener( 'mouseleave', () => {
    restoreButtonColor(devButton);
});

devDetails.addEventListener('mouseenter', () => {
    changeButtonColor(devDetails);
});

devDetails.addEventListener( 'mouseleave', () => {
    restoreButtonColor(devDetails);
});

devButton.addEventListener('click', () => {
    toggleHiddenElement(devDetails);
    toggleHiddenElement(devButton);
});

devDetails.addEventListener('click', () => {
    toggleHiddenElement(devDetails);
    toggleHiddenElement(devButton);
});

/* Design Button Interactions */

designButton.addEventListener('mouseenter', () => {
    changeButtonColor(designButton);
});

designButton.addEventListener( 'mouseleave', () => {
    restoreButtonColor(designButton);
});

designDetails.addEventListener('mouseenter', () => {
    changeButtonColor(designDetails);
});

designDetails.addEventListener( 'mouseleave', () => {
    restoreButtonColor(designDetails);
});

designButton.addEventListener('click', () => {
    toggleHiddenElement(designDetails);
    toggleHiddenElement(designButton);
});

designDetails.addEventListener('click', () => {
    toggleHiddenElement(designDetails);
    toggleHiddenElement(designButton);
});

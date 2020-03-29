const firstStep = document.querySelector('.first-step');
const secondStep = document.querySelector('.second-step');
const thirdStep = document.querySelector('.third-step');

const toggleElement = (btnElement, closeElement, openElement) => {
    btnElement.addEventListener("click", () => {
        closeElement.querySelector('.container').style.opacity = 0;
        setTimeout(() => {
            closeElement.classList.remove('on');
            closeElement.classList.add('off');
        }, 800);
        
        openElement.classList.remove('off');
        openElement.classList.add('on');
        setTimeout(() => {
            openElement.querySelector('.container').style.opacity = 1;
        }, 800);
    });
}

const nextStep = () => {
    const firstBtn = firstStep.querySelector('#next');
    toggleElement(firstBtn, firstStep, secondStep);

    const secondBtn = secondStep.querySelector('#next');
    toggleElement(secondBtn, secondStep, thirdStep);
}

const backStep = () => {
    const thirdBtn = thirdStep.querySelector('#back');
    toggleElement(thirdBtn, thirdStep, secondStep);

    const secondBtn = secondStep.querySelector('#back');
    toggleElement(secondBtn, secondStep, firstStep);
}

nextStep();
backStep();

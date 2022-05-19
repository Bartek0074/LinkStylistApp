const root = document.querySelector(':root')
const bgcInput = document.querySelector('.bgc');
const bgcSubmitBtn = document.querySelector('.bgcSubmit');
const fcInput = document.querySelector('.fc');
const fcSubmitBtn = document.querySelector('.fcSubmit');
const mcfInput = document.querySelector('.mcf');
const mcfSubmitBtn = document.querySelector('.mcfSubmit');
const mcsInput = document.querySelector('.mcs');
const mcsSubmitBtn = document.querySelector('.mcsSubmit');


const bgcSubmit = () => {
    console.log(bgcInput.value);
    root.style.setProperty('--bgColor', bgcInput.value)
};
const fcSubmit = () => {
    root.style.setProperty('--fontColor', fcInput.value)
};
const mcfSubmit = () => {
    root.style.setProperty('--mainColorFirst', mcfInput.value)
};
const mcsSubmit = () => {
    root.style.setProperty('--mainColorSecond', mcsInput.value)
};

bgcSubmitBtn.addEventListener('click', bgcSubmit);
bgcInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        bgcSubmit()
    }
})

fcSubmitBtn.addEventListener('click', fcSubmit);
fcInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        fcSubmit()
    }
})

mcfSubmitBtn.addEventListener('click', mcfSubmit);
mcfInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        mcfSubmit()
    }
})

mcsSubmitBtn.addEventListener('click', mcsSubmit);
mcsInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        mcsSubmit()
    }
})
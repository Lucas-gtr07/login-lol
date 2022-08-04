const inputs = document.querySelectorAll('.input');

const handleFocus = ({target}) => {
    const span = targetPreviousElementSibling;
    span.classList.add('span-active');
}
    
const handleFocusOut = ({target}) => {
    if(target.value == '') {
        const span = targetPreviousElementSibling;
        span.classList.remove('span-active');
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));


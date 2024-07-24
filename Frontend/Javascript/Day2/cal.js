const buttons = document.querySelectorAll('.btns button');
const display = document.getElementById('search');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        switch (value) {
            case 'C':
                display.value = '';
                break;
            case '<=':
                display.value = display.value.slice(0, -1);
                break;
            case '=':
                    display.value = eval(display.value);
                break;
            default:
                display.value += value;
            }
    });
});
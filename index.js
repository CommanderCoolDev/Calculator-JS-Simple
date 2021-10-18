let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let inputValue = "";

for (item of buttons) {
    item.addEventListener('click', (e) => {
        btnText = e.target.innerText;
        console.log('btnText :>> ', btnText);
        if(btnText === 'X') {
            btnText = '*';
            inputValue += btnText;
            input.value = inputValue
        } else if (btnText=== 'C') {
            inputValue = '';
            input.value = inputValue;
        } else if (btnText === '=') {
            input.value = eval(inputValue);

        } else if (btnText === "M+" || btnText === "M-" || btnText === "MR") {
            inputValue = 'Need to add this staff)))';
            input.value = inputValue
        }
         else {
            inputValue += btnText;
            input.value = inputValue;
        }
    });
}
document.getElementById('btn').addEventListener('click', function convert(){
    let Hex = document.querySelector('[data-hex]').value;

    let RGB = Hex.replace("#", "");

    let r = parseInt(RGB.substring(0, 2), 16);
    let g = parseInt(RGB.substring(2, 4), 16);
    let b = parseInt(RGB.substring(4, 6), 16);

    let output = document.querySelector('[data-output]');
    output.textContent = `RGB: ${r}, ${g}, ${b}`;
});
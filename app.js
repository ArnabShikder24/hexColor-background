window.onload = () => {
    document.getElementById('change-btn').addEventListener('click', () => {
        const rgbColor = document.getElementById('root');
        const red = Math.round(Math.random() * 255);
        const green = Math.round(Math.random() * 255);
        const blue = Math.round(Math.random() * 255);
        const hex = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
        rgbColor.style.backgroundColor = hex;
        document.getElementById('hex').value = hex;
    })
}
import './style.css'

document.getElementById('button').addEventListener('click', function () {
    const input = document.getElementById('unicode-input').value;
    if (input.length === 0) {
        document.getElementById('unicode-value').textContent = "Please enter a character.";
        return;
    }
    const Value = input.codePointAt(0);
    document.getElementById('unicode-value').textContent =
        `The Unicode value of "${input}" is: ${Value}`;
});

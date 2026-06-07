document.addEventListener('DOMContentLoaded', () => {
    const lengthInput = document.getElementById('length');
    const lenVal = document.getElementById('lenVal');
    const resultDiv = document.getElementById('result');
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const entropyDisplay = document.getElementById('entropy');
    const copyStatus = document.getElementById('copyStatus');

    // Update length label in real-time
    lengthInput.addEventListener('input', () => {
        lenVal.innerText = lengthInput.value;
    });

    generateBtn.addEventListener('click', () => {
        const len = parseInt(lengthInput.value);
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
        
        const array = new Uint32Array(len);
        window.crypto.getRandomValues(array);
        
        const password = Array.from(array, x => charset[x % charset.length]).join('');
        
        resultDiv.innerText = password;
        
        // Update Entropy calculation (bits)
        const entropy = Math.floor(len * Math.log2(charset.length));
        entropyDisplay.innerText = `Entropy: ${entropy} bits`;
    });

    copyBtn.addEventListener('click', () => {
        const text = resultDiv.innerText;
        if (text === "Click Generate" || text === "---") return;
        
        navigator.clipboard.writeText(text).then(() => {
            copyStatus.innerText = "Copied!";
            setTimeout(() => copyStatus.innerText = "", 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
});

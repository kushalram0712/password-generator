function updateUI() {
    const len = document.getElementById('length').value;
    document.getElementById('lenVal').innerText = len;
    
    // Update color based on length (NIST recommends 8+, but 16+ is safer)
    const meter = document.getElementById('strengthMeter');
    const percent = (len / 64) * 100;
    meter.style.width = percent + "%";
    meter.style.backgroundColor = len < 12 ? "#d63031" : (len < 20 ? "#fdcb6e" : "#00b894");
}

function generate() {
    const length = document.getElementById('length').value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    
    for (let i = 0; i < length; i++) {
        password += charset[array[i] % charset.length];
    }
    
    document.getElementById('result').innerText = password;
}

function copyToClipboard() {
    const text = document.getElementById('result').innerText;
    if (text === "Click to Generate") return;
    navigator.clipboard.writeText(text).then(() => {
        const status = document.getElementById('copyStatus');
        status.innerText = "Copied!";
        setTimeout(() => status.innerText = "", 2000);
    });
}

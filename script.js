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
    document.getElementById('copyStatus').innerText = "";
}

function copyToClipboard() {
    const text = document.getElementById('result').innerText;
    if (text === "---") return;
    navigator.clipboard.writeText(text).then(() => {
        document.getElementById('copyStatus').innerText = "Copied to clipboard!";
    });
}

# Secure Password Generator

## Overview
A high-entropy, client-side password generation tool designed for maximum security and ease of use, adhering to NIST SP 800-63B guidelines.

## Security Architecture
- **Cryptographic Security:** Utilizes `window.crypto.getRandomValues()` for cryptographically strong random numbers, ensuring unpredictability.
- **Stateless Design:** No data is stored, logged, or transmitted. By avoiding browser storage, the tool remains immune to common cross-site scripting (XSS) risks related to local data persistence.
- **Zero-Dependency:** Pure HTML/CSS/JS, ensuring no third-party supply chain vulnerabilities.

## How to Run
1. Host the files on GitHub Pages.
2. The site requires no backend; it runs entirely within the browser's sandbox.

## Future Scope
- Integration with standard entropy-based passphrase libraries.
- Export functionality for local, encrypted file storage (JSON/CSV).

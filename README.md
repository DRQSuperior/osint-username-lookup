# 🕵️ OSINT Username Lookup

A basic OSINT (Open Source Intelligence) tool for username lookup across various websites. 

⚠️ Note: This tool checks for HTTP 200 status codes, so it's not 100% accurate. Use with caution.

## 🚀 Setup

1. Clone this repository
2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    node server.js
    ```

4. Open `http://localhost:3000` in your browser

## 🛠️ How it works

This tool uses Express.js to create a server that checks if a username exists on specified websites. It does this by:

1. Receiving a site URL and username
2. Replacing '{username}' in the URL with the provided username
3. Sending a GET request to the resulting URL
4. Checking if the response status code is 200 (OK)

The server handles both HTTP and HTTPS requests and serves static files from the 'public' directory.

## 👨‍💻 Author

Created by @DRQSuperior

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

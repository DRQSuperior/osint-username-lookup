const express = require('express');
const http = require('http');
const https = require('https');
const path = require('path');
const url = require('url');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/check-username', (req, res) => {
    const { siteUrl, username } = req.query;
    const fullUrl = siteUrl.replace('{username}', username);
    const parsedUrl = url.parse(fullUrl);

    const requestModule = parsedUrl.protocol === 'https:' ? https : http;

    const request = requestModule.request(fullUrl, { method: 'GET' }, (response) => {
        if (response.statusCode === 200) {
            res.json({ available: true });
        } else if (response.statusCode === 404) {
            res.json({ available: false });
        } else {
            res.json({ available: false });
        }
    });

    request.on('error', (error) => {
        if (!res.headersSent) {
            res.status(500).json({ error: 'Error fetching URL' });
        }
    });

    request.end();
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
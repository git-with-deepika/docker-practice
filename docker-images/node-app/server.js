const express = require('express');
const os = require('os');

const app = express();
// Allows passing a PORT environment variable, useful for Docker practice
const PORT = process.env.PORT || 3000; 

app.get('/', (req, res) => {
    res.json({
        message: "Hello from your containerized Node.js app!",
        environment: process.env.NODE_ENV || "development",
        containerId: os.hostname(), // This will show the Docker container ID
        status: "Ready for deployment"
    });
});

app.listen(PORT, () => {
    console.log(`Server is successfully running on port ${PORT}`);
});

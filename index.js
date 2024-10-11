// Import the necessary modules
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// First endpoint: Display a webpage with a real-time clock
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Clock</title>
                <script>
                    function updateTime() {
                        const currentTime = new Date().toLocaleTimeString();
                        document.getElementById('clock').innerText = currentTime;
                    }
                    setInterval(updateTime, 1000); // Update every second
                    window.onload = updateTime; // Set the time when the page loads
                </script>
            </head>
            <body>
                <h1>Current Time:</h1>
                <div id="clock" style="font-size: 48px;"></div>
            </body>
        </html>
    `);
});

// Second endpoint: Return current date and time in JSON format
app.get('/time', (req, res) => {
    const currentTime = new Date();
    res.json({
        date: currentTime.toLocaleDateString(),
        time: currentTime.toLocaleTimeString()
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

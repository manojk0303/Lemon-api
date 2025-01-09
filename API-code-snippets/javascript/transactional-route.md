### POST /transactional/send
Send a transactional message
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
// Function to send a transactional message
async function sendTransactionalMessage(messageDetails) {
    const url = '/transactional/send'; // Base URL is assumed to be set in your axios instance

    try {
        const response = await axios.post(url, messageDetails, {
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Transactional Message Sent:', response.data);
    } catch (error) {
        console.error('Error sending transactional message:', error.response ? error.response.data : error.message);
    }
}

// Example usage
const messageDetails = {
    fromname: "Bob Sender",
    fromemail: "bob@sender.com",
    to: "recipient@domain.com",
    toname: "Joe User",
    body: "<html><body>Hello!</body></html>",
    subject: "My Subject",
    replyto: "replyto@sender.com",
    returnpath: "returnpath@sender.com",
    tag: "newusers",
    variables: {
        var1: "value1",
        var2: "value2"
    },
    route: "string", // Replace with an actual route if needed
    template: "string" // Replace with an actual template ID if needed
};

// Call the function
sendTransactionalMessage(messageDetails);
```

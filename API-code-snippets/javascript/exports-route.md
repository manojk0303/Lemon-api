### GET /exports
Retrieve all exported files
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
// Function to retrieve all exported files
async function getExportedFiles() {
    const url = '/exports'; // Base URL is assumed to be set in your axios instance

    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Exported Files:', response.data);
    } catch (error) {
        console.error('Error retrieving exported files:', error.response ? error.response.data : error.message);
    }
}

// Example usage
getExportedFiles();
```

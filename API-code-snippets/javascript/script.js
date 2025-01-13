const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/';

async function createSuppressionList(listName) {
    const url = '/api/supplists';
    const data = {
        name: listName
    };

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-APIKey': apiKey
            }
        });
        console.log('Suppression List Created:', response.data);
    } catch (error) {
        console.error('Error creating suppression list:', error.response ? error.response.data : error.message);
    }
}

// Example usage
createSuppressionList('My Suppression List');
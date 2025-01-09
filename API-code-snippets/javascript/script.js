const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
async function deleteWebhook(webhookId) {
    const url = `/webhooks/${webhookId}`;

    try {
        const response = await axios.delete(url, {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Webhook Deleted:', response.data);
    } catch (error) {
        console.error('Error deleting webhook:', error.response ? error.response.data : error.message);
    }
}

// Example usage
deleteWebhook('webhookId');

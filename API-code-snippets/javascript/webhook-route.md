### POST /webhooks
Create a new webhook
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
async function createWebhook(webhookName, targetUrl, event) {
    const url = '/webhooks';
    const data = {
        name: webhookName,
        target_url: targetUrl,
        event: event
    };

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Webhook Created:', response.data);
    } catch (error) {
        console.error('Error creating webhook:', error.response ? error.response.data : error.message);
    }
}

// Example usage
createWebhook('My Webhook', 'https://domain.com/path', 'click');

```

### GET /webhooks
Retrieve the current list of webhooks
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
async function getWebhooks() {
    const url = '/webhooks';

    try {
        const response = await axios.get(url, {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Webhooks List:', response.data);
    } catch (error) {
        console.error('Error retrieving webhooks:', error.response ? error.response.data : error.message);
    }
}

// Example usage
getWebhooks();
```

### PATCH /webhooks/{id}
Update a webhook
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
async function updateWebhook(webhookId, updatedName, updatedTargetUrl, updatedEvent) {
    const url = `/webhooks/${webhookId}`;
    const data = {
        name: updatedName,
        target_url: updatedTargetUrl,
        event: updatedEvent
    };

    try {
        const response = await axios.patch(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Webhook Updated:', response.data);
    } catch (error) {
        console.error('Error updating webhook:', error.response ? error.response.data : error.message);
    }
}

// Example usage
updateWebhook('webhookId', 'Updated Webhook', 'https://domain.com/new-path', 'open');

```
### DELETE /webhooks/{id}
Delete a webhook
```javascript
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

```
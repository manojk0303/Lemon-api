###  GET /userroutes
Retrieve the currently available postal routes.
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
// Function to get user routes
async function getUserRoutes() {
    const url = '/userroutes';

    try {
        const response = await axios.get(url, {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Available Postal Routes:', response.data);
    } catch (error) {
        console.error('Error retrieving postal routes:', error.response ? error.response.data : error.message);
    }
}

// Example usage
getUserRoutes();
```

### POST /imageupload
Upload an image
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables
const fs = require('fs'); // For file handling
const FormData = require('form-data');
//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';


// Function to upload an image
async function uploadImage(filePath) {
    const url = '/imageupload';
    const formData = new FormData();
    formData.append('file', fs.createReadStream(filePath));

    try {
        const response = await axios.post(url, formData, {
            headers: {
                ...formData.getHeaders(),
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Image uploaded successfully:', response.data);
    } catch (error) {
        console.error('Error uploading image:', error.response ? error.response.data : error.message);
    }
}

// Example usage
uploadImage('./image.jpg');
```
### POST /broadcasts
Create a new broadcast
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
// Function to create a new broadcast
async function createBroadcast(broadcastData) {
    const url = '/broadcasts';

    try {
        const response = await axios.post(url, broadcastData, {
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Broadcast created successfully:', response.data);
    } catch (error) {
        console.error('Error creating broadcast:', error.response ? error.response.data : error.message);
    }
}

// Example usage
const broadcastData = {
    name: "My Broadcast",
    when: "schedule",
    scheduled_for: "2025-01-09T08:02:08.534Z",
    route: "route_id",
    tags: ["tagname"],
    lists: ["contact_list_id"],
    segments: ["segment_id"],
    supplists: ["suppression_list_id"],
    suppsegs: ["suppression_segment_id"],
    supptags: ["suppression_tagname"],
    subject: "My Email Subject",
    fromname: "Friendly Name",
    returnpath: "from@domain.com",
    fromemail: "from@domain.com",
    replyto: "replyto@domain.com",
    rawText: "<html><body>Email Text</body></html>",
    disableopens: false
};
createBroadcast(broadcastData);
```

### GET /broadcasts
Retrieve broadcasts
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
// Function to retrieve broadcasts
async function getBroadcasts(queryParams = {}) {
    const url = '/broadcasts';

    try {
        const response = await axios.get(url, {
            params: queryParams,
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Broadcasts retrieved:', response.data);
    } catch (error) {
        console.error('Error retrieving broadcasts:', error.response ? error.response.data : error.message);
    }
}

// Example usage
getBroadcasts({ older: '2025-01-01T00:00:00Z', search: 'My Broadcast' });
```

### GET /broadcasts/{id}
Retrieve a broadcast
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
// Function to retrieve a broadcast by ID
async function getBroadcastById(broadcastId) {
    const url = `/broadcasts/${broadcastId}`;

    try {
        const response = await axios.get(url, {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Broadcast details:', response.data);
    } catch (error) {
        console.error('Error retrieving broadcast:', error.response ? error.response.data : error.message);
    }
}

// Example usage
getBroadcastById('broadcast_id');

```

### PATCH /broadcasts/{id}
Update a draft broadcast.

```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
async function updateDraftBroadcast(broadcastId, updateData) {
    const url = `/broadcasts/${broadcastId}`;

    try {
        const response = await axios.patch(url, updateData, {
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Broadcast Updated:', response.data);
    } catch (error) {
        console.error('Error updating draft broadcast:', error.response ? error.response.data : error.message);
    }
}

// Example usage
updateDraftBroadcast('broadcast-id', {
    name: 'Updated Broadcast Name',
    when: 'schedule',
    scheduled_for: '2025-01-09T08:02:21.351Z',
    subject: 'Updated Subject',
    rawText: '<html><body>Updated Email Content</body></html>'
});

```

### DELETE /broadcasts/{id}
Delete a broadcast
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
async function deleteBroadcast(broadcastId) {
    const url = `/broadcasts/${broadcastId}`;

    try {
        const response = await axios.delete(url, {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Broadcast Deleted:', response.data);
    } catch (error) {
        console.error('Error deleting broadcast:', error.response ? error.response.data : error.message);
    }
}

// Example usage
deleteBroadcast('broadcast-id');

```

### POST /broadcasts/{id}/start
Send a broadcast immediately
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
async function sendBroadcastNow(broadcastId) {
    const url = `/broadcasts/${broadcastId}/start`;

    try {
        const response = await axios.post(url, {}, {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Broadcast Sent:', response.data);
    } catch (error) {
        console.error('Error sending broadcast:', error.response ? error.response.data : error.message);
    }
}

// Example usage
sendBroadcastNow('broadcast-id');

```

### POST /broadcasts/{id}/test
Send a test email
# getting internal server error for this request
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
async function sendTestEmail(broadcastId, recipientEmail, route) {
    const url = `/broadcasts/${broadcastId}/test`;

    const data = {
        to: recipientEmail,
        route: route // Optional: Provide route ID if applicable
    };

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Test Email Sent:', response.data);
    } catch (error) {
        console.error('Error sending test email:', error.response ? error.response.data : error.message);
    }
}

// Example usage
sendTestEmail('broadcast-id', 'test@domain.com', 'route-id');

```
### POST /broadcasts/{id}/cancel
Cancels a broadcast
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
async function cancelBroadcast(broadcastId) {
    const url = `/broadcasts/${broadcastId}/cancel`;

    try {
        const response = await axios.post(url, {}, {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Broadcast Canceled:', response.data);
    } catch (error) {
        console.error('Error canceling broadcast:', error.response ? error.response.data : error.message);
    }
}

// Example usage
cancelBroadcast('broadcast-id');
```

### POST /broadcasts/{id}/duplicate
Creates a duplicate of a sent or unsent broadcast

```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
async function duplicateBroadcast(broadcastId) {
    const url = `/broadcasts/${broadcastId}/duplicate`;

    try {
        const response = await axios.post(url, {}, {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Broadcast Duplicated:', response.data);
    } catch (error) {
        console.error('Error duplicating broadcast:', error.response ? error.response.data : error.message);
    }
}

// Example usage
duplicateBroadcast('broadcast-id');
```

### POST /broadcasts/{id}/update
Update a sent broadcast.
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
async function updateSentBroadcast(broadcastId, updateData) {
    const url = `/broadcasts/${broadcastId}/update`;

    try {
        const response = await axios.post(url, updateData, {
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Broadcast Updated:', response.data);
    } catch (error) {
        console.error('Error updating broadcast:', error.response ? error.response.data : error.message);
    }
}

// Example usage
updateSentBroadcast('broadcast_id_here', {
    name: 'Updated Broadcast Name',
    subject: 'Updated Subject',
    fromname: 'Updated Friendly Name',
    fromemail: 'from@domain.com',
    rawText: '<html><body>Updated Email Content</body></html>',
    disableopens: true
});

```

### POST /broadcasts/{id}/export
Export broadcast data
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
async function exportBroadcastData(broadcastId) {
    const url = `/broadcasts/${broadcastId}/export`;

    try {
        const response = await axios.post(url, null, {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Export Created:', response.data);
    } catch (error) {
        console.error('Error exporting broadcast data:', error.response ? error.response.data : error.message);
    }
}

// Example usage
exportBroadcastData('broadcast_id_here');
```

### GET /broadcasts/{id}/domainstats
Get detailed reporting on each domain mailed by a broadcast

```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
async function getDomainStats(broadcastId) {
    const url = `/broadcasts/${broadcastId}/domainstats`;

    try {
        const response = await axios.get(url, {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Domain Stats:', response.data);
    } catch (error) {
        console.error('Error fetching domain stats:', error.response ? error.response.data : error.message);
    }
}

// Example usage
getDomainStats('broadcast_id_here');
```

### GET /broadcasts/{id}/clientstats
Get the top devices, browsers and locations for a broadcasts

```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
async function getClientStats(broadcastId) {
    const url = `/broadcasts/${broadcastId}/clientstats`;

    try {
        const response = await axios.get(url, {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Client Stats:', response.data);
    } catch (error) {
        console.error('Error fetching client stats:', error.response ? error.response.data : error.message);
    }
}

// Example usage
getClientStats('broadcast_id_here');
```

### GET /broadcasts/{id}/msgs
Get a list of bounce messages for a broadcast
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
async function getBounceMessages(broadcastId, domain, type) {
    const url = `/broadcasts/${broadcastId}/msgs`;
    const params = { domain, type };

    try {
        const response = await axios.get(url, {
            headers: {
                'X-Auth-APIKey': apiKey
            },
            params
        });

        console.log('Bounce Messages:', response.data);
    } catch (error) {
        console.error('Error fetching bounce messages:', error.response ? error.response.data : error.message);
    }
}

// Example usage
getBounceMessages('broadcast_id_here', 'example.com', 'soft');


```
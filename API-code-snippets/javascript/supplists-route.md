### Create a Suppression List (POST /supplists)
```javascript
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

```

### Retrieve All Suppression Lists (GET /supplists)
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/';
async function getSuppressionLists() {
    const url = '/api/supplists';

    try {
        const response = await axios.get(url, {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });
        console.log('Suppression Lists:', response.data);
    } catch (error) {
        console.error('Error retrieving suppression lists:', error.response ? error.response.data : error.message);
    }
}

// Example usage
getSuppressionLists();

```

### Retrieve a Specific Suppression List (GET /supplists/{id})
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/';
async function getSuppressionListById(listId) {
    const url = `/api/supplists/${listId}`;

    try {
        const response = await axios.get(url, {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });
        console.log('Suppression List Details:', response.data);
    } catch (error) {
        console.error('Error retrieving suppression list:', error.response ? error.response.data : error.message);
    }
}

// Example usage
getSuppressionListById('list-id-here');

```

### Update a Suppression List (PATCH /supplists/{id})

```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/';
async function updateSuppressionList(listId, newName) {
    const url = `/api/supplists/${listId}`;
    const data = {
        name: newName
    };

    try {
        const response = await axios.patch(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-APIKey': apiKey
            }
        });
        console.log('Suppression List Updated:', response.data);
    } catch (error) {
        console.error('Error updating suppression list:', error.response ? error.response.data : error.message);
    }
}

// Example usage
updateSuppressionList('list-id-here', 'Updated Suppression List Name');
```

### Delete a Suppression List (DELETE /supplists/{id})
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/';
async function deleteSuppressionList(listId) {
    const url = `/api/supplists/${listId}`;

    try {
        const response = await axios.delete(url, {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });
        console.log('Suppression List Deleted:', response.data);
    } catch (error) {
        console.error('Error deleting suppression list:', error.response ? error.response.data : error.message);
    }
}

// Example usage
deleteSuppressionList('list-id-here');
```

### Add Data to a Suppression List (POST /supplists/{id}/add)
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/';
async function addDataToSuppressionList(listId, data) {
    const url = `/api/supplists/${listId}/add`;

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'text/plain',
                'X-Auth-APIKey': apiKey
            }
        });
        console.log('Data Added to Suppression List:', response.data);
    } catch (error) {
        console.error('Error adding data to suppression list:', error.response ? error.response.data : error.message);
    }
}

// Example usage
addDataToSuppressionList('list-id-here', 'bad@domain.com\nbad2@domain.com');
```

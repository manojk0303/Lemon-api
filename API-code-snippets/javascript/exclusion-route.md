### Retrieve All Exclusion Lists (GET /exclusion)
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
// Function to retrieve all exclusion lists
async function getExclusionLists() {
    const url = '/exclusion'; // Endpoint for retrieving exclusion lists

    try {
        const response = await axios.get(url, {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Exclusion Lists:', response.data);
    } catch (error) {
        console.error('Error retrieving exclusion lists:', error.response ? error.response.data : error.message);
    }
}

// Example usage
getExclusionLists();
```

### Add Data to an Exclusion List (POST /exclusion/{id}/add)
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

//Import API key from environment variables
const apiKey = process.env.API_KEY;

axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/api';
// Function to add data to an exclusion list
async function addToExclusionList(listId, dataItems) {
    const url = `/exclusion/${listId}/add`; // Endpoint to add data to an exclusion list

    const data = {
        data: dataItems // Array of emails or domains to add
    };

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Data Added to Exclusion List:', response.data);
    } catch (error) {
        console.error('Error adding data to exclusion list:', error.response ? error.response.data : error.message);
    }
}

// Example usage
addToExclusionList('e', ['bad@domain.com']); // Replace 'e' with the actual list ID
```

### POST /lists
Create a new contact list 
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables
// Replace with your actual API key

const apiKey = process.env.API_KEY;
axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/';
// Function to create a new contact list
async function createContactList(listName) {
    const url = '/api/lists'; // Base URL is assumed to be set in your axios instance

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

        console.log('Contact List Created:', response.data);
    } catch (error) {
        console.error('Error creating contact list:', error.response ? error.response.data : error.message);
    }
}

// Example usage
createContactList('My Contact List');
```


### GET /lists
Retrieve all contact lists
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

const apiKey = process.env.API_KEY;
axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/';

async function getAllContactLists() {
    try {
        const response = await axios.get('/api/lists', {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });
        console.log('Contact Lists:', response.data);
    } catch (error) {
        console.error('Error retrieving contact lists:', error.response ? error.response.data : error.message);
    }
}

// Example usage
getAllContactLists();
````


### GET /lists/{id}
Retrieve a contact list    
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

const apiKey = process.env.API_KEY;
axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/';
async function getContactListById(listId) {
    const url = `/api/lists/${listId}`;
    try {
        const response = await axios.get(url, {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });
        console.log('Contact List Details:', response.data);
    } catch (error) {
        console.error('Error retrieving contact list:', error.response ? error.response.data : error.message);
    }
}

// Example usage
getContactListById('your-list-id');
```
### PATCH /lists/{id}
Update a contact list
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

const apiKey = process.env.API_KEY;
axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/';
async function updateContactList(listId, newName) {
    const url = `/api/lists/${listId}`;
    const data = { name: newName };

    try {
        const response = await axios.patch(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-APIKey': apiKey
            }
        });
        console.log('Contact List Updated:', response.data);
    } catch (error) {
        console.error('Error updating contact list:', error.response ? error.response.data : error.message);
    }
}

// Example usage
updateContactList('your-list-id', 'Updated Contact List Name');
```

### DELETE /lists/{id} 
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

const apiKey = process.env.API_KEY;
axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/';
async function deleteContactList(listId) {
    const url = `/api/lists/${listId}`;
    try {
        const response = await axios.delete(url, {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });
        console.log('Contact List Deleted:', response.data);
    } catch (error) {
        console.error('Error deleting contact list:', error.response ? error.response.data : error.message);
    }
}

// Example usage
deleteContactList('your-list-id');
```

### POST /lists/{id}/export
Export contact list data
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

const apiKey = process.env.API_KEY;
axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/';

async function exportContactList(listId) {
    const url = `/api/lists/${listId}/export`;
    try {
        const response = await axios.post(url, null, {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });
        console.log('Export Initiated:', response.data);
    } catch (error) {
        console.error('Error exporting contact list:', error.response ? error.response.data : error.message);
    }
}

// Example usage
exportContactList('your-list-id');
```

### POST /lists/{id}/add
Add data to a contact list
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

const apiKey = process.env.API_KEY;
axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/';

async function addDataToContactList(listId, csvData) {
    const url = `/api/lists/${listId}/add`;
    try {
        const response = await axios.post(url, csvData, {
            headers: {
                'Content-Type': 'text/csv',
                'X-Auth-APIKey': apiKey
            }
        });
        console.log('Data Added to Contact List:', response.data);
    } catch (error) {
        console.error('Error adding data to contact list:', error.response ? error.response.data : error.message);
    }
}

// Example usage
addDataToContactList('your-list-id', 'Email,First Name\nted@domain.com,Ted\njudy@domain.com,Judy');

```

### POST /lists/{id}/feed
Add a single contact to a contact list
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

const apiKey = process.env.API_KEY;
axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/';

async function addSingleContactToList(listId, contactData) {
    const url = `/api/lists/${listId}/feed`;
    try {
        const response = await axios.post(url, contactData, {
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-APIKey': apiKey
            }
        });
        console.log('Contact Added:', response.data);
    } catch (error) {
        console.error('Error adding contact:', error.response ? error.response.data : error.message);
    }
}

// Example usage
addSingleContactToList('your-list-id', {
    email: 'ted@domain.com',
    tags: ['tag1', 'tag2'],
    data: { 'First Name': 'Ted' }
});
```


### GET /lists/{id}/domainstats
Get the number of contacts in each domain in the list
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

const apiKey = process.env.API_KEY;
axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/';

async function getDomainStats(listId) {
    const url = `/api/lists/${listId}/domainstats`;

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
getDomainStats('your-list-id');
```

### POST /lists/{id}/deletedomains
Remove contacts matching a set of domains

```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

const apiKey = process.env.API_KEY;
axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/';

async function deleteDomains(listId, domains) {
    const url = `/api/lists/${listId}/deletedomains`;

    try {
        const response = await axios.post(url, domains, {
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Deleted Domains:', response.data);
    } catch (error) {
        console.error('Error deleting domains:', error.response ? error.response.data : error.message);
    }
}

// Example usage
deleteDomains('your-list-id', ['domain.com', 'anotherdomain.com']);
```

### POST /lists/{id}/deletecontacts
Remove contacts by email addresses

```javascript

const axios = require('axios');
require('dotenv').config(); // Load environment variables

const apiKey = process.env.API_KEY;
axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/';

async function deleteContacts(listId, emails) {
    const url = `/api/lists/${listId}/deletecontacts`;

    try {
        const response = await axios.post(url, emails, {
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Deleted Contacts:', response.data);
    } catch (error) {
        console.error('Error deleting contacts:', error.response ? error.response.data : error.message);
    }
}

// Example usage
deleteContacts('your-list-id', ['contact1@domain.com', 'contact2@domain.com']);
```

### POST /lists/{id}/addunsubs
Unsubscribe many contacts from a list
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

const apiKey = process.env.API_KEY;
axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/';

async function addUnsubscribed(listId, emails) {
    const url = `/api/lists/${listId}/addunsubs`;

    try {
        const response = await axios.post(url, emails, {
            headers: {
                'Content-Type': 'text/plain',
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Unsubscribed Contacts:', response.data);
    } catch (error) {
        console.error('Error adding unsubscribed contacts:', error.response ? error.response.data : error.message);
    }
}

// Example usage
addUnsubscribed('your-list-id', 'email1@domain.com\nemail2@domain.com');

```

### GET /contactdata/{email}
Retrieve all data for a single contact
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

const apiKey = process.env.API_KEY;
axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/';

async function getContactData(email) {
    const url = `/api/contactdata/${email}`;

    try {
        const response = await axios.get(url, {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Contact Data:', response.data);
    } catch (error) {
        console.error('Error fetching contact data:', error.response ? error.response.data : error.message);
    }
}

// Example usage
getContactData('contact@domain.com');
```

### DELETE /contactdata/{email}
Delete all data for a single contact
```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

const apiKey = process.env.API_KEY;
axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/';

async function deleteContactData(email) {
    const url = `/api/contactdata/${email}`;

    try {
        const response = await axios.delete(url, {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('Deleted Contact Data:', response.data);
    } catch (error) {
        console.error('Error deleting contact data:', error.response ? error.response.data : error.message);
    }
}

// Example usage
deleteContactData('contact@domain.com');

```


### GET /alltags
Retrieve a list of all tags in the system

```javascript
const axios = require('axios');
require('dotenv').config(); // Load environment variables

const apiKey = process.env.API_KEY;
axios.defaults.baseURL = 'https://app.xn--lemn-sqa.com/';
async function getAllTags() {
    const url = '/api/alltags';

    try {
        const response = await axios.get(url, {
            headers: {
                'X-Auth-APIKey': apiKey
            }
        });

        console.log('All Tags:', response.data);
    } catch (error) {
        console.error('Error fetching tags:', error.response ? error.response.data : error.message);
    }
}

// Example usage
getAllTags();

```
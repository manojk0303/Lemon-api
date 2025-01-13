# LemnAPI

LemnAPI is a Node.js library that simplifies integration with the Lemn API, providing easy access to features such as managing lists, suppression lists, exclusions, broadcasts, exports, transactional messages, and webhooks.

## Features

- Manage lists and suppression lists
- Handle exclusions and broadcasts
- Send transactional messages
- Export and retrieve data
- Manage webhooks
- Fully customizable API requests with built-in error handling

## Installation

Install the package using npm:

```bash
npm install lemnapi
```

## Usage

### Initialization

Import and initialize the `LemnAPI` class with your API key:

```javascript
const LemnAPI = require('lemnapi');

const lemn = new LemnAPI('your-api-key', {
  baseUrl: 'https://api.lemn.io'
});
```

### Available Endpoints

#### 1. Lists
```javascript
// Create a new list
const newList = await lemn.lists.create('My List');

// Get all lists
const allLists = await lemn.lists.getAll();

// Get a specific list by ID
const list = await lemn.lists.get('listId');

// Update a list
const updatedList = await lemn.lists.update('listId', 'Updated List Name');

// Delete a list
await lemn.lists.delete('listId');
```

#### 2. Suppression Lists
```javascript
// Create a suppression list
const newSupList = await lemn.supplists.create('My SupList');

// Add data to a suppression list
await lemn.supplists.addData('supListId', 'email1@example.com\nemail2@example.com');
```

#### 3. Exclusions
```javascript
// Add exclusions
await lemn.exclusion.add('email@example.com');

// Get all exclusions
const exclusions = await lemn.exclusion.getAll();
```

#### 4. Broadcasts
```javascript
// Schedule a broadcast
const broadcast = await lemn.broadcasts.create('My Broadcast', options);

// Get broadcast by ID
const broadcastDetails = await lemn.broadcasts.get('broadcastId');
```

#### 5. Transactional
```javascript
// Send a transactional message
await lemn.transactional.send({
  fromname: 'My App',
  fromemail: 'no-reply@myapp.com',
  to: 'user@example.com',
  subject: 'Welcome!',
  body: '<h1>Hello, User!</h1>'
});
```

#### 6. Webhooks
```javascript
// Create a new webhook
const webhook = await lemn.webhooks.create('https://myapp.com/webhook', 'event_type');

// Delete a webhook
await lemn.webhooks.delete('webhookId');
```

## Configuration

When initializing `LemnAPI`, you can pass the following options:

| Option      | Type   | Default                 | Description                     |
|-------------|--------|-------------------------|---------------------------------|
| `baseUrl`   | String | `https://api.lemn.io`  | Base URL for the Lemn API.      |

## Error Handling

All methods return Promises, so you can use `.then()` and `.catch()` or `async/await` for error handling:

```javascript
try {
  const list = await lemn.lists.create('My List');
  console.log('List created:', list);
} catch (error) {
  console.error('Error creating list:', error.message);
}
```

## Development

### Clone the Repository
```bash
git clone https://github.com/yourusername/lemnapi.git
cd lemnapi
```

### Run Tests
```bash
npm test
```

## Deployment

1. Update the version in `package.json`:
   ```bash
   npm version patch
   ```

2. Publish to npm:
   ```bash
   npm publish
   ```

## License

This project is licensed under the MIT License.

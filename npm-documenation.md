# Lemon-API

A Node.js client for the Lemn transactional email service.

## Installation

```bash
npm install lemn-api-client
```

## Usage

```javascript
const LemnAPIClient = require("lemn-api-client");

const client = new LemnAPIClient("your-api-key");

// Send a transactional email
client.transactional
  .send({
    fromname: "Sender Name",
    fromemail: "sender@example.com",
    to: "recipient@example.com",
    subject: "Test Email",
    body: "<html><body>Hello World!</body></html>",
  })
  .then((response) => console.log(response))
  .catch((error) => console.error(error.message));
```

## Configuration

You can pass additional configuration when initializing the client:

```javascript
const client = new LemnAPIClient("your-api-key", {
  baseURL: "https://custom-url.com/api",
  timeout: 5000, // 5 seconds
});
```

## License

MIT

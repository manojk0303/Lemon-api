require("dotenv").config();
const LemnAPIClient = require("../lemn-api-client/src/index");

const client = new LemnAPIClient(process.env.LEMON_API_KEY);

client.transactional
  .send({
    fromname: "Sender",
    fromemail: "manojk030303@gmail.com",
    to: "manojkumarcpyk@gmail.com",
    subject: "Test",
    body: "<html><body>Test message. zoomakazoo .</body></html>",
  })
  .then((response) => console.log(response));

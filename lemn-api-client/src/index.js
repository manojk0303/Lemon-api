const TransactionalEmail = require("./transactional");

class LemnAPIClient {
  constructor(apiKey, config = {}) {
    if (!apiKey) {
      throw new Error("API key is required");
    }

    this.config = {
      baseURL: "https://app.xn--lemn-sqa.com/api",
      timeout: 30000, // 30 seconds default timeout
      ...config,
    };

    this.apiKey = apiKey;
    this.transactional = new TransactionalEmail(this.apiKey, this.config);
  }
}

module.exports = LemnAPIClient;

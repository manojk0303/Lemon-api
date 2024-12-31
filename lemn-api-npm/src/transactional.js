const axios = require("axios");

class TransactionalEmail {
  constructor(apiKey, config) {
    this.apiKey = apiKey;
    this.config = config;
  }

  async send(params) {
    // Validate required fields
    const requiredFields = ["fromname", "fromemail", "to", "subject", "body"];
    for (const field of requiredFields) {
      if (!params[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    try {
      const response = await axios({
        method: "post",
        url: `${this.config.baseURL}/transactional/send`,
        headers: {
          "Content-Type": "application/json",
          "X-Auth-APIKey": this.apiKey,
        },
        timeout: this.config.timeout,
        data: params,
      });
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error(`Failed to send email: ${errorMessage}`);
    }
  }
}

module.exports = TransactionalEmail;

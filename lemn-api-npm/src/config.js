class Config {
    constructor(apiKey, baseUrl = 'https://app.xn--lemn-sqa.com/api') {
      this.apiKey = apiKey;
      this.baseUrl = baseUrl;
    }
  
    getHeaders() {
      return {
        'X-Auth-APIKey': this.apiKey,
        'Content-Type': 'application/json'
      };
    }
  }
  
  module.exports = Config;
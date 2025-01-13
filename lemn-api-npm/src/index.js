
const Config = require('./config');
const Lists = require('./endpoints/lists');
const Supplists = require('./endpoints/supplists');
const Exclusion = require('./endpoints/exclusion');
const Broadcasts = require('./endpoints/broadcasts');
const Exports = require('./endpoints/exports');
const Transactional = require('./endpoints/transactional');
const Webhooks = require('./endpoints/webhooks');
class LemnAPI {
  constructor(apiKey, options = {}) {
    this.config = new Config(apiKey, options.baseUrl);
    
    // Initialize endpoints
    this.lists = new Lists(this);
    this.supplists = new Supplists(this);
    this.exclusion = new Exclusion(this);
    this.broadcasts = new Broadcasts(this);
    this.exports = new Exports(this);
    this.transactional = new Transactional(this);
    this.webhooks = new Webhooks(this);
  }

  async request(method, endpoint, data = null,customOptions = {}) {
    const url = `${this.config.baseUrl}${endpoint}`;
    const extraHeader  = customOptions.headers;
    const header = Object.assign({}, this.config.getHeaders(), extraHeader);
    delete customOptions.headers
    const options = {
      method,
      headers: header,
      body: data ? JSON.stringify(data) : undefined,
      ...customOptions
    };
    console.log('url:',url);
    // console.log('options:',options);
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'API request failed');
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = LemnAPI;
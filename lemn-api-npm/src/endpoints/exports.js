class ExportsAPI {
    constructor(apiClient) {
      this.apiClient = apiClient; // Parent LemnAPI instance
    }
  
    // Retrieve all exported files
    async getAll() {
      return await this.apiClient.request('GET', '/exports');
    }
  }
  
  module.exports = ExportsAPI;
  
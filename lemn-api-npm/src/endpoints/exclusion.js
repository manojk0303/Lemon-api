class ExclusionAPI {
    constructor(apiClient) {
      this.apiClient = apiClient; // Parent LemnAPI instance
    }
  
    // Retrieve all exclusion lists
    async getAll() {
      return await this.apiClient.request('GET', '/exclusion');
    }
  
    // Add data to an exclusion list
    async addToList(id, data) {
      return await this.apiClient.request('POST', `/exclusion/${id}/add`, { data });
    }
  }
  
  module.exports = ExclusionAPI;
  
class WebhooksAPI {
    constructor(apiClient) {
      this.apiClient = apiClient; // Parent LemnAPI instance
    }
  
    // Create a new webhook
    async createWebhook(data) {
      return await this.apiClient.request('POST', '/webhooks', data);
    }
  
    // Retrieve all webhooks
    async getAllWebhooks() {
      return await this.apiClient.request('GET', '/webhooks');
    }
  
    // Update a webhook
    async updateWebhook(id, data) {
      return await this.apiClient.request('PATCH', `/webhooks/${id}`, data);
    }
  
    // Delete a webhook
    async deleteWebhook(id) {
      return await this.apiClient.request('DELETE', `/webhooks/${id}`);
    }
  }
  
  module.exports = WebhooksAPI;
  
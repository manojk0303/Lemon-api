const FormData = require('form-data'); // Use form-data package in Node.js
const fetch = require('node-fetch'); // Required for Node.js < 18

class BroadcastsAPI {
    constructor(apiClient,baseUrl,apiKey) {
      this.apiClient = apiClient;
      this.baseUrl = baseUrl;
      this.apiKey = apiKey;
    }
  
    // Get available postal routes - done
    async getUserRoutes() {
      return await this.apiClient.request('GET', '/userroutes');
    }

    async uploadFile(file) {
      const formData = new FormData();
      formData.append('file', file);
      const url = this.baseUrl+"/imageupload";
      // console.log("url",url);
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
            'X-Auth-APIKey': this.apiKey,
            ...formData.getHeaders()
        }   
    });
    return response.json();
    }
  
    
    // Create a new broadcast - done
    async create(broadcastData) {
      return await this.apiClient.request('POST', '/broadcasts', broadcastData);
    }
  
    // Get all broadcasts with optional filters -done
    async getAll(options = {}) {
      const queryParams = new URLSearchParams();
      if (options.older) queryParams.append('older', options.older);
      if (options.search) queryParams.append('search', options.search);
      
      const endpoint = `/broadcasts${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
      return await this.apiClient.request('GET', endpoint);
    }
  
    // Get a specific broadcast -done
    async get(id) {
      return await this.apiClient.request('GET', `/broadcasts/${id}`);
    }
  
    // Update a draft broadcast -done
    async updateDraft(id, updateData) {
      return await this.apiClient.request('PATCH', `/broadcasts/${id}`, updateData);
    }
  
    // Delete a broadcast -done
    async delete(id) {
      return await this.apiClient.request('DELETE', `/broadcasts/${id}`);
    }
  
    // Start sending a broadcast immediately -done
    async start(id) {
      return await this.apiClient.request('POST', `/broadcasts/${id}/start`,{id});
    }
  
  // Send a test email-done
async sendTest(id, testData) {
    if (!id || typeof id !== 'string') {
      throw new Error('Invalid broadcast ID');
    }
    if (!testData || !testData.to) {
      throw new Error('Invalid test data: "to" is required');
    }
  
    return await this.apiClient.request(
      'POST',
      `/broadcasts/${id}/test`,
      testData
    );
  }
  
  
    // Cancel a broadcast -done
    async cancel(id) {
      return await this.apiClient.request('POST', `/broadcasts/${id}/cancel`,{id});
    }
  
    // Duplicate a broadcast-done
    async duplicate(id) {
      return await this.apiClient.request('POST', `/broadcasts/${id}/duplicate` ,{id});
    }
  
    // Update a sent broadcast
    async updateSent(id, updateData) {
      return await this.apiClient.request('POST', `/broadcasts/${id}/update`, updateData,{id});
    }
  
    // Export broadcast data
    async export(id) {
      return await this.apiClient.request('POST', `/broadcasts/${id}/export`,{id});
    }
  
    // Get domain statistics for a broadcast -done
    async getDomainStats(id) {
      return await this.apiClient.request('GET', `/broadcasts/${id}/domainstats`);
    }
  
    // Get client statistics for a broadcast (devices, browsers, locations) -done
    async getClientStats(id) {
      return await this.apiClient.request('GET', `/broadcasts/${id}/clientstats`);
    }
  
    // Get bounce messages for a broadcast -done
    async getBounceMessages(id, domain, type) {
      const queryParams = new URLSearchParams();
      queryParams.append('domain', domain);
      queryParams.append('type', type);
      
      return await this.apiClient.request('GET', `/broadcasts/${id}/msgs?${queryParams.toString()}`);
    }
  }
  
  module.exports = BroadcastsAPI;
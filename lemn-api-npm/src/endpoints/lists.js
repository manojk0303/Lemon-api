class ListsAPI {
    constructor(apiClient) {
      this.apiClient = apiClient; // Parent LemnAPI instance
    }
  
    async create(name) {
      return await this.apiClient.request('POST', '/lists', { name });
    }
  
    async getAll() {
      return await this.apiClient.request('GET', '/lists');
    }
  
    async get(id) {
      return await this.apiClient.request('GET', `/lists/${id}`);
    }
  
    async update(id, updatedData) {
      return await this.apiClient.request('PATCH', `/lists/${id}`, updatedData);
    }
  
    async delete(id) {
      return await this.apiClient.request('DELETE', `/lists/${id}`);
    }
    async export(id) {
      return await this.apiClient.request('POST', `/lists/${id}/export`,{
        id
      });
    }

  async addData(id, csvData) {
    const endpoint = `/lists/${id}/add`;
    try {
        return await this.apiClient.request('POST', endpoint, csvData, {
            headers: {
                'Content-Type': 'text/csv',
            },
            body: csvData, // Include CSV data in the request body
        });
    } catch (error) {
        console.error('Error adding data to contact list:', error.message);
        throw error;
    }
}

  

  async addSingleContact(listId, contact) {
    return await this.apiClient.request('POST', `/lists/${listId}/feed`, contact);
  }

  async getDomainStats(listId) {
    return await this.apiClient.request('GET', `/lists/${listId}/domainstats`);
  }

  async deleteDomains(listId, domains) {
    return await this.apiClient.request('POST', `/lists/${listId}/deletedomains`, domains );
  }


  async deleteContacts(listId, emails) {
    return await this.apiClient.request('POST', `/lists/${listId}/deletecontacts`,  emails );
  }


  async addUnsubscribes(listId, emails) {
    return await this.apiClient.request('POST', `/lists/${listId}/addunsubs`, emails,{
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  async getContactData(email) {
    return await this.apiClient.request('GET', `/contactdata/${email}`);
  }

  async deleteContactData(email) {
    return await this.apiClient.request('DELETE', `/contactdata/${email}`);
  }

  async getAllTags() {
    return await this.apiClient.request('GET', `/alltags`);
  }
  }
  
  module.exports = ListsAPI;
  
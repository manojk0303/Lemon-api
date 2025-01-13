class Supplists {
  constructor(apiClient) {
    this.apiClient = apiClient; // Parent LemnAPI instance
  }

  /**
   * Create a new suppression list
   * @param {string} listName - Name of the suppression list
   * @returns {Promise} API response
   */
  async create(listName) {
    const url = '/supplists';
    const data = { name: listName };

    return await this.apiClient.request('POST', url, data);
  }

  /**
   * Get all suppression lists
   * @returns {Promise} API response
   */
  async getAll() {
    const url = '/supplists';

    return await this.apiClient.request('GET', url);
  }

  /**
   * Get a specific suppression list by ID
   * @param {string} listId - ID of the suppression list
   * @returns {Promise} API response
   */
  async get(listId) {
    const url = `/supplists/${listId}`;

    return await this.apiClient.request('GET', url);
  }

  /**
   * Update a suppression list
   * @param {string} listId - ID of the suppression list
   * @param {string} newName - New name for the suppression list
   * @returns {Promise} API response
   */
  async update(listId, newName) {
    const url = `/supplists/${listId}`;
    const data = { name: newName };

    return await this.apiClient.request('PATCH', url, data);
  }

  /**
   * Delete a suppression list
   * @param {string} listId - ID of the suppression list
   * @returns {Promise} API response
   */
  async delete(listId) {
    const url = `/supplists/${listId}`;

    return await this.apiClient.request('DELETE', url);
  }

  /**
   * Add data to a suppression list
   * @param {string} listId - ID of the suppression list
   * @param {string} data - Data to add (newline-separated email addresses)
   * @returns {Promise} API response
   */
  async addData(listId, data) {
    const url = `/supplists/${listId}/add`;

    return await this.apiClient.request('POST', url, data, {
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}

module.exports = Supplists;

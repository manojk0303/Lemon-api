class TransactionalAPI {
    constructor(apiClient) {
      this.apiClient = apiClient; // Parent LemnAPI instance
    }
  
    /**
     * Send a transactional message
     * @param {Object} messageData - The details of the transactional message
     * @param {string} messageData.fromname - Name of the sender
     * @param {string} messageData.fromemail - Email address of the sender
     * @param {string} messageData.to - Recipient's email address
     * @param {string} [messageData.toname] - Recipient's name
     * @param {string} messageData.body - Message body (HTML format)
     * @param {string} messageData.subject - Email subject
     * @param {string} [messageData.replyto] - Reply-to email address
     * @param {string} [messageData.returnpath] - Return-path email address
     * @param {string} [messageData.tag] - Message tag for reporting purposes
     * @param {Object} [messageData.variables] - Jinja2 template variables
     * @param {string} [messageData.route] - Specific postal route to send through
     * @param {string} [messageData.template] - Template ID to use
     * @returns {Promise<Object>} - API response
     */
    async send(messageData) {
      return await this.apiClient.request('POST', '/transactional/send', messageData);
    }
  }
  
  module.exports = TransactionalAPI;
  
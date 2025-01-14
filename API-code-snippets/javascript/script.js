require('dotenv').config();
const fs = require('fs');
const FormData = require('form-data');
const fetch = require('node-fetch'); // Required for Node.js < 18

const apiKey = process.env.API_KEY;
const baseURL = 'https://app.xn--lemn-sqa.com/api';
// async function uploadFile(file,filename) {
//       const formData = new FormData();
//       formData.append('image', file,{

//       });
  
//       const headers = formData.getHeaders();
//       // Remove the default Content-Type header
//       return await this.apiClient.request('POST', '/imageupload', formData, {
//         headers: headers,
//         skipStringify: true,
//         removeContentType: true  // Add this flag to remove default Content-Type
//       });
//     }

async function uploadImage(filePath) {
    const url = `${baseURL}/imageupload`;
    
    // Create FormData and append file
    const formData = new FormData();
    const fileStream = fs.createReadStream(filePath);
    formData.append('file', fileStream);

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
            headers: {
                'X-Auth-APIKey': apiKey,
                // Let FormData set its own boundary
                ...formData.getHeaders()
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Server response:', errorText);
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }

        const data = await response.json();
        console.log('Image uploaded successfully:', data);
        return data;
    } catch (error) {
        console.error('Error uploading image:', error.message);
        throw error;
    }
}

// Usage with better error handling
uploadImage('./download.jpeg')
    .then(response => {
        console.log('Upload complete:', response);
    })
    .catch(error => {
        console.error('Upload failed:', error);
    });
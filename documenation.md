# Lemon Documentation

Welcome to the official documentation for **Lemon**, your go-to platform for streamlined communication and contact management. This guide covers use cases, API integration, and advanced functionalities like AI-driven messaging.

---

## Table of Contents
1. [Use Cases](#use-cases)
   - [Simple](#simple)
   - [Intermediate](#intermediate)
   - [Advanced](#advanced)
2. [API Integration](#api-integration)
   - [Key Features](#key-features)
   - [Authorization](#authorization)
   - [Example Request](#example-request)
3. [AI Integration](#ai-integration)
   - [OpenAI](#openai)
   - [Anthropic Claude](#anthropic-claude)
   - [Google AI](#google-ai)
   - [IBM Watson](#ibm-watson)

---

## Use Cases

### Simple

<details>
<summary>Messages</summary>

#### Types of Messages
- **Broadcasts**: Send a single message to a large audience efficiently. Perfect for campaigns and announcements.
- **Funnels**: Guide your audience through automated message flows.
- **Transactional**: Deliver real-time messages triggered by user actions, like order confirmations or password resets.
- **Throttles**: Manage message delivery rates to avoid overwhelming recipients.
</details>

<details>
<summary>Contacts</summary>

#### Contact Management
- **Contact Lists**: Organize your audience with customizable lists.
- **Segments**: Group your audience by behavior, demographics, or preferences.
- **Suppression**: Exclude specific contacts or domains to ensure compliance.
- **Forms**: Collect data and grow your audience with customizable forms.
</details>

<details>
<summary>Integrate</summary>

#### Tools for Integration
- **API & SMTP**: Send messages programmatically or via email protocols.
- **Webhooks**: Automate workflows with real-time event notifications.
- **Zapier & Pabbly**: Connect Lemon to various platforms and automate tasks effortlessly.
</details>

---

### Intermediate

#### API Integration
Lemon's RESTful API provides developers full control over messaging and contact management.

#### Key Features
- Create and manage contact lists, suppression lists, and broadcasts.
- Send transactional emails and tag/untag contacts dynamically.

#### Authorization
Include your API key in the `X-Auth-APIKey` header. Retrieve your API key from the **Integrate > API & SMTP** section in the Lemon UI.

#### Example Request
```http
POST /transactional/send HTTP/1.1
Host: app.xn--lemn-sqa.com
Content-Type: application/json
X-Auth-APIKey: your_lemon_api_key

{
  "fromname": "Your SaaS",
  "fromemail": "noreply@yoursaas.com",
  "to": "recipient@example.com",
  "subject": "Welcome!",
  "body": "Thank you for joining us."
}
```

For more details about available routes, refer to the API documentation at [Lemon API Docs](https://app.xn--lemn-sqa.com/api/doc#/).

---

### Advanced

#### Integrating AI
Combine Lemon with AI technologies for enhanced personalization and efficiency. Below are code examples using OpenAI, Anthropic Claude, Google AI, and IBM Watson.

#### AI Integration Examples

<details>
<summary>OpenAI</summary>

##### Python Code
```python
import openai
import requests

def generate_and_send_email(openai_api_key, lemon_api_key, user_data):
    openai.api_key = openai_api_key

    # Generate email content with OpenAI
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=f"Write an email to {user_data['name']} about their recent activity: {user_data['activity']}",
        max_tokens=200
    )
    email_content = response.choices[0].text.strip()

    # Send email using Lemon API
    response = requests.post(
        'https://app.xn--lemn-sqa.com/api/transactional/send',
        headers={
            'Content-Type': 'application/json',
            'X-Auth-APIKey': lemon_api_key
        },
        json={
            "fromname": "Your SaaS",
            "fromemail": "noreply@yoursaas.com",
            "to": user_data['email'],
            "subject": "Your Activity Update",
            "body": f"<html><body>{email_content}</body></html>"
        }
    )
    return response.json()

# Usage
result = generate_and_send_email(
    'your_openai_api_key',
    'your_lemon_api_key',
    {
        "name": "John",
        "email": "john@example.com",
        "activity": "Completed 5 workouts this week"
    }
)
print(result)
```
</details>

<details>
<summary>Anthropic Claude</summary>

##### JavaScript Code
```javascript
const axios = require('axios');

async function generateAndSendEmail(anthropicApiKey, lemonApiKey, userData) {
    const anthropicResponse = await axios.post(
        'https://api.anthropic.com/v1/complete',
        {
            prompt: `Human: Write an email to ${userData.name} about their recent activity: ${userData.activity}\n\nAssistant:`,
            model: "claude-v1",
            max_tokens_to_sample: 200,
            stop_sequences: ["\n\nHuman:"]
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': anthropicApiKey
            }
        }
    );

    const emailContent = anthropicResponse.data.completion.trim();

    const lemonResponse = await axios.post(
        'https://app.xn--lemn-sqa.com/api/transactional/send',
        {
            fromname: "Your SaaS",
            fromemail: "noreply@yoursaas.com",
            to: userData.email,
            subject: "Your Activity Update",
            body: `<html><body>${emailContent}</body></html>`
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-APIKey': lemonApiKey
            }
        }
    );

    return lemonResponse.data;
}
```
</details>

For more integrations, refer to the relevant AI SDK documentation or Lemon's API specifications.

---

Explore Lemon’s capabilities further and tailor them to your business needs for effective and streamlined communication management.


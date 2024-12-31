

### 1. **Create a new webhook (POST /webhooks)**
```python
import requests
import json

url = "https://app.xn--lemn-sqa.com/api/webhooks"
headers = {
    "X-Auth-APIKey": "your_api_key",  # Replace with your actual API key
    "Content-Type": "application/json"
}

data = {
    "name": "My Webhook",
    "target_url": "https://domain.com/path",
    "event": "click"
}

response = requests.post(url, headers=headers, json=data)

if response.status_code == 201:
    print("Webhook created successfully:", response.json())
else:
    print("Failed to create webhook:", response.status_code, response.text)
```

### 2. **Retrieve the list of webhooks (GET /webhooks)**
```python
import requests

url = "https://app.xn--lemn-sqa.com/api/webhooks"
headers = {
    "X-Auth-APIKey": "your_api_key"  # Replace with your actual API key
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print("Webhooks retrieved successfully:", response.json())
else:
    print("Failed to retrieve webhooks:", response.status_code, response.text)
```

### 3. **Update a webhook (PATCH /webhooks/{id})**
```python
import requests
import json

webhook_id = "webhook_id_here"  # Replace with the actual webhook ID
url = f"https://app.xn--lemn-sqa.com/api/webhooks/{webhook_id}"
headers = {
    "X-Auth-APIKey": "your_api_key",  # Replace with your actual API key
    "Content-Type": "application/json"
}

data = {
    "name": "Updated Webhook",
    "target_url": "https://newdomain.com/path",
    "event": "open"
}

response = requests.patch(url, headers=headers, json=data)

if response.status_code == 200:
    print("Webhook updated successfully:", response.json())
else:
    print("Failed to update webhook:", response.status_code, response.text)
```

### 4. **Delete a webhook (DELETE /webhooks/{id})**
```python
import requests

webhook_id = "webhook_id_here"  # Replace with the actual webhook ID
url = f"https://app.xn--lemn-sqa.com/api/webhooks/{webhook_id}"
headers = {
    "X-Auth-APIKey": "your_api_key"  # Replace with your actual API key
}

response = requests.delete(url, headers=headers)

if response.status_code == 200:
    print("Webhook deleted successfully.")
else:
    print("Failed to delete webhook:", response.status_code, response.text)
```



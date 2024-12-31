

```python
import requests
import json

# API URL
url = "https://app.xn--lemn-sqa.com/api/transactional/send"

# Your API Key
api_key = "your_api_key_here"

# Headers for authentication and content type
headers = {
    "X-Auth-APIKey": api_key,
    "Content-Type": "application/json"
}

# Message data (example)
message_data = {
    "fromname": "Bob Sender",
    "fromemail": "bob@sender.com",
    "to": "recipient@domain.com",
    "toname": "Joe User",
    "body": "<html><body>Hello!</body></html>",
    "subject": "My Subject",
    "replyto": "replyto@sender.com",
    "returnpath": "returnpath@sender.com",
    "tag": "newusers",
    "variables": {
        "var1": "value1",
        "var2": "value2"
    },
    "route": "your_route_here",  # Optional
    "template": "your_template_id"  # Optional
}

# Send POST request to the API
response = requests.post(url, headers=headers, json=message_data)

# Check response status
if response.status_code == 200:
    print("Success:", response.json())
else:
    print("Failed with status code:", response.status_code, response.text)
```


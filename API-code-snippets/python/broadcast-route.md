 **GET /userroutes** – Retrieve available postal routes:

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/userroutes"
headers = {
    "X-Auth-APIKey": "your_api_key_here"
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print(response.json())
else:
    print("Failed to fetch routes:", response.status_code)
```

 **POST /imageupload** – Upload an image:

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/imageupload"
headers = {
    "X-Auth-APIKey": "your_api_key_here"
}
files = {'file': open('image.jpg', 'rb')}  # Replace with your file path

response = requests.post(url, headers=headers, files=files)

if response.status_code == 200:
    print("Image uploaded successfully:", response.json())
else:
    print("Failed to upload image:", response.status_code)
```

 **POST /broadcasts** – Create a new broadcast:

```python
import requests
import json

url = "https://app.xn--lemn-sqa.com/api/broadcasts"
headers = {
    "X-Auth-APIKey": "your_api_key_here",
    "Content-Type": "application/json"
}

broadcast_data = {
    "name": "My Broadcast",
    "scheduled_for": "2024-12-31T05:54:58.522Z",
    "tags": ["tagname"],
    "replyto": "from@domain.com",
    "subject": "My Email Subject",
    "fromname": "Friendly Name",
    "returnpath": "from@domain.com",
    "fromemail": "from@domain.com",
    "disableopens": True,
    "lists": ["list_id"],
    "segments": ["segment_id"],
    "supplists": ["suppress_list_id"],
    "suppsegs": ["suppress_segment_id"],
    "supptags": ["tagname"],
    "rawText": "<html><body>Email Text</body></html>",
    "openaddtags": ["tagname"],
    "openremtags": ["tagname"],
    "sendaddtags": ["tagname"],
    "sendremtags": ["tagname"],
    "clickaddtags": ["tagname"],
    "clickremtags": ["tagname"]
}

response = requests.post(url, headers=headers, data=json.dumps(broadcast_data))

if response.status_code == 201:
    print("Broadcast created successfully:", response.json())
else:
    print("Failed to create broadcast:", response.status_code)
```

 **GET /broadcasts** – Retrieve broadcasts:

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/broadcasts"
headers = {
    "X-Auth-APIKey": "your_api_key_here"
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print(response.json())
else:
    print("Failed to fetch broadcasts:", response.status_code)
```

**GET /broadcasts/{id}** – Retrieve a specific broadcast:

```python
import requests

broadcast_id = "your_broadcast_id_here"
url = f"https://app.xn--lemn-sqa.com/api/broadcasts/{broadcast_id}"
headers = {
    "X-Auth-APIKey": "your_api_key_here"
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print(response.json())
else:
    print("Failed to fetch broadcast:", response.status_code)
```
###  **PATCH** `/broadcasts/{id}`
Update a draft broadcast:
```python
import requests
import json

url = "https://app.xn--lemn-sqa.com/api/broadcasts/{id}"
headers = {
    "X-Auth-APIKey": "your_api_key",
    "Content-Type": "application/json"
}
data = {
    "name": "My Broadcast",
    "scheduled_for": "2024-12-31T05:55:11.434Z",
    "tags": ["tagname"],
    "replyto": "from@domain.com",
    "subject": "My Email Subject",
    "fromname": "Friendly Name",
    "returnpath": "from@domain.com",
    "fromemail": "from@domain.com",
    "disableopens": True,
    "lists": ["string"],
    "segments": ["string"],
    "supplists": ["string"],
    "suppsegs": ["string"],
    "supptags": ["tagname"],
    "rawText": "<html><body>Email Text</body></html>",
    "openaddtags": ["tagname"],
    "openremtags": ["tagname"],
    "sendaddtags": ["tagname"],
    "sendremtags": ["tagname"],
    "clickaddtags": ["tagname"],
    "clickremtags": ["tagname"]
}

response = requests.patch(url, headers=headers, data=json.dumps(data))
print(response.json())
```

###  **DELETE** `/broadcasts/{id}`
Delete a broadcast:
```python
import requests

url = "https://app.xn--lemn-sqa.com/api/broadcasts/{id}"
headers = {
    "X-Auth-APIKey": "your_api_key"
}

response = requests.delete(url, headers=headers)
print(response.json())
```

###  **POST** `/broadcasts/{id}/start`
Send a broadcast immediately:
```python
import requests

url = "https://app.xn--lemn-sqa.com/api/broadcasts/{id}/start"
headers = {
    "X-Auth-APIKey": "your_api_key"
}

response = requests.post(url, headers=headers)
print(response.json())
```

###  **POST** `/broadcasts/{id}/test`
Send a test email for a broadcast:
```python
import requests
import json

url = "https://app.xn--lemn-sqa.com/api/broadcasts/{id}/test"
headers = {
    "X-Auth-APIKey": "your_api_key",
    "Content-Type": "application/json"
}
data = {
    "to": "recipient@domain.com",
    "route": "string"
}

response = requests.post(url, headers=headers, data=json.dumps(data))
print(response.json())
```

###  **POST** `/broadcasts/{id}/cancel`
Cancel a broadcast:
```python
import requests

url = "https://app.xn--lemn-sqa.com/api/broadcasts/{id}/cancel"
headers = {
    "X-Auth-APIKey": "your_api_key"
}

response = requests.post(url, headers=headers)
print(response.json())
```

 **POST /broadcasts/{id}/duplicate**

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/broadcasts/{id}/duplicate"
headers = {
    "X-Auth-APIKey": "your_api_key",  # Replace with your actual API key
    "Content-Type": "application/json"
}
data = {
    "id": "your_broadcast_id"  # Replace with the actual broadcast ID
}

response = requests.post(url, json=data, headers=headers)

if response.status_code == 200:
    print("Success:", response.json())
else:
    print(f"Error {response.status_code}: {response.text}")
```

 **POST /broadcasts/{id}/update**

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/broadcasts/{id}/update"
headers = {
    "X-Auth-APIKey": "your_api_key",  # Replace with your actual API key
    "Content-Type": "application/json"
}
data = {
    "name": "Updated Broadcast Name",
    "subject": "Updated Email Subject",
    "fromname": "Updated From Name",
    "replyto": "updated_replyto@domain.com",
    "rawText": "<html><body>Updated Email Text</body></html>"
    # Include other properties you wish to update
}

response = requests.post(url, json=data, headers=headers)

if response.status_code == 200:
    print("Success:", response.json())
else:
    print(f"Error {response.status_code}: {response.text}")
```

 **POST /broadcasts/{id}/export**

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/broadcasts/{id}/export"
headers = {
    "X-Auth-APIKey": "your_api_key",  # Replace with your actual API key
}

response = requests.post(url, headers=headers)

if response.status_code == 200:
    print("Success:", response.json())
else:
    print(f"Error {response.status_code}: {response.text}")
```

 **GET /broadcasts/{id}/domainstats**

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/broadcasts/{id}/domainstats"
headers = {
    "X-Auth-APIKey": "your_api_key",  # Replace with your actual API key
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print("Success:", response.json())
else:
    print(f"Error {response.status_code}: {response.text}")
```

 **GET /broadcasts/{id}/clientstats**

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/broadcasts/{id}/clientstats"
headers = {
    "X-Auth-APIKey": "your_api_key",  # Replace with your actual API key
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print("Success:", response.json())
else:
    print(f"Error {response.status_code}: {response.text}")
```

 **GET /broadcasts/{id}/msgs**

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/broadcasts/{id}/msgs"
headers = {
    "X-Auth-APIKey": "your_api_key",  # Replace with your actual API key
}
params = {
    "domain": "example.com",  # Replace with the actual domain name
    "type": "soft"  # "soft" or "hard"
}

response = requests.get(url, headers=headers, params=params)

if response.status_code == 200:
    print("Success:", response.json())
else:
    print(f"Error {response.status_code}: {response.text}")
```


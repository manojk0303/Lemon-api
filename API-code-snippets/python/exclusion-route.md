---

### **Retrieve All Exclusion Lists**
**GET** `/exclusion`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/exclusion"
headers = {
    "X-Auth-APIKey": "API_KEY",
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print("Exclusion lists:", response.json())
else:
    print("Failed to retrieve exclusion lists:", response.text)
```

---

### **Add Data to an Exclusion List**
**POST** `/exclusion/{id}/add`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/exclusion/{id}/add"  # Replace {id} with the exclusion list ID
headers = {
    "X-Auth-APIKey": "API_KEY",
    "Content-Type": "application/json",
}

data = {
    "data": ["bad@domain.com"]  # Add emails or domains as per the exclusion list type
}

response = requests.post(url, headers=headers, json=data)

if response.status_code == 200:
    print("Data added to exclusion list successfully.")
else:
    print("Failed to add data to exclusion list:", response.text)
```

---



Here is the refined Python code using `X-Auth-APIKey` instead of `Authorization` for all the routes.

---

### **Create a New Suppression List**
**POST** `/supplists`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/supplists"
headers = {
    "X-Auth-APIKey": "API_KEY",
    "Content-Type": "application/json",
}

data = {
    "name": "My Suppression List"
}

response = requests.post(url, headers=headers, json=data)

if response.status_code == 201:
    print("Suppression list created:", response.json())
else:
    print("Failed to create suppression list:", response.text)
```

---

### **Retrieve All Suppression Lists**
**GET** `/supplists`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/supplists"
headers = {
    "X-Auth-APIKey": "API_KEY",
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print("Suppression lists:", response.json())
else:
    print("Failed to retrieve suppression lists:", response.text)
```

---

### **Retrieve a Suppression List**
**GET** `/supplists/{id}`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/supplists/{id}"  # Replace {id} with the suppression list ID
headers = {
    "X-Auth-APIKey": "API_KEY",
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print("Suppression list details:", response.json())
else:
    print("Failed to retrieve suppression list:", response.text)
```

---

### **Update a Suppression List**
**PATCH** `/supplists/{id}`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/supplists/{id}"  # Replace {id} with the suppression list ID
headers = {
    "X-Auth-APIKey": "API_KEY",
    "Content-Type": "application/json",
}

data = {
    "name": "Updated Suppression List Name"
}

response = requests.patch(url, headers=headers, json=data)

if response.status_code == 200:
    print("Suppression list updated:", response.json())
else:
    print("Failed to update suppression list:", response.text)
```

---

### **Delete a Suppression List**
**DELETE** `/supplists/{id}`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/supplists/{id}"  # Replace {id} with the suppression list ID
headers = {
    "X-Auth-APIKey": "API_KEY",
}

response = requests.delete(url, headers=headers)

if response.status_code == 200:
    print("Suppression list deleted successfully.")
else:
    print("Failed to delete suppression list:", response.text)
```

---

### **Add Data to a Suppression List**
**POST** `/supplists/{id}/add`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/supplists/{id}/add"  # Replace {id} with the suppression list ID
headers = {
    "X-Auth-APIKey": "API_KEY",
    "Content-Type": "text/plain",
}

data = """bad@domain.com
bad2@domain.com"""

response = requests.post(url, headers=headers, data=data)

if response.status_code == 200:
    print("Data added to suppression list successfully.")
else:
    print("Failed to add data to suppression list:", response.text)
```

---

Let me know if there are any additional adjustments needed!

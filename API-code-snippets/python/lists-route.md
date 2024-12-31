
---

### **Create a New Contact List**
**POST** `/lists`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/lists"
headers = {
    "X-Auth-APIKey": "API_KEY",
    "Content-Type": "application/json",
}

data = {
    "name": "My New Contact List",
    "description": "A description for the contact list."
}

response = requests.post(url, headers=headers, json=data)

if response.status_code == 201:
    print("Contact list created:", response.json())
else:
    print("Failed to create contact list:", response.text)
```

---

### **Retrieve All Contact Lists**
**GET** `/lists`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/lists"
headers = {
    "X-Auth-APIKey": "API_KEY",
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print("Contact lists:", response.json())
else:
    print("Failed to retrieve contact lists:", response.text)
```

---

### **Retrieve a Contact List**
**GET** `/lists/{id}`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/lists/{id}"  # Replace {id} with the contact list ID
headers = {
    "X-Auth-APIKey": "API_KEY",
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print("Contact list details:", response.json())
else:
    print("Failed to retrieve contact list:", response.text)
```

---

### **Update a Contact List**
**PATCH** `/lists/{id}`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/lists/{id}"  # Replace {id} with the contact list ID
headers = {
    "X-Auth-APIKey": "API_KEY",
    "Content-Type": "application/json",
}

data = {
    "name": "Updated Contact List Name",
    "description": "Updated description for the contact list."
}

response = requests.patch(url, headers=headers, json=data)

if response.status_code == 200:
    print("Contact list updated:", response.json())
else:
    print("Failed to update contact list:", response.text)
```

---

### **Delete a Contact List**
**DELETE** `/lists/{id}`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/lists/{id}"  # Replace {id} with the contact list ID
headers = {
    "X-Auth-APIKey": "API_KEY",
}

response = requests.delete(url, headers=headers)

if response.status_code == 200:
    print("Contact list deleted successfully.")
else:
    print("Failed to delete contact list:", response.text)
```

---

Let me know if you need further clarification or additional assistance!
### **Export Contact List Data**
**POST** `/lists/{id}/export`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/lists/{id}/export"  # Replace {id} with the list ID
headers = {
    "X-Auth-APIKey": "API_KEY",
    "Content-Type": "application/json",
}

response = requests.post(url, headers=headers)

if response.status_code == 200:
    print("Export ID:", response.json().get("id"))
else:
    print("Failed to export contact list:", response.text)
```

---

### **Add Data to a Contact List**
**POST** `/lists/{id}/add`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/lists/{id}/add"  # Replace {id} with the list ID
headers = {
    "X-Auth-APIKey": "API_KEY",
    "Content-Type": "text/csv",
}

csv_data = """Email,First Name
ted@domain.com,Ted
judy@domain.com,Judy"""

response = requests.post(url, headers=headers, data=csv_data)

if response.status_code == 200:
    print("Data added to the contact list successfully.")
else:
    print("Failed to add data:", response.text)
```

---

### **Add a Single Contact to a Contact List**
**POST** `/lists/{id}/feed`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/lists/{id}/feed"  # Replace {id} with the list ID
headers = {
    "X-Auth-APIKey": "API_KEY",
    "Content-Type": "application/json",
}

contact_data = {
    "email": "ted@domain.com",
    "tags": ["new_customer"],
    "removetags": [],
    "resubscribe": False,
    "unsubscribe": False,
    "data": {
        "First Name": "Ted"
    }
}

response = requests.post(url, headers=headers, json=contact_data)

if response.status_code == 200:
    print("Contact added successfully.")
else:
    print("Failed to add contact:", response.text)
```

---

### **Get Domain Stats for a List**
**GET** `/lists/{id}/domainstats`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/lists/{id}/domainstats"  # Replace {id} with the list ID
headers = {
    "X-Auth-APIKey": "API_KEY",
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print("Domain stats:", response.json())
else:
    print("Failed to retrieve domain stats:", response.text)
```

---

### **Remove Contacts by Domain**
**POST** `/lists/{id}/deletedomains`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/lists/{id}/deletedomains"  # Replace {id} with the list ID
headers = {
    "X-Auth-APIKey": "API_KEY",
    "Content-Type": "application/json",
}

domains = ["domain.com"]

response = requests.post(url, headers=headers, json=domains)

if response.status_code == 200:
    print("Contacts removed by domain.")
else:
    print("Failed to remove contacts:", response.text)
```

---

### **Remove Contacts by Email**
**POST** `/lists/{id}/deletecontacts`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/lists/{id}/deletecontacts"  # Replace {id} with the list ID
headers = {
    "X-Auth-APIKey": "API_KEY",
    "Content-Type": "application/json",
}

emails = ["contact@domain.com"]

response = requests.post(url, headers=headers, json=emails)

if response.status_code == 200:
    print(f"Removed {response.json().get('count')} contacts.")
else:
    print("Failed to remove contacts:", response.text)
```

---

### **Unsubscribe Many Contacts**
**POST** `/lists/{id}/addunsubs`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/lists/{id}/addunsubs"  # Replace {id} with the list ID
headers = {
    "X-Auth-APIKey": "API_KEY",
    "Content-Type": "text/plain",
}

emails = "ted@domain.com\njudy@domain.com"

response = requests.post(url, headers=headers, data=emails)

if response.status_code == 200:
    print("Contacts unsubscribed successfully.")
else:
    print("Failed to unsubscribe contacts:", response.text)
```

---

### **Retrieve All Data for a Single Contact**
**GET** `/contactdata/{email}`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/contactdata/{email}"  # Replace {email} with the contact email
headers = {
    "X-Auth-APIKey": "API_KEY",
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print("Contact data:", response.json())
else:
    print("Failed to retrieve contact data:", response.text)
```
### **Delete All Data for a Single Contact**
**DELETE** `/contactdata/{email}`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/contactdata/{email}"  # Replace {email} with the contact email
headers = {
    "X-Auth-APIKey": "API_KEY",
}

response = requests.delete(url, headers=headers)

if response.status_code == 200:
    print("Contact data deleted successfully.")
else:
    print("Failed to delete contact data:", response.text)
```


### **Retrieve All Tags**
**GET** `/alltags`

```python
import requests

url = "https://app.xn--lemn-sqa.com/api/alltags"
headers = {
    "X-Auth-APIKey": "API_KEY",
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print("Tags:", response.json())
else:
    print("Failed to retrieve tags:", response.text)
```


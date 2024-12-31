

```python
import requests

# Set the base URL and API key
base_url = "https://app.xn--lemn-sqa.com/api/exports"
api_key = "your_api_key_here"  # Replace with your actual API key

# Define headers for authentication
headers = {
    "X-Auth-APIKey": api_key
}

# Send GET request to retrieve all exported files
response = requests.get(base_url, headers=headers)

# Check for a successful response
if response.status_code == 200:
    exported_files = response.json()  # Parse JSON response
    print("Exported Files:")
    for file in exported_files:
        print(f"ID: {file['id']}, Complete: {file['complete']}, URL: {file['url']}")
else:
    print(f"Failed to retrieve exported files. Status Code: {response.status_code}")
```

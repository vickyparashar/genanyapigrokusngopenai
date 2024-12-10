# API Test Documentation

This document provides detailed instructions on how to test the **GET** and **POST** endpoints of the API using `cURL` and PowerShell commands. 

The API interacts with the **OpenAI** service to retrieve responses based on a system message (`sm`) and a user message (`um`).

---

## 1. **GET Request: `/get-ai`**

The **GET** request retrieves the response from the OpenAI API by passing **system message** (`sm`) and **user message** (`um`) as query parameters in the URL.

### Request Format:
- **URL**: `http://localhost:3000/get-ai?sm=<system-message>&um=<user-message>`

### **`cURL` Example:**
Use the following `cURL` command to send a **GET** request with **`sm`** and **`um`** query parameters:

```bash
curl -X GET "http://localhost:3000/get-ai?sm=You%20are%20Grok,%20a%20chatbot%20inspired%20by%20the%20Hitchhiker's%20Guide%20to%20the%20Galaxy.&um=What%20is%20the%20meaning%20of%20life%2C%20the%20universe%2C%20and%20everything%3F"
Parameters:

sm: System message (e.g., "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy.")
um: User message (e.g., "What is the meaning of life, the universe, and everything?")
PowerShell Example:
To send the same request using PowerShell, use the following command:

$uri = "http://localhost:3000/get-ai?sm=You%20are%20Grok,%20a%20chatbot%20inspired%20by%20the%20Hitchhiker's%20Guide%20to%20the%20Galaxy.&um=What%20is%20the%20meaning%20of%20life%2C%20the%20universe%2C%20and%20everything%3F"
$response = Invoke-RestMethod -Uri $uri -Method Get
$response
2. POST Request: /post-ai
The POST request allows you to send system message (sm) and user message (um) as JSON data in the body to get a response from OpenAI.

Request Format:
URL: http://localhost:3000/post-ai
Body: JSON object containing sm and um.
cURL Example:
Use the following cURL command to send a POST request with a JSON body:

curl -X POST http://localhost:3000/post-ai \
  -H "Content-Type: application/json" \
  -d '{"sm": "You are Grok, a chatbot inspired by the Hitchhiker\'s Guide to the Galaxy.", "um": "What is the meaning of life, the universe, and everything?"}'
Body Parameters:

sm: System message (e.g., "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy.").
um: User message (e.g., "What is the meaning of life, the universe, and everything?").
PowerShell Example:
To send the POST request using PowerShell, use the following code:

$uri = "http://localhost:3000/post-ai"
$headers = @{
    "Content-Type" = "application/json"
}
$body = @{
    sm = "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy."
    um = "What is the meaning of life, the universe, and everything?"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri $uri -Method Post -Headers $headers -Body $body
$response
Summary
GET Request (/get-ai)
The GET request sends parameters sm and um in the query string.
cURL and PowerShell examples provided to test the endpoint.
POST Request (/post-ai)
The POST request sends parameters sm and um as a JSON body.
cURL and PowerShell examples provided to test the endpoint.
These examples allow you to interact with the API and test how it communicates with the OpenAI service. You can use these examples for manual or automated testing purposes on your local server running at http://localhost:3000.


---

### Key Features of This Documentation:
- **Headers & Structure**: The document uses markdown syntax to divide content into clear sections: `GET Request`, `POST Request`, and a `Summary`. Each section has a detailed explanation of the request and examples.
- **Examples**: The `cURL` and PowerShell examples are formatted in code blocks for easy copy-pasting.
- **Clarity**: The use of bold, italics, and proper indentation makes the document visually appealing and easy to follow.

You can save this in a `.md` (Markdown) file to view it beautifully on platforms like GitHub or a markdown viewer. If you prefer a `.txt` format, just convert it accordingly, but markdown files have the advantage of being rich-text ready.
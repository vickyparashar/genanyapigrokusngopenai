API Test Documentation
This document provides instructions on how to test the /get-ai and /post-ai endpoints of the API using cURL and PowerShell commands.

1. GET Request: /get-ai
This endpoint returns the response from the OpenAI API based on the provided system message (sm) and user message (um).

Request Format:
URL: http://localhost:3000/get-ai?sm=<system-message>&um=<user-message>
cURL Example:
To send a GET request with the sm (system message) and um (user message) query parameters, use the following cURL command:

curl -X GET "http://localhost:3000/get-ai?sm=You%20are%20Grok,%20a%20chatbot%20inspired%20by%20the%20Hitchhiker's%20Guide%20to%20the%20Galaxy.&um=What%20is%20the%20meaning%20of%20life%2C%20the%20universe%2C%20and%20everything%3F"
Parameters:
sm: System message (e.g., "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy.")
um: User message (e.g., "What is the meaning of life, the universe, and everything?")
PowerShell Example:
To send a GET request using PowerShell, use the following command:

$uri = "http://localhost:3000/get-ai?sm=You%20are%20Grok,%20a%20chatbot%20inspired%20by%20the%20Hitchhiker's%20Guide%20to%20the%20Galaxy.&um=What%20is%20the%20meaning%20of%20life%2C%20the%20universe%2C%20and%20everything%3F"
$response = Invoke-RestMethod -Uri $uri -Method Get
$response
2. POST Request: /post-ai
This endpoint returns the response from the OpenAI API based on the provided system message (sm) and user message (um) in the request body.

Request Format:
URL: http://localhost:3000/post-ai
Body: JSON object containing sm (system message) and um (user message)
cURL Example:
To send a POST request with a JSON body, use the following cURL command:

curl -X POST http://localhost:3000/post-ai \
  -H "Content-Type: application/json" \
  -d '{"sm": "You are Grok, a chatbot inspired by the Hitchhiker\'s Guide to the Galaxy.", "um": "What is the meaning of life, the universe, and everything?"}'
Body Parameters:
sm: System message (e.g., "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy.")
um: User message (e.g., "What is the meaning of life, the universe, and everything?")
PowerShell Example:
To send a POST request using PowerShell, use the following command:

$uri = "http://localhost:3000/post-ai"
$headers = @{
    "Content-Type" = "application/json"
}
$body = @{    }

    sm = "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy."
    um = "What is the meaning of life, the universe, and everything?"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri $uri -Method Post -Headers $headers -Body $body
$response
Summary
GET Request (/get-ai):

Query parameters sm and um are passed in the URL.
cURL and PowerShell examples provided for sending the GET request.
POST Request (/post-ai):

JSON body with sm and um parameters.
cURL and PowerShell examples provided for sending the POST request.
You can use these examples to test the /get-ai and /post-ai endpoints of the API on your local server running on http://localhost:3000.


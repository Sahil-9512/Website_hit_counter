Website Hit Counter System

Overview:
This project implements a website hit counter system using Node.js and Express. The system tracks visits to a website by different customers, ensuring each visit is counted only once regardless of the device used. The APIs provided allow you to track visits, get the visit count for a specific customer, and get the overall visit count for a website.

Features
Track visits to a website by different customers.
Each customer may use multiple devices (laptop, mobile, tablet).
Ensure each customer visit is counted only once, regardless of the device used.
API Endpoints
1. Visit Website API
Request Type: POST
URL: /visit

Headers:

Content-Type: application/json
Request Body:

json
Copy code
{
  "customerId": "cust123",
  "deviceId": "dev456",
  "websiteId": "web789"
}
Example Response:


Visit recorded
2. Get Customer Visit Count API
Request Type: GET
URL: /customer-visit-count

Query Parameters:

customerId: cust123
websiteId: web789
Example Response:


Customer cust123 visited website web789 X times
3. Get Overall Website Hit Count API
Request Type: GET
URL: /overall-visit-count

Query Parameters:

websiteId: web789
Example Response:


Website web789 has Y overall visits
Postman Collection
The Postman collection for these APIs can be found here.

File Structure

ASSIGNMENT_COMPANY/
├── fixedandmainfile.js
│   └── counter.js
├── htmlfiles/
│   ├── file1.html
│   └── stylefile.css
├── node_modules/
├── route/
│   ├── Croute.js 
│   └── demofile.js
├── package-lock.json
├── package.json
└── README.md
Running the Project
Clone the repository:


git clone <repository-url>
cd ASSIGNMENT_COMPANY
Install dependencies:
npm install


Start the server:
npm start


If you are using nodemon for development, you can start the server with:
npm run dev
Open your browser and navigate to http://localhost:3000/file1.html to view the HTML page.

Example Usage
Track a visit:

Open Postman and create a POST request to http://localhost:3000/visit.
Set the headers to Content-Type: application/json.
Set the body to:
json

{
  "customerId": "cust123",
  "deviceId": "dev456",
  "websiteId": "web789"
}
Get customer visit count:

Create a GET request to http://localhost:3000/customer-visit-count?customerId=cust123&websiteId=web789.
Get overall website hit count:

Create a GET request to http://localhost:3000/overall-visit-count?websiteId=web789.
Note:
This implementation uses internal data structures to track visits without relying on any external database or service.
Edge cases such as non-existing customer IDs or website IDs are handled gracefully by returning appropriate responses.
Author
SAHIL DHOTRE

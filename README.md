## Employee Management System

The Employee Management System is a web application built with NodeJS that allows users to manage employee information including adding new employees, viewing employee details, updating employee information, blocking/unblocking employees, and deleting employees.


## Features

Create Employee: Add new employees with their basic information such as first name, last name, email, and phone number.
View Employee Details: Click on a specific employee to view detailed information.
Update Employee: Edit and update existing employee details.
Block/Unblock Employee: Toggle the status of an employee to block or unblock them.
Delete Employee: Permanently remove an employee from the system.

## Technologies Used
  
- **Backend**: Node.js, Express.js
  
- **Database**: MongoDB


## Installation

To run the Pizza Town Pizza Restaurant locally on your machine, follow these steps:
1. **Clone the repository:**
  ```bash
   git clone https://github.com/Pro-shanto06/NodeJS_CRUD_OPeration
   ```
2. **Install Server Dependencies**:

```bash
npm install
```

3. **Create Environment Variables File**:
Create a `.env` file in the server directory and add the following environment variables:
MONGO_URI=<your_mongodb_uri>

4. **Start the Server**:
```bash
node server.js
```

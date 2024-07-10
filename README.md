# Bookstore Project

This project is a simple bookstore API built with Node.js, Express, and a MySQL database.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js and npm installed on your machine
- XAMPP (or another tool to run Apache and MySQL)

### Installation

1. **Clone the Repository**

   ```sh
   git clone https://github.com/ridoyislamnasim/Bookstore.git
2. **Navigate to the Project Directory**
    ```sh
    cd Bookstore/
3. **Open the Project in Your Code Editor**
    code .
4. **Install Project Dependencies**
    npm i

Database Setup
Start Apache and MySQL

Open XAMPP and start the Apache and MySQL servers.

Create the Database

Open your web browser and go to phpMyAdmin.
Create a new database named bookstore.
Set Up Environment Variables

Create a .env file in the root of the project and add the following lines:
LOCAL_DB_USER=<your_mysql_username>
LOCAL_DB_PASS=<your_mysql_password> 

Replace <your_mysql_username> and <your_mysql_password> with your actual MySQL credentials.

Running the Project
Start the Development Server
npm run dev

Testing the API

Using Postman

Import the Postman collection file (Bookstore.postman_collection.json) into Postman.
Open the collection and run the requests to test the API endpoints.

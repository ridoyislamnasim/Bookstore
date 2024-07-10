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
    ```sh
        code .
4. **Install Project Dependencies**
    ```sh
    npm i

### Database Setup
1. **Start Apache and MySQL**
    Open XAMPP and start the Apache and MySQL servers.

2. **Create the Database**
    *Open your web browser and go to phpMyAdmin.
    *Create a new database named bookstore.
3. **Set Up Environment Variables**

Create a .env file in the root of the project and add the following lines:
    ```sh
        LOCAL_DB_USER=<your_mysql_username>
        LOCAL_DB_PASS=<your_mysql_password> 


Replace <your_mysql_username> and <your_mysql_password> with your actual MySQL credentials.

## Running the Project
1. **Start the Development Server**
   ```sh
    npm run dev

## Testing the API

**Using Postman**

Import the Postman collection file (Book Store.postman_collection.json) into Postman.
Open the collection and run the requests to test the API endpoints.

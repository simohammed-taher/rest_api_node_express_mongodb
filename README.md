# Book Management API

A simple RESTful API for managing books using Node.js, Express, MongoDB, and Mongoose.

## Features

- Create a new book
- Retrieve all books
- Retrieve a single book by ID
- Update a book by ID
- Delete a book by ID

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:



git clone `https://github.com/simohammed-taher/rest_api_node_express_mongodb`

rest_api_node_express_mongodb


2. Change to the project directory:

cd book-management-api


3. Install the required dependencies:

npm install


4. Start the MongoDB server (in a separate terminal):

mongod


5. Start the application:


The API will be available at `http://localhost:4000/api/books`.

## API Endpoints

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| POST   | /api/books       | Create a new book     |
| GET    | /api/books       | Retrieve all books    |
| GET    | /api/books/:id   | Retrieve a book by ID |
| PUT    | /api/books/:id   | Update a book by ID   |
| DELETE | /api/books/:id   | Delete a book by ID   |


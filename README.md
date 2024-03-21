# Finding users by criteria 

This project is a simple Express.js application demonstrating user management functionalities using MongoDB as the database, with Mongoose as the MongoDB object modeling tool.

## Features

- **Create User:** Endpoint to create a new user with username, nickname, description, and categories.
- **Find User:** Endpoint to find users based on various criteria such as username, categories, or creation date range.

## Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed locally or accessible remotely.
- Basic understanding of Express.js and MongoDB.

## Getting Started

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Ensure MongoDB is running either locally or on a remote server.
4. Configure your MongoDB connection in the `models/users.js` file.
5. Start the Express server using `npm start`.
6. Access the API endpoints described below.

## API Endpoints

- `GET /users/create`: Create a new user.
- `GET /users/find`: Find users based on various criteria.

## Usage

### Create a User

Send a GET request to `/users/create` to create a new user with the following parameters:

- `username`: The username of the user.
- `nickname`: The nickname of the user.
- `description`: The description of the user.
- `categories`: An array of categories associated with the user.

### Find Users

Send a GET request to `/users/find` to find users based on various criteria. You can uncomment and use the provided code snippets in the route handler to test different search functionalities.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests with improvements, bug fixes, or new features.

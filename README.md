# Task Manager API using Express.js and MongoDB

A simple task manager API built using Express.js and MongoDB. This API allows users to manage tasks by performing CRUD operations.

## Table of Contents

- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Dependencies

This project uses the following dependencies:

- [Express.js](https://expressjs.com/) - Web framework for Node.js.
- [Express Handlebars](https://www.npmjs.com/package/express-handlebars) - View engine for Express.
- [Helmet](https://helmetjs.github.io/) - Middleware for securing HTTP headers.
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js.
- [Morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware.
- [Nodemon](https://nodemon.io/) - Utility to automatically restart the server.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-manager-api.git
   ```

2. Install the dependencies:

    ```bash 
    cd task-manager-api
    npm install
    ```
3. Set up environment variables:
Create a .env file in the root directory and add the following:
    ```bash
    PORT= 3000
    DATABASE_URL= your_mongodb_connection_string
    ```

4. Start the server:

    ```bash
    npm run dev

    // or

    npm start
    ```

## Usage
Make API requests using tools like Postman or cURL.
Ensure MongoDB is running and accessible.

## Endpoints

| Endpoint             | HTTP Method | Description              |
|----------------------|-------------|--------------------------|
| `/api/tasks`         | GET         | Get all tasks            |
| `/api/tasks/:id`     | GET         | Get task by ID           |
| `/api/tasks`         | POST        | Create a new task        |
| `/api/tasks/:id`     | PATCH       | Update a task            |
| `/api/tasks/:id`     | DELETE      | Delete a task            |


## Environment Variables
PORT - Port number for the Express server (default: 3000).
MONGODB_URI - MongoDB connection string.


## Contributing
Contributions are welcome! Fork the repository, create a new branch, make your improvements, and open a pull request.

## License
This project is licensed under the [MIT License](https://en.wikipedia.org/wiki/MIT_License).
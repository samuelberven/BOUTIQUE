# BOUTIQUE - Product Database

BOUTIQUE is a full-stack web application that allows users to create, edit, update, and delete product entries. The application maintains two databases: one for internal company use and one for customer-facing product listings. A microservice architecture ensures modularity and scalability of the application.

## Features
- **Full CRUD Operations** for products
- **RESTful API** using Express.js and MariaDB for backend functionality
- Modular **microservice architecture** for easy updates and scalability
- Customer-facing product entries with essential details for easy browsing

## Technologies
- **Frontend**: Vanilla JavaScript (with plans to migrate to React or Vue.js)
- **Backend**: Node.js, Express.js
- **Database**: MariaDB (MySQL)
- **Microservice Communication**: ZeroMQ

## Installation

### Prerequisites
To run the application locally, ensure you have the following installed:
- **Node.js** (v14+ recommended)
- **MariaDB** (or MySQL)
- **npm** (Node Package Manager)
- **ZeroMQ** (for communication between services)

### Steps to Install
1. **Clone the repository**:
   ```bash
   git clone https://github.com/sber-sber/BOUTIQUE.git
   ```
2. **Backend Setup**: Navigate to the backend directory:
   ```bash
   cd backend
   ```
Install backend dependencies:
   ```bash
   npm install
   ```
Start the backend server:
   ```bash
   npm start
   ```
3. **Frontend Setup**: In a separate terminal instance, navigate to the frontend directory:
   ```bash
   cd client
   ```
Install frontend dependencies:
   ```bash
   npm install
   ```
Start the frontend server:
   ```bash
   npm start
   ```
If the frontend does not open automatically, navigate to http://localhost:3000 in your browser.

## Usage
BOUTIQUE allows you to perform CRUD operations on product entries. The application is designed with two distinct databases:
1. Internal-use database: Contains complete product entries for company use.
2. Customer-facing database: Contains a simplified view of the products for public browsing.
Once the application is running locally, you can interact with it via the front-end interface to manage product data.

## Testing
Currently, I am working on integrating automated testing into the project. This will involve:
- Unit tests for API endpoints
- Integration tests for frontend-backend communication
- Database validation tests

## License
This project is currently being developed and is not yet licensed for public distribution. If you wish to contribute or use this project, please reach out for more information.

## Architecture
- **Microservice Structure**: The backend has been split into multiple services for better maintainability and scalability. Each microservice is responsible for a specific set of tasks, such as handling product data, managing the internal database, or facilitating communication with the frontend.
- **ZeroMQ**: Used for communication between the frontend, backend, and microservices, ensuring that the application can scale easily and handle different parts of the business logic independently.

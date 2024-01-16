### BOUTIQUE - Product Database
Boutique is a full stack web application that allowers users to create, edit, update, and delete product entries. The full entry is made into an internal-use company database, and an abbreviated entry is separate made into a customer-facing database. A microservice is used for modularity.

## Features
  • CRUD operations for products
  • RESTful API using Express and MariaDB

## Installation
To run locally, Node.js, MariaDB (MySQL), npm, and ZeroMQ must be installed on your computer.
  1. Clone this repository: `git clone https://github.com/sber-sber/BOUTIQUE.git`
  2. Navigate to backend directory: `cd backend`
  3. Install dependencies: `npm install`
  4. Start backend server: <FI>
  5. In a separate terminal instance, navigate to frontend directory: `cd client`
  6. Install dependencies `npm install`
  7. Start frotend server: <FI>
  8. If it does not do so automatically, open browser and navigate to `http://localhost:3000`

## Testing
  (Currently working on)

## Using
  (Currently working on)

## License
  (Currently working on)

## TODO:
  # Short-term:
  - HTML and CSS (positioning, colors, aesthetic design)
  - Add site logo
  - Remove unnecessary files (logo,svg, etc.)
  - Rewrite microservice in Java
  - Convert to TypeScript
  - Add error-handling and checks (making sure the passed data is what it should be, etc.)
  # Mid-term
  - Add photos to products
  - Make database more robust, adding attributes where necessary
  - Rename SQL tables (and attributes) to something more logical ("products" to "company-internal", etc.)
  - Add 'back/remove' button
  - Auto-complete for search
  - Use PostgreSQL for customerFacing table
  - Login credentials and authentication
  # Long-term:
  - (Basic) mobile app 
  - Deploy on cloud (Azure)

# Product Catalog API

A RESTful API for managing a product catalog system, simulating the backend of an e-commerce platform. Built with Node.js, Express.js, and MongoDB.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)
- [API Documentation](#api-documentation)
- [Endpoints Overview](#endpoints-overview)
- [Error Handling](#error-handling)
- [Assumptions & Limitations](#assumptions--limitations)
- [Testing](#testing)
- [Video Walkthrough](#video-walkthrough)

---

## Features

- Product CRUD (Create, Read, Update, Delete)
- Category CRUD
- Product search & filtering (by name, category, price, date, etc.)
- Product variants (size, color, stock)
- Inventory tracking (per variant)
- Pricing and discounts
- Basic reporting (low-stock query)
- Input validation and sanitization
- Comprehensive error handling
- Modular code structure
- Swagger API documentation

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Swagger (API docs)
- express-validator (input validation)
- dotenv, cors

---

## Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DevRamona/Product-API.git
   cd Product-API
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```

---

## Running the Server

- **Development:**
  ```bash
  npm run dev
  ```
- **Production:**
  ```bash
  npm start
  ```

Server will run at `http://localhost:5000` by default.

---

## API Documentation

- **Swagger UI:**  
  Visit [http://localhost:5000/api-docs](http://localhost:5000/api-docs) after starting the server for interactive API documentation.

---
## Video link
Youtube link: https://www.youtube.com/watch?v=zqEb8xw4KWg


## Endpoints Overview

### Product Endpoints

| Method | Endpoint                  | Description                       |
|--------|---------------------------|-----------------------------------|
| POST   | `/api/products`           | Create a new product              |
| GET    | `/api/products`           | Get all products                  |
| GET    | `/api/products/:id`       | Get product by ID                 |
| PUT    | `/api/products/:id`       | Update product by ID              |
| DELETE | `/api/products/:id`       | Delete product by ID              |
| GET    | `/api/products/search`    | Search/filter products            |
| GET    | `/api/products/low-stock` | Get products with low stock       |


### Category Endpoints

| Method | Endpoint                  | Description                       |
|--------|---------------------------|-----------------------------------|
| POST   | `/api/categories`         | Create a new category             |
| GET    | `/api/categories`         | Get all categories                |
| GET    | `/api/categories/:id`     | Get category by ID                |
| PUT    | `/api/categories/:id`     | Update category by ID             |
| DELETE | `/api/categories/:id`     | Delete category by ID             |


## Error Handling

- Returns appropriate HTTP status codes (e.g., 400, 404, 500).
- Validation errors return 400 with details.
- All errors are handled by a centralized error handler.

---





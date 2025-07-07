# E-commerce API Documentation

## Base URL
```
http://localhost:3000/api
```

## Authentication
All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

---

## Authentication Endpoints

### Register User
**POST** `/auth/register`

Register a new user account.

**Request Body:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "customer"  // Optional, defaults to "customer"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "username": "john_doe",
    "email": "john@example.com",
    "role": "customer"
  }
}
```

### Login User
**POST** `/auth/login`

Authenticate user and get JWT token.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "username": "john_doe",
    "email": "john@example.com",
    "role": "customer"
  }
}
```

### Get User Profile
**GET** `/auth/profile`

Get current user's profile information.

**Headers:**
```
Authorization: Bearer <jwt-token>
```

**Response:**
```json
{
  "user": {
    "id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "username": "john_doe",
    "email": "john@example.com",
    "role": "customer",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

---

## Product Endpoints

### Get All Products
**GET** `/products`

Get paginated list of products with optional search and filtering.

**Query Parameters:**
- `search` (optional): Search products by name
- `category` (optional): Filter by category
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10, max: 50)

**Example:**
```
GET /products?search=laptop&category=Electronics&page=1&limit=5
```

**Response:**
```json
{
  "products": [
    {
      "id": "60f7b3b3b3b3b3b3b3b3b3b3",
      "name": "MacBook Pro 13\"",
      "description": "Apple MacBook Pro 13-inch with M2 chip",
      "price": 1299.99,
      "category": "Laptops",
      "imageUrl": "https://example.com/image.jpg",
      "stock": 15,
      "isActive": true,
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 3,
    "totalProducts": 25,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

### Get Single Product
**GET** `/products/:id`

Get details of a specific product.

**Response:**
```json
{
  "product": {
    "id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "name": "MacBook Pro 13\"",
    "description": "Apple MacBook Pro 13-inch with M2 chip",
    "price": 1299.99,
    "category": "Laptops",
    "imageUrl": "https://example.com/image.jpg",
    "stock": 15,
    "isActive": true,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### Get Product Categories
**GET** `/products/categories`

Get all available product categories.

**Response:**
```json
{
  "categories": ["Laptops", "Smartphones", "Audio", "Tablets", "Footwear", "Home & Kitchen"]
}
```

### Create Product (Admin Only)
**POST** `/products`

Create a new product.

**Headers:**
```
Authorization: Bearer <admin-jwt-token>
```

**Request Body:**
```json
{
  "name": "New Product",
  "description": "Product description",
  "price": 99.99,
  "category": "Electronics",
  "imageUrl": "https://example.com/image.jpg",
  "stock": 50
}
```

**Response:**
```json
{
  "message": "Product created successfully",
  "product": {
    "id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "name": "New Product",
    "description": "Product description",
    "price": 99.99,
    "category": "Electronics",
    "imageUrl": "https://example.com/image.jpg",
    "stock": 50,
    "isActive": true,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### Update Product (Admin Only)
**PUT** `/products/:id`

Update an existing product.

**Headers:**
```
Authorization: Bearer <admin-jwt-token>
```

**Request Body:**
```json
{
  "name": "Updated Product Name",
  "description": "Updated description",
  "price": 89.99,
  "category": "Electronics",
  "imageUrl": "https://example.com/new-image.jpg",
  "stock": 45,
  "isActive": true
}
```

### Delete Product (Admin Only)
**DELETE** `/products/:id`

Delete a product.

**Headers:**
```
Authorization: Bearer <admin-jwt-token>
```

**Response:**
```json
{
  "message": "Product deleted successfully"
}
```

---

## Cart Endpoints (Customer Only)

### Get Cart
**GET** `/cart`

Get current user's shopping cart.

**Headers:**
```
Authorization: Bearer <customer-jwt-token>
```

**Response:**
```json
{
  "cart": {
    "id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "user": "60f7b3b3b3b3b3b3b3b3b3b3",
    "items": [
      {
        "product": {
          "id": "60f7b3b3b3b3b3b3b3b3b3b3",
          "name": "MacBook Pro 13\"",
          "price": 1299.99,
          "imageUrl": "https://example.com/image.jpg",
          "stock": 15
        },
        "quantity": 2,
        "price": 1299.99
      }
    ],
    "total": 2599.98,
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### Add to Cart
**POST** `/cart/add`

Add a product to the shopping cart.

**Headers:**
```
Authorization: Bearer <customer-jwt-token>
```

**Request Body:**
```json
{
  "productId": "60f7b3b3b3b3b3b3b3b3b3b3",
  "quantity": 2
}
```

### Update Cart Item
**PUT** `/cart/items/:productId`

Update quantity of an item in the cart.

**Headers:**
```
Authorization: Bearer <customer-jwt-token>
```

**Request Body:**
```json
{
  "quantity": 3
}
```

### Remove from Cart
**DELETE** `/cart/items/:productId`

Remove an item from the cart.

**Headers:**
```
Authorization: Bearer <customer-jwt-token>
```

### Clear Cart
**DELETE** `/cart/clear`

Remove all items from the cart.

**Headers:**
```
Authorization: Bearer <customer-jwt-token>
```

---

## Order Endpoints

### Create Order (Customer Only)
**POST** `/orders`

Create an order from the current cart.

**Headers:**
```
Authorization: Bearer <customer-jwt-token>
```

**Request Body:**
```json
{
  "shippingAddress": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA"
  }
}
```

**Response:**
```json
{
  "message": "Order created successfully",
  "order": {
    "id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "user": "60f7b3b3b3b3b3b3b3b3b3b3",
    "items": [
      {
        "product": {
          "id": "60f7b3b3b3b3b3b3b3b3b3b3",
          "name": "MacBook Pro 13\"",
          "price": 1299.99,
          "imageUrl": "https://example.com/image.jpg"
        },
        "quantity": 2,
        "price": 1299.99
      }
    ],
    "total": 2599.98,
    "status": "pending",
    "shippingAddress": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### Get User Orders (Customer Only)
**GET** `/orders/my-orders`

Get current user's orders with pagination.

**Headers:**
```
Authorization: Bearer <customer-jwt-token>
```

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)

### Get Specific Order (Customer)
**GET** `/orders/my-orders/:id`

Get details of a specific order (customer can only see their own orders).

**Headers:**
```
Authorization: Bearer <customer-jwt-token>
```

### Get All Orders (Admin Only)
**GET** `/orders`

Get all orders with pagination and filtering.

**Headers:**
```
Authorization: Bearer <admin-jwt-token>
```

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `status` (optional): Filter by order status

### Get Specific Order (Admin)
**GET** `/orders/:id`

Get details of any order (admin can see all orders).

**Headers:**
```
Authorization: Bearer <admin-jwt-token>
```

### Update Order Status (Admin Only)
**PUT** `/orders/:id/status`

Update the status of an order.

**Headers:**
```
Authorization: Bearer <admin-jwt-token>
```

**Request Body:**
```json
{
  "status": "processing"
}
```

**Available Statuses:**
- `pending`
- `processing`
- `shipped`
- `delivered`
- `cancelled`

---

## Error Responses

### 400 Bad Request
```json
{
  "message": "Validation error message"
}
```

### 401 Unauthorized
```json
{
  "message": "Access token required"
}
```

### 403 Forbidden
```json
{
  "message": "Admin access required"
}
```

### 404 Not Found
```json
{
  "message": "Product not found"
}
```

### 500 Internal Server Error
```json
{
  "message": "Server error"
}
```

---

## Testing the API

### Using cURL

1. **Register a user:**
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }'
```

2. **Login:**
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

3. **Get products:**
```bash
curl http://localhost:3000/api/products
```

4. **Add to cart (with token):**
```bash
curl -X POST http://localhost:3000/api/cart/add \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "productId": "PRODUCT_ID_HERE",
    "quantity": 2
  }'
```

### Using the Web Interface

1. Start the server: `npm run dev`
2. Visit: `http://localhost:3000`
3. Use the web interface to test all API endpoints

### Using Postman

1. Import the API endpoints into Postman
2. Set the base URL: `http://localhost:3000/api`
3. For protected endpoints, add the Authorization header with your JWT token

---

## Sample Data

After running `npm run seed`, you'll have these sample users:

**Admin:**
- Email: `admin@example.com`
- Password: `admin123`

**Customers:**
- Email: `customer1@example.com`
- Password: `password123`
- Email: `customer2@example.com`
- Password: `password123`

And 8 sample products across different categories. 
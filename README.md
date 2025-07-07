# E-commerce API

A comprehensive RESTful API for an e-commerce platform built with Node.js, Express, and MongoDB. This project demonstrates modern backend development practices including authentication, role-based access control, and scalable architecture.

## Features

### Core Functionality
- **User Authentication & Authorization**: JWT-based authentication with role-based access control
- **Product Management**: CRUD operations for products with search and pagination
- **Shopping Cart**: Add, update, remove items with real-time total calculation
- **Order Management**: Create orders from cart with stock validation
- **Role-Based Access**: Customer and Admin roles with different permissions

### Advanced Features
- **Pagination**: Built-in pagination for products and orders
- **Search & Filtering**: Search products by name and filter by category
- **Stock Management**: Automatic stock updates when orders are placed
- **Error Handling**: Comprehensive error handling and validation
- **Security**: Password hashing, JWT tokens, and input validation

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **CORS**: Cross-origin resource sharing enabled

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   # Database Configuration
   MONGODB_URI=mongodb://localhost:27017/ecommerce-api
   
   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   
   # Server Configuration
   PORT=3000
   ```

4. **Start the server**
   ```bash
   # Development mode (with auto-reload)
   npm run dev
   
   # Production mode
   npm start
   ```

The server will start on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Products
- `GET /api/products` - Get all products (with pagination & search)
- `GET /api/products/:id` - Get single product
- `GET /api/products/categories` - Get all categories
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Cart (Customer only)
- `GET /api/cart` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/items/:productId` - Update cart item quantity
- `DELETE /api/cart/items/:productId` - Remove item from cart
- `DELETE /api/cart/clear` - Clear entire cart

### Orders
- `POST /api/orders` - Create order from cart (customer)
- `GET /api/orders/my-orders` - Get user's orders (customer)
- `GET /api/orders/my-orders/:id` - Get specific order (customer)
- `GET /api/orders` - Get all orders (admin)
- `GET /api/orders/:id` - Get specific order (admin)
- `PUT /api/orders/:id/status` - Update order status (admin)

## Usage Examples

### Register a Customer
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john_doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Register an Admin
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@example.com",
    "password": "admin123",
    "role": "admin"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get Products with Search
```bash
curl "http://localhost:3000/api/products?search=laptop&page=1&limit=10"
```

### Add to Cart (requires authentication)
```bash
curl -X POST http://localhost:3000/api/cart/add \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "productId": "product_id_here",
    "quantity": 2
  }'
```

## Database Schema

### User
- `username` (String, unique)
- `email` (String, unique)
- `password` (String, hashed)
- `role` (String: 'customer' | 'admin')
- `createdAt` (Date)

### Product
- `name` (String)
- `description` (String)
- `price` (Number)
- `category` (String)
- `imageUrl` (String)
- `stock` (Number)
- `isActive` (Boolean)
- `createdAt` (Date)
- `updatedAt` (Date)

### Cart
- `user` (ObjectId, ref: User)
- `items` (Array of cart items)
- `total` (Number, calculated)
- `updatedAt` (Date)

### Order
- `user` (ObjectId, ref: User)
- `items` (Array of order items)
- `total` (Number)
- `status` (String: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled')
- `shippingAddress` (Object)
- `createdAt` (Date)
- `updatedAt` (Date)

## Security Features

- **Password Hashing**: All passwords are hashed using bcryptjs
- **JWT Authentication**: Secure token-based authentication
- **Role-Based Access**: Different permissions for customers and admins
- **Input Validation**: Comprehensive validation for all inputs
- **Error Handling**: Secure error responses without exposing sensitive information

## Development

### Project Structure
```
ecommerce-api/
├── controllers/     # Business logic
├── middleware/      # Authentication & authorization
├── models/         # Database schemas
├── routes/         # API endpoints
├── server.js       # Main application file
├── package.json    # Dependencies & scripts
└── README.md       # Documentation
```

### Adding New Features
1. Create model in `models/` directory
2. Add controller logic in `controllers/` directory
3. Define routes in `routes/` directory
4. Add middleware if needed
5. Update main server file if necessary

## Testing

The API can be tested using tools like:
- Postman
- Insomnia
- curl commands
- Any HTTP client

## Deployment

1. Set up environment variables for production
2. Use a process manager like PM2
3. Set up MongoDB Atlas or production MongoDB instance
4. Configure reverse proxy (nginx) if needed
5. Set up SSL certificates

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is created for educational purposes and internship assignment.

## Support

For questions or issues, please refer to the API documentation or create an issue in the repository. 
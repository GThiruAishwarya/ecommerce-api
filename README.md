Here’s the **complete `README.md`** file with your **Google Drive screenshots embedded** for each key API section. It includes the full project summary, setup instructions, and the new **📸 Screenshots/API Demo section**.

---

````markdown
# 🛒 E-commerce API – Node.js + Express + MongoDB

A scalable, secure and modern **RESTful E-commerce backend** built using **Node.js**, **Express**, and **MongoDB**. This project was developed as part of an internship challenge for **AdaptNXT**, demonstrating backend skills like authentication, role-based access, product APIs, and more.

---

## ✨ Features

- 🔐 JWT-based authentication
- 👥 Role-based access (Admin, Customer)
- 📦 Product listing with search & pagination
- 🛒 Cart management (add, update, remove)
- 🧾 Order creation from cart
- 📂 Product categories
- 🧠 Clean code architecture
- 🧪 Optional AI/ML integrations

---

## 🚀 Live API Preview (Localhost)

| Endpoint | Description |
|----------|-------------|
| [`/api/health`](http://localhost:3000/api/health) | API Health check |
| [`/api/products`](http://localhost:3000/api/products) | Fetch product list |
| [`/api/products/categories`](http://localhost:3000/api/products/categories) | Get all product categories |

---

## 🧪 Sample JSON Responses

### ✅ Health Check – `/api/health`
```json
{
  "message": "E-commerce API is running",
  "timestamp": "2025-07-07T03:10:14.925Z"
}
````

### 📦 Product Listing – `/api/products`

```json
{
  "products": [
    {
      "_id": "686b381cedfd9604ace6168d",
      "name": "Sony WH-1000XM5",
      "description": "Wireless Noise Canceling Headphones",
      "price": 349.99,
      "category": "Audio",
      "imageUrl": "https://via.placeholder.com/300x200?text=Sony+Headphones",
      "stock": 30,
      "isActive": true
    }
    // ... more products
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 1,
    "totalProducts": 9,
    "hasNextPage": false,
    "hasPrevPage": false
  }
}
```

### 🏷️ Product Categories – `/api/products/categories`

```json
{
  "categories": [
    "Audio",
    "Footwear",
    "Home & Kitchen",
    "Laptops",
    "Smartphones",
    "Tablets",
    "beauty"
  ]
}
```

---

## 📁 Folder Structure

```
ecommerce-api/
├── controllers/
├── middleware/
├── models/
├── routes/
├── .env
├── server.js
├── package.json
```

---

## 📦 API Endpoints

### 👤 Auth

| Method | Route                | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register new user   |
| POST   | `/api/auth/login`    | Login and get token |
| GET    | `/api/auth/profile`  | Get current user    |

### 📦 Products

| Method | Route                      | Access | Description        |
| ------ | -------------------------- | ------ | ------------------ |
| GET    | `/api/products`            | Public | Get all products   |
| GET    | `/api/products/:id`        | Public | Single product     |
| POST   | `/api/products`            | Admin  | Add product        |
| PUT    | `/api/products/:id`        | Admin  | Update product     |
| DELETE | `/api/products/:id`        | Admin  | Delete product     |
| GET    | `/api/products/categories` | Public | Get all categories |

### 🛒 Cart

| Method | Route                 | Access   | Description     |
| ------ | --------------------- | -------- | --------------- |
| GET    | `/api/cart`           | Customer | View cart       |
| POST   | `/api/cart/add`       | Customer | Add to cart     |
| PUT    | `/api/cart/items/:id` | Customer | Update quantity |
| DELETE | `/api/cart/items/:id` | Customer | Remove item     |
| DELETE | `/api/cart/clear`     | Customer | Clear cart      |

### 📃 Orders

| Method | Route                    | Access   | Description         |
| ------ | ------------------------ | -------- | ------------------- |
| POST   | `/api/orders`            | Customer | Place an order      |
| GET    | `/api/orders/my-orders`  | Customer | View own orders     |
| GET    | `/api/orders`            | Admin    | View all orders     |
| PUT    | `/api/orders/:id/status` | Admin    | Update order status |

---

## ⚙️ How to Run Locally

### 1️⃣ Clone and Install

```bash
git clone https://github.com/your-username/ecommerce-api.git
cd ecommerce-api
npm install
```

### 2️⃣ Create `.env` file

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/ecommerce-api
JWT_SECRET=your_jwt_secret
```

### 3️⃣ Start Server

```bash
npm run dev   # Dev mode using nodemon
```

Server will run at: [http://localhost:3000](http://localhost:3000)

---

## 📸 Screenshots / API Demo

### 🔹 Health Check

![Health Check](https://drive.google.com/uc?export=view\&id=1tdVT8HGD4ARjRDeD1wjaAufBgANmF9Gw)

### 🔹 Product Listing

![Products](https://drive.google.com/uc?export=view\&id=1Bbu7TeZh0A6luM8X3hCeNeSvWCXTqscC)

### 🔹 Product Categories

![Categories](https://drive.google.com/uc?export=view\&id=1AGMlyo51xzxFeLkmxYUjCDP6yPifNvNu)

### 🔹 Customer Login

![Customer Login](https://drive.google.com/uc?export=view\&id=1bham-NZp0oYwmP6JjldveCsqVM1FoZ9A)

### 🔹 Customer Product View

![Customer Products](https://drive.google.com/uc?export=view\&id=1iFgEB__K7rB_FAj9zkVl7lVK6eP52MyB)

### 🔹 Shopping Cart

![Shopping Cart](https://drive.google.com/uc?export=view\&id=1EOjdTQMmVFTH52bR0_g8jxzYjRhs1k8y)

### 🔹 Orders

![Orders](https://drive.google.com/uc?export=view\&id=1LoTeJfcLsXGSIcniUR5LL8-V1rAAFVVn)

---

## 💬 Author

👩‍💻 **ThiruAishwaryaYadav Gotte**
📧 `your-email@example.com`
🔗 [LinkedIn](https://www.linkedin.com/in/your-profile/)
💼 Backend Developer Intern @ AdaptNXT

---

## 📝 License

This project is built for internship purposes. All rights reserved © 2025.

```

---

### ✅ Final Tips

- Paste this into your `README.md` file.
- Ensure all Google Drive files are **set to “Anyone with the link can view”**.
- Push the repo to GitHub.

Would you like help:
- Deploying it to Render?
- Adding a basic React or HTML frontend to test it?
- Creating a GitHub repo with all this?

Let me know!
```

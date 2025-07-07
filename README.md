
# 🛒 E-commerce API – Node.js + Express + MongoDB

A scalable, secure and modern RESTful E-commerce backend built using **Node.js**, **Express**, and **MongoDB**, demonstrating backend skills like authentication, role-based access, cart handling, product APIs, and more.

🌐 **Live API**: [https://ecommerce-api-pu0z.onrender.com](https://ecommerce-api-pu0z.onrender.com)

---

## ✨ Features

- 🔐 JWT-based authentication  
- 👥 Role-based access (Admin, Customer)  
- 📦 Product listing with search & pagination  
- 🛒 Cart management (add, update, remove)  
- 🧾 Order creation from cart  
- 📂 Product categories  
- 🧠 Clean code architecture  
- ☁️ Cloud deployed (Render)  
- 🧪 Optional AI/ML integrations (future scope)  

---

## 🚀 API Endpoints

### 📍 Auth

| Method | Route               | Access    | Description           |
|--------|---------------------|-----------|------------------------|
| POST   | /api/auth/register  | Public    | Register a new user   |
| POST   | /api/auth/login     | Public    | Login and get token   |
| GET    | /api/auth/profile   | Protected | Get logged-in user    |

---

### 📍 Products

| Method | Route                      | Access | Description              |
|--------|----------------------------|--------|--------------------------|
| GET    | /api/products              | Public | Get all products         |
| GET    | /api/products/:id          | Public | Get product by ID        |
| POST   | /api/products              | Admin  | Add new product          |
| PUT    | /api/products/:id          | Admin  | Update product by ID     |
| DELETE | /api/products/:id          | Admin  | Delete product by ID     |
| GET    | /api/products/categories   | Public | Get all categories       |

---

### 🛒 Cart

| Method | Route                     | Access    | Description             |
|--------|---------------------------|-----------|-------------------------|
| GET    | /api/cart                 | Customer  | View cart               |
| POST   | /api/cart/add             | Customer  | Add item to cart        |
| PUT    | /api/cart/items/:id       | Customer  | Update item quantity    |
| DELETE | /api/cart/items/:id       | Customer  | Remove item from cart   |
| DELETE | /api/cart/clear           | Customer  | Clear the cart          |

---

### 📦 Orders

| Method | Route                      | Access    | Description             |
|--------|----------------------------|-----------|-------------------------|
| POST   | /api/orders                | Customer  | Create an order         |
| GET    | /api/orders/my-orders      | Customer  | View user's orders      |
| GET    | /api/orders                | Admin     | View all orders         |
| PUT    | /api/orders/:id/status     | Admin     | Update order status     |

---

## 📂 Folder Structure

```

ecommerce-api/
├── controllers/
├── middleware/
├── models/
├── routes/
├── server.js
├── .env
├── package.json

````

---

## 📸 Screenshots

### 🔹 Health Check  
![Health](https://drive.google.com/uc?export=view&id=1tdVT8HGD4ARjRDeD1wjaAufBgANmF9Gw)

### 🔹 Product Listing  
![Products](https://drive.google.com/uc?export=view&id=1Bbu7TeZh0A6luM8X3hCeNeSvWCXTqscC)

### 🔹 Product Categories  
![Categories](https://drive.google.com/uc?export=view&id=1AGMlyo51xzxFeLkmxYUjCDP6yPifNvNu)

### 🔹 Customer Login  
![Login](https://drive.google.com/uc?export=view&id=1bham-NZp0oYwmP6JjldveCsqVM1FoZ9A)

### 🔹 Customer Product View  
![Customer Products](https://drive.google.com/uc?export=view&id=1iFgEB__K7rB_FAj9zkVl7lVK6eP52MyB)

### 🔹 Shopping Cart  
![Cart](https://drive.google.com/uc?export=view&id=1EOjdTQMmVFTH52bR0_g8jxzYjRhs1k8y)

### 🔹 Orders  
![Orders](https://drive.google.com/uc?export=view&id=1LoTeJfcLsXGSIcniUR5LL8-V1rAAFVVn)

---

## 🎥 Project Demo – Execution & Output

[![Watch Project Demo](https://drive.google.com/uc?export=view&id=1tdVT8HGD4ARjRDeD1wjaAufBgANmF9Gw)](https://drive.google.com/file/d/1ru3nRvo-XplDU1e5QRO6NMhw5MRSwUjs/view?usp=sharing)

📺 **[Click here to watch full execution video](https://drive.google.com/file/d/1ru3nRvo-XplDU1e5QRO6NMhw5MRSwUjs/view?usp=sharing)**

---

## ✅ Assignment Criteria – Fulfilled

| Requirement                         | Status | Details                          |
|-------------------------------------|--------|----------------------------------|
| Product Listing                     | ✅      | `/api/products` implemented     |
| Cart Management                     | ✅      | Full cart CRUD supported        |
| Order Creation                      | ✅      | Orders from cart + history view |
| JWT Authentication                  | ✅      | Login & protected routes        |
| Admin Role                          | ✅      | Can manage products & orders    |
| Customer Role                       | ✅      | Can browse, cart, and order     |
| Product Categories & Search         | ✅      | Categories implemented           |
| Pagination                          | ✅      | On product list                  |
| Basic Frontend Interaction (HTML)   | ✅      | Screenshots + video proof       |
| Cloud Deployment (Render)           | ✅      | Live at Render link             |
| Code Organization & .env usage      | ✅      | Modular code + secure secrets   |

---

## ⚙️ Run Locally

1. **Clone the repo**
```bash
git clone https://github.com/your-username/ecommerce-api.git
cd ecommerce-api
npm install
````

2. **Create `.env` file**

```env
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
PORT=3000
```

3. **Run the server**

```bash
npm run dev
```

---

## 🧠 Technologies Used

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT for Auth
* bcryptjs for Password Hashing
* Nodemon for Dev Server
* Render (Cloud Deployment)

---

## 👤 Author

**ThiruAishwaryaYadav Gotte**
📧 [aishwaryayadav100@gmail.com](mailto:aishwaryayadav100@gmail.com)

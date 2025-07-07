const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Import models
const User = require('./models/User');
const Product = require('./models/Product');

// Sample data
const sampleUsers = [
  {
    username: 'admin',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin'
  },
  {
    username: 'customer1',
    email: 'customer1@example.com',
    password: 'password123',
    role: 'customer'
  },
  {
    username: 'customer2',
    email: 'customer2@example.com',
    password: 'password123',
    role: 'customer'
  }
];

const sampleProducts = [
  {
    name: 'MacBook Pro 13"',
    description: 'Apple MacBook Pro 13-inch with M2 chip, 8GB RAM, 256GB SSD',
    price: 1299.99,
    category: 'Laptops',
    imageUrl: 'https://via.placeholder.com/300x200?text=MacBook+Pro',
    stock: 15
  },
  {
    name: 'iPhone 15 Pro',
    description: 'Apple iPhone 15 Pro with A17 Pro chip, 128GB storage',
    price: 999.99,
    category: 'Smartphones',
    imageUrl: 'https://via.placeholder.com/300x200?text=iPhone+15+Pro',
    stock: 25
  },
  {
    name: 'Samsung Galaxy S24',
    description: 'Samsung Galaxy S24 with Snapdragon 8 Gen 3, 256GB storage',
    price: 899.99,
    category: 'Smartphones',
    imageUrl: 'https://via.placeholder.com/300x200?text=Galaxy+S24',
    stock: 20
  },
  {
    name: 'Dell XPS 15',
    description: 'Dell XPS 15 with Intel i7, 16GB RAM, 512GB SSD',
    price: 1499.99,
    category: 'Laptops',
    imageUrl: 'https://via.placeholder.com/300x200?text=Dell+XPS+15',
    stock: 10
  },
  {
    name: 'Sony WH-1000XM5',
    description: 'Sony WH-1000XM5 Wireless Noise Canceling Headphones',
    price: 349.99,
    category: 'Audio',
    imageUrl: 'https://via.placeholder.com/300x200?text=Sony+Headphones',
    stock: 30
  },
  {
    name: 'iPad Air',
    description: 'Apple iPad Air with M1 chip, 64GB storage, 10.9-inch display',
    price: 599.99,
    category: 'Tablets',
    imageUrl: 'https://via.placeholder.com/300x200?text=iPad+Air',
    stock: 18
  },
  {
    name: 'Nike Air Max 270',
    description: 'Nike Air Max 270 running shoes, comfortable and stylish',
    price: 129.99,
    category: 'Footwear',
    imageUrl: 'https://via.placeholder.com/300x200?text=Nike+Air+Max',
    stock: 50
  },
  {
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with 12-cup capacity',
    price: 79.99,
    category: 'Home & Kitchen',
    imageUrl: 'https://via.placeholder.com/300x200?text=Coffee+Maker',
    stock: 35
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce-api');
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});
    console.log('Cleared existing data');

    // Create users
    const createdUsers = [];
    for (const userData of sampleUsers) {
      const user = new User(userData);
      await user.save();
      createdUsers.push(user);
      console.log(`Created user: ${user.username}`);
    }

    // Create products
    for (const productData of sampleProducts) {
      const product = new Product(productData);
      await product.save();
      console.log(`Created product: ${product.name}`);
    }

    console.log('\n✅ Database seeded successfully!');
    console.log('\nSample users created:');
    createdUsers.forEach(user => {
      console.log(`- ${user.username} (${user.email}) - Role: ${user.role}`);
    });
    
    console.log('\nSample products created:');
    sampleProducts.forEach(product => {
      console.log(`- ${product.name} - $${product.price} - Stock: ${product.stock}`);
    });

    console.log('\nYou can now:');
    console.log('1. Start the server: npm run dev');
    console.log('2. Visit: http://localhost:3000');
    console.log('3. Login with any of the sample users above');

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

// Run the seed function
seedDatabase(); 
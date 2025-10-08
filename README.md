# 🚀 NestJS Boilerplate with MongoDB Atlas

[![Deploy on Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

This is a **NestJS boilerplate** project configured with **MongoDB Atlas (via Mongoose)** — built for quickly starting backend API projects.  
It includes robust validation, environment configuration, Docker support, and deployment setup for Render.

---

## 🌐 Live Demo

Once deployed, your API will be live at:  
👉 **https://<your-app-name>.onrender.com**

Example endpoint:  
`https://https://nestjs-boilerplate-iui0.onrender.com/users`

---

## 🧰 Tech Stack

- **NestJS** — Progressive Node.js framework for scalable APIs  
- **MongoDB Atlas + Mongoose** — Cloud-hosted NoSQL database integration  
- **Class Validator / Transformer** — DTO validation and transformation  
- **bcrypt** — Password hashing for secure authentication  
- **Render** — Cloud deployment ready  

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yasminghassani/nestjs-boilerplate.git
cd nestjs-boilerplate
```

### 2️⃣ Install dependencies
```bash
yarn install
```

### 3️⃣ Set up environment variables
Create a .env file in the root directory:
```bash
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>
HASH_SECRET=
```

💡 Use your MongoDB Atlas connection string.
You can find it in your MongoDB Atlas Dashboard
 under Database → Connect → Drivers.

### 4️⃣ Run the app locally
Start the development server:
```bash
yarn start:dev
```

Or build and run in production:
```bash
yarn build
yarn start:prod
```

The app runs at 👉 http://localhost:3000

## 🛡️ Security

Passwords are hashed with bcrypt before storing in the database.

A secret key is used to enhance hashing security (HMAC-style).

Sensitive fields (like password) are never returned in API responses.

## 🛡️ License
MIT License © 2025 Yasmin Ghassani
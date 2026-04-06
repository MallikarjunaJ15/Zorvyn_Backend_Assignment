# 💰 Zorvyn Finance Dashboard (Backend + Frontend)

A **production-ready financial management system** built with MERN stack, featuring **RBAC, analytics dashboard, and real-time data insights**.

---

## 🚀 Live Features

* 🔐 Authentication (JWT + Cookies)
* 🛡 Role-Based Access Control (Admin / Analyst / Viewer)
* 💸 Transaction Management (CRUD + Filters + Pagination)
* 📊 Advanced Dashboard Analytics

  * Total Income / Expense / Balance
  * Category-wise breakdown
  * Monthly trends
  * Weekly summary
  * Recent activity
* 👥 Admin User Management
* 👤 Profile System
* ⚡ Fully responsive modern UI (Fintech style)

---

## 🧠 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Role-Based Authorization (RBAC)

### Frontend

* React (Vite)
* Redux Toolkit + RTK Query
* Tailwind CSS
* Recharts (Charts & Analytics)

---

## 🏗 Architecture

```
src/
├── config/
├── constants/
├── validators/
├── middleware/
├── models/
├── controllers/
├── services/
├── routes/
├── utils/
├── docs/
└── app.js
```

👉 Clean separation of concerns:

* Controllers → request handling
* Services → business logic
* Models → database layer

---

## 🔐 Authentication & RBAC

| Role    | Permissions                   |
| ------- | ----------------------------- |
| Viewer  | Dashboard only                |
| Analyst | View transactions + analytics |
| Admin   | Full access (CRUD + users)    |

---

## 📊 Dashboard Capabilities

* Aggregation pipelines using MongoDB
* Optimized queries with indexes
* Real-time analytics
* Data visualization with charts

---

## ⚡ Key Highlights (What Makes This Stand Out)

* ✅ Production-level folder structure
* ✅ Service-layer architecture
* ✅ Advanced MongoDB aggregation
* ✅ Clean API design
* ✅ Scalable and secure
* ✅ Real-world use case (finance system)

---

## ⚙️ Environment Variables

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
ADMIN_EMAIL=your_email
```

---

## 🚀 Setup Instructions

### Backend

```
npm install
npm run dev
```

### Frontend

```
npm install
npm run dev
```

---

## 📡 API Documentation

See 👉 `docs/api.md`

---

## 👨‍💻 Author

**Mallikarjuna Div**
Backend Developer | MERN Stack Engineer

---

## 🧠 Final Note

This project is built with **real-world production standards**, focusing on scalability, security, and clean architecture.

---

# 🎓 Student Care – Final Year Project

**Student Care** is a **Full Stack Web Application** connecting **students** in need with **donors** through a secure and transparent donation system.  
Developed using **Angular**, **Node.js (Express)**, **MongoDB**, and **Stripe** for payment integration.

> 📄 **Additional Documentation:**  
> For complete technical details, review **“Final Year Project-SRS.pdf”** included in the project directory.  
> It contains the full **Software Requirements Specification (SRS)** for the system.

---

## 👨‍💻 Developers
- **Numan Ali (20021519-137)**  
- **Abdurrahman (20021519-049)**  

**Department:** Computer Science  
**Session:** 2020 – 2024  

---

## 🧩 Overview

**Student Care** allows verified students to request donations, and donors to contribute securely.  
Payments are handled through **Stripe**, linking donors directly to a specific student or student house.  
The system ensures **transparency**, **data security**, and **ease of use** for all users.

---

## 🛠️ Technologies Used

| Layer                 | Technology        |
|-----------------------|-----------------|
| Frontend              | Angular          |
| Backend               | Node.js + Express|
| Database              | MongoDB Atlas    |
| Payment Integration   | Stripe           |
| Package Manager       | npm              |
| Environment Management| dotenv           |

---

## ⚙️ How to Run the Project (All-in-One)

Follow these steps to run the **full system**:

```bash
# 1. Navigate to the main project folder
cd Final-Year-Project-main

# 2. Setup Backend
cd FYP-BACKEND
npm install

# 3. Configure Environment Variables
# Open the .env file in FYP-BACKEND and add the following:

# MongoDB Atlas:
# - Create a new database on MongoDB Atlas with the name "studentcare"
# - Copy the connection string (secret key) provided by MongoDB Atlas
# - Paste that string in the .env file as MONGO_URI

# Stripe:
# - Create a Stripe account
# - Get your Stripe secret key from the dashboard
# - Paste that key in the .env file as STRIPE_SECRET_KEY

# 4. Start Backend Server
npm start
# The backend server will run (default: http://localhost:5000)

# 5. Setup Frontend
cd ../FYP-FRONTEND
npm install

# 6. Start Frontend Server
ng serve
# The frontend will run (default: http://localhost:4200)

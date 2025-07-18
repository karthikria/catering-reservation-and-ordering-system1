
# 🍽️ Full Stack Catering Reservation & Ordering System

This project is a full-stack catering system that allows users to register/login, browse menu items, add items to a cart, place orders, and view their past orders. Admin users can upload new products and view all customer orders.


## 🚀 Features

### 👤 User Features:
- Register and Login using Firebase
- View available food items
- Add/remove items from cart
- Place an order
- View personal orders in "My Orders"
- Edit profile (update display name)

### 🛠️ Admin Features:
- Upload new products (image, name, price)
- View and delete all customer orders
- Delete products from dashboard

## structure 

/CateringApp/
├── server.js  
├── firebase.js  
├── cateringsystem-servicekey.json  
└── public/  
  ├── index.html – Login/Register  
  ├── dashboard.html – Menu & Add to Cart  
  ├── cart.html – View/Edit/Place Order  
  ├── upload.html – Admin Upload  
  ├── myorders.html – View Personal Orders  
  ├── vieworder.html – Admin: View All Orders  
  ├── myprofile.html – Profile Management  
  ├── style.css – Global styles  
  └── background.jpg – Background image 
## Tech Stack


- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: Firebase Firestore
- **Authentication**: Firebase Authentication
- **Hosting**: Express static server (`public/` folder)

## Run Locally

### 1. Requirements:
- Node.js
- Firebase project with Firestore + Authentication enabled

### 2. Installation:
npm install express firebase-admin body-parser

### 3. Setup:
Place your Firebase Admin SDK key as:
cateringsystem-XXXX-firebase-adminsdk.json

In firebase.js, initialize Firebase like this:

const admin = require("firebase-admin");
const serviceAccount = require("./cateringsystem-XXXX.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
module.exports = admin;

### 4. Run the server:
node server.js

### 5. Open the app:
Visit http://localhost:3000/index.html
## 🧠 API Endpoints

| Method | Endpoint           | Purpose                  |
| ------ | ------------------ | ------------------------ |
| GET    | /api/products      | Fetch all products       |
| POST   | /api/products      | Upload new product       |
| DELETE | /api/products/\:id | Delete a product         |
| POST   | /api/orders        | Submit a user order      |
| GET    | /api/myorders      | Fetch orders for user    |
| GET    | /api/allorders     | Fetch all orders (admin) |

## 🔐 Authentication & Security
 - Firebase Auth handles user login/registration

- Non-logged-in users are redirected to login

- Admin logic can be protected using Firebase custom claims (optional enhancement)
## 📸 Suggested Screenshots (for presentation/report)
Login Page
![1](https://github.com/user-attachments/assets/c15c0aaf-4fd5-4383-bd92-5d82d8ce3747)
Dashboard with Products
![2](https://github.com/user-attachments/assets/68c608d4-f02e-4554-8dd9-288b2395d153)
Cart Page
![3](https://github.com/user-attachments/assets/5722c2df-60a7-413b-86b1-3fea4e0393c9)
Upload Product (Admin)
![4](https://github.com/user-attachments/assets/368467f0-2f71-4617-aed6-576ace11c136)
My Orders
![5](https://github.com/user-attachments/assets/c14c0668-a930-4f50-bcbe-712926a56a74)
View Orders (Admin)
![6](https://github.com/user-attachments/assets/c53ac742-3610-46c7-9bcd-42100e570855)
My Profile
![7](https://github.com/user-attachments/assets/ae0a8404-5f99-486e-b22f-448ba49b8acf)
## Demo

https://github.com/user-attachments/assets/9de3689a-2123-40e8-ad22-63e6362cca06

## developed by

Name: Karthik S
## 📄 License
This project is intended for educational and academic purposes only.


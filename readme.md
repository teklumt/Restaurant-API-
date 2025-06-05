# 📖 Restaurant API Documentation

**Base URL:** `http://localhost:5000/api`

---

## 🔐 Authentication

### Register a New User

**POST** `/auth/signup`  
Roles: `customer`, `manager`, `admin`

**Request Body**

```json
{
  "username": "john_doe",
  "password": "securepass",
  "role": "customer"
}
```

---

### Login

**POST** `/auth/login`  
Login and receive a JWT token.

**Request Body**

```json
{
  "username": "john_doe",
  "password": "securepass"
}
```

**Response**

```json
{
  "token": "JWT_TOKEN_HERE",
  "user": {
    "id": "...",
    "username": "john_doe",
    "role": "customer"
  }
}
```

---

## 🍽 Menu Management

### Get All Menu Items

**GET** `/menu`  
_Public endpoint_

---

### Create a New Menu Item

**POST** `/menu`  
Role: `manager`

**Headers**

```
Authorization: Bearer <token>
```

**Request Body**

```json
{
  "name": "Pasta Alfredo",
  "description": "Creamy pasta with garlic",
  "price": 12.5,
  "category": "Pasta"
}
```

---

### Update a Menu Item

**PUT** `/menu/:id`  
Role: `manager`

---

### Delete a Menu Item

**DELETE** `/menu/:id`  
Role: `manager`

---

## 🛒 Order Management

### Place a New Order

**POST** `/orders`  
Role: `customer`

**Request Body**

```json
{
  "items": [
    { "menuItem": "menuItemId1", "quantity": 2 },
    { "menuItem": "menuItemId2", "quantity": 1 }
  ]
}
```

---

### Get Current User's Orders

**GET** `/orders/me`  
Role: `customer`

---

### Get All Orders

**GET** `/orders`  
Role: `admin`, `manager`

---

## 📅 Table Bookings

### Book a Table

**POST** `/bookings`  
Role: `customer`

**Request Body**

```json
{
  "date": "2025-06-15",
  "time": "18:30",
  "people": 4,
  "specialRequests": "Corner table"
}
```

---

### View Current User's Bookings

**GET** `/bookings/me`  
Role: `customer`

---

### View All Bookings

**GET** `/bookings`  
Role: `admin`, `manager`

---

## 👥 User Management (Admin Only)

### List All Users

**GET** `/users`  
Role: `admin`

---

### Update a User's Role

**PUT** `/users/:id/role`  
Role: `admin`

**Request Body**

```json
{
  "role": "manager"
}
```

---

### Basic System Analytics

**GET** `/users/analytics`  
Role: `admin`

**Response**

```json
{
  "users": 5,
  "orders": 12,
  "bookings": 4
}
```

# 🏥 Hospital Management System

A simple Hospital Management System developed using **Node.js** and **MySQL**. This project demonstrates basic database operations such as creating tables, inserting records, retrieving data, and deleting records.

## 📌 Features

- Create Hospital Database
- Create Patient, Doctor, and Staff Tables
- Insert Records
- Display Records
- Delete Records
- Select Specific Columns
- MySQL Database Connectivity

## 🛠️ Technologies Used

- Node.js
- MySQL
- mysql2 (Recommended)
- Visual Studio Code

## 📂 Project Structure

```
Hospital-Management-System/
│
├── dbhospital.js
├── patient.js
├── doctor.js
├── staff.js
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Keerthi-0571/Hospital-Management-System.git
```

### Go to the project folder

```bash
cd Hospital-Management-System
```

### Install dependencies

```bash
npm install
```

### Install MySQL driver

```bash
npm install mysql2
```

## 🗄️ Configure MySQL

Update your database connection:

```javascript
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "YOUR_PASSWORD",
    database: "hospital2"
});
```

## ▶️ Run the Project

```bash
node dbhospital.js
```

or

```bash
node index.js
```

## 📷 Project Functions

- Create Database
- Create Tables
- Insert Records
- Select Records
- Delete Records

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push the branch
5. Create a Pull Request

## 👩‍💻 Author

**Keerthi**

GitHub:
https://github.com/Keerthi-0571

---

⭐ If you found this project useful, please consider giving it a star.
![Captura desde 2025-06-09 12-09-25](https://github.com/user-attachments/assets/4b64dec5-d45c-4fdd-8828-fd36da01949b)
<p align="left">
<img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
</p>
<h1 align="center"> Financial Data Management System - SQL + NoSQL </h1>
## 📌 Description
This project is a complete system for organizing and managing financial data from fintech platforms (Nequi, Daviplata, etc.).  
The solution normalizes raw Excel data, imports it into a MySQL database, and provides a web interface with CRUD operations and advanced queries.
crate a base of data with conection api

It consists of:
- *Backend*: Node.js + Express + MySQL
- *Frontend*: Vite (Vanilla JS) + Fetch API + CSS/Bootstrap
- *Database*: MySQL (normalized to 3NF)

---

## Technologies Used
*Backend*
- Node.js
- Express
- MySQL2
- Body-parser
- CORS
- Nodemon (development)

*Frontend*
- Vite (Vanilla JS)
- HTML5 + CSS3 + Bootstrap
- Fetch API

*Database*
- MySQL 8.x
- CSV Data Import

---
```
##  Project Structure
final_database/
│── src/ # Express API
│ ├── server.js
│ ├── package.json
│ ├── style.css
│ ├── package.json
│   ├── CSS/ styless
│   ├── json/ db and server
│   ├── routes/ client and queries
│── public/ # Vite app
│ ├── index.html
│ ├── main.js
│
│── README.md
```
## System Features
CRUD Operations
Create: Add new clients
Read: List all clients
Update: Edit client details
Delete: Remove clients
Advanced Queries (via /api/queries)
Total paid by each client
Endpoint: /api/queries/total-paid
Pending invoices with client and transaction details
Endpoint: /api/queries/pending-invoices
Transactions by platform (Nequi, Daviplata)
Endpoint: /api/queries/transactions-by-platform/:platform

# Normalization Summary
The original dataset contained mixed information (clients, invoices, transactions, platforms) in a single sheet.
We applied 1NF, 2NF, and 3NF to create separate tables, remove redundancy, and ensure data consistency.


👤 Author
Name: Iris Martelo Mora
Clan: Macondo

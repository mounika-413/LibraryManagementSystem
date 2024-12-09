Library Management System
A simple library management system built with Flask, allowing users to manage books and members. This application supports user login, adding, updating, and deleting books, as well as adding members.

Features
User login (mock implementation)
Add, update, and delete books
Add members
View list of books
Simple in-memory storage (data is not persistent)
Technologies Used
Python
Flask
Flask-CORS
HTML/CSS
JavaScript (Fetch API)
Installation
Prerequisites
Python 3.x
pip (Python package installer)
Steps to Set Up
Clone the repository:


bash

Verify
Copy code
python -m venv venv
source venv/bin/activate 
Install the required packages:

bash

Verify
Copy code
pip install Flask Flask-CORS
Run the application:

bash

Verify
Copy code
python app.py
Open your browser and navigate to:


Verify
Copy code
http://127.0.0.1:5000/
Usage
Login:

Enter your email and click the "Login" button. (Note: The login functionality is mocked and does not validate real users.)
Manage Books:

Add a new book by entering the title and author, then clicking "Add Book."
Edit an existing book by clicking the "Edit" button next to the book, entering the new title and author, and clicking "Update."
Delete a book by clicking the "Delete" button next to the book.
Manage Members:

Add a new member by entering the name and email, then clicking "Add Member."
API Endpoints
POST /login: Mock login endpoint.
GET /books: Retrieve the list of books.
POST /books: Add a new book.
PUT /books/<book_id>: Update an existing book.
DELETE /books/<book_id>: Delete a book.
POST /members: Add a new member.

Library Management System
A simple library management system built with Flask, allows users to manage books and members. This application supports user login, adding, updating, and deleting books, as well as adding members.

Features:
  1. User login (mock implementation)
  2. Add, update, and delete books
  3. Add members
  4. View list of books
  5. Simple in-memory storage (data is not persistent)

Technologies Used:
  1. Python
  2. Flask
  3. Flask-CORS
  4. HTML/CSS
  5. JavaScript (Fetch API)
     
Installation:
  Prerequisites
    1. Python 3. x
    2. pip (Python package installer)

Usage:
  1. Login:
    Enter your email and click the "Login" button. (Note: The login functionality is mocked and does not validate real users.)

  2. Manage Books:
     1. Add a new book by entering the title and author, then clicking "Add Book."
     2. Edit an existing book by clicking the "Edit" button next to the book, entering the new title and author, and clicking "Update."
     3. Delete a book by clicking the "Delete" button next to the book.
     
   3. Manage Members:
      1. Add a new member by entering the name and email, then clicking "Add Member."
         
API Endpoints:

  1. POST /login: Mock login endpoint.
  2. GET /books: Retrieve the list of books.
  3. POST /books: Add a new book.
  4. PUT /books/<book_id>: Update an existing book.
  5. DELETE /books/<book_id>: Delete a book.
  6. POST /members: Add a new member.

let token = '';


async function login() {
    const email = document.getElementById('email').value;
    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    });

    if (response.ok) {
        const data = await response.json();
        token = data.access_token;
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('book-section').style.display = 'block';
        loadBooks();
    } else {
        alert('Login failed');
    }
}


async function addBook() {
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;

    const response = await fetch('/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ title, author })
    });

    if (response.ok) {
        alert('Book added successfully');
        document.getElementById('book-title').value = '';
        document.getElementById('book-author').value = '';
        loadBooks();
    } else {
        alert('Failed to add book');
    }
}


async function loadBooks() {
    const response = await fetch('/books', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (response.ok) {
        const books = await response.json();
        const bookList = document.getElementById('book-list');
        bookList.innerHTML = ''; 

      
        books.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.className = 'book-item';
            bookItem.innerHTML = `
                <span>${book.title} by ${book.author}</span>
                <button onclick="editBook(${book.id})">Edit</button>
                <button onclick="deleteBook(${book.id})">Delete</button>
                <input type="text" id="edit-title-${book.id}" placeholder="New Title" style="display:none;">
                <input type="text" id="edit-author-${book.id}" placeholder="New Author" style="display:none;">
                <button onclick="updateBook(${book.id})" style="display:none;" id="update-button-${book.id}">Update</button>
            `;
            bookList.appendChild(bookItem);
        });
    } else {
        alert('Failed to load books');
    }
}


function editBook(bookId) {
    document.getElementById(`edit-title-${bookId}`).style.display = 'inline';
    document.getElementById(`edit-author-${bookId}`).style.display = 'inline';
    document.getElementById(`update-button-${bookId}`).style.display = 'inline';
}


async function updateBook(bookId) {
    const newTitle = document.getElementById(`edit-title-${bookId}`).value;
    const newAuthor = document.getElementById(`edit-author-${bookId}`).value;

    const response = await fetch(`/books/${bookId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ title: newTitle, author: newAuthor })
    });

    if (response.ok) {
        alert('Book updated successfully');
        loadBooks();
    } else {
        alert('Failed to update book');
    }
}


async function deleteBook(bookId) {
    const response = await fetch(`/books/${bookId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (response.ok) {
        alert('Book deleted successfully');
        loadBooks(); 
    } else {
        alert('Failed to delete book');
    }
}


async function addMember() {
    const memberName = document.getElementById('member-name').value;
    const memberEmail = document.getElementById('member-email').value;

    const response = await fetch('/members', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name: memberName, email: memberEmail })
    });

    if (response.ok) {
        alert(' Member added successfully');
        document.getElementById('member-name').value = '';
        document.getElementById('member-email').value = '';
    } else {
        alert('Failed to add member');
    }
}
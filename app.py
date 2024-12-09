from models import db
from routes import api
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

books = []
members=[]

@app.route('/')
def index():
    return render_template('index.html') 

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json() 
    email = data.get('email')  

    return jsonify({'access_token': 'sample_token'})  

@app.route('/books', methods=['GET', 'POST'])
def manage_books():
    if request.method == 'POST':
        data = request.get_json()  
        data['id']=len(books)+1
        books.append(data)  
        return jsonify(data), 201 
    return jsonify(books)  

@app.route('/books/<int:book_id>', methods=['PUT', 'DELETE'])
def update_delete_book(book_id):
    if request.method == 'PUT':
        data = request.get_json()
        for book in books:
            if book['id'] == book_id:
                book.update(data)
                return jsonify(book), 200
        return jsonify({'error': 'Book not found'}), 404

    if request.method == 'DELETE':
        books[:]= [book for book in books if book['id'] != book_id]
        return jsonify({'message': 'Book deleted'}), 200

@app.route('/members', methods=['POST'])
def add_member():
    data = request.get_json()
    members.append(data)
    return jsonify(data), 201

if __name__ == '__main__':
    app.run(debug=True) 
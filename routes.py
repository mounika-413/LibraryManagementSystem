from flask import Blueprint, request, jsonify
from models import db, Book, Member
from flask_jwt_extended import create_access_token, jwt_required

api = Blueprint('api', __name__)

@api.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route('/books', methods=['POST'])
@jwt_required()
def add_book():
    data = request.json
    new_book = Book(title=data['title'], author=data['author'])
    db.session.add(new_book)
    db.session.commit()
    return jsonify({'message': 'Book added'}), 201

@api.route('/books', methods=['GET'])
@jwt_required()
def get_books():
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 10, type=int)
    books = Book.query.paginate(page, per_page, error_out=False)
    return jsonify([{'id': book.id, 'title': book.title, 'author': book.author} for book in books.items])

@api.route('/books/<int:book_id>', methods=['PUT'])
@jwt_required()
def update_book(book_id):
    data = request.json
    book = Book.query.get_or_404(book_id)
    book.title = data['title']
    book.author = data['author']
    db.session.commit()
    return jsonify({'message': 'Book updated'})

@api.route('/books/<int:book_id>', methods=['DELETE'])
@jwt_required() 
def delete_book(book_id):
    book = Book.query.get_or_404(book_id)
    db.session.delete(book)
    db.session.commit()
    return jsonify({'message': 'Book deleted'})

@api.route('/members', methods=['POST'])
@jwt_required()
def add_member():
    data = request.json
    new_member = Member(name=data['name'], email=data['email'])
    db.session.add(new_member)
    db.session.commit()
    return jsonify({'message': 'Member added'})
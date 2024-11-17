from flask import Flask, request, jsonify, send_file
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import csv
import json
import sqlite3
from io import StringIO, BytesIO

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///books.db'  
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

CORS(app, origins=["http://localhost:3000"])


# Book model
class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    author = db.Column(db.String(120), nullable=False)
    genre = db.Column(db.String(100), nullable=False)
    publication_date = db.Column(db.String(50), nullable=False)
    isbn = db.Column(db.String(20), nullable=False, unique=True)

    def __repr__(self):
        return f'<Book {self.title}>'

# Create database tables before the first request
with app.app_context():
    db.create_all()

# API endpoint to add a new book
@app.route('/api/books/add', methods=['POST'])
def add_book():
    data = request.get_json()
    new_book = Book(
        title=data['title'],
        author=data['author'],
        genre=data['genre'],
        publication_date=data['publication_date'],
        isbn=data['ISBN']
    )
    db.session.add(new_book)
    db.session.commit()
    return jsonify({'message': 'Book added successfully'}), 201

# API endpoint to retrieve all books
@app.route('/api/books', methods=['GET'])
def get_books():
    books = Book.query.all()
    result = []
    for book in books:
        result.append({
            'id': book.id,
            'title': book.title,
            'author': book.author,
            'genre': book.genre,
            'publication_date': book.publication_date,
            'ISBN': book.isbn
        })
    return jsonify(result), 200


# API endpoint to export books to CSV
@app.route('/api/export/csv', methods=['GET'])
def export_csv():
    books = Book.query.all()

    # Create a text stream using StringIO
    csv_text = StringIO()
    csv_writer = csv.writer(csv_text)
    csv_writer.writerow(['Title', 'Author', 'Genre', 'Publication Date', 'ISBN'])  # Header row

    # Add book rows to the CSV
    for book in books:
        csv_writer.writerow([book.title, book.author, book.genre, book.publication_date, book.isbn])

    # Encode the CSV content to bytes
    csv_bytes = BytesIO(csv_text.getvalue().encode('utf-8'))
    csv_text.close()

    # Send the CSV file as a response
    return send_file(
        csv_bytes,
        mimetype='text/csv',
        as_attachment=True,
        download_name='books_inventory.csv'
    )

# Start the Flask server
if __name__ == '__main__':
    app.run(debug=True)

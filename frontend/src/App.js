import React, { useState, useEffect } from 'react';
import AddBook from './components/AddBook';
import FilterBooks from './components/FilterBooks';
import ExportCSV from './components/ExportCSV';
import BookList from './components/BookList';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  // Fetch books from the backend
  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/books');
      setBooks(response.data); // Full list of books
      setFilteredBooks(response.data); // Initially, set filtered books to all books
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks(); // Fetch books when component mounts
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6 space-y-6">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-blue-600">Book Inventory</h1>
          <p className="text-gray-500 mt-2">Manage your book collection with ease</p>
        </header>

        {/* Add and Filter Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-200 pt-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add a New Book</h2>
            <AddBook setBooks={setBooks} fetchBooks={fetchBooks} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Filter Books</h2>
            <FilterBooks books={books} setBooks={setFilteredBooks} />
          </div>
        </section>

        {/* Table and Export Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 border-t border-gray-200 pt-6">
          {/* Table (spanning 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Book List</h2>
            <BookList books={filteredBooks} />
          </div>

          {/* Export Data Section */}
          <div className="flex flex-col justify-center items-start lg:items-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Export Data</h2>
            <ExportCSV books={filteredBooks} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

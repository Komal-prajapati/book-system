import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function AddBook({ setBooks, fetchBooks }) {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    publication_date: '',
    ISBN: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/books/add', newBook);
      fetchBooks();
      Swal.fire({
        title: 'Success!',
        text: 'The book has been added successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      setNewBook({
        title: '',
        author: '',
        genre: '',
        publication_date: '',
        ISBN: '',
      }); // Reset form
    } catch (error) {
      console.error('Error adding book:', error);
      Swal.fire({
        title: 'Error!',
        text: 'There was an issue adding the book. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Title Field */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-gray-400 focus:border-gray-400 px-3 py-2"
              placeholder="Enter book title"
              required
            />
          </div>

          {/* Author Field */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Author</label>
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-gray-400 focus:border-gray-400 px-3 py-2"
              placeholder="Enter author name"
              required
            />
          </div>

          {/* Genre Field */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Genre</label>
            <input
              type="text"
              name="genre"
              value={newBook.genre}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-gray-400 focus:border-gray-400 px-3 py-2"
              placeholder="Enter genre"
              required
            />
          </div>

          {/* Publication Date Field */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Publication Date</label>
            <input
              type="date"
              name="publication_date"
              value={newBook.publication_date}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-gray-400 focus:border-gray-400 px-3 py-2"
              required
            />
          </div>

          {/* ISBN Field */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">ISBN</label>
            <input
              type="text"
              name="ISBN"
              value={newBook.ISBN}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-gray-400 focus:border-gray-400 px-3 py-2"
              placeholder="Enter ISBN"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto mt-4 bg-gray-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;

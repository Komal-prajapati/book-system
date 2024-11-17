import React, { useState } from 'react';

function FilterBooks({ books, setBooks }) {
  const [filter, setFilter] = useState({
    title: '',
    author: '',
    genre: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleFilter = () => {
    const filteredBooks = books.filter((book) => {
      return (
        (filter.title ? book.title.toLowerCase().includes(filter.title.toLowerCase()) : true) &&
        (filter.author ? book.author.toLowerCase().includes(filter.author.toLowerCase()) : true) &&
        (filter.genre ? book.genre.toLowerCase().includes(filter.genre.toLowerCase()) : true)
      );
    });
    setBooks(filteredBooks);
  };

  const clearFilters = () => {
    setFilter({
      title: '',
      author: '',
      genre: '',
    });
    setBooks(books); // Reset to the original list of books
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Title Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={filter.title}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-gray-400 focus:border-gray-400"
            placeholder="Filter by title"
          />
        </div>

        {/* Author Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Author</label>
          <input
            type="text"
            name="author"
            value={filter.author}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-gray-400 focus:border-gray-400"
            placeholder="Filter by author"
          />
        </div>

        {/* Genre Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Genre</label>
          <input
            type="text"
            name="genre"
            value={filter.genre}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-gray-400 focus:border-gray-400"
            placeholder="Filter by genre"
          />
        </div>
      </div>

      <div className="flex justify-center md:justify-start space-x-4 mt-6">
        {/* Apply Filters Button */}
        <button
          type="button"
          onClick={handleFilter}
          className="px-6 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          Apply Filters
        </button>

        {/* Clear Filters Button */}
        <button
          type="button"
          onClick={clearFilters}
          className="px-6 py-2 bg-gray-200 text-gray-600 rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default FilterBooks;

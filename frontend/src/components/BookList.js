import React from 'react';

function BookList({ books }) {
  return (
    <div className="p-4">
      {books.length === 0 ? (
        <p className="text-gray-500 text-center">No books available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300 shadow-md rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Title</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Author</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Genre</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Publication Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">ISBN</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id} className="odd:bg-white even:bg-gray-50 hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{book.title}</td>
                  <td className="border border-gray-300 px-4 py-2">{book.author}</td>
                  <td className="border border-gray-300 px-4 py-2">{book.genre}</td>
                  <td className="border border-gray-300 px-4 py-2">{book.publication_date}</td>
                  <td className="border border-gray-300 px-4 py-2">{book.ISBN}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default BookList;

import React from 'react';

function ExportCSV() {
  const handleExport = () => {
    window.location.href = 'http://localhost:5000/api/export/csv';
  };

  return (
    <button onClick={handleExport}>Export as CSV</button>
  );
}

export default ExportCSV;

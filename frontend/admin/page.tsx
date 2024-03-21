import { useEffect, useState } from 'react';
import DataList from '../components/DataList';

function DataPage() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  async function fetchData() {
    try {
      const response = await fetch(`/api/data?page=${currentPage}`);
      const { data: fetchedData, totalPages: fetchedTotalPages } = await response.json();
      setData(fetchedData);
      setTotalPages(fetchedTotalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  }

  function handlePrevPage() {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  }

  return (
    <div>
      <h1>Data Page</h1>
      <DataList data={data} />
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default DataPage;

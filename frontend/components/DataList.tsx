import React from 'react';

interface DataItem {
  _id: string;
  field1: string;
  field2: string;
  // Add other fields as needed
}

interface DataListProps {
  data: DataItem[];
}

const DataList: React.FC<DataListProps> = ({ data }) => {
  return (
    <div>
      {data.map((item: DataItem) => (
        <div key={item._id} className="border p-4 mb-4">
          {/* Display data fields */}
          <p>{item.field1}</p>
          <p>{item.field2}</p>
          {/* Add other fields as needed */}
        </div>
      ))}
    </div>
  );
}

export default DataList;

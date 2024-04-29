import React from 'react';

interface CSVRow {
  [key: string]: string | number;
}

interface Props {
  csvData: CSVRow[];
  sectionKey: string;
}

const RenderCSVData: React.FC<Props> = ({ csvData, sectionKey }) => {
  return (
    <div key={sectionKey}>
      <h2>{sectionKey}</h2>
      <table>
        <thead>
          <tr>
            {csvData.length > 0 && Object.keys(csvData[0]).map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {csvData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, columnIndex) => (
                <td key={columnIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RenderCSVData;

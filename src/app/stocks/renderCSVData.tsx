// RenderCSVData.tsx
import React from 'react';
import styles from './RenderCSVData.module.css';

interface CSVRow {
  [key: string]: string | number;
}

interface Props {
  csvData: CSVRow[];
  sectionKey: string;
}

const RenderCSVData: React.FC<Props> = ({ csvData, sectionKey }) => {
  return (
    <div className={styles.container} key={sectionKey}>
      <h2 className={styles.renderCSVDataTitle}>{sectionKey}</h2>
      <table className={styles.renderCSVDataTable}>
        <thead>
          <tr>
            {csvData.length > 0 && Object.keys(csvData[0]).map((key, index) => (
              <th key={index} className={styles.renderCSVDataTh}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {csvData.map((row, rowIndex) => (
            <tr key={rowIndex} className={styles.renderCSVDataTr}>{/* Apply local class to tr */}
              {Object.values(row).map((value, columnIndex) => (
                <td key={columnIndex} className={styles.renderCSVDataTd}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RenderCSVData;

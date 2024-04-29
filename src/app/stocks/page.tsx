'use client'
import React, { useState, useEffect } from 'react';
import TradingViewWidget from './chart';
import './globals.css';
import Header from '../home/TopBar';
import FooterSection from '../home/FooterSection';
import RenderCSVData from './renderCSVData';
import { parse } from 'csv-parse';

interface CSVRow {
  [key: string]: string | number;
}

function Page() {
  const [search, setSearch] = useState('');
  const [csvData, setCsvData] = useState<Record<string, CSVRow[]>>({
    KeyParameters: [],
    OpportunitiesAndObstacles: [],
    ProfitAndLoss: [],
    BalanceSheet: [],
    ShareHoldingPattern: []
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    // Load all CSV data here
    const fetchData = async () => {
      try {
        const ratiosData = await parseCSVFile('/src/csvs/Ratios.csv');
        const opportunitiesAndObstaclesData = await parseCSVFile('/src/csvs/OpportunitiesAndObstacles.csv');
        const profitAndLossData = await parseCSVFile('/src/csvs/PL.csv');
        const balanceSheetData = await parseCSVFile('/src/csvs/BalanceSheet.csv');
        const shareHoldingPatternData = await parseCSVFile('/src/csvs/ShareHoldingPattern.csv');

        setCsvData({
          KeyParameters: ratiosData,
          OpportunitiesAndObstacles: opportunitiesAndObstaclesData,
          ProfitAndLoss: profitAndLossData,
          BalanceSheet: balanceSheetData,
          ShareHoldingPattern: shareHoldingPatternData
        });
      } catch (error) {
        console.error('Error fetching CSV data:', error);
      }
    };

    fetchData();
  }, []);

  const parseCSVFile = async (filePath: string): Promise<CSVRow[]> => {
    return new Promise((resolve, reject) => {
      fetch(filePath)
        .then(response => response.text())
        .then(data => {
          parse(data, {
            columns: true,
          }, (parseError, output) => {
            if (parseError) {
              reject(parseError);
              return;
            }

            resolve(output);
          });
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  return (
    <>
      <Header search={search} onSearchChange={handleSearch}/>
      <TradingViewWidget/>
      <div>
        <RenderCSVData csvData={csvData.KeyParameters} sectionKey="Key Parameters & Ratios" />
      </div>
      <div>
        Opportunities And Obstacles Matrix
        {/* Data From Model to be put here */}
      </div>
      <div>
        Profit and Loss
        {/* Data from Profit loss CSV to be put here */}
      </div>
      <div>
        Balance Sheet
        {/* Data from Balance Sheet CSV to be put here */}
      </div>
      <div>
        Share Holding Pattern
        {/* Data from Share Holding Pattern CSV to be put here */}
      </div>
      <FooterSection/>
    </>
  );
}

export default Page;

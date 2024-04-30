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
        const ratiosData = await parseCSVFile('./csvs/Ratios.csv');
        const opportunitiesAndObstaclesData = await parseCSVFile('./csvs/Pattern.csv');
        const profitAndLossData = await parseCSVFile('./csvs/PL.csv');
        const balanceSheetData = await parseCSVFile('./csvs/BalanceSheet.csv');
        const shareHoldingPatternData = await parseCSVFile('./csvs/Pattern.csv');

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
        <RenderCSVData csvData={csvData.OpportunitiesAndObstacles} sectionKey="Opportunities And Obstacles Matrix "/>
      </div>
      <div>
        <RenderCSVData csvData={csvData.ProfitAndLoss} sectionKey="Profit and Loss" />
      </div>
      <div>
        
        <RenderCSVData csvData={csvData.BalanceSheet} sectionKey="Balance Sheet" />
      </div>
      <div>
        <RenderCSVData csvData={csvData.ShareHoldingPattern} sectionKey="Share Holding Pattern" />
      </div>
      <FooterSection/>
    </>
  );
}

export default Page;

import React, { useState } from 'react';
import styles from './GainLoss.module.css';
import { TbTriangleInvertedFilled, TbTriangleFilled } from "react-icons/tb";


const GainLoss = () => {
  return (
    <div className={styles.GainLosstable}>
      <div className={styles.gain}><p className={styles.heading}>Top Gainer <TbTriangleFilled className={styles.icon} /></p>
        <div>
          <div>
            <p>IDFC First Bank 86.23 2.00%</p>
          </div>
        </div>
        <div>
          <div>
            <p>IDFC First Bank 86.23 2.00%</p>
          </div>
        </div>
        <div>
          <div>
            <p>IDFC First Bank 86.23 2.00%</p>
          </div>
        </div>
        <div>
          <div>
            <p>IDFC First Bank 86.23 2.00%</p>
          </div>
        </div>
      </div>
      <div className={styles.loss}><p className={styles.heading}>Top Loser <TbTriangleInvertedFilled className={styles.icon} /></p>
        <div>
          <div>
            <p>IDFC First Bank 86.23 2.00%</p>
          </div>
        </div>
        <div>
          <div>
            <p>IDFC First Bank 86.23 2.00%</p>
          </div>
        </div>
        <div>
          <div>
            <p>IDFC First Bank 86.23 2.00%</p>
          </div>
        </div>
        <div>
          <div>
            <p>IDFC First Bank 86.23 2.00%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GainLoss;
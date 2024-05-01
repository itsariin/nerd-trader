import React, { useEffect, useRef, memo } from 'react';
import styles from './chart.module.css'

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null); // Provide a default value of null

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "BSE:IDFCFIRSTB",
        "timezone": "Asia/Kolkata",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "enable_publishing": true,
        "backgroundColor": "rgba(250, 249, 239, 1)",
        "gridColor": "rgba(246, 178, 107, 0.06)",
        "withdateranges": true,
        "range": "5D",
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "details": true,
        "calendar": false,
        "show_popup_button": true,
        "popup_width": "1000",
        "popup_height": "650",
        "support_host": "https://www.tradingview.com"
      }`;

    if (container.current) {
      container.current.appendChild(script);
    }

    // Cleanup function to remove the script when component unmounts
    return () => {
      if (container.current) {
        container.current.removeChild(script);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className={styles.tradingview} ref={container}>
    </div>
  );
}

export default memo(TradingViewWidget);

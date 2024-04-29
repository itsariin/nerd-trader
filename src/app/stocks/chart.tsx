"use client";
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null); // Provide a default value of null

  useEffect(
    () => {
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
        console.log("Container:", container.current);
        console.log("Script:", script);
        if (container.current) { // Check if container.current is not null before accessing it
          container.current.appendChild(script);
        }
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>

    </div>
  );
}

export default memo(TradingViewWidget);




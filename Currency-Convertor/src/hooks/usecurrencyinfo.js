import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`;

    fetch(url)
      .then((res) => res.json()) // Correctly parse the response
      .then((res) => {
        console.log("API response received:", res);
        if (res[currency]) {
          setData(res[currency]); // Set the data only if it exists
        } else {
          console.error("Currency data not found in response");
        }
      })
      .catch((e) => console.log("Error:"    , e));

    // Logging the data (although this will show the old data due to asynchronous nature)
    console.log("Data:", data);
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

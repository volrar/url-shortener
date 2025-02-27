import React, { useState, useEffect } from "react";

function URLShorten({ url, onShorten }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    console.log("Triggered API call for:", url);
    shortenURL();
  }, [url]);

  const shortenURL = async () => {
    if (!url.trim()) {
      setError("Please enter a valid URL.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log("Sending request to proxy server...");

      const response = await fetch("http://localhost:5000/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      

      if (!response.ok) {
        throw new Error("Failed to shorten the URL. Please try again.");
      }

      const data = await response.json();
      console.log("Proxy Server Response:", data);

      if (data.result_url) {
        onShorten(data.result_url);
      } else {
        throw new Error("Shortening service did not return a valid URL.");
      }
    } catch (err) {
      console.error("Error shortening URL:", err);
      setError("Error shortening the URL. Ensure it's a valid and public link.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <p>Shortening URL...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default URLShorten;

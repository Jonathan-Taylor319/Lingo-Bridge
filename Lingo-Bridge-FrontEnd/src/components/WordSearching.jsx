import React, { useState } from 'react';

export default function WordSearching() {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`api/search?term=${term}&strict=false&matchCase=false&limit=none&page=1&multiPage=false`);
        const data = await response.json();
        console.log('API Data:', data); // Check the data in the console
        setResults(data.data.slice(0, 3)); // Limit results to 3
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

  return (
    <div>
      <h2>Search for a word</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Enter a word"
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className="result">
              <h3>{result.word}</h3>
              <p><strong>Meaning:</strong> {result.meaning}</p>
              <p><strong>Example:</strong> {result.example}</p>
              <p><strong>Contributor:</strong> {result.contributor}</p>
              <p><strong>Date:</strong> {result.date}</p>
            </div>
          ))
        ) : (
          <h2>No results found</h2>
        )}
      </div>
    </div>
  );
}

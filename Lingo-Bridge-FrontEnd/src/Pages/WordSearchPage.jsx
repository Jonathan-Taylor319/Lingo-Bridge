import React, { useState } from 'react';
import { Filter } from 'bad-words'; // Corrected import

export default function WordSearching() {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])
  const [safeMode, setSafeMode] = useState(true); // Toggle Safe Mode

  const handleSubmit = async (e) => {
    e.preventDefault();

    const filter = new Filter(); // Initialize filter

    if (safeMode) {
      filter.addWords('offensiveWord1', 'offensiveWord2'); // Add more words if needed (optional)
    }

    try {
      const response = await fetch(`https://api.urbandictionary.com/v0/define?term=${term}`);
      const data = await response.json();
      console.log('API Data:', data);

      if (data.list && data.list.length > 0) {
        const filteredResults = data.list.slice(0, 3).map(result => ({
          ...result,
          definition: safeMode ? filter.clean(result.definition) : result.definition, // Clean the definition if Safe Mode is ON
          example: safeMode ? filter.clean(result.example) : result.example // Clean the example if Safe Mode is ON
        }));
        setResults(filteredResults);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div className='word-search-container'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Enter a word"
          />
        <div>
          <label htmlFor="safeMode">Safe Mode:</label>
          <input
            type="checkbox"
            id="safeMode"
            checked={safeMode}
            onChange={() => setSafeMode(prev => !prev)} // Toggle the safe mode
          />
        </div>
          <button type="submit">Search</button>
          <p> results will be shown below</p>
        </form>


        <div className='word-search-results-div'>
          {results.length > 0 ? (
            results.map((result, index) => (
              <div key={index} className="result">
                <h3>{result.word}</h3>
                <p><strong>Meaning:</strong> {result.definition}</p>
                <p><strong>Example:</strong> {result.example}</p>
              </div>
            ))
          ) : (
            <h2>No results found</h2>
          )}
        </div>
      </div>
    </>
  );
}

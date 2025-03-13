import React, { useState } from 'react';
import FancyButtons from '../components/FancyButtons';

export default function WordSearching() {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`https://api.urbandictionary.com/v0/define?term=${term}`)
      const data = await response.json()
      console.log('API Data:', data)

      if (data.list && data.list.length > 0) {
        setResults(data.list.slice(0, 3))
      } else {
        setResults([])
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  };

  return (
    <>
    < FancyButtons />
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

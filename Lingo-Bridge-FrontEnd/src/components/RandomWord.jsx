import React, { useState, useEffect } from "react";
import { Filter } from "bad-words"

export default function RandomWord() {
    const [wordOfTheDay, setWordOfTheDay] = useState(null)
    const [safeMode, setSafeMode] = useState(true)

    useEffect(() => {
        fetchWordofTheDay()
    }, [])

    const fetchWordofTheDay = async () => {
        setSafeMode(true)

        const filter = new Filter()

        try {
            const response = await fetch("https://api.urbandictionary.com/v0/random")
            const data = await response.json()

            if (data.list && data.list.length > 0) {
                const word = data.list[0]; // Get the first result
                // If Safe Mode is on, clean the definition and example
                const cleanedWord = {
                  ...word,
                  definition: safeMode ? filter.clean(word.definition) : word.definition,
                  example: safeMode ? filter.clean(word.example) : word.example
                };
                setWordOfTheDay(cleanedWord);
              } else {
                setWordOfTheDay(null);
              }
            } catch (error) {
              console.error('Error fetching Word of the Day:', error);
            }
          };
        
          return (
            <div className='random-word-of-the-day-container'>
              <h2>Random Word of the Day</h2>
              {wordOfTheDay ? (
                <div className="result">
                  <h3>{wordOfTheDay.word}</h3>
                  <p><strong>Meaning:</strong> {wordOfTheDay.definition}</p>
                  <p><strong>Example:</strong> {wordOfTheDay.example}</p>
                </div>
              ) : (
                <p>Loading Word of the Day...</p>
              )}
            </div>
          );
        }
        
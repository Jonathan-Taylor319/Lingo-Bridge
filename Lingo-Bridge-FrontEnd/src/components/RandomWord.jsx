import React, { useState, useEffect } from "react";

export default function RandomWord() {
    const [wordOfTheDay, setWordOfTheDay] = useState(null);

    useEffect(() => {
        fetchWordofTheDay();
    }, []);

    const fetchWordofTheDay = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/slang/random/");
            const data = await response.json();
            console.log(data)

            if (data.list && data.list.length > 0) {
                setWordOfTheDay(data.list[0]); // Get the first result
            } else {
                setWordOfTheDay(null);
            }
        } catch (error) {
            console.error("Error fetching Word of the Day:", error);
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

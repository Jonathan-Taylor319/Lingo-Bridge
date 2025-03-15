import React, { useState, useEffect } from "react";

export default function RandomWord() {
    const [wordOfTheDay, setWordOfTheDay] = useState(null);

    useEffect(() => {
        // Fetch the word of the day
        fetchWordofTheDay();

        // Dynamically load the Tenor GIF script
        const script = document.createElement("script");
        script.src = "https://tenor.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        // Clean up the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const fetchWordofTheDay = async () => {
        try {
            const response = await fetch("http://3.138.34.24:8000/api/slang/random/");
            const data = await response.json();
            console.log(data);

            if (response.ok) {
                setWordOfTheDay(data); // Assuming the API returns a single object
            } else {
                setWordOfTheDay(null);
            }
        } catch (error) {
            console.error("Error fetching Word of the Day:", error);
            setWordOfTheDay(null);
        }
    };

    return (
        <div className="random-word-of-the-day-container">
            <h2>Random GenZ slang of the Day</h2>
            {wordOfTheDay ? (
                <div className="result">
                    <h3>{wordOfTheDay.term}</h3>
                    <p><strong>Meaning:</strong> {wordOfTheDay.definition}</p>
                </div>
            ) : (
                <p>Loading Word of the Day...</p>
            )}
            <div className="tenor-gif-embed" data-postid="7813898246064171025" data-share-method="host" data-aspect-ratio="0.566265" data-width="100%">
                <a href="https://tenor.com/view/lets-goo-whiskey-bizz-lets-go-bruh-let%E2%80%99s-go-let%E2%80%99s-gooo-gif-7813898246064171025">
                    Lets Goo Whiskey Bizz GIF
                </a> from 
                <a href="https://tenor.com/search/lets+goo-gifs">Lets Goo GIFs</a>
            </div>
        </div>
    );
}

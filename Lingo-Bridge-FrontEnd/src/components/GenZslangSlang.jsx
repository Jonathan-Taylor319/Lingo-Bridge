import { useEffect, useState } from "react";

const GenZSlang = () => {
    const [slangList, setSlangList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGenZSlang = async () => {
            try {
                const endpoint = "https://en.wikipedia.org/w/api.php";
                const params = {
                    action: "query",
                    format: "json",
                    titles: "Glossary_of_Generation_Z_slang",
                    prop: "extracts",
                    exintro: true, // Get only the intro
                    exchars: 1000, // Limit to 1000 characters of the intro
                };

                const url = `${endpoint}?${new URLSearchParams(params)}`;

                const response = await fetch(url);
                console.log(response)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                console.log("API Data:", data); // Check the data returned from API

                // Extract the page content (introduction)
                const page = data.query.pages[Object.keys(data.query.pages)[0]];
                const introText = page.extract;

                if (introText) {
                    // Assuming we want to display the intro text, not an array of slang
                    setSlangList([introText]); // Set the intro as the slangList (you may need to adjust based on your actual format)
                } else {
                    console.error("No intro found for the page.");
                    setError("No Gen Z slang found.");
                }
            } catch (err) {
                console.error("Error fetching slang:", err);
                setError("Failed to fetch slang words.");
            }
        };

        fetchGenZSlang();
    }, []);

    return (
        <div>
            <h2>Gen Z Slang</h2>
            {error ? <p style={{ color: "red" }}>{error}</p> : null}
            <ul>
                {slangList.map((slang, index) => (
                    <li key={index}>{slang}</li> // Display intro text or update logic if it's structured differently
                ))}
            </ul>
        </div>
    );
};

export default GenZSlang;

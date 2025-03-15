import { useEffect, useState } from "react";

const GenZSlang = () => {
    const [slangList, setSlangList] = useState([]);
    const [error, setError] = useState(null);

    // Fetch all slang words when the component mounts
    useEffect(() => {
        const fetchSlang = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/slang/");
                if (!response.ok) throw new Error("Failed to fetch slang words");

                const data = await response.json();
                setSlangList(data.slang); // Assuming the API returns an object with a 'slang' property
            } catch (err) {
                console.error("Error:", err);
                setError("Could not load slang words.");
            }
        };

        fetchSlang();
    }, []);

    return (
        <div className="list">
            <h2>Gen Z Slang</h2>
            {error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : (
                <ul>
                    {slangList.map((slang, index) => (
                        <li key={index}>
                            <strong>{slang.term}:</strong> {slang.definition}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default GenZSlang;

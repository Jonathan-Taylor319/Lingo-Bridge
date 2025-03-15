import { useEffect, useState } from "react";

const GenZSlang = () => {
    const [slangList, setSlangList] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchSlang = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/slang/");
                if (!response.ok) throw new Error("Failed to fetch slang words");

                const data = await response.json();
                setSlangList(data.slang);
            } catch (err) {
                console.error("Error:", err);
                setError("Could not load slang words.");
            }
        };

        fetchSlang();
    }, []);

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/slang/search/?q=${searchTerm}`);
            if (!response.ok) throw new Error("Failed to search slang");

            const data = await response.json();
            setSlangList(data.results);
        } catch (err) {
            console.error("Error:", err);
            setError("Search failed.");
        }
    };

    return (
        <div>
            <h2>Gen Z Slang</h2>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search slang..."
            />
            <button onClick={handleSearch}>Search</button>

            {error ? <p style={{ color: "red" }}>{error}</p> : null}
            <ul>
                {slangList.map((slang, index) => (
                    <li key={index}>
                        <strong>{slang.term}:</strong> {slang.definition}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GenZSlang;

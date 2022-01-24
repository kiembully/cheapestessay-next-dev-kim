import React, { useState, useEffect } from "react";

const data = [
    {
      id: "1",
      name: "rex",
      type: "dog",
      emoji: "🐶",
      keywords: ["dog", "friendly", "inteligent"]
    },
    {
      id: "2",
      name: "garfield",
      type: "cat",
      emoji: "🐱",
      keywords: ["cat", "independent"]
    },
    {
      id: "3",
      name: "foxy",
      type: "fox",
      emoji: "🦊",
      keywords: ["fox", "inteligent"]
    },
    { id: "4", name: "sushi", type: "fish", emoji: "🐟", keywords: [] }
  ];

const searchtest = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    const handleChange = e => setSearchTerm(e.target.value);
  
    useEffect(() => {
      const results = data.filter(o => o.keywords.includes(searchTerm));
      console.log(results)
      setSearchResults(results);
    }, [searchTerm]);
  
    return (
      <div className="App">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="search"
        />
        <p>
          searchTerm:
          <br />
          {searchTerm}
        </p>
        <div className="results">
          <ul>
            {searchResults &&
              searchResults.map(item => <li key={item.id}>{item.emoji}</li>)}
          </ul>
        </div>
      </div>
    );
}

export default searchtest;
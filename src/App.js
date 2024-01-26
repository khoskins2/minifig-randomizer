// App.js

import React, { useState } from "react";
import { fetchRandomMinifigure, saveApiKey } from "./api";
import "./App.css";

function App() {
  const [minifigure, setMinifigure] = useState(null);

  const handleRandomize = async () => {
    const randomMinifigure = await fetchRandomMinifigure();
    setMinifigure(randomMinifigure);
  };

  return (
    <div>
      <h1 data-text="MINIFIGURE RANDOMIZER">𓏠 MINIFIGURE RANDOMIZER 𓏠</h1>
      <div>
        <button className="bn59" onClick={handleRandomize}>
          CLICK ME TO RANDOMIZE
        </button>
      </div>
      <div>
        {minifigure && (
          <div>
            <span>
              <p>Name: {minifigure.name}</p>

              <figure>
                <a
                  href={minifigure.set_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={minifigure.set_img_url} alt={minifigure.name} />
                </a>
                <figcaption>Click me to buy!</figcaption>
              </figure>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

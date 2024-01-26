import "./App.css";

const baseUrl = "https://rebrickable.com/api/v3/lego";
var apiKey = "2db1132a314df6f604bf4b25ec761ff1";

const cache = {
  load: () => Promise.resolve({ key: apiKey }),
  save: (data) => {
    apiKey = data.key;
    return Promise.resolve(data);
  },
};

const saveApiKey = (key) => {
  apiKey = key;
  return cache.save({ key });
};

const fetchRandomMinifigure = async () => {
  const url = `${baseUrl}/minifigs/?key=${apiKey}&page_size=1000`; // Adjust page_size as needed
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const minifigures = data.results;

    // Randomly select a minifigure
    const randomIndex = Math.floor(Math.random() * minifigures.length);
    const randomMinifigure = minifigures[randomIndex];

    console.log("Fetched Minifigure:", randomMinifigure);
    return randomMinifigure;
  } catch (error) {
    console.error("Error fetching random minifigure:", error);
    return null;
  }
};

export { saveApiKey, fetchRandomMinifigure };

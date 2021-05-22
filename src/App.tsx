import React, { useState } from "react";
import "./App.css";
import SimpleMap from "./components/map/map";
import styles from "./App.module.css";

function App() {
  const [coords, setCoords] = useState({
    lat: "",
    lng: "",
  });

  return (
    <div className="App">
      <h1>Maps In React</h1>
      <div className={styles.container}>
        <SimpleMap setCoords={setCoords} coords={coords} />
        {coords.lat && coords.lng && (
          <div className={styles.label}>
            Lat: {coords?.lat}, Lng: {coords.lng}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

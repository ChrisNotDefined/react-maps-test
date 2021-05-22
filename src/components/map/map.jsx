import React from "react";
import styles from "./map.module.css";

import GoogleMapReact from "google-map-react";

const TextPoint = () => {
  return <div className={styles.point}>+</div>;
};

const SimpleMap = ({ setCoords = null, coords = null }) => {
  const mapClick = (obj) => {
    setCoords(obj);
  };

  return (
    <div className={styles.container}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAlAfjkEyZc3T2vLRARL5f4QYJj3ZPai6Q" }}
        center={[16.836984, -99.9117]}
        zoom={14}
        onClick={mapClick}
      >
        {coords && <TextPoint lat={coords.lat} lng={coords.lng}></TextPoint>}
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Tạo icon tùy chỉnh cho marker
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const App = () => {
  return (
    <div style={{ height: '100vh' }}>
      <MapContainer center={[10.755, 106.699]} zoom={12} style={{ height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <TileLayer
          url={`http://localhost:3000/tiles/quan72023/{z}/{x}/{y}.png?rand=${Math.random()}`}
          attribution='&copy; Custom Data for Quận 7'
          minZoom={12}
          maxZoom={14}
          tileSize={256}
          tms={true}
          errorTileUrl="http://localhost:3000/tiles/default.png"
          updateWhenIdle={true}
          updateWhenZooming={false}
          updateInterval={500}
          eventHandlers={{
            loading: () => console.log("Đang load tile..."),
            tileloadstart: (e) => console.log("Bắt đầu tải tile:", e.tile.src),
            tileerror: (e) => console.error("Lỗi tile:", e.tile.src),
          }}
        />
        <Marker position={[10.755, 106.699]} icon={customIcon}>
          <Popup>Quận 7, TP.HCM</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default App;
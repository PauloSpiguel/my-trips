import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

type Place = {
  id: string;
  name: string;
  slug: string;
  locations: {
    latitude: number;
    longitude: number;
  };
};

type MapProps = {
  places?: Place[];
};

const Map = ({ places }: MapProps) => (
  <MapContainer
    center={[0, 0]}
    zoom={3}
    style={{ height: "100%", width: "100%" }}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {places?.map((place) => {
      const { latitude, longitude } = place.locations;
      return (
        <Marker
          key={`place-${place.id}`}
          position={[latitude, longitude]}
          title={place.name}
        />
      );
    })}
  </MapContainer>
);

export default Map;

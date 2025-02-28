import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';  // Make sure Leaflet's CSS is imported
import { Icon } from 'leaflet';
import markerIcon from '../../assets/marker-icon.png'
// import MarkerClusterGroup from 'react-leaflet-cluster';

const Map = () => {
    const marker = 
        {
            geocode: [48.8606, 2.3376],
            popUp: 'Rue de Rivoli, 75001 Paris, France'
        }

    const customIcon = new Icon({
        // iconUrl: "https://cdn-icons-png.flaticon.com/128/447/447031.png",
        iconUrl: markerIcon,
        iconSize: [38,38] // size of the icon

    })

    
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <MapContainer center={[48.8566, 2.3522]} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                ></TileLayer>
                
                    
                        <Marker position={marker.geocode} icon={customIcon}>
                            <Popup>{marker.popUp}</Popup>
                        </Marker>
                    
                

                
            </MapContainer>
        </div>
    );
};

export default Map;

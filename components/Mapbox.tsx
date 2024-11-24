import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useRef, useState, useEffect } from 'react'
mapboxgl.accessToken = 'pk.eyJ1IjoibWFpa2VydWRldiIsImEiOiJjbTEwaDJuZ3owZ3ZvMmlzNGRzZ3Y5OHl1In0.Gk1Lnu_x8a-Kc6ZyUzmlbg'

export function MapboxMap() {
    const mapContainer = useRef(null)
    const map = useRef(null)
    const [lng] = useState(9.658043250341874)
    const [lat] = useState(47.43140631762227)
    const [zoom] = useState(8)

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom,
            attributionControl: false
        });
        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

        const el = document.createElement('div');
        el.style.backgroundImage = 'url("/pin.png")';
        el.style.width = '30px';
        el.style.height = '50px';
        el.style.backgroundSize = 'cover';

        new mapboxgl.Marker({
            element: el,
            anchor: 'bottom'
        })
            .setLngLat([lng, lat])
            .addTo(map.current);

        map.current.on('load', () => {
            map.current.flyTo({
                center: [lng, lat],
                zoom: 18,
                speed: 0.1,
                curve: 1.5,
                easing: (t) => t
            });
        });
    }, [lng, lat, zoom]);


    return <div ref={mapContainer} className="map-container sm:skew-y-3 h-[400px] w-full rounded-lg shadow-md" />
}
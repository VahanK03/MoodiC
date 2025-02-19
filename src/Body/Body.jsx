import react from "react";
import "./Body.css";
import Playlist from "../Playlist/App";
import useGeoLocation from "../useGeoLocation";
import { useEffect, useState } from "react";

const Body = () => {

    // const [weather, setWeather] = useState(null);
    // const location = useGeoLocation();
    // const API_KEY = "d028e6f6d559425ba71211943251401";

    // useEffect(() => {
    //     const getWeather = async () => {
    //         try {
    //             const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location.coordinates.lat},${location.coordinates.lng}`;
    //             const response = await fetch(URL);
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             }
    //             const data = await response.json();
    //             setWeather(data);
    //         } catch (error) {
    //             console.error('Error fetching weather data:', error);
    //         }
    //     };

    //     if (location.loaded) {
    //         getWeather();
    //     }
    // }, [location]);


    return(
        <div className="body">
            <div className="weather">
                <div className="weather-info">
                    <h2 className="weather-location">Yerevan</h2>
                    <h2 className="weather-temp">5°C</h2>
                    </div>
                <div className="weather-icon">
                <p className="weather-description">Cloudly</p>
                <img src="assets/cloudsun.png" alt="Sun" className="sun" />
                </div>
            </div>
              <video autoPlay muted loop className="bg-video" >
                <source src="assets/bg-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="inspiration-text">
            <img src="assets/description.gif" alt="Sound Wave" className="description" />
            <h1 className="inspiration-title">Your Music,<br></br> Your World</h1>
            <p className="inspiration-description">With our unique weather-based music recommendations, your soundtrack changes with the sky. Whether it's a sunny day, a rainy evening, or a snowy afternoon, we adapt the vibe to match your surroundings.
                From energizing tunes for bright, sunny mornings to mellow,
                relaxing beats on a cloudy day, we've got music for every weather and every mood.</p>
                <img src="assets/wheather.gif" alt="Cloud and Sun" className="wheather" />

            </div>
            <Playlist />

        </div>
    )
}

export default Body;



    

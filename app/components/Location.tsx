import React from 'react';
import { WorldMap } from './ui/world-map';

const Location = () => {
    const mapDots = [
        {
            start: { lat: 60.1699, lng: 24.9384 }, // Finland (Helsinki)
            end: { lat: 21.4225, lng: 39.8262 }, // Saudi Arabia (Riyadh)
        },
        {
            start: { lat: 30.3753, lng: 69.3451 }, // Pakistan (Islamabad)
            end: { lat: 56.1304, lng: -106.3468 }, // Canada (Ottawa)
        },
        {
            start: { lat: 25.276987, lng: 55.296249 }, // Dubai, UAE
            end: { lat: 48.0196, lng: 66.9237 }, // Kazakhstan (Almaty)
        },
        // Add more locations as needed
    ];

    const locations = [
        { country: "Saudi Arabia", city: "Jeddah", description: "Our main headquarters ensuring top-notch services." },
        { country: "Dubai", city: "SHEIKH ZAYED ROAD", description: "A hub for innovation and connectivity." },
        { country: "Pakistan", city: "Islamabad", description: "Dedicated support team for strategic growth." },
        { country: "Oman", city: "Muscat", description: "Fostering strong client relationships locally." },
    ];

    return (
        <div className="w-full text-center overflow-hidden" id="portfolio">
            <span className="text-[rgb(61,61,78)] text-[25px] md:text-[35px] font-bold block">
                Where Are We Located?
            </span>

            <p className="text-gray-500 text-xs md:text-sm leading-5 font-normal text-center mt-1">
                We proudly extend our services across the globe, with dedicated teams and offices strategically located in Saudi Arabia, Oman, Dubai, and Pakistan. Our presence in these key regions <br />allows us to provide exceptional support, innovative solutions, and personalized services to clients, fostering strong relationships and delivering outstanding results no matter where you are.
            </p>

            <div className="w-full max-w-[800px] mx-auto mt-8">
                <WorldMap dots={mapDots} lineColor="#FCA765" />
            </div>

            {/* Location Details */}
            <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1280px] mx-auto">
                {locations.map((location, index) => (
                    <div
                        key={index}
                        className="p-4 rounded-lg bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-200"
                    >
                        <h3 className="text-lg font-bold text-black dark:text-white">{location.country} - {location.city}</h3>
                        <p className="text-gray-500 text-xs md:text-sm leading-5 font-normal text-center mt-1">{location.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Location;

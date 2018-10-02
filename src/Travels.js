import React from "react";
import Travel from "./Travel";

// src/Travels.js
const travels = [
    {
        destination: 'Londres',
        country: 'Angleterre',
        distance: '1145 km',
        photo: "https://static.service-voyages.com/photos/vacances-angleterre/londres/generique_381276_pgbighd.jpg"
    },
    {
        destination: 'Madrid',
        country: 'Espagne',
        distance: '799 km',
        photo: "https://www.desti-nations.com/wp-content/uploads/2017/05/madrid-palacio-real-cathedral-Almudena.jpg"
    },
    {
        destination: 'Rome',
        country: 'Italie',
        distance: '1260 km',
        photo: "https://www.wimdu.com/attachments/53f088080f5f0a507eb7b0469bd11de8c9013645/store/uploads::photo::file::71873586::preview.jpg/la-fontana-di-trevi-di.jpg"
    },
    {
        destination: 'Bruxelles',
        country: 'Belgique',
        distance: '982 km',
        photo: "https://generationvoyage.fr/wp-content/uploads/2014/01/grandplacebruxelles.jpg"
    },
    {
        destination: 'Berlin',
        country: 'Allemagne',
        distance: '1728 km',
        photo: "https://www.artsetvie.com/cache/voyages/29072-800x600-CL-DEU_Berlin_MuseePergame_2.jpg"
    }
];

const Travels = () => (
    <div>
        {travels.map(travel => (
            <Travel destination={travel.destination} country={travel.country} distance={travel.distance} photo={travel.photo} />
        ))}
    </div>
);

export default Travels;
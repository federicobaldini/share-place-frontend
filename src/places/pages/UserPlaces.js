import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const PLACES = [
  {
    id: "p00001",
    title: "Empire State Building",
    description: "One of the must famous sky scrapers in the world!",
    imageUrl:
      "https://static.fanpage.it/wp-content/uploads/sites/10/2021/04/empire-state-building-1081929_1920-1200x675.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u00001",
  },
  {
    id: "p00002",
    title: "Empire State Building",
    description: "One of the must famous sky scrapers in the world!",
    imageUrl:
      "https://static.fanpage.it/wp-content/uploads/sites/10/2021/04/empire-state-building-1081929_1920-1200x675.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u00002",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;

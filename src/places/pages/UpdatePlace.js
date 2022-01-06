import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/Form/Input";
import Button from "../../shared/components/Form/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";

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

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = PLACES.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place</h2>
      </div>
    );
  }

  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(4)]}
        errorText="Please enter a valid description (at least 4 characters)."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;

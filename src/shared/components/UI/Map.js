import React, { useRef, useEffect } from "react";

import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    let marker = new window.ol.Feature({
      geometry: new window.ol.geom.Point(
        window.ol.proj.fromLonLat([center.lng, center.lat])
      ),
    });

    let markerStyle = new window.ol.style.Style({
      image: new window.ol.style.Circle({
        radius: 10,
        fill: new window.ol.style.Fill({ color: "#fff" }),
        stroke: new window.ol.style.Stroke({
          color: [255, 56, 96],
          width: 5,
        }),
      }),
      /*
      image: new window.ol.style.Icon({
        anchor: [0.5, 46],
        anchorXUnits: "fraction",
        anchorYUnits: "pixels",
        src: "https://openlayers.org/en/latest/examples/data/icon.png",
      }),
      */
    });

    marker.setStyle(markerStyle);

    const layer = new window.ol.layer.Vector({
      source: new window.ol.source.Vector({
        features: [marker],
      }),
    });

    new window.ol.Map({
      target: mapRef.current.id,
      layers: [
        new window.ol.layer.Tile({
          source: new window.ol.source.OSM(),
        }),
        layer,
      ],
      view: new window.ol.View({
        center: window.ol.proj.fromLonLat([center.lng, center.lat]),
        zoom: zoom,
      }),
    });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={"map " + props.className}
      style={props.style}
      id="map"
    ></div>
  );
};

export default Map;

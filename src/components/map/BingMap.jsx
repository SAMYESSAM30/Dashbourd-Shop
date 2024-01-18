import React from "react";
import BingMapsReact from "bingmaps-react";
const pushPin = {
  center: {
    latitude: 30.103906242089888,
    longitude: 31.374120548902027,
  },
};

export default function BingMap(props) {
  const pushPins = [pushPin];

  return (
    <BingMapsReact
      style={{
        position: "relative",
      }}
      pushPins={pushPins}
      bingMapsKey="your bing maps API key goes here"
      height={props.height}
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="100%"
      viewOptions={{
        center: { latitude: 30.103906242089888, longitude: 31.374120548902027 },
        mapTypeId: "grayscale",
      }}
    />
  );
}

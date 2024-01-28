import React from "react";
import BingMapsReact from "bingmaps-react";
const pushPin = {
  center: {
    latitude: 29.868935581920276,
    longitude: 31.315995051104945,
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
      bingMapsKey="ArQe3pASc6c-2q5I7Dg0hBVXB72vLcagv4WZ47U1CbSwZn6Kn-bOcIg4SjPXZCcW"
      height={props.height}
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="100%"
      viewOptions={{
        center: { latitude: 9.868935581920276, longitude: 31.315995051104945 },
        mapTypeId: "grayscale",
      }}
    />
  );
}

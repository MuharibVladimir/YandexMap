import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  TypeSelector,
  SearchControl,
  FullscreenControl,
  ZoomControl,
  ObjectManager,
} from "@pbe/react-yandex-maps";
import { IConcert } from "./models/concert";

const App = () => {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 10,
    controls: [],
  };

  const images = [...Array(26)].map((n, i) => {
    const letter = String.fromCharCode(i + 97);
    return `https://img.icons8.com/ios-filled/2x/marker-${letter}.png`;
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <YMaps
          query={{
            load: "package.full",
            apikey: "09bb4466-277a-4ce6-bade-5d5389453d97",
          }}
        >
          <Map
            width="50vw"
            height="100vh"
            defaultState={defaultState}
          >
            {images.map((n) => (
              <Placemark
                key={n}
                geometry={defaultState.center.map(
                  (c) => c + (Math.random() - 0.6)
                )}
                options={{
                  iconLayout: "default#image",
                  iconImageSize: [50, 50],
                  iconImageHref: n,
                }}
              />
            ))}
            <Placemark geometry={[55.684758, 37.738521]} />
            <SearchControl options={{ float: "right" }} />
            <TypeSelector />
            <FullscreenControl />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default App;

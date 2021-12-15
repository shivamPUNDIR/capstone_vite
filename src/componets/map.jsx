import React from "react";
import loc from "./../assets/loc.svg";
import loc1 from "./../assets/loc1.svg";
import map from "./../assets/map.svg";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import RoomIcon from "@mui/icons-material/Room";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles";
import { Button } from "@material-ui/core";
import { buttonClasses } from "@mui/material";
// import { formatRelative } from "date-fns";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";

const mapContainerStyle = {
  height: "100%",
  width: "100%",
};
const center = {
  lat: 30.352492,
  lng: 76.371618,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export function Map({ panoData, handlePanoChange, center, data, ...props }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCm9q-X39wU7UH_xk0J7LBqgvW23M38Px0",
    // libraries,
  });

  React.useEffect(() => {
    setTimeout(() => {
      document.getElementById("mapContainer").style.visibility = "visible";
    }, 2000);
  }, []);
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = ({ lat, lng }) => {
    mapRef?.current?.panTo({ lat, lng });
    mapRef?.current?.setZoom(14);
  };

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <>
      <div
        id="mapContainer"
        style={{ visibility: "hidden", bottom: "100px" }}
        className="absolute right-0 bottom-1.5 z-50 w-96 h-96"
        onMouseEnter={(e) => {
          let elem = document.getElementById("mapContainer");
          elem.style.width = "24rem";
          elem.style.height = "24rem";
          elem.style.transition =
            "width 500ms ease-in-out,height 500ms ease-in-out";
        }}
        onMouseLeave={(e) => {
          document.getElementById("mapContainer").style.width = "18rem";
          document.getElementById("mapContainer").style.height = "18rem";
        }}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={17}
          center={center}
          onLoad={(map) => onMapLoad(map)}
          options={options}
        >
          {/* <Marker
          // onPositionChanged={panTo(panoData.position)}
          icon={loc}
          position={panoData.position}

        />  {RoomIcon} */}
          {data.map((indx, elem) => {
            // console.log()
            return panoData.position.lat === indx.lat &&
              panoData.position.lng === indx.lng ? (
              <Marker
                //
                icon={loc1}
                position={indx}
              />
            ) : (
              <Marker icon={loc} position={indx} />
            );
          })}
        </GoogleMap>
        <div
          style={{
            position: "relative",
          }}
        >
          <button
            style={{
              position: "absolute",
              right: 60,
              bottom: -80,
              zIndex: 1000,
              borderRadius: "50%",
              border: "2px solid #000",
              height: "60px",
              width: "60px",
            }}
            onClick={(e) => {
              let elem = document.querySelectorAll("#mapContainer>div");
              let toggle =
                elem[0].style.visibility === "hidden" ? "visible" : "hidden";
              elem[0].style.visibility = toggle;
            }}
          >
            <img src={map} />
          </button>
        </div>
      </div>
    </>
  );
}

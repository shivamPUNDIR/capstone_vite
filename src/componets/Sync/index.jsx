import Map from "../common/Maps";
import Sidebar from "./../common/Sidebar/index";
import { useState } from "react";
import { useEffect } from "react";
import { Map as MapStyle } from "../map";
import Gallery from "../Gallery";
import Tour from "../Tour";
import { Pannellum } from 'pannellum-react'
// import { GalleryData } from '../../assets/data.js'
import { data_hostel } from '../../assets/data_sidebar'
const Sync = ({ center, isLoaded, loadError, ...props }) => {
  const [tour, setTour] = useState(true);
  const [currentSidebarItem, setCurrentSidebarItem] = useState("tour")
  const [currLatLng, setCurrLatLng] = useState({
    lat: 30.352631,
    lng: 76.371803
  })



  return (
    <div>
      <Sidebar currentSidebarItem={currentSidebarItem} setCurrentSidebarItem={setCurrentSidebarItem} tour={tour} setTour={setTour} currLatLng={currLatLng}
        setCurrLatLng={setCurrLatLng} />
      {tour ?
        <Tour tour={tour} currLatLng={currLatLng} setCurrLatLng={setCurrLatLng} />
        //  ? <Map
        // center={center}
        // panoData={panoData}
        // setPanoData={handlePanoChange}
        // isLoaded={isLoaded}
        //  loadError={loadError}
        // ></Map> */}
        :
        <div className="z-[0] w-full h-full" tour={tour}>
          <Pannellum
            width="100%"
            height="100vh"
            image={data_hostel[currentSidebarItem].gallery[0].path}
            pitch={10}
            yaw={180}
            hfov={110}
            autoLoad
            showZoomCtrl={false}
            currLatLng={currLatLng}
            setCurrLatLng={setCurrLatLng}
          />
        </div>
      }
      <MapStyle

        currLatLng={currLatLng}
        setCurrLatLng={setCurrLatLng}

      />

      {
        !tour && <Gallery currentSidebarItem={currentSidebarItem} />
      }
    </div>
  );
};

export default Sync;

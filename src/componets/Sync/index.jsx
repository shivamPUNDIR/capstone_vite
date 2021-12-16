import Map from "../common/Maps";
import Sidebar from "./../common/Sidebar/index";
import { useState } from "react";
import { useEffect } from "react";
import { Map as MapStyle } from "../map";
import Gallery from "../Gallery";
// import { GalleryData } from '../../assets/data.js'
import { data_hostel } from '../../assets/data_sidebar'
import { Pannellum } from "pannellum-react";
const Sync = ({ center, isLoaded, loadError, ...props }) => {
  const [tour, setTour] = useState(true);
  const [currentSidebarItem, setCurrentSidebarItem] = useState("tour")
  const [currentItemOnMap, setCurrentItemOnMap] = useState({})
  const [coords, setCoords] = useState(center)


  return (
    <div>
      <Sidebar currentSidebarItem={currentSidebarItem} setCurrentSidebarItem={setCurrentSidebarItem} tour={tour} setTour={setTour} coords={coords} setCoords={setCoords} />
      {tour ? <Map
        center={center}
        // panoData={panoData}
        // setPanoData={handlePanoChange}
        isLoaded={isLoaded}
        loadError={loadError}
      ></Map>
        :
        <div className="z-[0] w-full h-full">
          <Pannellum
            width="100%"
            height="100vh"
            image={data_hostel[currentSidebarItem].gallery[0].path}
            pitch={10}
            yaw={180}
            hfov={110}
            autoLoad
            showZoomCtrl={false}
            onLoad={() => {

            }}
          />
        </div>
      }
      <MapStyle
        // panoData={panoData}
        // handlePanoChange={handlePanoChange}
        center={coords}
        setCoords={setCoords}
      // data={data}
      />

      {
        !tour && <Gallery currentSidebarItem={currentSidebarItem} />
      }
    </div>
  );
};

export default Sync;

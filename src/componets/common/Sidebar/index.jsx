//import { maxHeight } from "@mui/system";
import { useState, useEffect } from "react";
import Box from "./Box";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Modal from "../Modal";
import { data_hostel } from '../../../assets/data_sidebar'
const Sidebar = ({ currentSidebarItem, setCurrentSidebarItem, tour, setTour, setCurrLatLng, currLatLng, ...props }) => {
  const [show, setShow] = useState(false);

  let hostel_box = []
  let menuPos = show === false ? "left-[15px]" : "left-[16%]"
  return (
    <>
      <Modal tour={tour} data={data_hostel[currentSidebarItem]?.info} image="urkl" modal_title={data_hostel[currentSidebarItem]?.title} button_title="i" />
      <div className={`absolute z-[1000000] p-3 text-sm font-bold text-white border-2 border-yellow-300 ${menuPos} top-2 bg-sidebar-bg rounded-full cursor-pointer `}
        onClick={() => { setShow(!show) }}
      >
        {show === true ? <MenuOpenIcon /> : <MenuIcon />}
      </div>
      <div
        style={{
          display: show ? "block" : "none",
          paddingRight: "10px",
          borderRight: "100px solid transparent",
          boxSizing: "border-box",
          background:
            "linear-gradient(to left, rgba(8, 19, 30, 0), rgba(8, 19, 30, 0.3))",
        }}
      >
        <div
          className={`opacity-100 shadow-xl absolute bg-sidebar-bg h-full top-0 left-0 `}
          style={{ width: "15%", zIndex: 1000 }}
        >
          <div
            style={{
              overflowX: "hidden",
              height: "100vh",
              zIndex: 1005,
              position: "relative",
              width: "100%",
            }}
          // onClick={() => autoClose(0)}
          >

            {[9, 10].map((id) => {
              return <Box key={id} type={"empty"} />;
            })}
            <div className="text-center w-[100%] h-auto p-2 bg-yellow-500 opacity-[0.8]">
              <h3 className="text-[white] text-3xl text-center bg-yellow-500">Tour</h3>
            </div>
            <Box
              onClick={() => setTour(true)}
              id="tour"
              type={"data"}
              imageUrl="./src/assets/hostel_m.jpg"
              handleClick={(id) => {
                setTour(true);
                setCurrentSidebarItem("tour");
              }}
              currentSidebarItem={currentSidebarItem}
            // content={data_hostel[].title}
            />
            {/* <div className="text-center w-[100%] h-auto p-2  bg-yellow-500 bg-green-bg-btn opacity-[0.5]">
              <h3 className="text-[white] text-3xl m-auto text-center">Places</h3>
            </div>
            <Box
              id={data[1]}
              type={"data"}
              imageUrl="https://www.thapar.edu/files/banner/1/15005501011.jpg"
              handleClick={(id) => {
                setPanoData(id);
              }}
              panoData={panoData}
            /> */}
            {/* <div className="border-solid border-white border-[4px]  float-right m-[10%] text-center w-[80%] h-[50px] p-1">
              <h3 className="text-[white] text-3xl">Hostels</h3>
            </div> */}
            <div className="text-center w-[100%] h-auto p-2 bg-yellow-500 bg-blue-bg-btn opacity-[0.8]">
              <h3 className="text-[white] text-3xl m-auto text-center">Places</h3>
            </div>
            {
              Object.keys(data_hostel).forEach(function (prop) {

                hostel_box.push(<Box
                  // onClick={() => setTour(false)}
                  key={`hostel+${prop}`}
                  id={prop}
                  type={"data"}
                  imageUrl={data_hostel[prop].thumbnail}
                  handleClick={(item) => {
                    setTour(false);
                    setCurrentSidebarItem(item);
                    // props.setCoords(data_hostel[prop].coords)
                    setCurrLatLng({
                      lat: data_hostel[prop].coords.lat,
                      lng: data_hostel[prop].coords.lng
                    })
                  }}
                  currentSidebarItem={currentSidebarItem}
                  content={data_hostel[prop].title}
                />)
              })
            }
            {
              hostel_box.map((hostel, indx) => {
                return hostel
              })


            }


          </div>

          <div
            className="text-white"
            style={{
              position: "absolute",
              top: 40,
              left: 0,
              transform: "rotate(90deg)",
              opacity: 0.05,
              fontSize: "200px",
              color: "white",
              fontWeight: 600,
              height: "100%",
              transformOrigin: "100px 150px",
              maxHeight: "100%",
              overflow: "hidden",
              zIndex: 1001,
            }}
          >
            Thapar&#160;Un
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
//props.id0,1,2

import './App.css';
import "@material-tailwind/react/tailwind.css";
import { Map as MapStyle } from './componets/map';
import React, { useState, useEffect, useRef } from 'react';
import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import Sync from './componets/Sync/index';
import { useLoadScript } from '@react-google-maps/api'

SmoothScrollbar.use(OverscrollPlugin);
function App() {
  const [currentImage, setCurrentImage] = useState(0)
  const [c, setC] = useState(1)
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCm9q-X39wU7UH_xk0J7LBqgvW23M38Px0",
    // libraries,
});
  const cords = [{ lat: 30.352051, lng: 76.373836 }, { lat: 30.351958, lng: 76.372901 }, { lat: 30.352319, lng: 76.372262 }]
  return (
    <div style={{ position: 'relative' }}>

      <Sync center={{ lat: 30.351956, lng: 76.370808 }} isLoaded={isLoaded} loadError={loadError}></Sync>
      {/* <div className='absolute p-3 text-3xl font-bold text-white border-2 border-yellow-300 top-4 left-4' style={{zIndex:10003}}>Thapar University</div> */}

      <div className='absolute z-50 flex top-2 right-16 gap-4 ' onClick={() => setC((prevState) => { console.log(prevState); return prevState + 1 })}>
        <div className='z-auto p-2 text-lg font-bold text-white bg-yellow-500 cursor-pointer shadow-btn-shadow transform duration-500 ease-in-out hover:scale-105'>Learn More</div>
        <div className='z-auto p-2 text-lg font-bold text-white cursor-pointer shadow-btn-shadow bg-green-bg-btn transform duration-500 ease-in-out hover:scale-105'>Visit Thapar.edu</div>
        <div className='z-auto p-2 text-lg font-bold text-white cursor-pointer shadow-btn-shadow bg-blue-bg-btn transform duration-500 ease-in-out hover:scale-105'>Apply Online</div>
      </div>
      

      <div>
        {/* <Thumbnail currentImage={currentImage} thumbNum={thumbNum}/> */}

      </div>
    </div>
    // </MapContext.Provider>
  );
}

export default App;

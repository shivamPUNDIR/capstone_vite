import './App.css';
import "@material-tailwind/react/tailwind.css";
import { Map as MapStyle } from './componets/map';
import React, { useState, useEffect, useRef } from 'react';
import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import Sync from './componets/Sync/index';
import { useLoadScript } from '@react-google-maps/api'
import MenuIcon from '@mui/icons-material/Menu';

SmoothScrollbar.use(OverscrollPlugin);
function App() {
  const [currentImage, setCurrentImage] = useState(0)
  const [c, setC] = useState(1)
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCm9q-X39wU7UH_xk0J7LBqgvW23M38Px0",

  });

  return (
    <div style={{ position: 'relative' }}>

      <Sync center={{ lat: 30.3518788, lng: 76.3722509 }} isLoaded={isLoaded} loadError={loadError}></Sync>


      {/* <div className='absolute z-auto p-3 text-3xl font-bold text-white border-2 border-yellow-300 left-[50%] top-2 bg-sidebar-bg ' style={{ zIndex: 10003 }}>Thapar University</div> */}

      <div className='absolute z-50 flex top-2 right-16 gap-4 ' onClick={() => setC((prevState) => { console.log(prevState); return prevState + 1 })}>
        <div className='z-auto p-2 text-lg font-bold text-white bg-yellow-500 cursor-pointer shadow-btn-shadow transform duration-500 ease-in-out hover:scale-105'>Learn More</div>
        <div className='z-auto p-2 text-lg font-bold text-white cursor-pointer shadow-btn-shadow bg-green-bg-btn transform duration-500 ease-in-out hover:scale-105'>Visit Thapar.edu</div>
        <div className='z-auto p-2 text-lg font-bold text-white cursor-pointer shadow-btn-shadow bg-blue-bg-btn transform duration-500 ease-in-out hover:scale-105'>Apply Online</div>
      </div>

    </div>
  );
}

export default App;

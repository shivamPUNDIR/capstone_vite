import { useEffect } from 'react';
import { Pannellum } from "pannellum-react";
import { useState } from 'react';
import Images from './images'
// var Image='';

const PanoramaViewer = ({ currentImage, setCurrentImage, graph, hotspotData, ...props }) => {
  const [myImage, setMyImage] = useState(Images[0])
  useEffect(() => {
    // console.log(currentImage)


    setMyImage(Images[currentImage])

  }, [currentImage])

  let hotspotTooltip = (hotSpotDiv, args) => {
    hotSpotDiv.setAttribute("id", "textInfo");
    const outDiv = document.createElement('div');
    outDiv.classList.add('arrow');
    outDiv.classList.add('arrow--up');
    
    
  
    hotSpotDiv.appendChild(outDiv);
  }
  return (
    <div className='z-0 '>
      <Pannellum

        width="100%"
        height="100vh"
        image={myImage}
        pitch={10}
        yaw={90}
        hfov={110}
        autoLoad
        autoRotate={true}
        showZoomCtrl={true}
        onLoad={() => {
          console.log(myImage);

        }}

        mouseZoom={true}
      >
        {/* <Pannellum.Hotspot
          type="custom"
          pitch={10}
          yaw={90}
          handleClick={(evt, name) => console.log(graph)}
          name="hs1"
        /> */}
        {graph[currentImage].map((elem, id) => {
          return <Pannellum.Hotspot
            // number={id}
            type="custom"
            pitch={hotspotData[currentImage][id]['pitch']}
            yaw={hotspotData[currentImage][id]['yaw']}
            handleClick={(evt, name) => { setCurrentImage(elem) }}
            name={hotspotData[currentImage][id]['name']}
            tooltip={hotspotTooltip}
          // cssClass=' arrow arrow--up'
          />

        })}

      </Pannellum>

    </div>
  )
}

export default PanoramaViewer

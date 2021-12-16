import React, { useEffect, useState, useRef } from 'react'
import { Pannellum } from "pannellum-react";
import { data_tour } from '../../assets/data_sidebar'
import { hotspot_data, graph } from '../../assets/hotspot_data';
const Tour = (props) => {
    // const [currImg, setCurrImg] = useState(hotspot_data[0][0].id)
    const [currPath, setCurrPath] = useState('');
    const [currentImage, setCurrentImage] = useState(9)
    // const ref = useRef(null)
    const bast_path = "src/assets/Tour"
    useEffect(() => {
        console.log(currentImage)
        setCurrPath(bast_path + `/${currentImage}.jpg`)
    }, [currentImage])

    // let hotspotTooltip = (hotSpotDiv, args) => {
    //     const imageDiv = document.createElement('div');
    //     imageDiv.setAttribute('width', '45');
    //     imageDiv.setAttribute('height', '45');
    //     // imageDiv.setAttribute('src', 'https://img.icons8.com/ios/1600/circled-up-filled.png') // https://img.icons8.com/ios/1600/circled-up-filled.png
    //     hotSpotDiv.appendChild(imageDiv);
    //     console.log(hotSpotDiv)
    // }
    let hotspotTooltip = (hotSpotDiv, args) => {
        hotSpotDiv.setAttribute("id", "textInfo");
        const outDiv = document.createElement('div');
        outDiv.classList.add('arrow');
        outDiv.classList.add('arrow--up');
        //outDiv.innerHTML = '<img src="https://img.icons8.com/ios/1600/circled-up-filled.png"  width="45px" height="45px"/ >'



        hotSpotDiv.appendChild(outDiv);
    }
    let hanldeClickImage = () => {
        setCurrPath(hotspot_data[currImg])
        // setCurrPath(`${data_tour}2.jpg`)

    }
    return (
        <div className='z-[100000] w-full h-full' >

            <Pannellum
                // ref={ref}
                width="100vw"
                height="100vh"
                image={currPath}
                pitch={10}
                yaw={hotspot_data[currentImage][0].reverse ? 0 : 180}
                hfov={120}
                autoLoad
                title=""
            >
                {/* {hotspot_data[currImg].map((hotspot, indx) => {
                    <Pannellum.Hotspot
                        key={hotspot.name}
                        type={hotspot.type}
                        pitch={hotspot.pitch}
                        yaw={hotspot.yaw}
                        //hfov={hotspot.}
                        hotspotTooltip={hotspotTooltip}
                        handleClick={(evt, args) => hanldeClickImage(evt, args)}
                        handleClickArg={{ "name": "test" }}
                    />
                })} */}
                {graph[currentImage].map((elem, id) => {
                    return <Pannellum.Hotspot
                        // number={id}
                        type={hotspot_data[currentImage][id]['type']}
                        pitch={hotspot_data[currentImage][id]['pitch']}
                        yaw={hotspot_data[currentImage][id]['yaw']}
                        handleClick={(evt, name) => { setCurrentImage(elem) }}
                        name={hotspot_data[currentImage][id]['name']}
                        tooltip={hotspotTooltip}
                    // cssClass=' arrow arrow--up'
                    />

                })}
            </Pannellum>
        </div>
    )
}

export default Tour

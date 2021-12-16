import React, { useRef, useState, useCallback, useEffect } from "react";
import { GoogleMap, StreetViewPanorama } from '@react-google-maps/api'

const mapContainerStyle = {
    zIndex: "0!important", height: '100vh', width: '100vw'
}

const Map = ({ isLoaded, loadError, ...props }) => {
    const [map, setMap] = useState('');
    const [visible, setVisible] = useState(false);
    const [center, setCenter] = useState(props.center)
    useEffect(() => {
        let timer = setTimeout(() => {
            setVisible(true)

        }, 2000)

    }, [])
    //    useEffect(()=>{
    //        if(panoData.position.lat != map?.streetView?.position.lat() && panoData.position.lng != map?.streetView?.position.lng())
    //         map?.streetView?.setPosition({lat:panoData.position.lat,lng:panoData.position.lng})
    //    },[panoData])

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";



    return (
        <GoogleMap zoom={17} center={center} mapContainerStyle={mapContainerStyle} onLoad={(map) => { setMap(map) }}>
            <StreetViewPanorama
                position={props.center}
                visible={visible}
            // onPositionChanged={()=>{console.log(map?.streetView?.pano);setPanoData({
            //     panoID:map?.streetView?.pano,
            //     position:{
            //         lat:map?.streetView?.position.lat(),
            //         lng:map?.streetView?.position.lng()
            //     },
            //     links:map?.streetView?.links
            // })}}
            >
                {/* <div onClick= {console.log(panoData)}>

               </div> */}
            </StreetViewPanorama>
        </GoogleMap>
    )
}




export default Map

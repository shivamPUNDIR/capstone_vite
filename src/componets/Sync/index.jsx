import Map from "../common/Maps"
import Sidebar from './../common/Sidebar/index';
import { useState } from 'react';
import { useEffect } from 'react';
import { Map as MapStyle } from "../map";
const Sync = ({ center, isLoaded, loadError, ...props }) => {
    const [panoData, setPanoData] = useState(
        {
            panoID: '',
            position: {
                lat: '',
                lng: ''
            },
            links: ''
        });

    const handlePanoChange = (data) => {
        setPanoData(data)
    }
    useEffect(() => {
        console.log(panoData)
    }, [panoData])

    const data = [
        { lat: 49.28523341995621, lng: -123.1119102013529 },
        { lat: 49.28516211197906, lng: -123.112069442232 },
        { lat: 49.28529113824827, lng: -123.111846124286 }
    ]

    return (
        <div>
            <Sidebar panoData={panoData} setPanoData={handlePanoChange} data={data} />
            <Map center={center} panoData={panoData} setPanoData={handlePanoChange} isLoaded={isLoaded} loadError={loadError}>

            </Map>
            <MapStyle panoData={panoData} handlePanoChange={handlePanoChange} center={center} data={data} />
        </div>
    )
}

export default Sync

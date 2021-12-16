import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import './Box.scss'
const Box = ({ imageUrl, handleClick, currentSidebarItem, ...props }) => {

    const [active, setActive] = useState(false);
    useEffect(() => {

        setActive(currentSidebarItem === props.id)
    }, [currentSidebarItem])

    if (props.type === 'empty')
        return (
            <div style={{
                backgroundImage: `url("${imageUrl}")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }} className='z-50 w-full h-1/6'
            ></div>)
    else
        return (
            <div
                style={{
                    borderLeft: active ? '8px solid orange' : '',
                }}
                className={active ? `sidebar_box_active` : `sidebar_box`}
                id="box"
                onClick={() => handleClick(props.id)}
            >
                <div
                    style={{
                        backgroundImage: `url("${imageUrl}")`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                    className='child'
                >

                </div>
                {/* {currentPosition?.position?.lat === props.id.lat && currentPosition?.position?.lng === props.id.lng ? 
                <RadioButtons selected='true' /> : <RadioButtons selected='false' />} */}
            </div>
        )
}

export default Box


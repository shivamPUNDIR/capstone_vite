import React, { useEffect, useState } from 'react';
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
                <div className='absolute bottom-5 left-[50%] translate-x-[-55%] text-[white] z-[100000] text-3xl'>
                    {props.content}
                </div>
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
            </div>
        )
}

export default Box


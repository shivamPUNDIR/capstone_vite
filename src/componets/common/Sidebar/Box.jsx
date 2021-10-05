import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import './Box.scss'
const Box = ({ imageUrl, handleClick, panoData, ...props }) => {

    const [active, setActive] = useState(false);
    useEffect(() => {
        setActive(panoData?.position?.lat === props?.id?.lat && panoData?.position?.lng === props.id?.lng)
    }, [panoData])

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
                className={active ? `sidebar_box_active`:`sidebar_box`}
                onClick={() => handleClick({
                    panoID: panoData.panoID,
                    position: {
                        lat: props.id.lat,
                        lng: props.id.lng
                    },
                    links: panoData.links
                })}
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



// const GreenRadio = withStyles({
//     root: {
//         color: 'white',
//         '&$checked': {
//             color: 'white',
//         },
//     },
//     checked: {},
// })((props) => <Radio color="default" {...props} />);

// function RadioButtons(props) {
//     const [selectedValue, setSelectedValue] = React.useState('c');

//     const handleChange = (event) => {
//         setSelectedValue(event.target.value);
//     };

//     return (
//         <div className='absolute right-0'>
//             {props.selected === 'true' ? <GreenRadio
//                 checked={selectedValue === 'c'}
//                 onChange={handleChange}
//                 value="c"
//                 name="radio-button-demo"
//                 inputProps={{ 'aria-label': 'C' }}
//             /> :
//                 <GreenRadio
//                     checked={selectedValue === 'a'}
//                     onChange={handleChange}
//                     value="a"
//                     name="radio-button-demo"
//                     inputProps={{ 'aria-label': 'C' }}
//                 />}


//         </div>
//     );
// }

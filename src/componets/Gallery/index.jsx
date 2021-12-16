import { React, useEffect, useState } from 'react';
import { Pannellum } from "pannellum-react";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Single from './single';
import { data_hostel } from '../../assets/data_sidebar'
const Gallery = (props) => {
    const [viewModal, setViewModal] = useState(false);
    const [imageUrl, setImageUrl] = useState(data_hostel[props.currentSidebarItem].gallery);
    const [panoImage, setPanoImage] = useState('');
    useEffect(() => {
        setImageUrl(data_hostel[props.currentSidebarItem].gallery)
    }, [props.currentSidebarItem])

    let changeImage = (type) => {
        let images = imageUrl.length

        let str = -1
        for (let i = 0; i < images; i++) {
            if (panoImage === imageUrl[i].path) {
                str = i;
            }
        }
        if (type === 'next') {
            if (str != images - 1) {
                setPanoImage(imageUrl[str + 1].path)
            }
            else setPanoImage(imageUrl[0].path)
        } else {
            if (str != 0) {
                setPanoImage(imageUrl[str - 1].path)
            }
            else {
                setPanoImage(imageUrl[images - 1].path)
            }
        }
    }
    return (
        <>
            {viewModal &&
                <div style={{ zIndex: '100000000' }} id="container" className='z-[100000]  absolute top-[20%] left-[20%] p-[20px] bg-[white]'>

                    <div className='relative'>
                        <div className='absolute right-[5px] top-[5px] cursor-pointer p-[5px] mb-[15px] inline-block bg-[black] rounded-full z-[100000000] text-[white]' onClick={() => setViewModal(false)}>
                            <CloseIcon />
                        </div>
                        <div className='absolute left-[5px] top-[50%] cursor-pointer p-[6px] pl-[8px] pr-[4px]  mb-[15px] inline-block bg-[black] rounded-full z-[100000000] text-[white] '
                            onClick={() => { changeImage('back') }}
                        >
                            <ArrowBackIosIcon />
                        </div>
                        <div className='absolute right-[5px] top-[50%] cursor-pointer p-[6px] mb-[15px] inline-block bg-[black] rounded-full z-[100000000] text-[white] '
                            onClick={() => { changeImage('next') }}
                        >
                            <ArrowForwardIosIcon />
                        </div>
                        <Pannellum
                            width="100%"
                            height="500px"
                            width="1200px"
                            image={panoImage}
                            pitch={10}
                            yaw={180}
                            hfov={110}
                            autoLoad
                            showZoomCtrl={false}
                            onLoad={() => {
                                console.log("panorama loaded");
                            }}
                        />
                    </div>
                </div>


            }
            <div className="absolute bottom-[20px] right-[50%] z-[100000] translate-x-[50%] cursor-pointer">

                {
                    imageUrl.map((url, indx) => {
                        return <Single path={url.path} key={`${indx}_${url}`} viewModal={viewModal} setViewModal={setViewModal} panoImage={panoImage} setPanoImage={setPanoImage} />
                    })
                }
            </div>
        </>
    );
}

export default Gallery

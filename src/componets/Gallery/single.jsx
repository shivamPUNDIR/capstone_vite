import { useEffect, useState } from 'react';
// import logo from '../../assets/12.jpg'
const Single = props => {

    let openModal = (path) => {
        props.setViewModal(!props.viewModal)
        props.setPanoImage(path)
    }

    return (
        <>

            <div className="inline-block w-40 h-20 overflow-hidden rounded-lg drop-shadow-2xl m-[10px] transform hover:scale-[1.1]"
                onClick={() => openModal(props.path)}
            >
                <img src={props.path} alt="" />
            </div>

        </>
    );
}

export default Single

import { maxHeight } from "@mui/system";
import { useState, useEffect} from "react"
import Box from './Box';




const Sidebar = ({ panoData, setPanoData, data, ...props }) => {
    const [show, setShow] = useState(false)

    // const handleClick = (id) => {
    // setCurrentPosition(id);
    //route to next image...
    //}
   
    const autoClose = (t)=>{
        if(show){
            const time = setTimeout(()=>{
                setShow(false);
            },t)
        }
    }
    return (
        <>
            <div className={`sidebar_control absolute left-10 cursor-pointer ${show ? 'hidden':'visible' }`} onMouseEnter={()=>{setShow(true)}}   >
                
            </div>
            <div style={{ display: show ? 'block' : 'none', paddingRight: '10px', borderRight: '100px solid transparent', boxSizing: 'border-box', background: 'linear-gradient(to left, rgba(8, 19, 30, 0), rgba(8, 19, 30, 0.3))' }} onMouseLeave={()=>autoClose(1000)}>

                <div className={`opacity-100 shadow-xl absolute bg-sidebar-bg h-full top-0 left-0 `} style={{ width: '15%', zIndex: 1000 }}>

                    <div style={{ overflowX: 'hidden', height: '100vh', zIndex: 1005, position: 'relative', width: '100%' }} onClick={()=>autoClose(0)}>

                        {[9, 10, 11, 12, 13].map((id) => {
                            return <Box key={id} type={"empty"} />
                        })}

                        <Box id={data[0]} type={"data"} imageUrl='./src/assets/hostel_m.jpg' handleClick={(id) => { setPanoData(id) }} panoData={panoData} />

                        <Box id={data[1]} type={"data"} imageUrl='https://www.thapar.edu/files/banner/1/15005501011.jpg' handleClick={(id) => { setPanoData(id) }} panoData={panoData} />
                        <Box id={data[2]} type={"data"} imageUrl='https://www.thapar.edu/files/banner/1/15005501011.jpg' handleClick={(id) => { setPanoData(id) }} panoData={panoData} />

                    </div>



                    <div class=" text-white" style={{ position: 'absolute', top: 40, left: 0, transform: 'rotate(90deg)', opacity: 0.05, fontSize: '200px', color: 'white', fontWeight: 600, height: '100%', transformOrigin: '100px 150px', maxHeight: '100%', overflow: 'hidden', zIndex: 1001 }}>Thapar&#160;Un</div>

                </div>

            </div>
        </>
    )
}

export default Sidebar
//props.id0,1,2
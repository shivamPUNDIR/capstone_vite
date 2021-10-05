const Thumbnail = ({currentimage,thumbNum,...props}) => {
    return (
        <div>
           {[0].map((elem,index)=>{
               let s='hello'
               for(let i=0;i<thumbNum[currentimage];i++){
                    s='hello'
               }
               return s
           })}
        </div>
    )
}

export default Thumbnail

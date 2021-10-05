import Progress from '@material-tailwind/react/Progress'
import { useState } from 'react';
export const ProgressBar = () => {
    const [value,setValue]=useState(20)
    return (
        <div>
            <Progress color="lightBlue" value={value} percentage={false} />
        </div>
    )
}

import React, {useState, useEffect} from 'react'
import "./TimeContainer.css"
function TimeContainer() {
    useEffect(() => {
        var dateVariable = new Date();
       setTime(dateVariable);
    }, [])
    const [time, setTime] = useState();
    
    return (
        <div>
            <p>{time}</p>
        </div>
    )
}

export default TimeContainer

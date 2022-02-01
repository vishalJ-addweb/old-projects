import React, { useState } from 'react'

function EventHandler() {

    const [name, setName] = useState("");
    const [count, setCount] = useState(0);

    const inputChangeHandler = (event) => {
        setName(event.target.value);
    }

    const clickHandler = (event) => {
        setCount((prevVal) => {
            return prevVal + 1;
        })
    }



    return (
        <div>
            <div>
                <p>There have been {count} events.</p>
                <button onClick={clickHandler} >Click here</button>
            </div>
            <div>
                <input type="text" placeholder="type your name here" onChange={inputChangeHandler} />
                <p>Your Name is : {name}</p>
            </div>
        </div>
    )
}

export default EventHandler;


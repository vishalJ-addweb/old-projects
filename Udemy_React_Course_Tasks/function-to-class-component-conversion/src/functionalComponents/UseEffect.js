import React, { useState, useEffect } from 'react'

function UseEffect() {

    const [name, setName] = useState(() => {
        return localStorage.getItem("Name") || "";
    });

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("greeting useEffect");
        localStorage.setItem("Name", name);
    },[name])

    const inputChangeHandler = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <button onClick={() => {
                setCount((prev) => {
                    return prev + 1;
                })
            }}>{count}</button>
            
            <form>
                <label htmlFor="name">Name: </label>
                <input value={name} onChange={inputChangeHandler} id="name" />
            </form>
            {name ? <strong>Hello {name}</strong> : 'Please type your name'}
        </div>
    )
}

export default UseEffect

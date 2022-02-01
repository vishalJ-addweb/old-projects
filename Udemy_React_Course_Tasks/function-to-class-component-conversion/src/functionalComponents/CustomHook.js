import React, { useState, useEffect } from 'react';

const useLocalStorageState = (key, defaultValue = "") => {
    const [state, setState] = useState(() => {
        return localStorage.getItem(key) || defaultValue;
    });

    useEffect(() => {
        console.log("greeting useEffect");
        localStorage.setItem(key, state);
    }, [key, state])

    return [state, setState];
}

function CustomHook() {

    // const [name, setName] = useState(() => {
    //     return localStorage.getItem("Name") || "";
    // });

    // useEffect(() => {
    //     console.log("greeting useEffect");
    //     localStorage.setItem("Name", name);
    // }, [name])

    // const inputChangeHandler = (event) => {
    //     setName(event.target.value);
    // }

    const [name, setName] = useLocalStorageState("Name");

    const inputChangeHandler = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input value={name} onChange={inputChangeHandler} id="name" />
            </form>
            {name ? <strong>Hello {name}</strong> : 'Please type your name'}
        </div>
    )
}

export default CustomHook;

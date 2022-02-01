import React, {useState, useEffect} from 'react'

function UseState() {

    const [name, setName] = useState(()=>{
        return localStorage.getItem("Name") || "";
    });

    useEffect(()=>{
        localStorage.setItem("Name", name);
    })

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

export default UseState

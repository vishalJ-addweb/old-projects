import React, { useState } from 'react';

export function Hook() {

    const [input, setInput] = useState("");

    const inputChangeHandler = (event) => {
        setInput(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(input)
        setInput("");
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={input} onChange={inputChangeHandler} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

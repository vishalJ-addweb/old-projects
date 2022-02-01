import React, { useRef,useState } from 'react';

export default function UnControlled() {

    //it is like a useState only and its preserve the value
    const rname = useRef(null);

    const [show, setShow] = useState(false);

    const getValue = (e) => {
        e.preventDefault();
        console.log(rname);
        console.log(rname.current);
        console.log(rname.current.value);
        rname.current.value === "" ? alert("Plz enter details"):setShow(true); 
    }

    return (
        <div>
            <form action="" onSubmit={getValue}>
                <div>
                    <label htmlFor="name">Enter Your Name</label>
                    <br />
                    <br />
                    <input type="text" id="name" ref={rname} />
                </div>
                <br />
                <button>Submit</button>
            </form>
            <p>{show ? `Your Name is ${rname.current.value}` : ""}</p>
        </div>
    )
}

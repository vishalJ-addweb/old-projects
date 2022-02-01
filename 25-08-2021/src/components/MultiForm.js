import React, { useState } from 'react';

export default function MultiForm() {
    const [show, setshow] = useState(false);
    const [data, setdata] = useState({
        name: "",
        mobile: "",
        email: ""
    });

    function handlechange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setdata({ ...data, [name]: value })
    }

    const [records, setrecords] = useState([]);
    const names = [];
    const mobiles = [];
    const emails = [];


    for (let i = 0; i < records.length; i++) {
        names.push(records[i].name);
    }
    for (let i = 0; i < records.length; i++) {
        mobiles.push(records[i].mobile);
    }
    for (let i = 0; i < records.length; i++) {
        emails.push(records[i].email);
    }



    function handleshow(e) {
        e.preventDefault();
        const newrecord = { ...data, id: new Date().getTime.toString() };
        var newName = newrecord.name;
        var newEmail = newrecord.email;
        var newMobile = newrecord.mobile;


        for (let i = 0; i < records.length; i++) {
            if (names[i] === newName) {
                alert("Name Already Exists")
                return;
            }
            else if (mobiles[i] === newMobile) {
                alert("Mobile Number Already Exists")
                return;
            }
            else if (emails[i] === newEmail) {
                alert("Email Already Exists!")
                return;
            }
        }
        setshow(true)
        return setrecords([...records, newrecord]);
    }
    // }
    return (<>
        <div className="container my-3">
            <form onSubmit={handleshow}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" id="name" value={data.name} onChange={handlechange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Mobile</label>
                    <input type="number" className="form-control" name="mobile" id="mobile" value={data.mobile} onChange={handlechange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={data.email} id="email" onChange={handlechange} />
                </div>
                <button type="submit" className="btn btn-success">submit</button>
            </form>
        </div>
        {show ?
            <p className="container">{records.map((itemval) => {
                return <>
                    <b>New Data:</b>
                    <p>Name:{itemval.name}
                        <br />
                        Mobile:{itemval.mobile}
                        <br />
                        Email:{itemval.email}</p>
                </>
            })}</p> : null}</>);
}
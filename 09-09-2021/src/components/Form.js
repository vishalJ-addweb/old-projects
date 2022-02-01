import Axios from 'axios';
import React, { useState } from 'react';

export default function Form() {

    const [name, setName] = useState("");
    const [age, setage] = useState(0);
    const [phone, setphone] = useState(0);
    // const [show, setshow] = useState(false);
    const [show, showdata] = useState([]);
    const [updatePhone, setupdatePhone] = useState(0)

    function handleOnname(e) {
        var Name = e.target.value;
        setName(Name);
    }
    function handleOnage(e) {
        var Age = e.target.value;
        setage(Age);
    }
    function handleOnphone(e) {
        var Phone = e.target.value;
        setphone(Phone);
    }

    const addData = () => {
        Axios.post('http://localhost:5000/create', { name: name, age: age, phone: phone }).then(() => {
            showdata([...show, { name: name, age: age, phone: phone }])
        })
    }

    const handleinfo = () => {
        Axios.get('http://localhost:5000/show').then((response) => {
            // console.log(response);
            showdata(response.data)
        })
    }

    const handleupdatephone = (id) => {
        // alert(id);
        Axios.put('http://localhost:5000/update', { phone: updatePhone, id: id }).then((response) => {
            showdata(show.map((val) => {
                console.log(val.id)
                console.log(id)
                return val.id === id ? { name: val.name, age: val.age, phone: val.updatePhone } : val
            }))
        })
    }

    const handledelete = (id) => {
        Axios.delete(`http://localhost:5000/delete/${id}`).then((response) => {
            showdata(show.filter((val) => {
                return val.id !== id
            }))
        })
    }
    return (
        <>
            <div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">Name</label>
                        <input type="text" name="Name" className="form-control" id="Name" onChange={handleOnname} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Age" className="form-label">Age</label>
                        <input type="number" name="Age" className="form-control" onChange={handleOnage} id="Age" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Phone" className="form-label">Phone</label>
                        <input type="number" name="Phone" className="form-control" onChange={handleOnphone} id="Phone" />
                    </div>
                    <button type="button" onClick={addData} className="btn btn-primary">Submit</button>
                </form>
                <div>
                </div>
                <button type="button" onClick={handleinfo} className="btn my-3 btn-lg btn-primary">Show Data</button>
                {show.map((val) => {
                    return (
                        <>
                            <h3 className="text">New Data</h3>
                            <div> Name: {val.name}</div>
                            <div> Age: {val.age}</div>
                            <div> Phone: {val.phone}</div>
                            <input type="number" onChange={(e) => setupdatePhone(e.target.value)} />
                            <button type="button" className="btn me-3 btn-primary" onClick={() => { handleupdatephone(val.id) }}>Update</button>

                            <button type="button" className="btn btn-danger" onClick={() => { handledelete(val.id) }}>Delete</button>
                        </>)
                })}
            </div>
        </>
    )
}
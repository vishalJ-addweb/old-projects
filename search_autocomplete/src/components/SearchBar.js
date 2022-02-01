import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../actions/index';

const SearchBar = () => {
    const [search_key, setSearch_key] = useState("")
    const [data, setData] = useState([])
    const [name, setName] = useState([]);
    const dispatch = useDispatch();

    async function search(key) {
        if (key === "") {
            setData([])
            setSearch_key('')
        } else {
            let result1 = await fetch("http://localhost:3004/Restaurant/?q=" + key)
            result1 = await result1.json();
            setSearch_key(key)

            setData(result1);
            const resultName = result1.map((ele) => ele.name);
            setName(resultName);
        }
    }

    const res = (e) => {
        const ind = name.findIndex(resName => resName === e);
        const ob = data[ind]
        setSearch_key(e);
        setData([])
        dispatch(add(ob))
    }

    return (
        <div>
            <h1>SearchBox</h1>
            <br />
            <input type="text"
                onChange={(e) => search(e.target.value)}
                value={search_key}
                className="form-control"
                placeholder="Search here..."
            />

            {data.map((data, i) =>
                <div key={i}>
                    <input type="text" value={data.name} onClick={(e) => res(e.target.value)} />
                </div>
            )}
        </div>
    )
}

export default SearchBar
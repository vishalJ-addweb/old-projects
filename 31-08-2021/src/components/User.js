import React from 'react';
import { useParams } from 'react-router';

export default function User({match}) {

    const {fname,lname} = useParams();
    return (
        <h1>User {fname} {lname} Page</h1>
    )
}

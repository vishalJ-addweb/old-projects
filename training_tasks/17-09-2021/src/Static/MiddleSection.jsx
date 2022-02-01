import React,{useState} from 'react';
import Entertainment from '../components/MiddleHome/Entertainment';
import ImageSlider from '../components/MiddleHome/ImageSlider';
import Movies from '../components/MiddleHome/Movies';
import {Route} from "react-router-dom";
import EditProfile from "./EditProfile";
// import Login from './Login';
// import styles from '../Styling/MiddleSection.module.css';
// import { SliderData } from '../components/MiddleHome/SliderData';

export default function MiddleSection() {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <ImageSlider/>
            <Movies/>
            <Route path='/editprofile' component={EditProfile}></Route>
            {/* {open && <Login setOpen={setOpen} />} */}
            <Entertainment/>
        </div>
    )
}
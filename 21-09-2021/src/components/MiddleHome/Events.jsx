import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '../../Styling/Events.module.css';
import { Link } from 'react-router-dom';

const data = [

    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNCBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00312421-evmcgfampe-portrait.jpg",
        name:"OML Comedy Pit Stop",
        place:"Multiple Venues"
    },
    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314190-ssxtkcxysh-portrait.jpg",
        name:"Gaurav Kapoor Live",
        place:"360 Degree: Jaipur"
    },
    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314544-kjtvqjyhbx-portrait.jpg",
        name:"Fresh Jokes",
        place:"Hoztel Jaipur"
    },
    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312648-rtwckhtbdh-portrait.jpg",
        name:"Bell Bottom",
        place:"Action/Thriller"
    },
    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyMSBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312647-gdvzlsddcp-portrait.jpg",
        name:"Mystery Rooms - Jaipur",
        place:"Mystery Rooms, C Scheme: Jaipur"
    }   
];

export default function Events() {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <div className={styles.parent}>
            <div className={styles.parent__text}>
                <h1>Events</h1>
                <Link to="" className={styles.link}>See all</Link>
            </div>
            <div className={styles.movies_container}>
                <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}>
                    {
                        data?.map((url,index) => (
                            <>
                                <div >
                                    <img src={data[index].image} alt="Movies" />
                                </div>
                                <div className={styles.movie_name}>
                                    <h6>{data[index].name}</h6>
                                </div>
                                <div className={styles.movie_type}>
                                    {data[index].place}
                                </div>
                            </>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

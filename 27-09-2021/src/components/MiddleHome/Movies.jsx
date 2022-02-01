import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import styles from '../../Styling/Movies.module.css';
import { useState, useEffect } from 'react'
import Axios from 'axios';

const data = [

    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzclICAxNmsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-lwhmtnmxar-portrait.jpg"
    },
    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICA0N2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-lqygcdvtbw-portrait.jpg"
    },
    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICAyN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00117102-nsnbgrkpdk-portrait.jpg"
    },
    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NGsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00309907-sprpdakrad-portrait.jpg"
    },
    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjclICAxMmsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00102880-laysvadbua-portrait.jpg"

    },
    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MWsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00311715-xaymgxnhnp-portrait.jpg",
        name:"Old",
        type:"Horror/Thriller"
    },
    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODYlICA0NzMgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00046420-wslwqardmc-portrait.jpg"
    }
];

export default function Movies() {

    const [movieList, setMovieList] = useState([]);

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

    useEffect(() => {
        Axios.get('http://localhost:7777/movies').then((response) => {
          if (response) {
            setMovieList(response.data);
            // console.log(response.data);
            // console.log(movieList);
          }
          else {
            console.log("NOt responed");
          }
        });
      }, [])
    //   console.log(movieList);
    return (
        <div style={{ margin: 10,marginBottom:80 }} className={styles.parent}>
            <div className={styles.parent__text}>
                <h1>Movies</h1>
                <Link to="" className={styles.link}>See all</Link>
            </div>
            <div className={styles.movies_container}>
                <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}>
                    {
                        movieList.map((url,index) => (
                            <>
                                <div >
                                    <img src={data[index].image} alt="Movies" />
                                </div>
                                <div className={styles.movie_name}>
                                    <h6>{movieList[index].title}</h6>
                                </div>
                                <div className={styles.movie_type}>
                                    {movieList[index].category}
                                </div>
                            </>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}
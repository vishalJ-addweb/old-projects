import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '../../Styling/Movies.module.css';

const data = [

    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICA0MGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-hcssjtledt-portrait.jpg",
        name:"Shang-Chi and the Legend of the Ten Rings",
        type:"Action/Adventure/Fantasy"
    },
    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTZrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00122134-kkxxyaqcqy-portrait.jpg",
        name:"Free Guy",
        type:"Action/Adventure/Comedy"
    },
    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTBrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00312665-gbabdpvflx-portrait.jpg",
        name:"Don`t Breathe 2",
        type:"Horror/Thriller"
    },
    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICAyN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00117102-nsnbgrkpdk-portrait.jpg",
        name:"Bell Bottom",
        type:"Action/Thriller"
    },
    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzclICAxNmsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-lwhmtnmxar-portrait.jpg",
        name:"Fast and Furious 9",
        type:"Action/Crime/Thriller"
    },
    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MWsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00311715-xaymgxnhnp-portrait.jpg",
        name:"Old",
        type:"Horror/Thriller"
    },
    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODElICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00097273-gxsvmptdws-portrait.jpg",
        name:"Thalaivii",
        type:"Biography/Drama"
    },
    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODYlICA0NzMgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00046420-wslwqardmc-portrait.jpg",
        name:"The Croods: A New Age",
        type:"Adventure/Animation/Comedy"
    },
    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NGsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00309907-sprpdakrad-portrait.jpg",
        name:"Gully Rowdy",
        type:"Action/Comedy/Romantic"
    },
    {
        image:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjclICAxMmsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00102880-laysvadbua-portrait.jpg",
        name:"Chehre",
        type:"Mystery/Thriller"
    }    
];

export default function Movies() {

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
        <div style={{ margin: 10 }} className={styles.parent}>
            <div className={styles.parent__text}>
                <h1>Movies</h1>
                <a href="" className={styles.link}>See all</a>
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
                                    <h5>{data[index].name}</h5>
                                </div>
                                <div className={styles.movie_type}>
                                    {data[index].type}
                                </div>
                            </>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

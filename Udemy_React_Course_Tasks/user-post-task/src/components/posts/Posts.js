// import React, { Component } from 'react'

// class Posts extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             postsItems: []
//         };
//     }

//     componentDidMount() {
//         fetch("http://localhost:3005/posts").then((res) => res.json()).then((result) => {
//             this.setState({
//                 isLoaded: true,
//                 postsItems: result
//             });
//         },

//             (error) => {
//                 this.setState({
//                     isLoaded: false,
//                     error
//                 });
//             }
//         )
//     }

//     render() {
//         return (
//             <ul>
//             {this.state.postsItems.map((item) => (
//                 <li key={item.id}>
//                     {item.title} {item.body}
//                 </li>
//             ))}
//         </ul>
//         )
//     }
// }

// export default Posts
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Posts() {
    const [postsItems, setPostsItems] = useState([]);

    useEffect(()=>{
        getAllPosts();
    },[]);

    const getAllPosts =async ()=>{
        const resp = await axios.get('http://localhost:3005/posts')
        console.log(resp.data);
        setPostsItems(resp.data)
    }

    return (
        <div>
            hello       
        </div>
    )
}

export default Posts;

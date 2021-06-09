import React, {useState, useEffect } from 'react';
import axios from 'axios';
import "./ApiStyles.css";

const PublicationsApi = () => {
    const [photo, setPhoto] = useState([]);
    const [user, setUser] = useState([]);
    const [post, setPost] = useState([]);

function getRandomIntInclusive(min, max) {
        min = Math.ceil(0);
        max = Math.floor(9);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      let numero =getRandomIntInclusive();

    const fetchData = () => {
        const photoApi = 'https://jsonplaceholder.typicode.com/photos';
        const userApi = 'https://jsonplaceholder.typicode.com/users';
        const postApi = 'https://jsonplaceholder.typicode.com/posts';

        const getPhoto = axios.get(photoApi)
        const getUser = axios.get(userApi)
        const getPost = axios.get(postApi)
        axios.all([getPhoto, getUser, getPost]).then(
            axios.spread((...allData) => {
                const allDataPhoto = allData[0].data[numero].thumbnailUrl;
                const allDataUser = allData[1].data[numero].name;
                const allDataPost = allData[2].data[numero].body;

                setPhoto(allDataPhoto)
                setUser(allDataUser)
                setPost(allDataPost)
            })
        )
    }

    useEffect(() => {
        fetchData()
    }, [])


    return(
        <div className="ApiContent">
           <div className="PostContent"> {post} </div>
            <p>7 jan. 2020</p><img src={photo} alt = ""/>
           <div className="ApiUserName"> {user} </div>           
        </div>
    );
}
export default PublicationsApi;

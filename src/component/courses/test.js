import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";

const CoursePage = ({ match }) => {
    const [course, setCourse] = useState({});
    const [videos, setVideos] = useState([]);

    const { id } = useParams();
    const baseURLcourse = `http://127.0.0.1:8000/courses/${id}`;
    const baseURLvideos = `http://127.0.0.1:8000/courses/${id}/videos`;

    useEffect(() => {
        const fetchData = async () => {

            const courseResponse = await axios.get(baseURLcourse);
            setCourse(courseResponse.data);
            console.log("ID:", id);
            const videosResponse = await axios.get(`http://127.0.0.1:8000/courses/${id}/videos/`);
            console.log(`http://127.0.0.1:8000/courses/${id}/videos/`)
            setVideos(videosResponse.data);
        };
        fetchData();
    }, []);
    console.log(course);
    console.log(videos);
    return (
        <div>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <ul>
                {videos.map((video) => (
                    <li key={video.id}>
                        <h4>{video.title}</h4>
                        <p>{video.description}</p>
                        <video src={video.video} controls></video>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CoursePage;

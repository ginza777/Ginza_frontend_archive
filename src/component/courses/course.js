
import React, {useEffect, useRef, useState} from "react";
import './style.css'
import '../main.css'
import {Link, useParams} from "react-router-dom";
import logo from "../homepage/icons/g.png";
import facebook from "../homepage/icons/facebook.svg";
import instagram from "../homepage/icons/instagram.svg";
import twitter from "../homepage/icons/twitter.svg";
import mail from "../homepage/icons/envelope-solid.svg";
import telegram from "../homepage/icons/telegram.svg";
import axios from "axios";
import '../homepage/style.css'
import Popup from 'reactjs-popup';
import ReactPlayer from 'react-player';
import { Modal } from 'react-bootstrap'; // example for React Bootstrap

function VideoModal(props) {
    const { show, onClose, videoUrl } = props;

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Body>
                <ReactPlayer url={videoUrl} controls={true} width="100%" height="100%" />
            </Modal.Body>
        </Modal>
    );
}


export default function  CourseSinglePage() {
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

    const [isPopupOpen, setIsPopupOpen] = useState(false);


    const closePopup = () => {
        setIsPopupOpen(false);
    };
    const videoRef = useRef(null);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [selectedVideoUrl, setSelectedVideoUrl] = useState('');
    const handleViewVideo = (videoUrl) => {
        setSelectedVideoUrl(videoUrl);
        setShowVideoModal(true);
    };


    return(
        <div className={'courses-single'}>
        <div className="course_single">
            <div className="Nav">
            <div className="navbar2">
                <Link to="/">
                    <div className="logo">
                    <img src={logo} alt="logo" />
                    <h1>Ginza</h1>
                    </div>
                </Link>

                <div className="nav-items">
                    <ul>

                        <li><Link className={'login_button'} to="/login">Login</Link></li>
                        <li><Link className={'login_button'} to="/signup">Register</Link></li>
                    </ul></div> </div></div>



            <div className={'single-course-section'}>
                            <div className={'main-left'}>

                                    <img className={'course-img'} src={course.image} alt={course.title}/>

                                <div className={'course2-cards'}>

                                    {videos.map((video) => (
                                        <div className={'course2-card'}>
                                           <h4>{video.title}</h4>
                                           <div className={'course2-card-right'} >
                                           <p>{video.date}</p>

                                               {/*<button onClick={openPopup} className={'btn-play-video1'}  >View Video</button>*/}
                                               <button  className="popup-back" onClick={() => handleViewVideo(video.url)}>View</button>
                                    </div>

                                            <Popup open={isPopupOpen} onClose={closePopup}>
                                                <div className={'popup-iframe'} >
                                                    <video  src={video.video}
                                                           ref={videoRef}
                                                           controls
                                                           autoPlay
                                                    ></video>
                                                    <div className={'popup-back-flex'}>
                                                        <button onClick={closePopup} className="popup-back">Back</button>

                                                    </div>
                                                </div>
                                            </Popup>

                                            <VideoModal
                                                show={showVideoModal}
                                                onClose={() => setShowVideoModal(false)}
                                                videoUrl={selectedVideoUrl}
                                            />
                                            {/*<ReactPlayer*/}
                                            {/*    url={video.video}*/}
                                            {/*    controls={true}*/}
                                            {/*    playing={true}*/}
                                            {/*    width="100%"*/}
                                            {/*    height="100%"*/}
                                            {/*/>*/}
                                </div>




                                    ))}





                                </div>



                            </div>
                            <div className={'main-right'}>
                                <div className={'course-description'}>
                                    <table id="customers">
                                        <tr>
                                            <th>Kurs haqida</th>
                                            <th>Ma'lumot</th>
                                        </tr>
                                        <tr>
                                            <td>Nomi</td>
                                            <td>{course.name}</td>

                                        </tr>
                                        <tr>
                                            <td>O'qituvchi</td>
                                            <td>{course.teacher_name}</td>
                                        </tr>
                                    <tr>
                                            <td>videolar soni</td>
                                            <td>{course.video_count} ta video</td>
                                        </tr>
                                        <tr>
                                            <td>kurs turi</td>
                                            <td>{course.type}</td>
                                        </tr>

                                    <tr>
                                            <td>kurs narxi</td>
                                            <td>{course.price}</td>
                                        </tr>

                                    </table>



                                    <p>{course.description}
                                    </p>
                                    <button className={'button-course'}>Kursni boshlash</button>

                                </div>
                            </div>
                        </div>
            <div  className={'footer'}>
                <div className={'footer-section'}>
                    <div className={'logo'}>
                        <img src={logo} alt="logo" />
                        <h1>Ginza</h1>
                    </div>
                    <div className={'number title log'}>+998900046465</div>
                    <div className={'location title log'}>TATU </div>

                </div>
                <div className={'footer-section'}>
                    <a className={'title'} href=""> Platforma</a>
                    <a  className={'text-title'} href="">Kasblar</a>
                    <a  className={'text-title'} href="">Kurslar</a>


                </div>
                <div className={'footer-section'}>
                    <a className={'title'} href=""> Kompaniya</a>
                    <a  className={'text-title'} href="">Biz haqimizda</a>
                    <a  className={'text-title'} href="">Blog</a>
                    <a  className={'text-title'} href="">Ommaviy oferta</a>
                    <a  className={'text-title'} href="">Maxfiylik siyosati</a>





                </div>
                <div className={'footer-section'}>
                    <a className={'title'} href="">Ma'lumot</a>
                    <a  className={'text-title'} href="">Bog'lanish</a>
                    <a  className={'text-title'} href="">Bo'lib to'lash</a>
                    <a  className={'text-title'} href="">Qanday xarid qilinadi?</a>
                    <a  className={'text-title'} href="">Voucher qo'llanma</a>
                    <a  className={'text-title'} href="">Chegirmalar</a>


                </div>




            </div>
            <div className={'iconss'}>
                <img className={'icon1'} src={facebook} alt=""/>
                <img className={'icon1'}  src={instagram} alt=""/>
                <img  className={'icon1'} src={twitter} alt=""/>
                <img className={'icon1'}  src={mail} alt=""/>
                <img  className={'icon1'} src={telegram} alt=""/>
            </div>

        </div>

        </div>
    )



}









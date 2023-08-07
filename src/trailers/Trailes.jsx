// App..js

import { Fragment, useContext, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import './Trailer.css'
import {Container} from '../components/NavBar'


function Trailer({moviestitle}) {


    const {toggle } = useContext(Container)

	//Setting up the initial states using
	// react hook 'useState"
	const [video, setVideo] = useState("");
	const [videoURL, setVideoURL] =useState("");

	//A function to fetch the required URL
	// and storing it inside the
	// videoURL state variable
    useEffect(()=>{
        handleSearch();
        console.log(moviestitle);
    },[videoURL])
	function handleSearch() {
        setVideo(moviestitle)
		movieTrailer(video).then((res) => {
			setVideoURL(res);
		});
	}

	return (
        <Fragment>
            <div className='Container'>
            </div>
            <div className='player'>
                <h1 id={toggle ? 'TrailerMovie-name-dark' : 'TrailerMovie-name-light'} >{moviestitle}</h1>
            <ReactPlayer  url={videoURL} controls={true} />
            </div>
		
        </Fragment>
		
	);
}

export default Trailer;

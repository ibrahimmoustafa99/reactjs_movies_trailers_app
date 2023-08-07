import React, { Fragment, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import {AiFillPlayCircle, AiOutlineClose} from 'react-icons/ai'
import noImag from '../images/movie-no-poster.jpg'
import '../styles/Video.css'
import {Container} from './NavBar'
import Trailer from '../trailers/Trailes'

function Movies() {
  const {toggle, input} = useContext(Container)
  const [trailer, setTrailer]=useState(true)
  const [moviesData, setmovesData] = useState([]);
  const [movieTitle, setMovieTitle]=useState('')
  const shown = input ? 'search' : "discover"
  const Api =`https://api.themoviedb.org/3/movie/top_rated`;
  
  const Moviecall = async()=>{
    const data = await axios.get( Api, {
      params: {
        api_key :'8ad1381bef9eefb476641c93619f3caf',
        query:input
      }
    })
    const allData = data.data.results;
    setmovesData(allData)
  }
  useEffect(()=>{
    Moviecall()
  }, [input])
  console.log(moviesData)
  const MoviesTitle = (movie) =>{
    setMovieTitle(movie.title)
    setTrailer(!trailer)
  }
  return (
    <Fragment>
    <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'}>
        <div className='movies-container'>
        {
            moviesData.filter((movie) =>{
                if (input ===''){
                    return movie
                }
                else if (movie.title.toLowerCase().includes(input.toLowerCase())){
                    return movie
                }
            }).map((movie) => {
                return(
                    
                        <Fragment >
                        <div id={trailer ? 'container' : 'NoContainer'}>
                            <AiFillPlayCircle color='#ff206e' fontSize={40} id={trailer ? 'playIcon' : 'hide'} onClick={() => MoviesTitle(movie)} />
                            <img src={(movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` :  noImag )} onClick={() => MoviesTitle(movie)}  alt="" />
                            <h3 style={{color:(toggle ? 'white ' : 'black')}}>{movie.title}</h3>
                        </div>
                        </Fragment>
                )
                })
            
        }
        {trailer ? console.log : <Trailer moviestitle={movieTitle} />}
        <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55}
            cursor={'pointer'} onClick={() => setTrailer(true)} />
        </div>
    </div> 
    
    </Fragment>
)
}

export default Movies

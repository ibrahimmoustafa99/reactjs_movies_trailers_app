import React, { Fragment , useState} from 'react'
import {HiSearch} from 'react-icons/hi'
import { NavLink, Route, Routes } from 'react-router-dom';
import '../styles/NavBarstyle.css'
import Movies from './Movies';
import Pricing from './Pricing';
import Trends from './Trends';
import TvShows from './TvShows';
import Upcoming from './Upcoming'
export  const Container = React.createContext()
function NavBar() {
    const [toggle, setToggle] = useState(true);
    const [input, setInpue] = useState('');
    function classname({ isActive, isPending }){
        return isPending ? "" : isActive ? (toggle ? 'isactive-notoggle' : 'isactive-toggle') : "";
    }
    
    return (
        <Container.Provider value={{toggle, input}}>
        <Fragment>
            <nav className={toggle ? '' : 'navBarColor'}>
                <div className='nav-options'>
                    <h1 id={toggle ? '' : 'heading'}>ReactFlix</h1>
                    <NavLink  exact to='' className={classname} >
                    <span id={toggle ? '' : 'MoviesLight'} >Movies</span>
                    </NavLink>
                    <NavLink   to='/tvshows' className={classname}>
                    <span id={toggle ? '' : 'MoviesLight'}>Tv Shows</span>
                    </NavLink>
                    <NavLink   to='/toprated' className={classname }>
                    <span id={toggle ? '' : 'MoviesLight'}>Top Rated</span>
                    </NavLink>
                    <NavLink   to='/upcoming' className={classname} >
                    <span id={toggle ? '' : 'MoviesLight'} >Upcoming</span>
                    </NavLink>
                    <NavLink   to='/pricing' className={classname }>
                    <span id={toggle ? '' : 'MoviesLight'}>Pricing</span>
                    </NavLink>
                    
                </div>
                <div className='input-group'>
                <input type='text' placeholder='Search Whatever You Want' onChange={(e) =>{setInpue(e.target.value)} } />
                <HiSearch  fontSize={21} id='search'/>
                <div id='Color-switcher' onClick={()=> setToggle(!toggle)}>
                    <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}>

                    </div>

                </div>
                </div>
            </nav>
            <Routes>
                <Route path='' element={<Movies />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/toprated' element={<Trends />} />
                <Route path='/tvshows' element={<TvShows />} />
                <Route path='/upcoming' element={<Upcoming />} />
            </Routes>


        </Fragment>
        </Container.Provider>
  )
}

export default NavBar

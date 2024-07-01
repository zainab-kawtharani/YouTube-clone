import React from 'react';
import './Sidebar.css'
import {images }from '../../utils/constants';

const Sidebar = ({sidebar,category,setCategory}) => {
    console.log(category);
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className='shortcut-links'>
            <div className={`side-link ${category===0?'active':""}`} onClick={()=>setCategory(0)}>
                <img src={images.home_icon} alt='home-icon'/>
                <p>Home</p>
            </div>
            <div className={`side-link ${category===20?'active':""}`}  onClick={()=>setCategory(20)}>
                <img src={images.game_icon} alt='game-icon'/>
                <p>Games</p>
            </div> <div className={`side-link ${category===2?'active':""}`} onClick={()=>setCategory(2)}>
                <img src={images.automobiles} alt='automobilied'/>
                <p>Automobilies</p>
            </div> <div className={`side-link ${category===17?'active':""}`}  onClick={()=>setCategory(17)}>
                <img src={images.sports} alt='sports'/>
                <p>Sports</p>
            </div>
            <div className={`side-link ${category===24?'active':""}`}  onClick={()=>setCategory(24)}>
                <img src={images.entertainment} alt='entertainment'/>
                <p>Entertainment</p>
            </div>
            <div className={`side-link ${category===28?'active':""}`}  onClick={()=>setCategory(28)}>
                <img src={images.tech} alt='tech'/>
                <p>Technology</p>
            </div> <div className={`side-link ${category===25?'active':""}`}  onClick={()=>setCategory(25)}>
                <img src={images.news} alt='news'/>
                <p>News</p>
            </div> 
            <div className={`side-link ${category===10?'active':""}`}  onClick={()=>setCategory(10)}>
                <img src={images.music} alt='music'/>
                <p>Music</p>
            </div>
            <div className={`side-link ${category===22?'active':""}`} onClick={()=>setCategory(22)}>
                <img src={images.blogs} alt='blog'/>
                <p>Blogs</p>
            </div>
        </div>
        <hr/>
        <div className='subscribed-list'>
            <h3>Subscribed</h3>
            <div className='side-link'>
                <img src={images.jack} alt='jack'/>
                <p>PewDiePie</p>
            </div>
            <div className='side-link'>
                <img src={images.simon} alt='simon'/>
                <p>MrBeast</p>
            </div>
            <div className='side-link'>
                <img src={images.tom} alt='tom'/>
                <p>MrTom</p>
            </div>
            <div className='side-link'>
                <img src={images.megan} alt='megan'/>
                <p>SirMegan</p>
            </div>
            <div className='side-link'>
                <img src={images.cameron} alt='cameron'/>
                <p>Cameron</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
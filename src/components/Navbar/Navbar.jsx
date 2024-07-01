import React from 'react';
import './Navbar.css';
import  {images}  from '../../utils/constants';
import { Link } from 'react-router-dom';

const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
       <div className='nav-left flex-div'>
           <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false? true:false)} src={images.menu_icon} alt='menu_icon'/>
           <Link to='/'> <img className='logo' src={images.logo} alt='logo'/></Link>
       </div>
       <div className='nav-middle flex-div'>
           <div className='search-box '>
               <input type='text' placeholder='Search'/>
               <img src={images.search_icon} alt='search-icon'/>
           </div>
           
       </div>
       <div className='nav-right flex-div'>
           <img src={images.upload_icon} alt='upload-icon'/>
           <img src={images.more_icon} alt='more-icon'/>
           <img src={images.notification_icon} alt='notification-icon'/>
           <img src={images.profile_icon} className='user-icon' alt='profile-icon'/>
       </div>


    </nav>
  )
}

export default Navbar
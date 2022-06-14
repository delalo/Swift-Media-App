
import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import StorefrontIcon from '@material-ui/icons/Storefront'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import { Avatar, IconButton } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const Header = () => {
  return (
    <div className="header">
       <div className="header__left">
           <img  alt="swift-logo" />
          <div className="header__input">
            <SearchIcon />
            <input type="text" placeholder="Search Swift Media" />
          </div> 
       </div> 

       <div className="header__center">
          <div className="header__option
          header__option--active">
            <HomeIcon  /> 
          </div>
          <div className="header__option">
            <FlagIcon /> 
          </div>
          <div className="header__option">
            <SubscriptionsIcon  /> 
          </div>
          <div className="header__option">
            <StorefrontIcon  /> 
          </div>
          <div className="header__option">
            <SupervisedUserCircleIcon  /> 
          </div>
       </div>


       <div className="header___right">
          <div className="header__info">
            <Avatar />
            <h4> Team Swift </h4>
          
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
          </div>

       </div>
    </div>
  )
}

export default Header
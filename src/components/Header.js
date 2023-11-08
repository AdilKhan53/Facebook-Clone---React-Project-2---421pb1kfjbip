import React, { useRef, useState } from 'react';
import facebookLogo from "../images/facebookLogo.png";
import "../styles/Header.css";
import { Add, ExpandMore, Flag, Forum, Home, Logout, NotificationsActive, Search, StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from '@mui/icons-material';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../utils/UserSlice';
import CreatePost from './CreatePost';
import CreatePage from './CreatePage';
import UpdatePassword from './UpdatePassword';


function Header() {

    const [expand, setExpand] = useState(false);
    const [menu, setMenu] = useState(null);
    const [search, setSearch] = useState("");
    const [isPostPopup, setIsPostPopup] = useState(false);
    const [isPagePopup, setIsPagePopup] = useState(false);
    const [isPasswordPopup, setIsPasswordPopup] = useState(false);
    const menuRef = useRef();
    const dispatch = useDispatch([]);

    const lUser = localStorage.getItem("fblogin");
    const localUser = JSON.parse(lUser);
    const user = useSelector((store) => store.user.userDetails || localUser)

    const [searchItem, setSearchItem] = useState("");

    let headers = {
      projectID: "421pb1kfjbip",
    };
  
    const fetchSearchData = async () => {
      const url = `https://academics.newtonschool.co/api/v1/facebook/post?filter=title:${searchItem}`;
  
      fetch(url, { method: "GET", headers })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
  
    function handkeyup(e) {
      if (e.key === "Enter") {
        fetchSearchData();
      }
    }

    


    const handleMenuOpen = (event) => {
        setMenu(event.currentTarget);
      };

    const handleMenuClose = () => {
        setMenu(null);
      };

      const handleLogout = () => {
       
    
        localStorage.removeItem("fblogin");
        dispatch(logout());
    
    
        handleMenuClose();
      };

      const togglePostPopup = () => {
        setIsPostPopup(!isPostPopup);
      }
      const togglePagePopup = () => {
        setIsPagePopup(!isPagePopup);
      }

      const togglePasswordPopup = () => {
        setIsPasswordPopup(!isPasswordPopup);
      }


  return (
    <div className='header'>

        <div className="header_left">
            <img src={facebookLogo} alt='facebookLogo'/>
            <div className="header_input">
                <Search/>
                <input type='text' placeholder='Search Something' onChange={(e) => setSearchItem(e.target.value)}
            onKeyUp={handkeyup}
            value={searchItem}/>
            </div>
        </div>
        
        <div className="header_middle">
            <div className="header_option header_option--active">
                <Home fontSize='large'/>
            </div>
            <div className="header_option">
                <Flag fontSize='large'/>
            </div>
            <div className="header_option">
                <SubscriptionsOutlined fontSize='large'/>
            </div>
            <div className="header_option">
                <StorefrontOutlined fontSize='large'/>
            </div>
            <div className="header_option">
                <SupervisedUserCircle fontSize='large'/>
            </div>
        </div>
        <div className="header_right">
            <div className="header_info">
                <Avatar src={user?.data?.profileImage || user?.data?.user?.profileImage}/>
                <h4>{user?.data?.name || user?.data?.user?.name}</h4>
            </div>
            <IconButton>
                <Forum/>
            </IconButton>
            <IconButton>
                <NotificationsActive/>
            </IconButton>
            <IconButton ref={menuRef} onClick={handleMenuOpen}>
                <ExpandMore/>
            </IconButton>
            <Menu
            anchorEl={menu}
            open={Boolean(menu)}
            onClose={handleMenuClose}
            anchorReference="anchorEl"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
            >
                <MenuItem onClick={handleLogout}>
            <Logout sx={{ marginRight: 1 }} />
            Logout
          </MenuItem>

          <MenuItem onClick={togglePasswordPopup}>
            <Logout sx={{ marginRight: 1 }} />
            Upadate password
          </MenuItem>

          <MenuItem onClick={togglePostPopup}>
            <Add sx={{ marginRight: 1 }} />
            Create a Post
          </MenuItem>

          <MenuItem onClick={togglePagePopup}>
            <Add sx={{ marginRight: 1 }} />
            Create a page
          </MenuItem>
            </Menu>
            {isPostPopup && <CreatePost onClose={togglePostPopup}/>}
            {isPagePopup && <CreatePage onClose={togglePagePopup}/>}
            {isPasswordPopup && <UpdatePassword onClose={togglePasswordPopup}/>}
        </div>

    </div>
  )
}

export default Header
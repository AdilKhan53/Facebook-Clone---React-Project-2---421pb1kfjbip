import React from 'react';
import "../styles/Sidebar.css";
import SidebarRow from './SidebarRow';
import facebookLogo from "../images/facebookLogo.png"
import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@mui/icons-material';
import { useSelector } from 'react-redux';

function Sidebar() {
  const user = useSelector(store=>store.user.userDetails);
  return (
    <div className='sidebar'>
    {/* <SidebarRow src="" title={(user?.data?.name)|| (user?.data?.user?.name) }/> */}
    <SidebarRow Icon={LocalHospital} title="Covis-19 Information Center"/>
    <SidebarRow Icon={EmojiFlags} title="Pages"/>
    <SidebarRow Icon={People} title="Friends"/>
    <SidebarRow Icon={Chat} title="Messenger"/>
    <SidebarRow Icon={Storefront} title="Marketplace"/>
    <SidebarRow Icon={VideoLibrary} title="Videos"/>
    <SidebarRow Icon={ExpandMoreOutlined} title="See more"/>
        </div>
  )
}

export default Sidebar
import React, { useState } from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../Sidebar/Sidebar.css';
import { IconContext } from 'react-icons';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav className="flex">
      <div className="flex-col w-60 py-8 bg-[#F6F5FF]">
          <ul className='side-items mt-10' onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                      <span className="">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
     
    </>
  );
}

export default Sidebar;

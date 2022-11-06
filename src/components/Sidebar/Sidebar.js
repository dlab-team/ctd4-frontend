import React, { useState } from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../Sidebar/Sidebar.css';
// import { IconContext } from 'react-icons';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav className="side-bar">
        <div className="flex-col w-[73px] md:w-72 py-6 bg-[#E2F2FE] rounded-tr-3xl mt-6">
          <div className="flex justify-center">
            <button className="hidden md:block btn bg-white border-blue-700 mt-5 py-2 rounded-2xl hover:bg-[#008FF7] hover:text-white hover:-translate-y-1 transition-all duration-500 text-blue-800 font-semibold ">
              Job Ready
            </button>
          </div>
            <ul className='side-items mt-6' onClick={showSidebar}>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      <div className="w-14 md:w-5">
                      {item.icon}
                      </div>
                        <span className="hidden md:block md:text-[16px]">{item.title}</span>
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

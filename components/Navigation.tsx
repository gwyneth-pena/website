'use client';

import { useState } from "react";

export default function Navigation() {

  const [menuItems,setMenuItems] = useState(
    [
        {
            label:"About",
            link: "#about",
            active: true
        },
        {
            label:"Skills",
            link: "#skills",
            active:false
        },
        {
            label:"Contact",
            link: "#contact",
            active:false
        }
      ]
  );

  const [showOffCanvas, setOffCanvas] = useState(false);

  const setActiveTab = ()=>{
    const timeout = setTimeout(()=>{        
        const menuItemsNew = menuItems.map((item)=>{

            if(location.href.toLowerCase().includes(item.link.toLowerCase())){
                return {...item, active:true};
            }else{
                return {...item, active:false};
            }
        });

        setOffCanvas(false);
        setMenuItems(menuItemsNew);
        clearTimeout(timeout);
    },100);
  };

  return <>
<nav className="flex align-middle items-center justify-between px-8 py-4 border-solid border-2">
    <p className="text-normal font-medium md:text-2xl" >
    </p>
    <ul className="justify-end hidden md:flex">
        {
            menuItems.map((item)=>{
                return <a className={`px-8 py-5 hover:border-gray-700 border-transparent border-b-2 ${item.active?'border-gray-800':'border-trasparent'}`} key={item.label} href={item.link} onClick={()=>{setActiveTab()}}>{item.label}</a>
            })
        }
    </ul>
    <i className="justify-end flex md:hidden" onClick={()=>setOffCanvas(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    </i>
  </nav>
<aside className={`w-full h-screen flex duration-700 primary-blue-bg nav-offcanvas ${!showOffCanvas?'ml-hide': 'ml-0'}`}>
      <div className="w-full flex flex-col px-5 py-4 space-y-4">
          <a className="text-right text-4xl px-4" onClick={()=>setOffCanvas(false)}>&times;</a>
      {
          menuItems.map((item)=>{
              return <a className={`px-8 py-5 hover:border-gray-700 border-b-2 ${item.active?'border-gray-800':'border-trasparent'}`} key={item.label} href={item.link} onClick={()=>{setActiveTab()}}>{item.label}</a>

          })
      }
      </div>
  </aside>
  </>
}


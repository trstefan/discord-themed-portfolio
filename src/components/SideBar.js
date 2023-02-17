import Link from "next/link";
import React from "react";
import { AiFillHome, AiFillMail, AiFillProject } from "react-icons/ai";

export const SideBar = () => {
  return (
    <div className="w-20 h-screen flex flex-col bg-white dark:bg-gray-900 px">
      <Link href="/">
        <SidebarIcon icon={<AiFillHome size={30} />} text={"Home"} />
      </Link>
      <Link href="/contact">
        <SidebarIcon icon={<AiFillMail size={30} />} text={"Contact"} />
      </Link>
      <Link href="/projects">
        <SidebarIcon icon={<AiFillProject size={30} />} text={"Projects"} />
      </Link>
    </div>
  );
};

const SidebarIcon = ({ icon, text }) => (
  <div className="sidebar__icon group">
    {icon}
    <span className="sidebar__tooltip group-hover:scale-100">{text}</span>
  </div>
);

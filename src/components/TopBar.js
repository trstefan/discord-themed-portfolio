import React from "react";
import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { AiFillMail } from "react-icons/ai";
import useDarkMode from "../hooks/useDarkMode";
import Link from "next/link";

export const TopBar = () => {
  return (
    <div className=" w-full h-16 px-4 bg-gray-200 dark:bg-gray-700 flex justify-between items-center shadow-lg">
      <div className="flex gap-1 items-center">
        <FaHashtag />
        <p className="font-bold italic">Your name Portfolio</p>
      </div>
      <div className="flex gap-2 px-4">
        <ThemeIcon />
        <Link href="mailto:someone@yoursite.com">
          <AiFillMail size="24" className="topbar__icon" />
        </Link>
        <Link href="https://github.com/">
          <FaUserCircle size="24" className="topbar__icon" />
        </Link>
      </div>
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaMoon size="24" className="topbar__icon" />
      ) : (
        <FaSun size="24" className="topbar__icon" />
      )}
    </span>
  );
};

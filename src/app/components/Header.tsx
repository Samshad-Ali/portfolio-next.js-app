"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import PhoneNav from "./PhoneNav";

const Header = () => {
  const [isToggleBar, setIsToggleBar] = useState<boolean>(false);
  return (
    <nav className="py-4  tracking-wide px-4 sm:px-8 w-full h-16 bg-mateBlk text-white flex justify-between items-center shadow-md shadow-black">
      <h2 className="font-bold text-xl">Samshad.</h2>
      <span className="md:hidden block z-50 absolute top-6 right-4"
      onClick={()=>{setIsToggleBar(pre=>!pre)}}
      >
        <FaBars />
      </span>
      <ul className=" md:flex hidden items-center gap-4">
        <li className="hover:bg-white hover:rounded-sm hover:text-black transition-all p-1 cursor-pointer px-4">
          {" "}
          <Link href={"/"}> About </Link>
        </li>
        <li className="hover:bg-white hover:rounded-sm hover:text-black transition-all p-1 cursor-pointer px-4">
          {" "}
          <Link href={"/project"}> Project </Link>
        </li>
        <li className="hover:bg-white hover:rounded-sm hover:text-black transition-all p-1 cursor-pointer px-4">
          {" "}
          <Link href={"/contact"}> Contact </Link>
        </li>
      </ul>
      <PhoneNav isToggleBar={isToggleBar} setIsToggleBar={setIsToggleBar} />
    </nav>
    )
};

export default Header;


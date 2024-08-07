import Image from "next/image";
import React from "react";
import siteLogo from '@/public/assets/images/Jagannathpur-logo.png';
import { BsCardChecklist } from "react-icons/bs";
import { IoCashOutline } from "react-icons/io5";
import { FiUserPlus , FiUser } from "react-icons/fi";


const MenuLarge = () => {
  return (
    <aside className="h-[100vh] p-5 w-[20%] bg-[#1C2554]">
      <div className="mb-12">
        <Image src={siteLogo} width={80} height={80} alt="Jagannathpur Hospital Logo" /> 
      </div>
      <ul className="flex flex-col gap-4">
        <li className="flex gap-3 items-center bg-white px-2 py-3 rounded-lg">
         <span ><BsCardChecklist className="text-[22px]" /></span>
         <span>Overview</span>
        </li>
        <li className="flex gap-3 items-center bg-white px-2 py-3 rounded-lg ">
         <span ><IoCashOutline className="text-[22px]" /></span>
         <span>Cashflow</span>
        </li>
        <li className="flex gap-3 items-center bg-white px-2 py-3 rounded-lg">
         <span ><FiUserPlus className="text-[22px]" /></span>
         <span>Member</span>
        </li>
        <li className="flex gap-3 items-center bg-white px-2 py-3 rounded-lg">
         <span ><FiUser className="text-[22px]" /></span>
         <span>User & Role</span>
        </li>
      </ul>
    </aside>
  );
};

export default MenuLarge;

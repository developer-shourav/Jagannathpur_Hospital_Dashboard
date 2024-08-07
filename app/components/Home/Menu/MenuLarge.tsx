"use client";
import Image from "next/image";
import React from "react";
import siteLogo from "@/public/assets/images/Jagannathpur-logo.png";
import { BsCardChecklist } from "react-icons/bs";
import { IoCashOutline } from "react-icons/io5";
import { FiUserPlus, FiUser } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLarge = () => {
  const pathname = usePathname();

  const activeLinkClasses = (path: string) =>
    `flex gap-3 items-center px-2 py-3 rounded-lg ${
      pathname === path ? "bg-white text-black" : "text-white"
    }`;

  return (
    <aside className="h-[100vh] p-5 w-[20%] bg-[#1C2554]">
      {/* -----------Website Logo --------------- */}
      <div className="mb-12">
        <Image
          src={siteLogo}
          width={80}
          height={80}
          alt="Jagannathpur Hospital Logo"
        />
      </div>

      {/* ---------All Route's Link--------- */}
      <ul className="flex flex-col gap-4">
        <Link href="/" passHref>
          <li className={activeLinkClasses("/")}>
            <span>
              <BsCardChecklist className="text-[22px]" />
            </span>
            <span>Overview</span>
          </li>
        </Link>

        <Link href="/cashFlow" passHref>
          <li className={activeLinkClasses("/cashFlow")}>
            <span>
              <IoCashOutline className="text-[22px]" />
            </span>
            <span>Cashflow</span>
          </li>
        </Link>

        <Link href="/member" passHref>
          <li className={activeLinkClasses("/member")}>
            <span>
              <FiUserPlus className="text-[22px]" />
            </span>
            <span>Member</span>
          </li>
        </Link>

        <Link href="/userRole" passHref>
          <li className={activeLinkClasses("/userRole")}>
            <span>
              <FiUser className="text-[22px]" />
            </span>
            <span>User & Role</span>
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default MenuLarge;

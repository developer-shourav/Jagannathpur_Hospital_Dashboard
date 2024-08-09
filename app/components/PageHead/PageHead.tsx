"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineBell } from "react-icons/hi2";
import adminImage from '@/public/assets/images/adminSmall.jpeg';
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";

type PageHeadProps = {
    routeName: string,
    pageTitle: string
}

const PageHead = ({routeName, pageTitle}: PageHeadProps) => {
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);

  return (
    <div className="px-5 2xl:px-8 w-full bg-white flex justify-between items-center">
      <div className="w-5/12 ">
        <h2 className="font-bold text-[40px] 2xl:text-[44px] mt-0">{pageTitle}</h2>
        <p className="text-xs text-[#888888] pb-5">
          {" "}
          Dashboard {">"} {routeName}
        </p>
      </div>

      <div className="w-7/12  ">
        <div className="flex items-center justify-end  gap-4">
          {/* ---------Search Bar---------- */}
          <div className="relative w-[126px] h-[51px]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FiSearch className="text-[#8190D9]" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="p-[14px] pl-10 text-sm text-[#8190D9] border border-[#697AD2] rounded-xl w-full focus:outline-none focus:border-[#8190D9] placeholder-[#8190D9]"
            />
          </div>

          {/* ----------Currency Selection Bar------------ */}
          <div className="relative w-[110px] h-[51px]">
            <button
              className="p-[14px] text-sm text-[#8190D9] border border-[#697AD2] rounded-xl w-full flex justify-between items-center focus:outline-none"
              onClick={() => {
                setCurrencyDropdownOpen(!currencyDropdownOpen)
                setNotificationDropdownOpen(false)
              }}
            >
              Dollar{" "}
              <span className="ml-2">
                <IoMdArrowDropdown className="text-xl" />
              </span>
            </button>
            {/* --------------Currency Options------------ */}
            {currencyDropdownOpen && (
              <div className="absolute top-full left-0 mt-3 w-[213px] bg-white rounded-xl custom-box-shadow z-10">
                <div className="p-3">
                  <div className="p-2 bg-[#C5CCEE] font-semibold text-black rounded-md">
                    Change Currency
                  </div>
                  <ul className="text-[#697AD2]">
                    <li className="flex justify-between items-center p-2 hover:bg-gray-100">
                      Dollar{" "}
                      <input
                        type="radio"
                        name="currency"
                        className="form-radio"
                      />
                    </li>
                    <li className="flex justify-between items-center p-2 hover:bg-gray-100">
                      Rupi{" "}
                      <input
                        type="radio"
                        name="currency"
                        className="form-radio"
                      />
                    </li>
                    <li className="flex justify-between items-center p-2 hover:bg-gray-100">
                      Euro{" "}
                      <input
                        type="radio"
                        name="currency"
                        className="form-radio"
                      />
                    </li>
                    <li className="flex justify-between items-center p-2 hover:bg-gray-100">
                      Taka{" "}
                      <input
                        type="radio"
                        name="currency"
                        className="form-radio"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* ---------Notification Icon---------- */}
          <div className="relative ">
            <button
              className="relative p-2 h-[51px] w-[51px] text-[#8190D9] border border-[#697AD2] rounded-xl focus:outline-none flex justify-center items-center"
              onClick={() => {
                setNotificationDropdownOpen(!notificationDropdownOpen)
                setCurrencyDropdownOpen(false)
              }}
            >
              <HiOutlineBell className="text-2xl" />
              {/* Notification Badge */}
              <span className="absolute top-2 right-2  px-[5px] py-1 text-[10px] font-bold leading-none text-red-100 bg-red-600 rounded-full">
                4
              </span>
            </button>

            {/* ---------Notification Dropdown---------- */}
            {notificationDropdownOpen && (
              <div className="absolute top-full right-0 mt-3 w-[250px] bg-white rounded-xl custom-box-shadow z-10">
                <div className="p-3">
                  <div className="p-2 bg-[#C5CCEE] text-black rounded-md font-semibold">
                    Notification
                  </div>
                  <ul className=" text-[14px] text-black flex flex-col gap-2 mt-2">
                    <li className="p-2 bg-[#F2F2F2] rounded-md">
                      Flat cartoony illustrations with vivid unblended colors and asymmetrical
                    </li>
                    <li className="p-2 bg-[#F2F2F2] rounded-md">
                      Flat cartoony illustrations with vivid unblended colors and asymmetrical
                    </li>
                    <li className="p-2 bg-[#F2F2F2] rounded-md">
                      Flat cartoony illustrations with vivid unblended colors and asymmetrical
                    </li>
                    <li className="p-2 bg-[#F2F2F2] rounded-md">
                      Flat cartoony illustrations with vivid unblended colors and asymmetrical
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* ---------Use & Admin info ----------- */}
          <div className="flex justify-between items-center gap-3 ">
           <Image src={adminImage} alt="User Image" width={51} height={51} className=" border border-[#697AD2] rounded-xl" />
           <div>
            <p className="text-[#1C2554] text-sm">Mohammad Ratul Hasan</p>
            <p className="text-[11px] text-[##5F5F5F]">Super Admin</p>
           </div>
           
           <FaChevronDown className="text-[#1C2554] text-sm" />


          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHead;

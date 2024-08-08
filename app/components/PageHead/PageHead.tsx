"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
const PageHead = () => {
    const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  return (
    <div className="px-5 w-full  bg-white flex justify-between items-center">
      <div className="w-5/12">
        <h2 className="font-bold text-[40px] mt-0">{"Overview"}</h2>
        <p className="text-xs text-[#888888] pb-5">
          {" "}
          Dashboard {">"} {"Home"}
        </p>
      </div>

      <div className="w-7/12">
        <div className="flex  items-center gap-3">
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
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
            >
              Dollar <span className="ml-2"><IoMdArrowDropdown className="text-xl" /></span> 
            </button>
            {/* --------------Currency Options------------ */}
            {currencyDropdownOpen && (
              <div className="absolute top-full left-0 mt-3 w-[213px] bg-white  rounded-xl custom-box-shadow  z-10">
                <div className="p-3">
                  <div className="p-2  bg-[#C5CCEE] text-black rounded-md">
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
        </div>
      </div>
    </div>
  );
};

export default PageHead;

import { FaArrowUp, FaArrowDown, FaPlus , FaMinus } from "react-icons/fa";
const FinanceReport = () => {
  return (
    <div className="w-full my-5 h-[90px] 2xl:h-[129px] grid grid-cols-4 gap-5 2xl:gap-[26px]">

    {/* -----------Export Report ------------ */}
      <div className="flex justify-center items-center gap-2 h-full bg-white  shadow-lg rounded-md font-bold">
        <span className="bg-[#697AD2] p-3 2xl:p-4  text-xl text-white rounded-md">
          <FaArrowUp />
        </span>
        <span className=" 2xl:text-xl">Export Report</span>
      </div>
     {/* -----------Import Sheet ------------ */}
      <div className="flex justify-center items-center gap-2 h-full bg-white  shadow-lg rounded-md font-bold">
        <span className="bg-[#9F76DD] p-3 2xl:p-4  text-xl text-white rounded-md">
          <FaArrowDown />
        </span>
        <span className="2xl:text-xl">Import Sheet</span>
      </div>
      {/* -----------Cash In ------------ */}
      <div className="flex justify-center items-center gap-2 h-full bg-white  shadow-lg rounded-md font-bold">
        <span className="bg-[#61B566] p-3 2xl:p-4  text-xl text-white rounded-md">
          <FaPlus />
        </span>
        <span className="2xl:text-xl">Cash In</span>
      </div>
      {/* -----------Cash Out ------------ */}
      <div className="flex justify-center items-center gap-2 h-full bg-white  shadow-lg rounded-md font-bold">
        <span className="bg-[#E95D5D] p-3 2xl:p-4  text-xl text-white rounded-md ">
          <FaMinus />
        </span>
        <span className="2xl:text-xl">Cash Out</span>
      </div>

    </div>
  );
};

export default FinanceReport;

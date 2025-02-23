import Link from "next/link";
import React from "react";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
const UserInfo = ({ userId }: { userId: String }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <p className="text-gray-500">User Information</p>
        <Link href="/" className="text-[#2E4053] text-sm">
          <ArrowRightOutlinedIcon />
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Ugochukwu Peter</span>
          <span className="text-sm">@D Rock</span>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          soluta temporibus voluptas delectus sint vero in.
        </p>
        <div className="flex items-center gap-2">
          <LocationOnOutlinedIcon />
          <p>
            Living in <span className="font-bold">Lagos</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <SchoolOutlinedIcon />
          <p>
            Went to <span className="font-bold">Delta State University</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <WorkOutlineOutlinedIcon />
          <p>
            Works at <span className="font-bold">HIIT</span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <LanguageOutlinedIcon />
            <Link href="https://codeit.com" className="text-blue-500">
              codeit.com
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <CalendarMonthOutlinedIcon />
            <span className="font-bold">Joined November 2025</span>
          </div>
        </div>
        <button className="bg-[#2E4053] py-2 text-white rounded-md">Follow</button>
        <span className="text-red-400 text-end text-sm cursor-pointer">Block User</span>
      </div>
    </div>
  );
};

export default UserInfo;

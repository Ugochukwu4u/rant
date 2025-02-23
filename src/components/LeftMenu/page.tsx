import React from "react";
import ProfileCard from "@/components/ProfileCard/page";
import Link from "next/link";
import ApprovalOutlinedIcon from "@mui/icons-material/ApprovalOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PhotoAlbumOutlinedIcon from "@mui/icons-material/PhotoAlbumOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Ad from "../Ad/page";
const Page = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type == "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <ApprovalOutlinedIcon className="w-[20px] h-[20px]" />
          <span className="text-sm">My Posts</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <LocalActivityOutlinedIcon className="text-sm" />
          <span className="text-sm">Activity</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <StorefrontOutlinedIcon className="text-sm" width={20} height={20} />
          <span className="text-sm">Marketplace</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <CalendarMonthOutlinedIcon
            className="text-sm"
            width={20}
            height={20}
          />
          <span className="text-sm">Events</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <PhotoAlbumOutlinedIcon className="text-sm" width={20} height={20} />
          <span className="text-sm">Albums</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <VideoLibraryOutlinedIcon
            className="text-sm"
            width={20}
            height={20}
          />
          <span className="text-sm">Vidoes</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <SettingsOutlinedIcon className="text-sm" width={20} height={20} />
          <span className="text-sm">Settings</span>
        </Link>
      </div>
      <Ad size="sm"/>
    </div>
  );
};

export default Page;

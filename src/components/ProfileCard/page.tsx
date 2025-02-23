import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/30362159/pexels-photo-30362159/free-photo-of-elegant-woman-posing-in-marrakesh-courtyard.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          fill
          className="object-cover rounded-md"
        />
        <Image
          src="https://images.pexels.com/photos/30415006/pexels-photo-30415006/free-photo-of-traditional-vietnamese-couple-in-ao-dai-in-h-i-an.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={48}
          height={48}
          className="object-cover rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">Ugochukwu Peter</span>
        <p className="text-xs text-gray-500 font-semibold">500 Followers</p>
        <button className="bg-[#2E4053] text-white p-2 rounded-lg text-sm w-[100%]">
          Profile
        </button>
      </div>
    </div>
  );
};

export default Page;

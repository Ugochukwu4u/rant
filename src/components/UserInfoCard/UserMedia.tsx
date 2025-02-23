import Link from "next/link";
import React from "react";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import Image from "next/image";

const UserMedia = ({ userId }: { userId: String }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <p className="text-gray-500">User Media</p>
        <Link href="/" className="text-[#2E4053] text-sm">
          <ArrowRightOutlinedIcon />
        </Link>
      </div>
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/30770767/pexels-photo-30770767/free-photo-of-classic-motorcycle-in-kerala-countryside.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/30133114/pexels-photo-30133114/free-photo-of-portrait-of-elderly-nomad-in-mhamid-desert-morocco.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/29295595/pexels-photo-29295595/free-photo-of-stylish-necktie-fashion-in-natural-light.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/30460366/pexels-photo-30460366/free-photo-of-relaxed-cat-on-a-sunlit-stone-in-istanbul-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/29914956/pexels-photo-29914956/free-photo-of-elegant-fashion-portrait-of-a-female-model.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/30375728/pexels-photo-30375728/free-photo-of-elegant-black-and-white-wedding-portrait.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/29065466/pexels-photo-29065466/free-photo-of-hand-using-laptop-next-to-dslr-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/30801140/pexels-photo-30801140/free-photo-of-night-view-of-baroque-cathedral-in-aguascalientes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMedia;

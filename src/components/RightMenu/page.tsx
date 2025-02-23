import React from "react";
import FriendsRequest from "../FriendsRequest/page";
import Birthdays from "../Birthdays/page";
import Ad from "../Ad/page";
import UserInfo from "../UserInfoCard/UserInfo";
import UserMedia from "../UserInfoCard/UserMedia";

const Page = ({ userId }: { userId?: String }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId? (
        <>
        <UserInfo userId={userId}/>
        <UserMedia userId={userId}/>
        </>
      ): null}
      <FriendsRequest />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default Page;

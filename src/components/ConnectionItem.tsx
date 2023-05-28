"use client";
import { Connection } from "@/types";
import Link from "next/link";
import { useState } from "react";
import AddConnectionModal from "./AddConnectionModal";
import Image from "next/image";
import { DEFAULT_IMG_URL } from "@/helpers/constants";

const ConnectionItem = ({
  userName,
  id,
  followerCount,
  platform,
  postCount,
  images = [],
}: Connection) => {
  const [isOpen, setIsOpen] = useState(false);
  const data = {
    userName,
    id,
    followerCount,
    platform,
    postCount,
    images,
  };
  return (
    <>
      <article
        key={id}
        className="border flex justify-between items-start border-gray-300 rounded-lg p-4"
      >
        <div className="flex gap-5">
          <div>
            <h2>@{userName}</h2>
            <Image
              src={images[0]?.url || DEFAULT_IMG_URL}
              alt="profile"
              width={150}
              height={100}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h4>{platform}</h4>
            <p>Followers: {followerCount}</p>
            <p>Posts: {postCount}</p>
          </div>
        </div>
        <div className="flex justify-end gap-5 items-center">
          <Link
            className="underline cursor-pointer inline-block"
            href={`/${id}`}
          >
            More info
          </Link>
          <button className="outline px-5 py-1" onClick={() => setIsOpen(true)}>
            Edit
          </button>
        </div>
      </article>
      <AddConnectionModal
        editing={true}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        {...data}
      />
    </>
  );
};

export default ConnectionItem;

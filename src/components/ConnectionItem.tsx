"use client";
import { Connection } from "@/types";
import Link from "next/link";
import { useState } from "react";
import AddConnectionModal from "./AddConnectionModal";

const ConnectionItem = ({
  userName,
  id,
  followerCount,
  platform,
  postCount,
  images,
}: Connection) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <article key={id} className="border border-gray-300 rounded-lg p-4">
        <h2>@{userName}</h2>
        <div className="flex justify-end gap-5 items-center">
          <Link
            className="underline cursor-pointer inline-block"
            href={`/${id}`}
          >
            More info
          </Link>
          <button className="outline px-5 py-2" onClick={() => setIsOpen(true)}>
            Edit
          </button>
        </div>

        <h4>{platform}</h4>
        <p>Followers: {followerCount}</p>
        <p>Posts: {postCount}</p>
      </article>
      <AddConnectionModal
        editing={true}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        userName={userName}
        id={id}
        platform={platform}
      />
    </>
  );
};

export default ConnectionItem;

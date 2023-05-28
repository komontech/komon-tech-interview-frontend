"use client";

import { ProfileContext } from "@/context/profile.context";
import Image from "next/image";
import { useContext, useState } from "react";

const ImagesWrapper = ({ images }: { images: { url: string }[] }) => {
  const { state, dispatch } = useContext(ProfileContext);
  const [selected, setSelected] = useState("");
  const [isBtnVisible, setIsBtnVisible] = useState(false);

  return (
    <div className="flex gap-2 flex-wrap py-3 px-2">
      {images?.map((img: { url: string }) => {
        const imageClass = selected === img.url ? "border-2 border-white" : "";
        return (
          <div className="relative" key={img.url}>
            <Image
              //onClick={() => dispatch({ type: "SET_IMG_URL", payload: img.url })}
              onClick={() => setSelected(img.url)}
              className={imageClass}
              src={img.url}
              alt={""}
              width={320}
              height={240}
            />
            {selected === img.url && (
              <button
                className="bg-black text-white absolute z-10 top-1 right-1 px-2"
                onClick={() =>
                  dispatch({ type: "SET_IMG_URL", payload: selected })
                }
              >
                Set as profile pic
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImagesWrapper;

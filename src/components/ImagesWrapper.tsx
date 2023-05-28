"use client";

import { ProfileContext } from "@/context/profile.context";
import Image from "next/image";
import { useContext, useState } from "react";
import { BsFillShareFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const ImagesWrapper = ({ images }: { images: { url: string }[] }) => {
  const { state, dispatch } = useContext(ProfileContext);
  const [selected, setSelected] = useState<string[]>([]);
  const [tooltipVisible, setTooltipVisible] = useState("");

  return (
    <>
      <div className="flex gap-3 justify-end items-center cursor-pointer">
        <p className="text-right">{`Selected: ${selected.length}`}</p>
        <button
          disabled={!!selected.length}
          className="outline py-1 px-2 w-32 cursor-pointer hover:bg-white hover:text-black"
        >
          Share <BsFillShareFill className="inline-block" />
        </button>
      </div>

      <div className="flex gap-2 flex-wrap py-3 px-2 justify-evenly">
        {images?.map((img: { url: string }) => {
          const imageClass = selected.includes(img.url)
            ? "border-2 border-white"
            : "";
          return (
            <div className="relative" key={img.url}>
              <Image
                //onClick={() => dispatch({ type: "SET_IMG_URL", payload: img.url })}
                onClick={() =>
                  !selected.includes(img.url)
                    ? setSelected([...selected, img.url])
                    : setSelected(selected.filter((item) => item !== img.url))
                }
                className={imageClass}
                src={img.url}
                alt={""}
                width={320}
                height={240}
              />
              {selected.includes(img.url) && (
                <button
                  className="bg-black text-white absolute z-10 top-1 right-1 p-2 hover:bg-white hover:text-black"
                  onClick={() =>
                    dispatch({ type: "SET_IMG_URL", payload: img.url })
                  }
                  onMouseEnter={() => setTooltipVisible(img.url)}
                  onMouseLeave={() => setTooltipVisible("")}
                >
                  <CgProfile className="text-lg" />
                  {tooltipVisible === img.url && (
                    <span className="border border-white round text-xs absolute bottom-[-35px] right-0 bg-black text-white p-2 w-32">
                      Set as profile picture
                    </span>
                  )}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImagesWrapper;

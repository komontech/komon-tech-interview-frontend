import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image";

interface Props {
    title: string;
    src: string;
    description: string;
}

const ContentCard: NextComponentType<NextPageContext, {}, Props> = (
  {src, title, description}: Props,
) => {
  return (
    <main className="grid grid-cols-100-fr justify-start gap-2 w-full border rounded-md overflow-hidden hover:!bg-white hover:shadow-md transition-all duration-300 ">
        <div className="h-[100px] w-[100px] object-cover">

        <Image
        src={src}
        height={100}
        width={150}
        alt={title}
        
        className="object-cover cover h-full w-[150px]"
        />
        </div>
        <div className="grid grid-cols-1 gap-1 p-2">
            <h3>
                {title}
            </h3>
            <p className="truncate text-ellipsis break-all ">{description}</p>
        </div>
    </main>
  )
}

export default ContentCard
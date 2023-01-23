import { ReactNode } from "react";


interface HeaderProp {heading: string,info: string, connections?: ReactNode }

export const PageHeader = ({heading, info}: HeaderProp) => {
    return (
        <div className='flex justify-between gap-2'>
        <div className='flex flex-col gap-2'>
            <h2 className='header-text'>{heading}</h2>
            <p>{info}</p>
        </div>
      
        </div>
    );
};
export const TabHeader = ({heading, info}: HeaderProp) => {
    return (
        <div className='flex flex-col gap-1'>
            <h2 className='header-tab'>{heading}</h2>
            <p>{info}</p>
        </div>
    );
};


export const TabHeaderSm = ({heading, info}: HeaderProp) => {
    return (
        <div className='flex flex-col gap-1'>
            <h2 className='header-tab !text-[14px]'>{heading}</h2>
            <p>{info}</p>
        </div>
    );
};


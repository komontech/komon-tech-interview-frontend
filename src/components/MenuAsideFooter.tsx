import Image from "next/image";

const MenuAsideFooter = () => {
  return (
    <main className={` grid grid-cols-max-3 justify-start items-center gap-2 mt-6 w-full`}>
      <Image
      alt='ll'
        src={
          'https://res.cloudinary.com/dnvsfxlan/image/upload/v1660493042/cld-sample-4.jpg'
        }
        width={40}
        height={40}
        className='h-[40px] w-[40px] bg-slate-500 rounded-full object-contain'
      />
      <aside className='flex flex-col gap-1 w-full'>
        <p className='text-sm text-[#101828]'>John Doe</p>

        <span className='text-sm text-[#667085]'>olivia@untitledui.com </span>
      </aside>
      <p>

    {' >'}
      </p>
    </main>
  );
};

export default MenuAsideFooter;

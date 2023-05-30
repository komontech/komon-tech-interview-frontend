
import Image from 'next/image';
import Link from 'next/link';

export const NewFeatures = () => {
    return (
        <div className={`p-4 flex flex-col gap-3 bg-lightbg`}>
            <span className='text-sm text-[#101828]'>New features available!</span>
            <p className='text-sm text-[#667085]'>Check out the new dashboard view. Pages now load faster. </p>
            <Image
            alt='look' 
            src={'https://res.cloudinary.com/dnvsfxlan/image/upload/v1660493042/cld-sample-4.jpg'}
            className='h-[135px] w-full object-cover'
            width={135}
            height={135}
            />

            <p className='text-sm text-[#667085]'>Dismiss <Link href='/' className='text-sm text-brand ml-4'>What’s new?</Link></p>
        </div>
    );
};

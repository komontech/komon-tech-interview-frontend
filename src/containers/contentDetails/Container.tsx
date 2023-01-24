import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface Props {
  editData: {
    data: {
      image: string;
      name: string;
      post: string;
      createdAt: string;
    };
  };
}

const ContentDetailsContainer: NextComponentType<
  NextPageContext,
  {},
  Props
> = ({ editData }: Props) => {
  const router = useRouter();

  return (
    <main className='max-w-[800px] mx-auto flex flex-col gap-2'>
      <button
        type='button'
        onClick={() => router.back()}
        className='!bg-transparent text-black w-max p-2 border !rounded-full !px-4'
      >
        {'< Back'}
      </button>
      <div className='h-[500px] w-[100%] object-cover overflow-hidden rounded-md '>
        <Image
          src={editData.data.image}
          height={500}
          width={700}
          alt={editData.data.name}
          className='object-cover cover h-full w-full'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <h3>{editData.data.name}</h3>
        <span className='text-black italic'>
          {new Date(editData.data.createdAt).toDateString()}
        </span>
        <p>{editData.data.post}</p>
      </div>
      <button>Post</button>
    </main>
  );
};

export default ContentDetailsContainer;

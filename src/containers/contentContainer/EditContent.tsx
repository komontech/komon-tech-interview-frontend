import { editModalState } from '@/store';
import { useAtomValue } from 'jotai';
import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const EditContent: NextComponentType<NextPageContext, {}> = () => {
  const editData: any = useAtomValue(editModalState);
  const [editValues, setEditValues]: any = useState({
    name: editData.data.name,
    post: editData.data.post,
  });

  useEffect(() => {
    setEditValues({
      src: editData.data.image,
      name: editData.data.name,
      post: editData.data.post,
    });
  }, []);
  console.log(editValues, 'data', editData);

  return (
    <div className='flex flex-col gap-4'>
      <div className='h-[100%] w-[100%] object-cover'>
        <Image
          src={editValues.src}
          height={500}
          width={700}
          alt={editValues.name}
          className='object-cover cover h-full w-full'
        />
      </div>
      <div className='flex flex-col'>
        <label className=''>Title</label>
        <input
          type='text'
          placeholder='title...'
          className='border py-2 px-4'
          value={editValues.name}
          onChange={(e) =>
            setEditValues({ ...editValues, title: e.target.value })
          }
        />
      </div>

      <div className='flex flex-col'>
        <label className=''>Description</label>
        <input
          type='text'
          placeholder='descripeion...'
          className='border py-2 px-4'
          value={editValues.post}
          onChange={(e) =>
            setEditValues({ ...editValues, title: e.target.value })
          }
        />
      </div>
      <button type='button' className='button'>
        Edit
      </button>
    </div>
  );
};

export default EditContent;

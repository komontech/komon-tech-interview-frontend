import ModalContainer from '@/components/ModalContainer';
import { connectionState, editModalState } from '@/store';
import { useAtomValue, useSetAtom } from 'jotai';
import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import EditContent from './EditContent';

import styles from '@/styles/modal.module.css';

interface Props {
  title: string;
  src: string;
  description: string;
  id: number;
}

const ContentCard: NextComponentType<NextPageContext, {}, Props> = ({
  src,
  title,
  description,
  id,
}: Props) => {
  const openModal = useSetAtom(editModalState);
  const posts = useAtomValue(connectionState);
  const [open, isOpen] = useState(false);
  console.log(posts, id);

  return (
    <>
      <main className='grid grid-cols-100-fr justify-start gap-2 w-full border rounded-md overflow-hidden hover:!bg-white hover:shadow-md transition-all duration-300 '>
        <div className='h-[100%] w-[100px] object-cover'>
          <Image
            src={src}
            height={300}
            width={150}
            alt={title}
            className='object-cover cover h-full w-[150px]'
          />
        </div>
        <div className='grid grid-cols-1 gap-1 p-2'>
          <h3>{title}</h3>
          <p className='truncate text-ellipsis break-all '>{description}</p>
          <div className='flex items-end gap-2 ml-auto'>
            <button
              type='button'
              className='!text-xs button'
              onClick={() => {
                isOpen(true);
                openModal({ open: true, data: posts.posts[id] });
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
                />
              </svg>
            </button>
            <button className='!bg-sky-500 button !text-xs'>Post</button>
          </div>
        </div>
      </main>
      <ModalContainer
        closeModal={() => isOpen(false)}
        openModal={open}
        overlay={styles.Overlay}
        className={styles.Modal}
      >
        <EditContent />
      </ModalContainer>
    </>
  );
};

export default ContentCard;
